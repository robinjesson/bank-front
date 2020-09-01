import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastService } from 'src/app/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as sha512 from 'js-sha512';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  @Output() goLogin: EventEmitter<void> = new EventEmitter<void>();

  public signForm: FormGroup;
  public pass1Visible: boolean = false;
  public pass2Visible: boolean = false;

  public pass1: string = '';
  public pass2: string = '';

  authStatus: boolean;

  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _toastService: ToastService,
    private _userService: UserService,) { 
      this.initForm();
  }

  public initForm(): void {
    this.signForm = this._formBuilder.group({
      username: ['', Validators.required],
    });
  }

  addNumber1(nb: number) {
    this.pass1 += '' + nb;
  }

  removeLastPass1() {
    this.pass1 = this.pass1.slice(0, -1);
  }

  erasePass1() {
    this.pass1 = '';
  }

  addNumber2(nb: number) {
    this.pass2 += '' + nb;
  }

  removeLastPass2() {
    this.pass2 = this.pass2.slice(0, -1);
  }

  erasePass2() {
    this.pass2 = '';
  }

  public isSamePassword(): boolean {
    return this.pass1 === this.pass2
    && this.pass1.length >= 0 && this.pass2.length > 0;

  }

  public requirements(): boolean {
    return this.isSamePassword() && this.pass1.length >= 6 && this.signForm.valid;
  }

  public onSignIn(): void {
    const formValue = this.signForm.value;
    this._userService.addUser({username: formValue.username, password: sha512.sha512(this.pass1)}).subscribe(
      () => {
        this._toastService.show("Vous êtes inscrit.", { classname: 'bg-success'});
      },
      (err: HttpErrorResponse) => this._toastService.show(err.message, { classname: 'bg-danger'})
    )
  }



}
