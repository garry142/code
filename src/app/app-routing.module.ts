import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pagina/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alerta',
    loadChildren: () => import('./pagina/alerta/alerta.module').then( m => m.AlertaPageModule)
  },
  {
    path: 'accion',
    loadChildren: () => import('./pagina/accion/accion.module').then( m => m.AccionPageModule)
  },
  {
    path: 'tarjeta',
    loadChildren: () => import('./pagina/tarjeta/tarjeta.module').then( m => m.TarjetaPageModule)
  },
  {
    path: 'caja',
    loadChildren: () => import('./pagina/caja/caja.module').then( m => m.CajaPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pagina/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'chip',
    loadChildren: () => import('./pagina/chip/chip.module').then( m => m.ChipPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pagina/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'bfloat',
    loadChildren: () => import('./pagina/bfloat/bfloat.module').then( m => m.BfloatPageModule)
  },
  {
    path: 'insignia',
    loadChildren: () => import('./pagina/insignia/insignia.module').then( m => m.InsigniaPageModule)
  },
  {
    path: 'inter-de-usuario',
    loadChildren: () => import('./pagina/inter-de-usuario/inter-de-usuario.module').then( m => m.InterDeUsuarioPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./pagina/calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
