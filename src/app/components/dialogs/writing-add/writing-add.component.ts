import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EPeriodUnit } from 'src/app/utils/enums';

@Component({
  selector: 'app-writing-add',
  templateUrl: './writing-add.component.html',
  styleUrls: ['./writing-add.component.css']
})
export class WritingAddComponent implements OnInit{

  public writingForm: FormGroup;
  public noEnd: boolean = true;
  public EPeriodUnit: typeof EPeriodUnit = EPeriodUnit;

  constructor(
    private _bottomSheetRef: MatDialogRef<WritingAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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
