<template>
	<vue-displacement-slideshow :images="images"
	                            :displacement="displacement"
	                            :intensity="0.2"
	                            :speedIn="1.4"
	                            :speedOut="1.4"
	                            ease="expo.inOut"
	                            ref="slideshow"
	                            :is-interactive="true"
	                            :interactionVelocity="{ x : 15, y : 5 }"
	                            :angle="1.2"/>
</template>

<script>

	import VueDisplacementSlideshow from "../lib/VueDisplacementSlideshow.vue";
	// uncomment to test the built component
	//import VueDisplacementSlideshow from "../dist/lib/vue-displacement-slideshow.es.js";

	export default {
		components: {
			VueDisplacementSlideshow,
		},
		computed: {
			images() {
				return [
					new URL('./assets/anterne.jpg', import.meta.url).href,
					new URL('./assets/dolomites.jpg', import.meta.url).href,
					new URL('./assets/glencoe.jpg', import.meta.url).href,
				];
			},
			displacement(){
				return new URL('./assets/displacement.png', import.meta.url).href
			}
		},
		methods: {
			init() {
				//We loop through all our images by calling the 'next' method of our component every 2 seconds
				setInterval(() => {
					this.$refs.slideshow.next();
				}, 5000);
			}
		},
		mounted() {
			this.init();
		}
	}

</script>

<style>

	html, body {
		margin: 0;
	}

	html, body, #app {
		height: 100%;
	}

</style>
