import { InjectionToken } from '@angular/core';
import { isDevMode } from '@angular/core';
import { AppConfig } from './shared/interfaces';

const appConfig: AppConfig = {
  pageLimit: 5,
  baseUrl: ''
};

const devAppConfig: AppConfig = {
  pageLimit: 5,
  baseUrl: '//localhost:3000'
  // baseUrl: '//5a1dcbe610a6590012095c13.mockapi.io'
};

const CONFIG = isDevMode ? devAppConfig : appConfig;
const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export { AppConfig, APP_CONFIG, CONFIG };
