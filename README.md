<div align="center">
<br>

<h1>shape-overlays</h1>
<p><sup>Multi-layered SVG shape overlays that are dynamically generated with adjustable<br>
properties are used in creating transitions in SPA or for designing drawer menus<br>
Original idea by <a href="https://www.tplh.net/">Yoichi Kobayashi</a></sup></p>

[![npm](https://img.shields.io/npm/v/shape-overlays.svg?colorB=brightgreen)](https://www.npmjs.com/package/shape-overlays)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/shape-overlays.svg)](https://github.com/ux-ui-pro/shape-overlays)
[![NPM Downloads](https://img.shields.io/npm/dm/shape-overlays.svg?style=flat)](https://www.npmjs.org/package/shape-overlays)

<sup>800B gzipped</sup>
<h3><a href="https://codepen.io/ux-ui/pen/Jjervqg">Demo</a></h3>

</div>
<br>

### Installation
ShapeOverlays requires GSAP library to work.
```
$ yarn add gsap
$ yarn add shape-overlays
```
<br>

### Import
Import GSAP, ShapeOverlays and initialize it.
```javascript
import gsap from 'gsap'
import ShapeOverlays from 'shape-overlays'

ShapeOverlays.registerGSAP(gsap)

const overlay = new ShapeOverlays({
	svgClassName: 'svg-overlay',
	pathClassName: 'svg-overlay path'
})
```
<br>

### Options
You can configure ShapeOverlays via options.
```js
const overlay = new ShapeOverlays({
	svgClassName: 'svg-overlay',
	pathClassName: 'svg-overlay path',
	numberPoints: 4,
	delayPoints: 0.3,
	delayPaths: 0.25,
	duration: 1,
	ease: 'power2.inOut'
})
```
| Option           |             Type              | Default  | Description                                                               |
| :--------------- | :---------------------------: | :------: | :------------------------------------------------------------------------ |
| `svgClassName`   | `string` &vert; `HTMLElement` |  `null`  | **Required.** SVG container selector.                                     |
| `pathClassName`  | `string` &vert; `HTMLElement` |  `null`  | **Required.** Path selector.                                              |
| `numberPoints`   |           `number`            |    `4`   | Number of animation points on each path.                                  |
| `delayPoints`    |           `number`            |   `0.3`  | Delay between animation of each point on path.                            |
| `delayPaths`     |           `number`            |  `0.25`  | Delay between animation of each path.                                     |
| `duration`       |           `number`            |    `1`   | Duration of animation.                                                    |
| `ease`           |           `string`            | `'none'` | Timing function. See [gsap easing](https://greensock.com/docs/v3/Eases).  |
<br>

### API
| Method                               | Description                                                                                      |
| :----------------------------------- | :----------------------------------------------------------------------------------------------- |
| `overlay.toggle()`                   | Toggles the animation state between human and closed.                                            |
| `overlay.entry()`                    | Sets the animation state to open.                                                                |
| `overlay.leave()`                    | Sets the animation state to closed.                                                              |
| `overlay.totalDuration()`            | Returns the total duration of the animation in milliseconds.                                     |
<br>

### License
shape-overlays is released under MIT license.