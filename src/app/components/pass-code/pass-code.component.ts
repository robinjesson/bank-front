import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pass-code',
  templateUrl: './pass-code.component.html',
  styleUrls: ['./pass-code.component.css']
})
export class PassCodeComponent implements OnInit {

  @Output() nb: EventEmitter<number> = new EventEmitter<number>();
  @Output() back: EventEmitter<void> = new EventEmitter<void>();
  @Output() erase: EventEmitter<void> = new EventEmitter<void>();
  
  
  public shuffled: number[]; 
  constructor() {
    this.shuffled = this.shuffle(numbers);
   }

  ngOnInit(): void {
  }

  private shuffle(array: number[]): number[] {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  public onClickNumber(nb: number): void {
    this.nb.emit(nb);
  }

  public onClickBack(): void {
    this.back.emit();
  }

  public onClickErase(): void {
    this.erase.emit();
  }

}

const numbers: number[] = [0,1,2,3,4,5,6,7,8,9];
