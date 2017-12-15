import { InjectionToken } from '@angular/core';
import { isDevMode } from '@angular/core';

interface AppConfig {
  pageLimit: number;
  baseUrl: string;
}

const appConfig: AppConfig = {
  pageLimit: 5,
  baseUrl: ''
};

const devAppConfig: AppConfig = {
  pageLimit: 5,
  baseUrl: '//localhost:3000'
};

const CONFIG = isDevMode ? devAppConfig : appConfig;
const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export { AppConfig, APP_CONFIG, CONFIG };
