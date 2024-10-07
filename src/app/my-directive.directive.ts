import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private el: ElementRef) { 
// To change label's font color
   el.nativeElement.style.color = "red"; 
   el.nativeElement.style.fontWeight = "bolder";
   el.nativeElement.style.border = "2px double black";  
  }

}
