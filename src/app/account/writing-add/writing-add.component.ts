import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditorDialog } from 'src/app/shared/dialog/editor-dialog.class';
import { EntryService } from 'src/app/shared/services/entry.service';
import { NotificationService } from 'src/app/notification/services/notification.service';
import { TabsService } from 'src/app/shared/services/tabs.service';
import { EFormType, EPeriodUnit } from 'src/app/types/enums';
import { TAccountResponse, TEntryRequest, TEntryResponse } from 'src/app/types/model';

@Component({
  selector: 'app-writing-add',
  templateUrl: './writing-add.component.html',
  styleUrls: ['./writing-add.component.less']
})
export class WritingAddComponent extends EditorDialog implements OnInit{
  public writingForm: FormGroup;
  public noEnd: boolean = true;
  public EPeriodUnit: typeof EPeriodUnit = EPeriodUnit;

  constructor(
    private _formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<WritingAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    _tabsService: TabsService,
    private _entryService: EntryService,
    private _toastService: NotificationService) {
      super(_tabsService);
    }

  ngOnInit(): void {
    this.initForm();
    this.writingForm.value.type = 'Once';
  }

  private initForm(): void {
    const today: Date = new Date();
   if(this.data.idTab) {
    this.writingForm = this._formBuilder.group({
      title: this.data.form.title ? this.data.form.title : '',
      amount: new FormControl(this.data.form.amount ? this.data.form.amount : ''),
      date: new FormControl(`${today.getFullYear()}-${today.getMonth() < 10 ? '0' : ''}${today.getMonth()}-${today.getDate()}`),
      end: this.data.form.end ? this.data.form.end : '',
      periodUnit: new FormControl(this.data.form.periodUnit ? this.data.form.periodUnit : EPeriodUnit.Once),
      period: this.data.form.period ? this.data.form.period : '',
      accountId: this.data.form.accountId ? this.data.form.accountId : ''
    });
   }
   else {
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

  public onSave() {
    super.onSave('tabs.writing-add', WritingAddComponent, this.data.idTab);
  }

  protected createSave(): Object {
    return {
      account: this.data.account,
      form: this.writingForm.value
    }
  }

  public onConfirm(): void {

    let req: TEntryRequest = this.writingForm.value;
    
  }
  

}
