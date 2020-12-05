import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MenuToolsComponent } from './menu-tools/menu-tools.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    MenuComponent,
    MenuToolsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MenuComponent,
    MenuToolsComponent
  ]
})
export class MenuModule { }
