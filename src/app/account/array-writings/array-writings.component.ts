import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AccountService } from 'src/app/shared/services/account.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { EntryService } from 'src/app/shared/services/entry.service';
import { NotificationService } from 'src/app/notification/services/notification.service';
import { TabsService } from 'src/app/shared/services/tabs.service';
import { TEntryResponse, TAccountResponse, TEntryRequest } from 'src/app/types/model';
import { WritingAddComponent } from '../writing-add/writing-add.component';


@Component({
  selector: 'app-array-writings',
  templateUrl: './array-writings.component.html',
  styleUrls: ['./array-writings.component.less'],
})
export class ArrayWritingsComponent {
  public showForm: boolean = false;
  public entries: TEntryResponse[];
  private _account: TAccountResponse;
  public monthYearMap: {[year: number]: number[]};
  public year: number = new Date().getFullYear();
  public month: number = new Date().getMonth();

  displayedColumns: string[] = ['title', 'date', 'amount'];
  dataSource: MatTableDataSource<TEntryResponse>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

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
          this.dataSource = new MatTableDataSource(this.entries);
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
    const req: TEntryRequest = await this._dialogService.open(WritingAddComponent, {
      account: this._account
    });
    req.accountId = this._account.id;
    this._entryService.addEntry(req).subscribe(
      (entry: TEntryResponse) => {
        this._toastService.show({text: 'Ajouté'});
        this._account.total -= entry.amount;
        this.entries.push(entry);
        this.sortEntries();
      },
      (err: HttpErrorResponse) => this._toastService.show({text: err.message})
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




}
