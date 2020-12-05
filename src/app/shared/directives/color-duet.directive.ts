import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorDuet]'
})
export class ColorDuetDirective {

  private color1: string;
  private color2: string;
  private text: string;
  private angle: number;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    /*
    .btn {
    border: 1px solid whitesmoke;
    background-color: whitesmoke;
} 
    */
    this.el.nativeElement.style.border = '1px solid white';


    let x = Math.round( Math.random() * 8 );
    
    this.color1 = duets[x].col1;
    this.color2 = duets[x].col2;
    this.text = duets[x].text;
    this.angle = Math.round( Math.random() * 360 );
    
    let gradient = "linear-gradient(" + this.angle + "deg, " + this.color1 + " 60%, " + this.color2 + " 60%)";
    
    this.el.nativeElement.style.background = gradient;
    this.el.nativeElement.style.color = this.text;
  }

}

const duets : {col1: string, col2: string, text: string}[] = [
  {
    col1: 'blue',
    col2: 'brown',
    text: 'white'
  },
  {
    col1: 'blue',
    col2: 'red',
    text: 'white'
  },
  {
    col1: 'blue',
    col2: 'pink',
    text: 'white'
  },
  {
    col1: 'black',
    col2: 'purple',
    text: 'white'
  },
  {
    col1: 'black',
    col2: 'brown',
    text: 'white'
  },
  {
    col1: 'orange',
    col2: 'pink',
    text: 'white'
  },
  {
    col1: 'orange',
    col2: 'purple',
    text: 'white'
  },
  {
    col1: 'yellow',
    col2: 'brown',
    text: 'black'
  },
  {
    col1: 'yellow',
    col2: 'orange',
    text: 'black'
  },
]
