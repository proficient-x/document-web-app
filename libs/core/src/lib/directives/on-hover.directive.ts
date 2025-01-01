import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[libOnHover]',
  standalone: true,
})
export class OnHoverDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'border',
      '1px dotted grey'
    );
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', 'none');
  }
}
