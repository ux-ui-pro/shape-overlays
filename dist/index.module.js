class $cf838c15c8b009ba$export$2e2bcd8739ae039 {
    static registerGSAP(gsap) {
        $cf838c15c8b009ba$export$2e2bcd8739ae039.gsap = gsap;
    }
    constructor(options = {}){
        const { ease: ease = 0.15  } = options;
        this.gsap = $cf838c15c8b009ba$export$2e2bcd8739ae039.gsap || window.gsap;
        this.cursorFollower = this.getFollowerElement();
        this.cursorStyle = this.cursorFollower.querySelector(".cursor-style");
        this.ease = ease;
        this.pos = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        };
        this.mouse = {
            x: this.pos.x,
            y: this.pos.y
        };
        this.xSet = this.gsap.quickSetter(this.cursorFollower, "x", "px");
        this.ySet = this.gsap.quickSetter(this.cursorFollower, "y", "px");
        this.animationId = null;
        window.addEventListener("pointermove", this.move.bind(this));
        window.addEventListener("pointerover", this.style.bind(this));
        this.animation();
    }
    getFollowerElement() {
        return document.querySelector("[data-cursor-follower]") || (()=>{
            const cursorFollower = document.createElement("div");
            cursorFollower.setAttribute("data-cursor-follower", "");
            cursorFollower.classList.add("cursor-follower");
            const cursorStyle = document.createElement("div");
            cursorStyle.classList.add("cursor-style");
            cursorFollower.appendChild(cursorStyle);
            document.body.appendChild(cursorFollower);
            return cursorFollower;
        })();
    }
    move(e) {
        this.mouse.x = e.x;
        this.mouse.y = e.y;
    }
    style(e) {
        let target = e.target;
        while(target && (!target.dataset || !target.dataset.cursorStyle) && target !== document.body)target = target.parentNode;
        if (target) {
            this.cursorStyle.className = this.cursorStyle.className.replace(/ ?cursor-style--\S*/g, "").trim();
            const cursorStyle = target.dataset && target.dataset.cursorStyle || "default";
            this.cursorStyle.classList.add(`cursor-style--${cursorStyle}`);
        }
    }
    animation() {
        const animate = ()=>{
            const dt = 1.0 - Math.pow(this.ease, 0.05);
            this.pos.x += (this.mouse.x - this.pos.x) * dt;
            this.pos.y += (this.mouse.y - this.pos.y) * dt;
            this.xSet(this.pos.x);
            this.ySet(this.pos.y);
            this.animationId = requestAnimationFrame(animate);
        };
        this.animationId = requestAnimationFrame(animate);
    }
    destroy() {
        cancelAnimationFrame(this.animationId);
        window.removeEventListener("pointermove", this.move.bind(this));
        window.removeEventListener("pointerover", this.style.bind(this));
        this.cursorFollower.remove();
    }
}


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
