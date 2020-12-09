import { ComponentType } from '@angular/cdk/portal';
import { Component, Injectable } from '@angular/core';
import { EFormType } from 'src/app/types/enums';
import { TTab } from 'src/app/types/types';
import { DialogService } from './dialog.service';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private _tabs: TTab<any>[]= [];

  constructor(private _dialogService: DialogService) { }

  public get tabs() {
    return this._tabs;
  }

  public addTab(name: string, coomponent: ComponentType<unknown>, content?: {data,form}) {
    this._tabs.push({name: name, creation: new Date(), content: content, component: coomponent});
  }

  public updateContentToTab(tab: TTab<unknown>, content: any) {
    const id = this._tabs.findIndex(t => t.creation !== tab.creation);
    this._tabs[id].content = content;
  }

  public removeTab(tab: TTab<unknown>) {
    this._tabs = this._tabs.filter(t => t.creation !== tab.creation || t.name !== tab.name);
  }

  public async openTab(tab: TTab<unknown>) { 
    await this._dialogService.open(tab.component, {});
  }
}
