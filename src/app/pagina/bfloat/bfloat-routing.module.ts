import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BfloatPage } from './bfloat.page';

const routes: Routes = [
  {
    path: '',
    component: BfloatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BfloatPageRoutingModule {}
