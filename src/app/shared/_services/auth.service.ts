import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { APP_CONFIG, AppConfig } from '../../config';
import { AccessToken } from '../_models/token.model';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  login(email: string, password: string): Observable<AccessToken> {
    return this.http.post<AccessToken>(`${this.config.baseUrl}/api/v1/user/login`, { email: email, password: password })
      .map((accessToken: AccessToken) => {
        if (accessToken) {
          console.log('accessToken', accessToken);
          localStorage.setItem('accessToken', JSON.stringify(accessToken));
        }
        return accessToken;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getUserToken() {
    const accessToken = localStorage.getItem('accessToken');
    return accessToken ? JSON.parse(accessToken).userId : null;
  }
}
