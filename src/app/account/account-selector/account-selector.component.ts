import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild, ViewChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { EntryService } from 'src/app/shared/services/entry.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { UserService } from 'src/app/shared/services/user.service';
import { TAccountResponse } from 'src/app/types/model';
import { ArrayWritingsComponent } from '../array-writings/array-writings.component';

@Component({
  selector: 'app-account-selector',
  templateUrl: './account-selector.component.html',
  styleUrls: ['./account-selector.component.css']
})
export class AccountSelectorComponent implements OnInit {
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
