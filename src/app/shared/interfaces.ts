enum AlertTypes {
  success = 'success',
  warning = 'warning',
  danger = 'danger'
}

interface IAlert {
  type: AlertTypes;
  message: string;
}

interface AppConfig {
  pageLimit: number;
  baseUrl: string;
}

export { AlertTypes, IAlert, AppConfig };

