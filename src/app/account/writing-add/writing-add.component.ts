import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { EPeriodUnit } from 'src/app/types/enums';
import { TEntryRequest } from 'src/app/types/model';

@Component({
  selector: 'app-writing-add',
  templateUrl: './writing-add.component.html',
  styleUrls: ['./writing-add.component.css']
})
export class WritingAddComponent implements OnInit{

  @Input() public account: string;
  public writingForm: FormGroup;
  public noEnd: boolean = true;
  public EPeriodUnit: typeof EPeriodUnit = EPeriodUnit;
  @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();
  @Output() public ok: EventEmitter<TEntryRequest> = new EventEmitter<TEntryRequest>();

  constructor(
    private _formBuilder: FormBuilder) {
    }

  ngOnInit(): void {
    this.initForm();
    this.writingForm.value.type = 'Once';
  }

  private initForm(): void {
    const today: Date = new Date();
    this.writingForm = this._formBuilder.group({
      title: '',
      amount: '',
      date: new FormControl(`${today.getFullYear()}-${today.getMonth() < 10 ? '0' : ''}${today.getMonth()}-${today.getDate()}`),
      end: '',
      periodUnit: new FormControl(EPeriodUnit.Once),
      period: '',
      accountId: ''
    });
  }
  

}
