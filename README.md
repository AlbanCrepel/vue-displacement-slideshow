# vue-displacement-slideshow

> A Vue.js 2.0 slideshow component working with Three.js and GSAP

## Demo

<p align="center"> 
    <img src="./src/assets/demo.gif" width="400px" height="auto" alt="Demo gif"/>
</p>

## Live demo

Coming soon

## Installation

#### NPM

```bash
 npm i --save vue-displacement-slideshow
 ```
 
 #### Browser
 
 Include the script file, then install the component with `Vue.use(VueDisplacementSlideshow);`
 
 ```html
 <script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
 <script type="text/javascript" src="node_modules/vue-displacement-slideshow/dist/vue-displacement-slideshow.min.js"></script>
 <script type="text/javascript">
   Vue.use(VueDisplacementSlideshow);
 </script>
 ```

## Example

```vue
<template>
    <vue-displacement-slideshow 
            :images="images"
            displacement="require('../assets/displacement.png')"
            :intensity.number="0.2"
            :speedIn.number="1.4"
            :speedOut.number="1.4"
            ease="Expo.easeInOut"
            ref="slideshow"></vue-displacement-slideshow>
</template>
    
<script>
    import VueDisplacementSlideshow from "vue-displacement-slideshow";
    
    export default {
        components: {
            VueDisplacementSlideshow,
        },
        computed: {
            images() {
                return [
                    require("../assets/images/1.jpg"),
                    require("../assets/images/2.jpg"),
                    require("../assets/images/3.jpg")
                ];
            }
        },
        methods: {
            init() {
                //We loop through all our images by calling the 'next' method of our component every 2 seconds
                setInterval(() => {
                    this.$refs.slideshow.next();
                }, 2000);
            }
        },
        mounted() {
            this.init();
        }
    };
</script>
    
```

This component is heavily based on this library :
[https://github.com/robin-dela/hover-effect](https://github.com/robin-dela/hover-effect)

## Props

| name         |  type  | description                                                      | required | default value |
|--------------|:------:|------------------------------------------------------------------|----------|---------------|
| images       | Array  | An array containing the paths of the images you wan to use       | true     | []            |
| displacement | String | The path of the displacement image                               | true     | none          |
| intensity    | Number | The intensity of the displacement                                | false    | 1             |
| speedIn      | Number | The duration of the animation for the next image, in seconds     | false    | 1             |
| speedOut     | Number | The duration of the animation for the previous image, in seconds | false    | 1             |
| ease         | String | The GSAP easing to use                                           | false    | Expo.easeOut  |

## Methods

| Name                    | Description             |
|-------------------------|-------------------------|
|next                     | Transition to the second image. |
|previous                 | Transition to the first image. |

## Behavior

The first image of the array is displayed at first.
When we call the `next` method while currently showing the last image, it will go to the first image.
When we call the `previous` method while currently showing the first image, it will go to the last image.

## License

MIT

