import { Component } from '@angular/core';
import { IAlert } from './shared/interfaces';
import { AlertsService } from './shared/_services/alerts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public alerts: Array<IAlert> = [];

  constructor(private alertsService: AlertsService) {
    this.alertsService.alertMessage.subscribe((alert) => {
      this.alerts.push(alert);
    });
  }

  private closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
