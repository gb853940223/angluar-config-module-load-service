import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConfigService } from '@ngx-config/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService implements HttpInterceptor {

  constructor(
    private configService: ConfigService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let url = '';
    if (req.url.includes('.json')) {
      url = req.url;
    } else {
      if (req.url.includes('http://') || req.url.includes('https://')) {
        url = req.url;
      } else {
        url = this.configService.getSettings('commomUrl') + req.url;
      }
    }
    const secureReq = req.clone({
      url: req.url,
      body: req.body,
      withCredentials: true
    });
    return next.handle(secureReq);
  }
}
