import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAccountColor]'
})
export class AccountColorDirective {

  constructor(private el: ElementRef, private rendered: Renderer2) { }

  @Input('appAccountColor')
  public set appAccountColor(account: any) {
    switch(true) {
      case account.total < account.maxRed:
        this.el.nativeElement.style.color = 'red';
        this.rendered.addClass(this.el.nativeElement, 'fa-sad-cry');
        break;
      case account.total >= account.maxRed && account.total < account.minGreen:
        this.el.nativeElement.style.color = 'orange';
        this.rendered.addClass(this.el.nativeElement, 'fa-frown-open');
        break;
      case account.total >= account.minGreen:
        this.el.nativeElement.style.color = 'green';
        this.rendered.addClass(this.el.nativeElement, 'fa-laugh-wink');
        break;
      case account == null:
      case account == undefined:
      default:
        this.el.nativeElement.style.color = 'black';
        this.rendered.addClass(this.el.nativeElement, 'fa-question');
        break;
    }
  } 

}
