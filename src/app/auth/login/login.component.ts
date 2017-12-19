import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AccessToken } from '../../shared/_models/token.model';
import { AuthService } from '../../shared/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {
  private email: string;
  private password: string;
  private loginObserve: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  submit() {
    this.loginObserve = this.authService.login(this.email, this.password)
      .subscribe((token: AccessToken) => {
        this.router.navigate(['']);
      }, (error: HttpErrorResponse) => {
        this.router.navigate(['article', '1']);
      });
  }

  ngOnDestroy() {
    if (this.loginObserve) {
      this.loginObserve.unsubscribe();
    }
  }
}
