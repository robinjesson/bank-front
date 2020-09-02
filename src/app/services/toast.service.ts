import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _snackBar: MatSnackBar) {}

  show(text: string, options: any = {}) {
    this._snackBar.open(text, 'Fermer', {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration: 5000,
      politeness:"off"
    });
  }

}
