import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http/src/interceptor';
import { HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http/';
import { Injector } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    public injector: Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    const token = authService.getUserToken();
    let resultReq = req;
    if (token) {
      resultReq = req.clone(
        { headers: new HttpHeaders().set('Authentication', `Bearer ${token}`) }
      );
    }
    return next.handle(resultReq);
  }
}
