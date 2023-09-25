import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {
@HostListener('click') onClick(){
this.el.nativeElement.style.color = 'Red'
}
  constructor(private el:ElementRef) { }

}
