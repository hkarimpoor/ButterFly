import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { TuitionComponent } from './tuition/tuition.component';
import { MealmenuComponent } from './mealmenu/mealmenu.component';
import { Mealmenu2Component } from './mealmenu2/mealmenu2.component';
import { PolicyComponent } from './policy/policy.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IranianServicesComponent } from './iranian-services/iranian-services.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AboutComponent,
    HomeComponent,
    SchedulesComponent,
    TuitionComponent,
    MealmenuComponent,
    Mealmenu2Component,
    PolicyComponent,
    GalleryComponent,
    IranianServicesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
