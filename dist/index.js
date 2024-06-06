
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $a196c1ed25598f0e$export$2e2bcd8739ae039; });
class $a196c1ed25598f0e$var$ShapeOverlays {
    static gsap;
    svg = null;
    path = [];
    numberPoints;
    delayPoints;
    delayPaths;
    duration;
    ease;
    isOpened = false;
    pointsDelay = [];
    allPoints = [];
    tl;
    options;
    static registerGSAP(gsap) {
        $a196c1ed25598f0e$var$ShapeOverlays.gsap = gsap;
    }
    constructor(options){
        this.options = options;
        this.numberPoints = options.numberPoints ?? 4;
        this.delayPoints = options.delayPoints ?? 0.3;
        this.delayPaths = options.delayPaths ?? 0.25;
        this.duration = options.duration ?? 1;
        this.ease = options.ease ?? "none";
        this.tl = {};
    }
    initializePaths() {
        this.allPoints = this.path.map(()=>Array(this.numberPoints).fill(100));
    }
    render = ()=>{
        this.path.forEach((path, i)=>{
            const points = this.allPoints[i];
            let d = this.isOpened ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;
            for(let j = 0; j < this.numberPoints - 1; j += 1){
                const p = (j + 1) / (this.numberPoints - 1) * 100;
                const cp = p - 1 / (this.numberPoints - 1) * 100 / 2;
                d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
            }
            d += this.isOpened ? " V 100 H 0" : " V 0 H 0";
            path.setAttribute("d", d);
        });
    };
    update() {
        this.tl.progress(0).clear();
        this.pointsDelay = Array.from({
            length: this.numberPoints
        }, ()=>Math.random() * this.delayPoints);
        this.allPoints.forEach((points, i)=>{
            const pathDelay = this.delayPaths * (this.isOpened ? i : this.path.length - i - 1);
            this.pointsDelay.forEach((delay, j)=>{
                this.tl.to(points, {
                    [j]: 0
                }, delay + pathDelay);
            });
        });
    }
    toggle() {
        if (!this.tl.isActive()) {
            this.isOpened = !this.isOpened;
            this.update();
        }
    }
    entry() {
        if (!this.tl.isActive()) {
            this.isOpened = true;
            this.update();
        }
    }
    leave() {
        if (!this.tl.isActive()) {
            this.isOpened = false;
            this.update();
        }
    }
    totalDuration() {
        return Math.round(this.tl.totalDuration() * 1000);
    }
    init() {
        const { svgClassName: svgClassName, pathClassName: pathClassName } = this.options;
        this.gsap = $a196c1ed25598f0e$var$ShapeOverlays.gsap || window.gsap;
        this.svg = document.querySelector(svgClassName);
        this.path = Array.from(this.svg?.querySelectorAll(pathClassName) || []);
        this.isOpened = false;
        this.pointsDelay = [];
        this.allPoints = [];
        this.tl = this.gsap.timeline({
            onUpdate: this.render,
            defaults: {
                ease: this.ease,
                duration: this.duration
            }
        });
        if (!this.svg) return;
        this.svg.classList.add(`${svgClassName.replace(/\./g, "")}--initialize`);
        this.initializePaths();
    }
    destroy() {
        if (this.tl) {
            this.gsap.killTweensOf([
                this.tl
            ]);
            this.tl.kill();
        }
        if (this.svg) this.svg.classList.remove(...Array.from(this.svg.classList).map((cls)=>`${cls}--initialize`));
        this.svg = null;
        this.path = [];
        this.pointsDelay = [];
        this.allPoints = [];
    }
    reinitialize(options) {
        this.destroy();
        this.options = options;
        this.init();
    }
}
var $a196c1ed25598f0e$export$2e2bcd8739ae039 = $a196c1ed25598f0e$var$ShapeOverlays;


//# sourceMappingURL=index.js.map
