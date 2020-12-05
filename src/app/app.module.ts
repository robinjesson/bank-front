import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { ConnectionModule } from './connection/connection.module';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';
import { SpacesModule } from './spaces/spaces.module';
import { TypesModule } from './types/types.module';







const customModules = [
  AccountModule,
  ConnectionModule,
  MenuModule,
  SharedModule,
  SpacesModule,
  TypesModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    ...customModules
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
