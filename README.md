<div align="center">
<br>

<h1>shape-overlays</h1>

<p><sup>Multi-layered SVG shape overlays that are dynamically generated with adjustable<br>
properties are used in creating transitions in SPA or for designing drawer menus<br>
Original idea by <a href="https://www.tplh.net/">Yoichi Kobayashi</a></sup></p>

[![npm](https://img.shields.io/npm/v/shape-overlays.svg?colorB=brightgreen)](https://www.npmjs.com/package/shape-overlays)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/shape-overlays.svg)](https://github.com/ux-ui-pro/shape-overlays)
[![NPM Downloads](https://img.shields.io/npm/dm/shape-overlays.svg?style=flat)](https://www.npmjs.org/package/shape-overlays)

<sup>1kB gzipped</sup>

<a href="https://codepen.io/ux-ui/full/Jjervqg">Demo</a>

</div>
<br>

&#10148; **Install**
```console
$ yarn add gsap
$ yarn add shape-overlays
```
<br>

&#10148; **Import**
```javascript
import gsap from 'gsap';
import ShapeOverlays from 'shape-overlays';
```
<br>

&#10148; **Usage**
```javascript
ShapeOverlays.registerGSAP(gsap);

const shapeOverlays = new ShapeOverlays({
  svgEl: '.svg',
  pathEl: '.path',
  numberPoints: 4,
  delayPoints: 0.3,
  delayPaths: 0.25,
  duration: 1,
  ease: 'power2.inOut',
});

shapeOverlays.init();
```
<br>

&#10148; **Options**

| Option         |             Type              | Default  | Description                                                              |
|:---------------|:-----------------------------:|:--------:|:-------------------------------------------------------------------------|
| `svgEl`        | `string` &vert; `HTMLElement` |  `null`  | **Required.** SVG container selector.                                    |
| `pathEl`       | `string` &vert; `HTMLElement` |  `null`  | **Required.** Path selector.                                             |
| `numberPoints` |           `number`            |   `4`    | Number of animation points on each path.                                 |
| `delayPoints`  |           `number`            |  `0.3`   | Delay between animation of each point on path.                           |
| `delayPaths`   |           `number`            |  `0.25`  | Delay between animation of each path.                                    |
| `duration`     |           `number`            |   `1`    | Duration of animation.                                                   |
| `ease`         |           `string`            | `'none'` | Timing function. See [gsap easing](https://greensock.com/docs/v3/Eases). |
<br>

&#10148; **API**

| Method                  | Description                                                                     |
|:------------------------|:--------------------------------------------------------------------------------|
| `toggle()`              | Toggles the animation state between opened and closed.                          |
| `entry()`               | Sets the animation state to open.                                               |
| `leave()`               | Sets the animation state to closed.                                             |
| `totalDuration()`       | Returns the total duration of the animation in milliseconds.                    |
| `init()`                | Initializes the overlay with the given options.                                 |
| `destroy()`             | Destroys the overlay instance, cleaning up any created elements and animations. |
| `reinitialize(options)` | Reinitializes the overlay with new options.                                     |
<br>

&#10148; **License**
shape-overlays is released under MIT license.
