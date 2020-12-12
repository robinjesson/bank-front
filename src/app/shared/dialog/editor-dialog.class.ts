import { Directive } from '@angular/core';
import { Direct } from 'protractor/built/driverProviders';
import { TId } from 'src/app/types/types';
import { TabsService } from '../services/tabs.service';

@Directive()
export abstract class EditorDialog {
    protected abstract createSave(): Object;

    public constructor(
        private _tabsService: TabsService) {
            
        }

    public onSave(title: string, component: any, idTab?: TId) {
        if(idTab != null && idTab != undefined ) {
            this._tabsService.updateContentToTab(idTab, this.createSave());
        }
        else {
            this._tabsService.addTab(title, component, this.createSave());
        }
    }
}