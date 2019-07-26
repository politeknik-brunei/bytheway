import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WatertaxiCardpinPage } from './watertaxi-cardpin.page';

const routes: Routes = [
  {
    path: '',
    component: WatertaxiCardpinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WatertaxiCardpinPage]
})
export class WatertaxiCardpinPageModule {}
