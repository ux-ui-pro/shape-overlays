type GSAP = never;

interface ShapeOverlaysOptions {
  svgEl: string;
  pathEl: string;
  numberPoints?: number;
  delayPoints?: number;
  delayPaths?: number;
  duration?: number;
  ease?: string;
}

class ShapeOverlays {
  private static gsap: GSAP;

  private svg: SVGElement | null = null;

  private path: SVGPathElement[] = [];

  private readonly numberPoints: number;

  private readonly delayPoints: number;

  private readonly delayPaths: number;

  private readonly duration: number;

  private readonly ease: string;

  private isOpened: boolean = false;

  private pointsDelay: number[] = [];

  private allPoints: number[][] = [];

  private tl: GSAPTimeline;

  private options: ShapeOverlaysOptions;

  static registerGSAP(gsap: GSAP) {
    ShapeOverlays.gsap = gsap;
  }

  constructor(options: ShapeOverlaysOptions) {
    this.options = options;
    this.numberPoints = options.numberPoints ?? 4;
    this.delayPoints = options.delayPoints ?? 0.3;
    this.delayPaths = options.delayPaths ?? 0.25;
    this.duration = options.duration ?? 1;
    this.ease = options.ease ?? 'none';
    this.tl = {} as GSAPTimeline;
  }

  private initializePaths(): void {
    this.allPoints = this.path.map(() => Array(this.numberPoints).fill(100));
  }

  private render = (): void => {
    this.path.forEach((path, i) => {
      const points = this.allPoints[i];

      let d = this.isOpened ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;

      for (let j = 0; j < this.numberPoints - 1; j += 1) {
        const p = ((j + 1) / (this.numberPoints - 1)) * 100;
        const cp = p - ((1 / (this.numberPoints - 1)) * 100) / 2;

        d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
      }

      d += this.isOpened ? ' V 100 H 0' : ' V 0 H 0';

      path.setAttribute('d', d);
    });
  };

  private update(): void {
    this.tl.progress(0).clear();
    this.pointsDelay = Array.from({ length: this.numberPoints }, () => Math.random() * this.delayPoints);

    this.allPoints.forEach((points, i) => {
      const pathDelay = this.delayPaths * (this.isOpened ? i : (this.path.length - i - 1));

      this.pointsDelay.forEach((delay, j) => {
        this.tl.to(points, { [j]: 0 }, delay + pathDelay);
      });
    });
  }

  toggle(): void {
    if (!this.tl.isActive()) {
      this.isOpened = !this.isOpened;
      this.update();
    }
  }

  entry(): void {
    if (!this.tl.isActive()) {
      this.isOpened = true;
      this.update();
    }
  }

  leave(): void {
    if (!this.tl.isActive()) {
      this.isOpened = false;
      this.update();
    }
  }

  totalDuration(): number {
    return Math.round(this.tl.totalDuration() * 1000);
  }

  init(): void {
    const {
      svgEl,
      pathEl,
    } = this.options;

    this.gsap = ShapeOverlays.gsap || (window as never).gsap;
    this.svg = document.querySelector<SVGElement>(svgEl);
    this.path = Array.from(this.svg?.querySelectorAll<SVGPathElement>(pathEl) || []);
    this.isOpened = false;
    this.pointsDelay = [];
    this.allPoints = [];
    this.tl = this.gsap.timeline({
      onUpdate: this.render,
      defaults: {
        ease: this.ease,
        duration: this.duration,
      },
    });

    if (!this.svg) return;

    this.svg.classList.add(`${svgEl.replace(/\./g, '')}--initialize`);
    this.initializePaths();
  }

  public destroy(): void {
    if (this.tl) {
      this.gsap.killTweensOf([this.tl]);
      this.tl.kill();
    }

    if (this.svg) {
      this.svg.classList.remove(...Array.from(this.svg.classList).map((cls) => `${cls}--initialize`));
    }

    this.svg = null;
    this.path = [];
    this.pointsDelay = [];
    this.allPoints = [];
  }

  public reinitialize(options: ShapeOverlaysOptions): void {
    this.destroy();
    this.options = options;
    this.init();
  }
}

export default ShapeOverlays;
