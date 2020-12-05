import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { WritingAddComponent } from 'src/app/account/writing-add/writing-add.component';
import { EDialogAction } from 'src/app/types/enums';

@Component({
  selector: 'app-message-box-dialog',
  templateUrl: './message-box-dialog.component.html',
  styleUrls: ['./message-box-dialog.component.css']
})
export class MessageBoxDialogComponent implements OnInit {
  EDialogAction = EDialogAction;
  constructor(private _bottomSheetRef: MatDialogRef<WritingAddComponent>) { }

  ngOnInit(): void {
  }

}
