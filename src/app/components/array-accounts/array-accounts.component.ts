import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { DialogService } from 'src/app/services/dialog.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';
import { EntryService } from 'src/app/services/entry.service';
import { ArrayWritingsComponent } from '../array-writings/array-writings.component';
import { WritingAddComponent } from '../dialogs/writing-add/writing-add.component';
import { TAccountResponse, TEntryRequest } from 'src/app/utils/types';

@Component({
  selector: 'app-array-accounts',
  templateUrl: './array-accounts.component.html',
  styleUrls: ['./array-accounts.component.css']
})
export class ArrayAccountsComponent implements OnInit {
  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;

  @ViewChildren(ArrayWritingsComponent) arrays: QueryList<ArrayWritingsComponent>;

  @Input() public user: any;
  @Input() public account: TAccountResponse;
  public accounts: TAccountResponse[];
  public total: number = 0;
  @Output() accountChange: EventEmitter<TAccountResponse> = new EventEmitter<TAccountResponse>(); 

  constructor(
    private _dialogService: DialogService,
    private _userService: UserService,
    private _writingService: EntryService,
    private _notificationService: NotificationService) { }

  ngOnInit(): void {
    this._userService.getUserAccounts(this.user.id).subscribe(
      (data) => {
        this.accounts = data;
        this.accounts.forEach(acc => this.total += acc.total);
        if(data[0])
          this.accountChange.emit(data[0]);
      },
      (err: HttpErrorResponse) => {}
    )
  }

}
