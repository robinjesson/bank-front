import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';
import { EDialogAction } from 'src/app/types/enums';
import { MessageBoxDialogComponent } from '../dialog/message-box-dialog/message-box-dialog.component';

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

  public openMessageBox(message: string): Promise<EDialogAction> {
    return this.open(MessageBoxDialogComponent, { message: message });
  }


}
