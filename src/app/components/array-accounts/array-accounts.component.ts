import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-array-accounts',
  templateUrl: './array-accounts.component.html',
  styleUrls: ['./array-accounts.component.css']
})
export class ArrayAccountsComponent implements OnInit {

  @Input() public user: any;
  public accounts: any[];
  public total: number = 0;
@Output() accountId: EventEmitter<number> = new EventEmitter<number>(); 

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUserAccounts(this.user.id).subscribe(
      (data) => {
        this.accounts = data;
        this.accounts.forEach(acc => this.total += acc.total);
      },
      (err: HttpErrorResponse) => {}
    )
  }

  onSelectAccount(id: number): void {
    this.accountId.emit(id);
  }

}
