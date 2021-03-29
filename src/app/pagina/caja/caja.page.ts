import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.page.html',
  styleUrls: ['./caja.page.scss'],
})
export class CajaPage implements OnInit {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
    { val: 'Mushroom', isChecked: false },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
    { val: 'Mushroom', isChecked: false },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false },
  ];

  constructor() {}

  ngOnInit() {
  }

}

 