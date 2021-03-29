import { Component, OnInit } from '@angular/core';

interface componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
componentes: componente[]=[

         {
           icon:"alert-circle",
           name: "alerta",
           redirecTo:"/alerta"
         },
         {
          icon:"cog-outline",
          name: "accion",
          redirecTo:"/accion"
        },
     
]
  constructor() { }

  ngOnInit() {
  }

}
