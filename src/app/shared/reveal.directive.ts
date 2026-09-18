import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

/** Fades an element up the first time it scrolls into view. Usage: <div appReveal [revealDelay]="100"> */
@Directive({
  selector: '[appReveal]',
  standalone: false
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    if (this.revealDelay) {
      node.style.setProperty('--reveal-delay', `${this.revealDelay}ms`);
    }

    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        node.classList.add('is-visible');
        this.observer?.disconnect();
        // Drop the stagger delay once revealed so hover transitions stay instant.
        setTimeout(() => node.style.removeProperty('--reveal-delay'), this.revealDelay + 800);
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
