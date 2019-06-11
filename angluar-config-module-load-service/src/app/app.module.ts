import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RequestModule } from './core/request/request.module';

import { ConfigModule, ConfigLoader } from '@ngx-config/core';
import { ConfigHttpLoader } from '@ngx-config/http-loader';


export function configFactory(http: HttpClient): ConfigLoader {
  return new ConfigHttpLoader(http, './assets/config/config.json');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RequestModule.forRoot(),
    ConfigModule.forRoot(
      {
        provide: ConfigLoader,
        useFactory: (configFactory),
        deps: [HttpClient]
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
