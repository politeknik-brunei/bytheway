import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WatertaxiFaresPage } from './watertaxi-fares.page';

const routes: Routes = [
  {
    path: '',
    component: WatertaxiFaresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WatertaxiFaresPage]
})
export class WatertaxiFaresPageModule {}
