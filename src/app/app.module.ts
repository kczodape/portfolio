import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';

const module = [MatSidenavModule, MatIconModule, MatButtonModule]
@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    PortfolioComponent,
    ServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
