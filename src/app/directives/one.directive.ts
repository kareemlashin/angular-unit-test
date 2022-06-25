import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appOne]'
})
export class OneDirective {

  constructor(private elementRef: ElementRef<HTMLElement>) {}
  @HostBinding(".class") type: string='any';

  @HostListener('click')
   onClick() {
      this.type = 'blue';
  }
}
