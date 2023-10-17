import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @Input() scrollTarget: string | any;

  constructor(private el: ElementRef) { }

  @HostListener('click')
  onClick() {
    if (this.scrollTarget) {
      const targetElement = document.getElementById(this.scrollTarget);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

}
