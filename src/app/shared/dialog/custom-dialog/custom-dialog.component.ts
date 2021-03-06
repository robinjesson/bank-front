import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.less']
})
export class CustomDialogComponent implements OnInit {

  @Input() title: string;
  @Output() onOk = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}
