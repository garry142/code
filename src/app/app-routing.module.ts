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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
