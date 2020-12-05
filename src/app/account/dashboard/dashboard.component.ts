import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/shared/services/account.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TAccountResponse } from 'src/app/types/model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: any;
  public showAddButton: boolean = true;
  public accountForm: FormGroup;
  public currentAccount: TAccountResponse;

  constructor(
    private _authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder,
    private _accountService: AccountService,
    private _toastService: NotificationService) { 
  }

  ngOnInit(): void {
    this.initForm();
    this.user = this._authenticationService.getUser();
  }

  public initForm(): void {
    this.accountForm = this._formBuilder.group({
      name: ['', Validators.required],
      total: ['', Validators.required],
    });
  }

  onAddAccount(): void {
    const value = this.accountForm.value;
    this._accountService.addAccount({name: 'ezfzef', total: -123, userId: 1}).subscribe(
      () => this._toastService.show({text: "Compte ajouté."}),
      (err: HttpErrorResponse) => this._toastService.show({text: err.message})
    );
    this.showAddButton = !this.showAddButton;
  }

}
