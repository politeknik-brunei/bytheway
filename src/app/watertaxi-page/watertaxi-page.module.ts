import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WatertaxiPagePage } from './watertaxi-page.page';

const routes: Routes = [
  {
    path: '',
    component: WatertaxiPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WatertaxiPagePage]
})
export class WatertaxiPagePageModule {}
