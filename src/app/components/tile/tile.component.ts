import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { NotificationService } from 'src/app/services/notification.service';
import { TAccountResponse } from 'src/app/utils/types';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {

  @Input() acc: TAccountResponse;
  @Input() active: boolean;

  constructor(private _accountService: AccountService,
    private _notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  onRefresh() {
    this._accountService.refreshAccount(this.acc.id).subscribe(
      () => {
        this._notificationService.show({text: this.acc.name + " mis à jour."});
      },
      () => {
        this._notificationService.show({text: "Erreur de mise à jour du compte."});
      }
    )
  }

}
