import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'splashscreen-page', loadChildren: './splashscreen-page/splashscreen-page.module#SplashscreenPagePageModule' },
  { path: 'mainloginsignup-page', loadChildren: './mainloginsignup-page/mainloginsignup-page.module#MainloginsignupPagePageModule' },
  { path: 'signup-page', loadChildren: './signup-page/signup-page.module#SignupPagePageModule' },
  { path: 'login-page', loadChildren: './login-page/login-page.module#LoginPagePageModule' },
  { path: 'homepage', loadChildren: './homepage/homepage.module#HomepagePageModule' },
  { path: 'customercare', loadChildren: './customercare/customercare.module#CustomercarePageModule' },
  { path: 'userprofile-page', loadChildren: './userprofile-page/userprofile-page.module#UserprofilePagePageModule' },
  { path: 'bus-page', loadChildren: './bus-page/bus-page.module#BusPagePageModule' },
  { path: 'bus-geolocation', loadChildren: './bus-geolocation/bus-geolocation.module#BusGeolocationPageModule' },
  { path: 'bus-schedule', loadChildren: './bus-schedule/bus-schedule.module#BusSchedulePageModule' },
  { path: 'bus-fares', loadChildren: './bus-fares/bus-fares.module#BusFaresPageModule' },
  { path: 'bus-qrcode', loadChildren: './bus-qrcode/bus-qrcode.module#BusQrcodePageModule' },
  { path: 'bus-cardpin', loadChildren: './bus-cardpin/bus-cardpin.module#BusCardpinPageModule' },
  { path: 'taxi-page', loadChildren: './taxi-page/taxi-page.module#TaxiPagePageModule' },
  { path: 'taxi-seats', loadChildren: './taxi-seats/taxi-seats.module#TaxiSeatsPageModule' },
  { path: 'taxi-driverdetails', loadChildren: './taxi-driverdetails/taxi-driverdetails.module#TaxiDriverdetailsPageModule' },
  { path: 'taxi-geolocation', loadChildren: './taxi-geolocation/taxi-geolocation.module#TaxiGeolocationPageModule' },
  { path: 'taxi-fares', loadChildren: './taxi-fares/taxi-fares.module#TaxiFaresPageModule' },
  { path: 'taxi-qrcode', loadChildren: './taxi-qrcode/taxi-qrcode.module#TaxiQrcodePageModule' },
  { path: 'taxi-cardpin', loadChildren: './taxi-cardpin/taxi-cardpin.module#TaxiCardpinPageModule' },
  { path: 'watertaxi-page', loadChildren: './watertaxi-page/watertaxi-page.module#WatertaxiPagePageModule' },
  { path: 'watertaxi-geolocation', loadChildren: './watertaxi-geolocation/watertaxi-geolocation.module#WatertaxiGeolocationPageModule' },
  { path: 'watertaxi-fares', loadChildren: './watertaxi-fares/watertaxi-fares.module#WatertaxiFaresPageModule' },
  { path: 'watertaxi-qrcode', loadChildren: './watertaxi-qrcode/watertaxi-qrcode.module#WatertaxiQrcodePageModule' },
  { path: 'watertaxi-cardpin', loadChildren: './watertaxi-cardpin/watertaxi-cardpin.module#WatertaxiCardpinPageModule' },
  { path: 'paymentsetting', loadChildren: './paymentsetting/paymentsetting.module#PaymentsettingPageModule' },
  { path: 'bus-map', loadChildren: './bus-map/bus-map.module#BusMapPageModule' },
  { path: 'driverhome', loadChildren: './driverhome/driverhome.module#DriverhomePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
