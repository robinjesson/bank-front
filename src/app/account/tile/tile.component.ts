import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';
import { NotificationService } from 'src/app/notification/services/notification.service';
import { TAccountResponse } from 'src/app/types/model';


@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.less']
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
