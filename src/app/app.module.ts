import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { CountComponent } from './components/count/count.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CheckComponent } from './components/check/check.component';
import { CheckserviceModule } from './components/checkservice/checkservice.module';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsksComponent } from './components/asks/asks.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { CopyrightComponent } from './components/copyright/copyright.component';
import { PaieComponent } from './components/paie/paie/paie.component';
import { AvantagesComponent } from './components/avantages/avantages.component';
import { DegitalComponent } from './components/degital/degital.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    CountComponent,
    ClientsComponent,
    CheckComponent,
    TestimonialsComponent,
    ContactComponent,
    FooterComponent,
    AsksComponent,
    HeaderComponent,
    BlogComponent,
    HomeComponent,
    CopyrightComponent,
    PaieComponent,
    AvantagesComponent,
    DegitalComponent,
    NavComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckserviceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
