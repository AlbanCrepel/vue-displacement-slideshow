<template>
    <div class="vue-displacement-slideshow" ref="slider"></div>
</template>

<script>
    import {
        Scene,
        WebGLRenderer,
        OrthographicCamera,
        TextureLoader,
        LinearFilter,
        RepeatWrapping,
        ShaderMaterial,
        PlaneBufferGeometry,
        Mesh,
        Vector2
    } from 'three';
    import {TweenMax, Ease} from "gsap";

    import {vertex, fragment} from "./shader.js";

    import { mod } from './utils.js';

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
                default: "Expo.easeOut"
            }
        },
        data() {
            return {
                currentImage: 0,
                scene: new Scene(),
                renderer: new WebGLRenderer({antialias: false, alpha: true}),
                mat: null,
                textures: [],
                disp: null,
                nextImage: 0,
                imagesLoaded: [],
                isAnimating : false,
                currentTransition : null
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
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.renderer.setClearColor(0xffffff, 0.0);
                this.renderer.setSize(this.slider.offsetWidth, this.slider.offsetHeight);
                this.$refs.slider.appendChild(this.renderer.domElement);
            },
            render() {
                this.renderer.render(this.scene, this.camera);
            },
            transitionIn() {
                this.currentTransition = TweenMax.to(this.mat.uniforms.dispFactor, this.speedIn, {
                    value: 1,
                    ease: this.ease,
                    onUpdate: this.render,
                    onComplete: this.onAnimationEnd,
                    paused : true
                });
                this.currentTransition.play();
            },
            transitionOut() {
                this.currentTransition = TweenMax.to(this.mat.uniforms.dispFactor, this.speedOut, {
                    value: 0,
                    ease: this.ease,
                    onUpdate: this.render,
                    onComplete: this.onAnimationEnd,
                    paused : true
                });
                this.currentTransition.play();
            },
            onAnimationEnd(){
                this.isAnimating = false;
                this.$emit("animationEnd");
                this.render();
            },
            assignTexturesToMaterial() {
                this.mat.uniforms.texture1.value = this.textures[this.currentImage];
                this.mat.uniforms.texture2.value = this.textures[this.nextImage];
            },
            resetValuesAfterAnimation() {
                this.currentImage = this.nextImage;
                this.mat.uniforms.dispFactor.value = 0;
            },
            previous() {
                if(this.isAnimating){ return; }

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
                this.transitionOut();
                this.currentImage = this.nextImage;
            },
            next() {
                if(this.isAnimating){ return; }

                // Skip animation if the materials are not ready
                if (this.mat === null) {
                    this.currentImage = mod((this.currentImage + 1), (this.textures.length));
                    return;
                }
                this.isAnimating = true;
                this.nextImage = mod((this.currentImage + 1), (this.textures.length));
                this.assignTexturesToMaterial();
                this.transitionIn();
                this.resetValuesAfterAnimation();
            },
            loadTextures() {
                this.images.forEach((image, index) => {
                    let textureLoaded = this.insertImage(image, index);
                    this.imagesLoaded.push(textureLoaded)
                });

                const loader = new TextureLoader();
                loader.crossOrigin = '';
                this.disp = loader.load(this.displacement, this.render);
                this.disp.wrapS = RepeatWrapping;
                this.disp.wrapT = RepeatWrapping;
            },
            initShaderMaterial() {
                this.mat = new ShaderMaterial({
                    uniforms: {
                        intensity1: {type: 'f', value: this.intensity},
                        intensity2: {type: 'f', value: this.intensity},
                        dispFactor: {type: 'f', value: 0.0},
                        angle1: {type: 'f', value: Math.PI / 4},
                        angle2: {type: 'f', value: -Math.PI / 4 * 3},
                        texture1: {type: 't', value: this.textures[this.currentImage]},
                        texture2: {type: 't', value: this.textures[this.nextImage]},
                        disp: {type: 't', value: this.disp},
                        resolution: {
                            type: 'v2',
                            value: new Vector2(this.slider.offsetWidth, this.slider.offsetHeight),
                        },
                        imageResolution: {
                            type: 'v2',
                            value: new Vector2(
                                this.textures[this.currentImage].image.naturalWidth,
                                this.textures[this.currentImage].image.naturalHeight
                            ),
                        }
                    },

                    vertexShader: vertex,
                    fragmentShader: fragment,
                    transparent: true,
                    opacity: 1.0,
                });

                var geometry = new PlaneBufferGeometry(this.slider.offsetWidth, this.slider.offsetHeight, 1);
                var object = new Mesh(geometry, this.mat);
                this.scene.add(object);
            },
            init() {
                this.initScene();

                this.loadTextures();
                Promise.all(this.imagesLoaded).then(() => {
                    this.initShaderMaterial();
                    this.$emit("loaded");
                    this.render();
                })
            },
            onResize() {
                this.renderer.setSize(this.slider.offsetWidth, this.slider.offsetHeight);
                this.camera.aspect = this.slider.innerWidth / this.slider.innerHeight;
                this.camera.updateProjectionMatrix();
                this.mat.uniforms.resolution.value.set(this.slider.offsetWidth, this.slider.offsetHeight);
                this.render();
            },
            play(){
                if(this.currentTransition){
                    this.currentTransition.play();
                }
            },
            pause(){
                if(this.currentTransition) {
                    this.currentTransition.pause();
                }
            },
            insertImage(path, index = this.textures.length) {
                const loader = new TextureLoader();
                loader.crossOrigin = '';
                return new Promise((resolve, reject) => {
                    let texture = loader.load(path, () => {
                        this.render();
                        resolve();
                    });
                    texture.magFilter = LinearFilter;
                    texture.minFilter = LinearFilter;
                    this.textures.splice(index, 0, texture)
                });
            },
            removeImage(index){
                if(index !== this.currentImage){
                    this.textures.splice(index, 1)
                }
            }
        },
        mounted() {
            this.init();
            window.addEventListener('resize', this.onResize);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.onResize);
        },
    };
</script>
<style scoped>
    .vue-displacement-slideshow {
        width: 100%;
        height: 100%;
    }
</style>