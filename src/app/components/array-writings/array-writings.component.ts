import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { ToastService } from 'src/app/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-array-writings',
  templateUrl: './array-writings.component.html',
  styleUrls: ['./array-writings.component.css'],
})
export class ArrayWritingsComponent {

  public writings: any[];

  @Input()
  set accountId(id:number) {
    if(id) {
      this._accountService.getAccountWritings(id).subscribe(
        (data) => this.writings = data,
        (err: HttpErrorResponse) => this._toastService.show(err.message, { classname: 'bg-danger'})
      );
    }
    
  }

  constructor(
    private _accountService: AccountService, 
    private _toastService: ToastService) { }


}
