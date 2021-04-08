import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InterDeUsuarioPageRoutingModule } from './inter-de-usuario-routing.module';

import { InterDeUsuarioPage } from './inter-de-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InterDeUsuarioPageRoutingModule
  ],
  declarations: [InterDeUsuarioPage]
})
export class InterDeUsuarioPageModule {}
