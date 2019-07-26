import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TaxiCardpinPage } from './taxi-cardpin.page';

const routes: Routes = [
  {
    path: '',
    component: TaxiCardpinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TaxiCardpinPage]
})
export class TaxiCardpinPageModule {}
