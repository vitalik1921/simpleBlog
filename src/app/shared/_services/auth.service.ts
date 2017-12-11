import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(email: string, password: string) {
    this.http.post('/api/v1/login', JSON.stringify({ email: email, password: password }))
      .map((res: Response) => {
        const user = res.json();
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
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
