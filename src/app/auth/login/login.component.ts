import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Component, OnInit, Output } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { AccessToken } from '../../shared/_models/token.model';
import { AuthService } from '../../shared/_services/auth.service';
import { AlertsService } from '../../shared/_services/alerts.service';
import { AlertTypes } from '../../shared/interfaces';

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
    private alertService: AlertsService,
    private router: Router
  ) { }

  submit() {
    this.loginObserve = this.authService.login(this.email, this.password)
      .subscribe((token: AccessToken) => {
        this.router.navigate(['article', '1']);
      }, (error: HttpErrorResponse) => {
        this.alertService.addAlert(AlertTypes.danger, error.message);
      });
  }

  ngOnDestroy() {
    if (this.loginObserve) {
      this.loginObserve.unsubscribe();
    }
  }
}
