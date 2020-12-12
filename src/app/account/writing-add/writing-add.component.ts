import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditorDialog } from 'src/app/shared/dialog/editor-dialog.class';
import { EntryService } from 'src/app/shared/services/entry.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TabsService } from 'src/app/shared/services/tabs.service';
import { EFormType, EPeriodUnit } from 'src/app/types/enums';
import { TAccountResponse, TEntryRequest, TEntryResponse } from 'src/app/types/model';

@Component({
  selector: 'app-writing-add',
  templateUrl: './writing-add.component.html',
  styleUrls: ['./writing-add.component.css']
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
    console.log()
    if(this.data.idTab) {
      super.onSave('writing-add.title', WritingAddComponent, this.data.idTab);
    }
    else {
      super.onSave('writing-add.title', WritingAddComponent);
    }
  }

  protected createSave(): Object {
    return {
      account: this.data.account,
      form: this.writingForm.value
    }
  }

  public onConfirm(): void {
    let req: TEntryRequest = this.writingForm.value;
    req.accountId = this.data.account.id;
    this._entryService.addEntry(req).subscribe(
      (entry: TEntryResponse) => {
        this._toastService.show({text: 'Ajouté'}, false);
      },
      (err: HttpErrorResponse) => this._toastService.show({text: err.message})
    )
  }
  

}
