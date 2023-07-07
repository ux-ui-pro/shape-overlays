<div align="center">
<br>

<h1>shape-overlays</h1>
<p><sup>Multi-layered SVG shape overlays that are dynamically generated with adjustable properties are used in creating transitions in SPA or for designing drawer menus.<br>
Original idea by <a href="https://www.tplh.net/">Yoichi Kobayashi</a></sup></p>

[![npm](https://img.shields.io/npm/v/shape-overlays.svg?colorB=brightgreen)](https://www.npmjs.com/package/shape-overlays)
[![GitHub package version](https://img.shields.io/github/package-json/v/ux-ui-pro/shape-overlays.svg)](https://github.com/ux-ui-pro/shape-overlays)
[![NPM Downloads](https://img.shields.io/npm/dm/shape-overlays.svg?style=flat)](https://www.npmjs.org/package/shape-overlays)

<sup>800B gzipped</sup>
<h3><a href="https://codepen.io/ux-ui/pen/Jjervqg">Demo</a></h3>

</div>
<br>

### Installation
```
$ yarn add gsap
$ yarn add shape-overlays
```

<br>

### Import
```javascript
import gsap from 'gsap'
import ShapeOverlays from 'shape-overlays'

ShapeOverlays.registerGSAP(gsap)

const overlay = new ShapeOverlays({
	svgClass: '.svg-overlay',
	pathClass: '.svg-overlay path',
	numberPoints: 4,
	delayPoints: 0.7,
	delayPaths: 0.25,
	duration: 1.2,
	ease: 'power2.inOut'
})

document.querySelector('.button')
	.addEventListener('click', () => overlay.onClick())
```
<br>

### License
shape-overlays is released under MIT license
