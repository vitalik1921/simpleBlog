import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AuthModule } from './auth/auth.module';
import { ArticlesModule } from './articles/articles.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/_components/header/header.component';
import { FooterComponent } from './shared/_components/footer/footer.component';


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
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    AngularSvgIconModule,
    AuthModule,
    ArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
