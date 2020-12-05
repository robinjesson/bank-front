import { HttpErrorResponse } from '@angular/common/http';
import { Component, Output, Input, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/shared/services/account.service';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { TEntryResponse } from 'src/app/types/model';


@Component({
  selector: 'app-date-selector',
  templateUrl: './date-selector.component.html',
  styleUrls: ['./date-selector.component.css']
})
export class DateSelectorComponent {

  @Output() dateSelection = new EventEmitter<{year: number, month: number}>();


  public year: number = new Date().getFullYear();
  public month: number = new Date().getMonth();

  constructor(
    private _toastService: NotificationService,
    private _accountService: AccountService) { }

  @Input() public set account(account) {
    if (account) {
      this._accountService.getAccountWritings(account.id).subscribe(
        (data) => {
          this.monthYearMap = DateSelectorComponent.createYearMonthMap(data);
        },
        (err: HttpErrorResponse) => this._toastService.show({ text: err.message })
      );
    }
  }; 

  public set monthYearMap(monthYearMap: {[year: number]: number[]}) {
    this._monthYearMap = monthYearMap;
    if(this.monthYearMap && Object.keys(this.monthYearMap).length > 0) {
      this.selectedYear = +Object.keys(this.monthYearMap)[0];
    }
  };

  public get monthYearMap() {
    return this._monthYearMap;
  }
  private _monthYearMap: {[year: number]: number[]};

  public selectedYear: number;

  onYearClick(year: number) {
    this.selectedYear = year;
  }

  private static createYearMonthMap(entries: TEntryResponse[]) : {[year: number]: number[]} {
    let years: {[year: number]: number[]} = {};
    for(let entry of entries) {
      const date = new Date(entry.date);
      if(!years[date.getFullYear()]) {
        years[date.getFullYear()] = [];
      }
      if(years[date.getFullYear()].indexOf(date.getMonth())<0) {
        years[date.getFullYear()].push(date.getMonth());
      }
    }

    for(let year in years) {
      years[year].sort((a,b) => b - a);
    }

    return years;
  }

  emitSelection(year: number, month: number) {
    this.year = year;
    this.month = month;
    this.dateSelection.emit({year: year, month: month})
  }



}
