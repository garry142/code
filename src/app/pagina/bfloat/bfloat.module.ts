import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BfloatPageRoutingModule } from './bfloat-routing.module';

import { BfloatPage } from './bfloat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BfloatPageRoutingModule
  ],
  declarations: [BfloatPage]
})
export class BfloatPageModule {}
