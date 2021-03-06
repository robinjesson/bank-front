import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import * as sha512 from 'js-sha512';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { NotificationService } from 'src/app/notification/services/notification.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  public passVisible: boolean = false;
  public loginForm: FormGroup;
  public signForm: FormGroup;

  public pass: string = '';

  @Output() goRegister: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _toastService: NotificationService,
    private _userService: UserService,) { 
      this.initForm();
    }

  ngOnInit(): void {
  }

  public initForm(): void {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
    });
  }

  public onLogIn(): void {
    const formValue = this.loginForm.value;

    console.log(sha512.sha512(this.pass))
    
    this._authenticationService.authenticate(formValue.username, sha512.sha512(this.pass)).subscribe(
      (data) => {
        this._authenticationService.saveToken(data.token);
        this._authenticationService.saveUser(data.user);
        this._router.navigate(['private']);
      },
      (err: HttpErrorResponse) => {
        this._toastService.show({text: "Identifiant ou mot de passe incorrect."});
      }
    )
  }

  

  addNumber(nb: number) {
    this.pass += '' + nb;
  }

  removeLastPass() {
    this.pass = this.pass.slice(0, -1);
  }

  erasePass() {
    this.pass = '';
  }

}
