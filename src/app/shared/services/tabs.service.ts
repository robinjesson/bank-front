import { ComponentType } from '@angular/cdk/portal';
import { Component, Injectable } from '@angular/core';
import { EFormType } from 'src/app/types/enums';
import { TId, TTab } from 'src/app/types/types';
import { DialogService } from './dialog.service';
import { IdService } from './id.service';

@Injectable({
  providedIn: 'root'
})
export class TabsService {

  private _tabs: TTab<any>[]= [];
  private _count: number = 1;

  constructor(private _dialogService: DialogService, private _idService: IdService) { }

  public get tabs() {
    return this._tabs;
  }

  public addTab(name: string, component: ComponentType<unknown>, content?: any): TId {
    const id: TId = this._idService.nextId;
    this._tabs.push({name: name, id: id, content: content, component: component, index: this._count++ });
    return id;
  }

  public updateContentToTab(idTab: TId, content: any) {
    this._tabs.find(t => t.id === idTab).content = content;
  }

  public closeTab(tab: TTab<unknown>) {
    this._tabs = this._tabs.filter(t => t.id !== tab.id);
    this._idService.removeId(tab.id);
  }

  public async openTab(tab: TTab<unknown>) { 
    await this._dialogService.open(tab.component, {idTab: tab.id, ...<any>tab.content});
  }
}
