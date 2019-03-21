# vue-displacement-slideshow

> Webgl image displacement transitions made simple. A Vue.js 2.0 slideshow component working with Three.js and GSAP.

## Demo

<p align="center">
    <img src="./src/assets/demo.gif" width="400px" height="auto" alt="Demo gif"/>
</p>

## Live demo

[DEMO](https://vue-displacement-slideshow.now.sh)

## Installation

#### NPM

```bash
 npm i --save vue-displacement-slideshow
 ```

## Example

```vue
<template>
    <vue-displacement-slideshow
            :images="images"
            displacement="require('../assets/displacement.png')"
            :intensity="0.2"
            :speedIn="1.4"
            :speedOut="1.4"
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
| preserveAspectRatio| Boolean| Whether the images keep their aspect ratio (act as `background-size` : `cover` (true) or `contain`  (false)  | false    | true  |

## Methods

| Name                    | Description             |Params|Returns
|-------------------------|-------------------------|----------|----------|
|next                     | Transition to the second image. |      |`void`|
|previous                 | Transition to the first image. |      |`void`|
|pause                 | Pause the current transition |     |`void`|
|play                 | Play the current paused animation |     |`void`|
|insertImage(path,index)                 | Insert an image at a given index |<ul><li>`path` : the path of the image </li><li>`index` : the index of the inserted image, if not provided, the image will be inserted at the end of the array. It has the same behavior as the `splice` method (negative number allowed)</li></ul>|a Promise resolved when the image is loaded|
|removeImage(index)                 | Remove an image at a given index |<ul><li>`index` : the index of the image to remove (must be different from the current image index)</li></ul>| `void`|
|goTo(index)                 | Transition to a given image by its index |<ul><li>`index` : the index of the image to transition to</li></ul>| `void`|

## Events emitted

| Name                    | Description             |
|-------------------------|-------------------------|
|loaded                     | Fired when the component is ready |
|animationEnd                 | Fired when the transition is done. |


## Behavior

The first image of the array is displayed at first.
When we call the `next` method while currently showing the last image, it will go to the first image.
When we call the `previous` method while currently showing the first image, it will go to the last image.

The images are displayed as we would use `background-size:cover` in CSS.

## Contributing

Contributions are welcome !
Follow the instructions in the [contributing file](./CONTRIBUTING.md)

## License

[MIT](./LICENCE)

