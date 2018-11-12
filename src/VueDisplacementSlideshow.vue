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
        Mesh
    } from 'three';
    import {TweenMax, Ease} from "gsap";

    import {vertex, fragment} from "./shader.js";

    Number.prototype.mod = function (n) {
        var m = (( this % n) + n) % n;
        return m < 0 ? m + Math.abs(n) : m;
    };

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
                nextImage: 0
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
                TweenMax.to(this.mat.uniforms.dispFactor, this.speedIn, {
                    value: 1,
                    ease: this.ease,
                    onUpdate: this.render,
                    onComplete: this.render,
                });
            },
            transitionOut() {
                TweenMax.to(this.mat.uniforms.dispFactor, this.speedOut, {
                    value: 0,
                    ease: this.ease,
                    onUpdate: this.render,
                    onComplete: this.render,
                });
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
                this.mat.uniforms.dispFactor.value = 1;
                this.nextImage = (this.currentImage - 1).mod(this.images.length);
                this.mat.uniforms.texture1.value = this.textures[this.nextImage];
                this.mat.uniforms.texture2.value = this.textures[this.currentImage];
                this.transitionOut();
                this.currentImage = this.nextImage;
            },
            next() {
                this.nextImage = (this.currentImage + 1).mod(this.images.length);
                this.assignTexturesToMaterial();
                this.transitionIn();
                this.resetValuesAfterAnimation();
            },
            loadTextures() {
                const loader = new TextureLoader();
                loader.crossOrigin = '';
                this.images.forEach((image) => {
                    let texture = loader.load(image, this.render);
                    texture.magFilter = LinearFilter;
                    texture.minFilter = LinearFilter;
                    this.textures.push(texture)
                });

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

                this.initShaderMaterial();

                window.addEventListener('resize', (e) => {
                    this.renderer.setSize(this.slider.offsetWidth, this.slider.offsetHeight);
                });
            }
        },
        mounted() {
            this.init();
        }
    };
</script>
<style scoped>
    .vue-displacement-slideshow {
        width: 100%;
        height: 100%;
    }
</style>
