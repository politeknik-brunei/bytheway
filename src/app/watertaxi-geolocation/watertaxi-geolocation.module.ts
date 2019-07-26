import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WatertaxiGeolocationPage } from './watertaxi-geolocation.page';

const routes: Routes = [
  {
    path: '',
    component: WatertaxiGeolocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WatertaxiGeolocationPage]
})
export class WatertaxiGeolocationPageModule {}
