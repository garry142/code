import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InterDeUsuarioPage } from './inter-de-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: InterDeUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterDeUsuarioPageRoutingModule {}
