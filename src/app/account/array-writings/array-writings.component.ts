import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { EntryService } from 'src/app/shared/services/entry.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TabsService } from 'src/app/shared/services/tabs.service';
import { TEntryResponse, TAccountResponse, TEntryRequest } from 'src/app/types/model';
import { WritingAddComponent } from '../writing-add/writing-add.component';


@Component({
  selector: 'app-array-writings',
  templateUrl: './array-writings.component.html',
  styleUrls: ['./array-writings.component.css'],
})
export class ArrayWritingsComponent {
  public showForm: boolean = false;
  public entries: TEntryResponse[];
  private _account: TAccountResponse;
  public monthYearMap: {[year: number]: number[]};
  public year: number = new Date().getFullYear();
  public month: number = new Date().getMonth();

  public getDateSelection(event: {year: number, month: number}) {
    this.year = event.year;
    this.month = event.month;
    this.getEntries(this.account);
  }


  @Input()
  public set account(account: TAccountResponse) {
    this.getEntries(account);
  }

  private getEntries(account: TAccountResponse) {
    if (account) {
      this._account = account;
      this._accountService.getAccountWritings(account.id, this.year, this.month + 1).subscribe(
        (data) => {
          this.entries = data;
          this.sortEntries();
        },
        (err: HttpErrorResponse) => this._toastService.show({ text: err.message })
      );
    }
  }

  public get account(): TAccountResponse {
    return this._account;
  }

  constructor(
    private _accountService: AccountService,
    private _entryService: EntryService, 
    private _toastService: NotificationService,
    private _dialogService: DialogService) { }

  private sortEntries() {
    this.entries.sort((a, b) => a.date < b.date ? 1 : (a.date > b.date ? -1 : 0));
  }

  public async onAddEntry() {
    const res: TEntryRequest = await this._dialogService.open(WritingAddComponent, {
      account: this._account.name
    });
    res.accountId = this._account.id;

    this._entryService.addEntry(res).subscribe(
      (entry: TEntryResponse) => {
        this._toastService.show({text: 'Ajouté'}, false);
        this._account.total -= entry.amount;
        this.entries.push(entry);
        this.sortEntries();
      },
      (err: HttpErrorResponse) => this._toastService.show({text: err.message})
    )
  }




}
