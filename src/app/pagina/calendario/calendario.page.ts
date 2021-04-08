import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
  
export class CalendarioPage implements OnInit {
  dateMulti: string[];
  type: 'string';
  
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  constructor() { }

  ngOnInit() {
  }

}
