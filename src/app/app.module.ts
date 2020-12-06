import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AccountModule } from './account/account.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth.interceptor';
import { ConnectionModule } from './connection/connection.module';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';
import { SpacesModule } from './spaces/spaces.module';
import { TypesModule } from './types/types.module';

import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';







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
    HttpClientModule,
    ...customModules,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


