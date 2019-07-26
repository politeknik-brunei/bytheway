import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusGeolocationPage } from './bus-geolocation.page';

const routes: Routes = [
  {
    path: '',
    component: BusGeolocationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusGeolocationPage]
})
export class BusGeolocationPageModule {}
