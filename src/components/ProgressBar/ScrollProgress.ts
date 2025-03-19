export class ScrollProgress {
  private element: HTMLDivElement;
  private animationFrameId: number | null = null;
  private prevScroll = 0;

  constructor(element: HTMLDivElement) {
    this.element = element;
    this.handleScroll = this.handleScroll.bind(this);
    this.animationFrameId = requestAnimationFrame(this.handleScroll);
  }

  private handleScroll() {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    const totalScroll = (scrollTop / (scrollHeight - clientHeight)) * 100;
    if (Math.abs(totalScroll - this.prevScroll) > 0.001) {
      this.prevScroll = totalScroll;
      this.element.style.width = `${totalScroll}%`;
    }
    this.animationFrameId = requestAnimationFrame(this.handleScroll);
  }

  destroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
