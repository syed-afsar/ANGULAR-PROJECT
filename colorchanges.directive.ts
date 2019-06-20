import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorchanges]'
})
export class ColorchangesDirective {

  constructor(private ee:ElementRef, private render:Renderer2) {
  }

  @HostListener('mouseenter') mouseenter(){
    this.render.setStyle(this.ee.nativeElement, 'color', 'blue');

  }

  @HostListener('mouseleave') mouseexit(){
    this.render.setStyle(this.ee.nativeElement,'color' , 'green');
  }
//     this.ee.nativeElement.style.color ='purple';

//   }
  

//  @HostListener('mouseenter') mouseenter(){
//    this.ee.nativeElement.style.color ='green';
//  }
    
//  @HostListener('mouseleave') mouseexit(){
//   this.ee.nativeElement.style.color ='red';
// }
}
