import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ServiceService } from './service/service.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ]
})
export class RequestModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: RequestModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ServiceService, multi: true }
      ]
    };
  }
 }

