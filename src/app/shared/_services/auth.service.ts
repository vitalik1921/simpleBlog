import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AccessToken } from './../_models/token.model';


@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AccessToken> {
    return this.http.post<AccessToken>('/api/v1/login', { email: email, password: password })
      .map((accessToken: AccessToken) => {
        if (accessToken && accessToken.token) {
          localStorage.setItem('currentUser', JSON.stringify(AccessToken));
        }
        return accessToken;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

  getUserToken() {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user).token : null;
  }
}
