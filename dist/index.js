function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$export$2e2bcd8739ae039 {
    static registerGSAP(gsap1) {
        $4fa36e821943b400$export$2e2bcd8739ae039.gsap = gsap1;
    }
    constructor(options = {}){
        const { svgClass: svgClass , pathClass: pathClass , numberPoints: numberPoints = 5 , delayPoints: delayPoints = 0.3 , delayPaths: delayPaths = 0.2 , duration: duration = 1 , ease: ease = "power2.inOut"  } = options;
        this.gsap = $4fa36e821943b400$export$2e2bcd8739ae039.gsap || window.gsap;
        this.svg = document.querySelector(svgClass);
        this.path = [
            ...this.svg?.querySelectorAll(pathClass) || []
        ];
        this.numberPoints = numberPoints;
        this.numberPaths = this.path.length;
        this.delayPoints = delayPoints;
        this.delayPaths = delayPaths;
        this.duration = duration;
        this.ease = ease;
        this.isOpened = false;
        this.pointsDelay = [];
        this.allPoints = [];
        if (!this.svg) return;
        this.animation();
        this.paths();
    }
    animation() {
        this.tl = gsap.timeline({
            onUpdate: this.render,
            defaults: {
                ease: this.ease,
                duration: this.duration
            }
        });
    }
    paths() {
        this.allPoints = [];
        for(let i = 0; i < this.numberPaths; i++){
            const points = [];
            for(let j = 0; j < this.numberPoints; j++)points.push(100);
            this.allPoints.push(points);
        }
    }
    render = ()=>{
        this.path.map((path, i)=>{
            const points = this.allPoints[i];
            let d = "";
            d += this.isOpened ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;
            for(let j = 0; j < this.numberPoints - 1; j++){
                let p = (j + 1) / (this.numberPoints - 1) * 100;
                let cp = p - 1 / (this.numberPoints - 1) * 100 / 2;
                d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
            }
            d += this.isOpened ? ` V 100 H 0` : ` V 0 H 0`;
            path.setAttribute("d", d);
        });
    };
    toggle() {
        this.tl.progress(0).clear();
        for(let i = 0; i < this.numberPoints; i++)this.pointsDelay[i] = Math.random() * this.delayPoints;
        for(let i = 0; i < this.numberPaths; i++){
            const points = this.allPoints[i];
            const pathDelay = this.delayPaths * (this.isOpened ? i : this.numberPaths - i - 1);
            for(let j = 0; j < this.numberPoints; j++){
                const delay = this.pointsDelay[j];
                this.tl.to(points, {
                    [j]: 0
                }, delay + pathDelay);
            }
        }
    }
    onClick() {
        if (!this.tl.isActive()) {
            this.isOpened = !this.isOpened;
            this.toggle();
        }
    }
}


//# sourceMappingURL=index.js.map
