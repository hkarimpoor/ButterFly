import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [ 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path : 'home', component : HomeComponent},
  { path : 'about', component : AboutComponent},
  { path : 'schedules', component : SchedulesComponent},
  { path : 'tuition', component : TuitionComponent},
  { path : 'mealmenu', component : MealmenuComponent},
  { path : 'mealmenu2', component : Mealmenu2Component},
  { path : 'policy', component : PolicyComponent},
  { path : 'gallery', component : GalleryComponent},
  { path : 'iranianservices', component : IranianServicesComponent},
  { path : 'contact', component : ContactComponent},
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
