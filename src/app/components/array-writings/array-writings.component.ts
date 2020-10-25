import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { NotificationService } from 'src/app/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TAccountResponse, TEntryResponse } from 'src/app/utils/types';
import { DialogService } from 'src/app/services/dialog.service';
import { WritingAddComponent } from '../dialogs/writing-add/writing-add.component';

@Component({
  selector: 'app-array-writings',
  templateUrl: './array-writings.component.html',
  styleUrls: ['./array-writings.component.css'],
})
export class ArrayWritingsComponent {

  public entries: TEntryResponse[];
  private _account: TAccountResponse;


  @Input()
  public set account(account: TAccountResponse) {
    if(account) {
      this._account = account;
      this._accountService.getAccountWritings(account.id).subscribe(
        (data) => this.entries = data,
        (err: HttpErrorResponse) => this._toastService.show({text: err.message})
      );
    }
    
  }

  constructor(
    private _accountService: AccountService, 
    private _toastService: NotificationService,
    private _dialogService: DialogService) { }

  public async onAddEntry() {
    await this._dialogService.open(WritingAddComponent, {
      account: this._account.name
    });
  }


}
