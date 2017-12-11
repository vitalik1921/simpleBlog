import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AuthModule } from './auth/auth.module';
import { AuthService } from './shared/_services/auth.service';
import { ArticlesModule } from './articles/articles.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/_components/header/header.component';
import { FooterComponent } from './shared/_components/footer/footer.component';
import { AuthInterceptorService } from './shared/_services/auth-interceptor.service';


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
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
