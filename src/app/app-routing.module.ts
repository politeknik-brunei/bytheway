import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },  { path: 'splashscreen-page', loadChildren: './splashscreen-page/splashscreen-page.module#SplashscreenPagePageModule' },
  { path: 'mainloginsignup-page', loadChildren: './mainloginsignup-page/mainloginsignup-page.module#MainloginsignupPagePageModule' },
  { path: 'signup-page', loadChildren: './signup-page/signup-page.module#SignupPagePageModule' },
  { path: 'login-page', loadChildren: './login-page/login-page.module#LoginPagePageModule' },
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule' },
  { path: 'customercare', loadChildren: './customercare/customercare.module#CustomercarePageModule' },
  { path: 'userprofile-page', loadChildren: './userprofile-page/userprofile-page.module#UserprofilePagePageModule' },
  { path: 'bus-page', loadChildren: './bus-page/bus-page.module#BusPagePageModule' },
  { path: 'bus-geolocation', loadChildren: './bus-geolocation/bus-geolocation.module#BusGeolocationPageModule' },
  { path: 'bus-schedule', loadChildren: './bus-schedule/bus-schedule.module#BusSchedulePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
