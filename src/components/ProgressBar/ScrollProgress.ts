export class ScrollProgress {
  private element: HTMLDivElement;
  private animationFrameId: number;
  private running = true;
  private prevScroll = 0;

  constructor(element: HTMLDivElement) {
    this.element = element;
    this.animationFrameId = requestAnimationFrame(this.handleScroll);
  }

  private handleScroll = () => {
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
    if (this.running) {
      this.animationFrameId = requestAnimationFrame(this.handleScroll);
    }
  };

  destroy() {
    this.running = false;
    cancelAnimationFrame(this.animationFrameId);
  }
}
