import { Injectable, EventEmitter } from '@angular/core';
import { IAlert, AlertTypes } from '../interfaces';

@Injectable()
export class AlertsService {
  public alertMessage = new EventEmitter();

  addAlert(type: AlertTypes, message: string) {
    this.alertMessage.emit({ type: type, message: message});
  }
}
