<template>
	<div class="vue-displacement-slideshow" ref="slider" :style="{ width: '100%', height: '100%' }"></div>
</template>

<script>
	// Import from source so webpack can do tree shaking
	import {Scene} from 'three/src/scenes/Scene.js';
	import {WebGLRenderer} from 'three/src/renderers/WebGLRenderer.js';
	import {OrthographicCamera} from 'three/src/cameras/OrthographicCamera.js';
	import {TextureLoader} from 'three/src/loaders/TextureLoader.js';
	import {LinearFilter} from 'three/src/constants.js';
	import {RepeatWrapping} from 'three/src/constants.js';
	import {ShaderMaterial} from 'three/src/materials/ShaderMaterial.js';
	import {PlaneGeometry} from 'three/src/geometries/PlaneGeometry.js';
	import {Mesh} from 'three/src/objects/Mesh.js';
	import {Texture} from 'three/src/textures/Texture.js';
	import {Vector2} from 'three/src/math/Vector2.js';

	import {gsap} from 'gsap';

	import {vertex, fragment} from "./shader.js";
	import {mod} from './utils.js';

	const scene = new Scene();
	const renderer = new WebGLRenderer({antialias: false, alpha: true});

	export default {
		name: "vue-displacement-slideshow",
		props: {
			images: {
				required: true,
				type: Array,
				default: () => []
			},
			displacement: {
				required: true,
				type: String
			},
			intensity: {
				required: false,
				type: Number,
				default: 1
			},
			speedIn: {
				required: false,
				type: Number,
				default: 1
			},
			speedOut: {
				required: false,
				type: Number,
				default: 1
			},
			ease: {
				required: false,
				type: String,
				default: "expo.inOut"
			},
			preserveAspectRatio: {
				required: false,
				type: Boolean,
				default: true
			},
			isInteractive: {
				required: false,
				type: Boolean,
				default: false
			},
			interactionFactor: {
				required: false,
				type: Number,
				default: 1
			},
			interactionDuration: {
				required: false,
				type: Number,
				default: 1
			},
			angle: {
				required: false,
				type: Number,
				default: Math.PI / 4
			},
			startAsTransparent: {
				required: false,
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				currentImage: 0,
				mat: null,
				textures: [],
				disp: null,
				nextImage: 0,
				imagesLoaded: [],
				isAnimating: false,
				currentTransition: null,
				mousePosition: {},
				previousMousePosition: null,
				rafID: null,
				mouseSpeed: {value: 0},
				loaded: false
			}
		},
		computed: {
			slider() {
				return this.$refs.slider
			},
			camera() {
				const camera = new OrthographicCamera(
					this.slider.offsetWidth / -2,
					this.slider.offsetWidth / 2,
					this.slider.offsetHeight / 2,
					this.slider.offsetHeight / -2,
					1,
					1000
				);
				camera.position.z = 1;
				return camera;
			}
		},
		methods: {
			initScene() {
				renderer.setPixelRatio(window.devicePixelRatio);
				renderer.setClearColor(0xffffff, 0.0);
				renderer.setSize(this.slider.offsetWidth, this.slider.offsetHeight);
				this.$refs.slider.appendChild(renderer.domElement);
			},
			render() {
				renderer.render(scene, this.camera);
			},
			transitionIn() {
				this.currentTransition = gsap.to(this.mat.uniforms.dispFactor, {
					duration: this.speedIn,
					value: 1,
					ease: this.ease,
					onUpdate: this.render,
					onComplete: this.onAnimationEnd(true),
					paused: true
				});
				this.currentTransition.play();

				this.setImageResolution(this.speedIn);
			},
			transitionOut() {
				this.currentTransition = gsap.to(this.mat.uniforms.dispFactor, {
					duration: this.speedOut,
					value: 0,
					ease: this.ease,
					onUpdate: this.render,
					onComplete: this.onAnimationEnd(false),
					paused: true
				});
				this.currentTransition.play();

				this.setImageResolution(this.speedOut);
			},
			setImageResolution(duration) {
				gsap.to(this.mat.uniforms.imageResolution.value, {
					duration,
					x: this.textures[this.nextImage].image.naturalWidth,
					y: this.textures[this.nextImage].image.naturalHeight,
					ease: this.ease,
					onUpdate: this.render
				});
			},
			onAnimationEnd(shouldResetValues) {
				if(shouldResetValues){
					this.currentImage = this.nextImage;
					this.mat.uniforms.dispFactor.value = 0;
				}
				this.isAnimating = false;
				this.$emit("animationEnd");
				this.render();
			},
			assignTexturesToMaterial() {
				this.mat.uniforms.texture1.value = this.textures[this.currentImage];
				this.mat.uniforms.texture2.value = this.textures[this.nextImage];
			},
			previous() {
				if (this.isAnimating) {
					return;
				}
				// Skip animation if the materials are not ready
				if (this.mat === null) {
					this.currentImage = mod((this.currentImage - 1), (this.textures.length));
					return;
				}
				this.isAnimating = true;
				this.mat.uniforms.dispFactor.value = 1;
				this.nextImage = mod((this.currentImage - 1), (this.textures.length));
				this.mat.uniforms.texture1.value = this.textures[this.nextImage];
				this.mat.uniforms.texture2.value = this.textures[this.currentImage];

				this.mat.uniforms.texture1Alpha.value = this.textures[this.nextImage].alpha;
				this.mat.uniforms.texture2Alpha.value = this.textures[this.currentImage].alpha;

				this.transitionOut();
				this.currentImage = this.nextImage;
			},
			next(nextImage = null) {
				if (this.isAnimating) {
					return;
				}
				// Skip animation if the materials are not ready
				if (this.mat === null) {
					this.currentImage = mod((this.currentImage + 1), (this.textures.length));
					return;
				}
				this.isAnimating = true;
				this.nextImage = nextImage !== null ? nextImage : mod((this.currentImage + 1), (this.textures.length));
				this.assignTexturesToMaterial();

				this.mat.uniforms.texture1Alpha.value = this.textures[this.currentImage].alpha;
				this.mat.uniforms.texture2Alpha.value = this.textures[this.nextImage].alpha;

				this.transitionIn();
			},
			loadTextures() {
				this.images.forEach((image, index) => {
					let textureLoaded = this.insertImage(image, index);
					this.imagesLoaded.push(textureLoaded)
				});

				if (this.startAsTransparent) {
					this.insertTransparentTexture(0);
				}

				const loader = new TextureLoader();
				loader.crossOrigin = '';
				this.disp = loader.load(this.displacement, this.render);
				this.disp.wrapS = RepeatWrapping;
				this.disp.wrapT = RepeatWrapping;
			},
			initShaderMaterial() {
				const ratio = {
					width: this.preserveAspectRatio ? this.slider.offsetWidth : this.textures[this.currentImage].image.naturalWidth,
					height: this.preserveAspectRatio ? this.slider.offsetHeight : this.textures[this.currentImage].image.naturalHeight
				};
				this.mat = new ShaderMaterial({
					uniforms: {
						intensity1: {type: 'f', value: this.intensity},
						intensity2: {type: 'f', value: this.intensity},
						dispFactor: {type: 'f', value: 0.0},
						angle1: {type: 'f', value: this.angle},
						angle2: {type: 'f', value: -Math.PI + this.angle},
						texture1: {type: 't', value: this.textures[this.currentImage]},
						texture2: {type: 't', value: this.textures[this.nextImage]},
						texture1Alpha: {type: 'f', value: this.textures[this.currentImage].alpha},
						texture2Alpha: {type: 'f', value: this.textures[this.nextImage].alpha},
						disp: {type: 't', value: this.disp},
						resolution: {
							type: 'v2',
							value: new Vector2(ratio.width, ratio.height),
						},
						imageResolution: {
							type: 'v2',
							value: new Vector2(
								this.textures[this.currentImage].image.naturalWidth,
								this.textures[this.currentImage].image.naturalHeight
							),
						},
						sliderResolution: {
							type: 'v2',
							value: new Vector2(
								this.slider.offsetWidth,
								this.slider.offsetHeight
							),
						},
						u_rgbPosition: {
							type: "v2",
							value: new Vector2(window.innerWidth / 2, window.innerHeight / 2)
						},
						u_rgbVelocity: {
							type: "v2",
							value: new Vector2(0, 0)
						}
					},
					vertexShader: vertex,
					fragmentShader: fragment,
					transparent: true,
					opacity: 1.0
				});
				const geometry = new PlaneGeometry(this.slider.offsetWidth, this.slider.offsetHeight, 1);
				const object = new Mesh(geometry, this.mat);
				scene.add(object);
			},
			init() {
				this.initScene();
				this.loadTextures();
				Promise.all(this.imagesLoaded).then(() => {
					this.initShaderMaterial();
					this.loaded = true;
					this.$emit("loaded");
					this.render();
				})
			},
			onResize() {
				const ratio = {
					width: this.preserveAspectRatio ? this.slider.offsetWidth : this.textures[this.currentImage].image.naturalWidth,
					height: this.preserveAspectRatio ? this.slider.offsetHeight : this.textures[this.currentImage].image.naturalHeight
				};
				renderer.setSize(this.slider.offsetWidth, this.slider.offsetHeight);
				this.camera.aspect = this.slider.innerWidth / this.slider.innerHeight;
				this.camera.updateProjectionMatrix();
				this.mat.uniforms.resolution.value.set(ratio.width, ratio.height);
				this.mat.uniforms.sliderResolution.value.set(this.slider.offsetWidth, this.slider.offsetHeight);
				this.render();
			},
			play() {
				if (this.currentTransition) {
					this.currentTransition.play();
				}
			},
			pause() {
				if (this.currentTransition) {
					this.currentTransition.pause();
				}
			},
			insertImage(path, index = this.textures.length) {
				const loader = new TextureLoader();
				loader.crossOrigin = '';
				return new Promise((resolve) => {
					let texture = loader.load(path, () => {
						this.render();
						resolve();
					});
					texture.magFilter = LinearFilter;
					texture.minFilter = LinearFilter;
					texture.alpha = 1;
					this.textures.splice(index, 0, texture);

					if (index <= this.currentImage && this.loaded) {
						//We change the currentImage only if we loaded all  the images and the action is triggered from  the parent
						this.currentImage++;
					}
				});
			},
			insertTransparentTexture(index) {
				const texture = new Texture();
				texture.image = {
					naturalWidth: this.slider.offsetWidth,
					naturalHeight: this.slider.offsetHeight
				};
				texture.alpha = 0;
				this.textures.splice(index, 0, texture);
			},
			removeImage(index) {
				if (index !== this.currentImage) {
					this.textures.splice(index, 1);

					if (index < this.currentImage) {
						this.currentImage--;
					}
				}
			},
			goTo(index) {
				if (index >= 0 && index < this.textures.length) {
					this.next(index);
				}
			},
			animate() {
				if (this.isInteractive) {
					this.rafID = requestAnimationFrame(this.animate);
					this.getMouseSpeed();
				}

				this.render();
			},
			onMouseMove(e) {
				if (this.isInteractive && this.mat) {
					const sliderPosition = this.$refs.slider.getBoundingClientRect();
					this.mousePosition = {
						x: e.clientX - sliderPosition.left,
						y: e.clientY - sliderPosition.top
					};
					this.mat.uniforms.u_rgbPosition.value = new Vector2(
						this.mousePosition.x,
						this.mousePosition.y
					);
				}
			},
			getMouseSpeed() {
				if (this.mat) {
					const speed = Math.sqrt(
						(this.previousMousePosition.x - this.mousePosition.x) ** 2 +
						(this.previousMousePosition.y - this.mousePosition.y) ** 2
					) || 0;

					gsap.to(this.mouseSpeed, {
						duration: this.interactionDuration,
						value: speed,
					});

					this.mat.uniforms.u_rgbVelocity.value = new Vector2(
						this.mouseSpeed.value * this.interactionFactor,
						this.mouseSpeed.value * this.interactionFactor
					);
				}

				this.previousMousePosition = this.mousePosition;
			}
		},
		mounted() {
			this.init();
			window.addEventListener('resize', this.onResize);
			window.addEventListener('mousemove', this.onMouseMove);
			this.animate();
		},
		beforeDestroy() {
			cancelAnimationFrame(this.rafID);
			window.removeEventListener('resize', this.onResize);
			window.removeEventListener('mousemove', this.onMouseMove);
		},
	};
</script>
