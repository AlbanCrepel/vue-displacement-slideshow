# vue-displacement-slideshow

> Webgl image displacement transitions made simple. A Vue.js slideshow component working with Three.js and GSAP.
It works with Vue3 and older versions (until 3.0.1) work with Vue2.

## Demo

<p align="center">
    <img src="lib/assets/demo.gif" width="400px" height="auto" alt="Demo gif"/>
</p>

> The canvas can be interactive as well by setting the `isInteractive` props to `true`. See the `props` section to find more.

## Live demo

[DEMO](https://vue-displacement-slideshow.now.sh)

## Installation

```bash
# using yarn
yarn add vue-displacement-slideshow
# or using npm
npm i vue-displacement-slideshow
```

:warning: If you are using this component with Vue2, you have to use this version: `3.0.1`, as 
the ones that follow only support Vue3. You can install a particular version like this:

```bash
# using yarn
yarn add vue-displacement-slideshow@3.0.1
# or using npm
npm i vue-displacement-slideshow@3.0.1
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
            ease="expo.out"
            ref="slideshow" />
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

**With Nuxt :**

Just wrap the component in a `client-only` component like so :
```html
<client-only>
    <vue-displacement-slideshow />
</client-only>
```

This component is heavily based on this library :
[https://github.com/robin-dela/hover-effect](https://github.com/robin-dela/hover-effect)

## Props

| name         |  type  | description                                                      | required | default value |
|--------------|:------:|------------------------------------------------------------------|----------|---------------|
| images       | `Array`  | An array containing the paths of the images you wan to use       | `true`     | `[]`            |
| displacement | `String` | The path of the displacement image                               | `true`     |           |
| intensity    | `Number` | The intensity of the displacement                                | `false`    | `1`             |
| speedIn      | `Number` | The duration of the animation for the next image, in seconds     | `false`    | `1`             |
| speedOut     | `Number` | The duration of the animation for the previous image, in seconds | `false`    | `1`             |
| ease         | `String` | The GSAP easing to use                                           | `false`    | `expo.inOut`      |
| preserveAspectRatio| `Boolean` | Whether the images keep their aspect ratio (act as `background-size` : `cover` (`true`) or `contain`  (`false`)  | `false`    | `true`  |
| isInteractive| `Boolean`| Whether the canvas is interactive on mouse move | `false`    | `false`  |
| interactionFactor| `Number` | The factor of the interaction | `false`    | `1`  |
| interactionDuration| `Number` | The duration of the interaction | `false`    | `1`  |
| startAsTransparent| `Boolean` | Whether the canvas  is initially transparent and the first transition goes to the first picture | `false`    | `false`  |
| angle| `Number` | The angle of the transition | `false`    | `Math.PI / 4`  |

## Methods

| Name                    | Description             |Params|Returns
|-------------------------|-------------------------|----------|----------|
|next                     | Transition to the second image. |      |`void`|
|previous                 | Transition to the first image. |      |`void`|
|pause                 | Pause the current transition |     |`void`|
|play                 | Play the current paused animation |     |`void`|
|insertImage(path,index)                 | Insert an image at a given index |<ul><li>`path` : the path of the image </li><li>`index` : the index of the inserted image, if not provided, the image will be inserted at the end of the array. It has the same behavior as the `splice` method (negative number allowed)</li></ul>|a Promise resolved when the image is loaded|
|insertTransparentTexture(index)                 | Insert a transparent texture at a given index |<ul><li>`index` : the index of the inserted image, it has the same behavior as  the `insertImage` `index`  parameter |  `void` |
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

If you set the prop `startAsTransparent` to `true`, then it **adds a texture to your `images` array**. If you want to 
remove it after, you can just call the `removeImage` method with `0` as the index parameter value.

## Contributing

Contributions are welcome !
Follow the instructions in the [contributing file](./CONTRIBUTING.md)

## License

[MIT](./LICENCE)

## Support

If you find the component useful, you can support my open source work via [my ko-fi page](https://ko-fi.com/alban_crepel).
