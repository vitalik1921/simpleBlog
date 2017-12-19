import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { ArticlesModule } from './articles/articles.module';
import { AuthModule } from './auth/auth.module';
import { APP_CONFIG, CONFIG } from './config';
import { FooterComponent } from './shared/_components/footer/footer.component';
import { HeaderComponent } from './shared/_components/header/header.component';
import { AuthInterceptor } from './shared/_services/auth.interceptor';
import { AuthService } from './shared/_services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: 'archive/1', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    AngularSvgIconModule,
    AuthModule,
    ArticlesModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: APP_CONFIG,
      useValue: CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
