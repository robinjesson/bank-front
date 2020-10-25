import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public _dialog: MatDialog) { }

  public open(component: ComponentType<unknown>, data?: any): Promise<any>{
     const ref: MatDialogRef<unknown, any> =  this._dialog.open(component, {
       data: data
     });

     return ref.afterClosed().pipe(take(1)).toPromise();


  }


}
