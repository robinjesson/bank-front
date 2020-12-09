import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TabsService } from 'src/app/shared/services/tabs.service';
import { EFormType, EPeriodUnit } from 'src/app/types/enums';
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

  constructor(
    private _formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<WritingAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _tabsService: TabsService) {
      this._dialogRef.updateSize('50vh');
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

  public onSave() {
    this._tabsService.addTab('writing-add.title', WritingAddComponent, this.writingForm.value);
  }
  

}
