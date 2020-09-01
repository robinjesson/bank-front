import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toats-container',
  template: `
    <ngb-toast
      *ngFor="let toast of _toastService.toasts"
      [class]="toast.classname"
      [autohide]="true"
      [delay]="toast.delay || 5000"
      (hide)="_toastService.remove(toast)">

      {{toast.text}}

    </ngb-toast>
  `,
  host: {'[class.ngb-toasts]': 'true'}
})
export class ToatsContainerComponent {

  constructor(public _toastService: ToastService) {}

}
