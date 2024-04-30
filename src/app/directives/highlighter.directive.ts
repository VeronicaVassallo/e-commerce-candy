import { Directive, ElementRef, HostListener, Input } from '@angular/core';
/**/
@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective {
  @Input() appHighlighter = '';
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBorderColor('orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBorderColor('palevioletred');
  }

  changeBorderColor(color: string) {
    this.element.nativeElement.style.borderColor = color;
  }
}
