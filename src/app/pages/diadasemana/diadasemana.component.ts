import { Component } from '@angular/core';

@Component({
  selector: 'app-selectday',
  templateUrl: './diadasemana.component.html',
  styleUrls: ['./diadasemana.component.css']
})

export class DiadasemanaComponent {

  selectedDay: any[] = [];

  days: any[] = [
    { name: 'Segunda-Feira', key: 'segunda' },
    { name: 'Terça-Feira', key: 'terça' },
    { name: 'Quarta-Feira', key: 'quarta' },
    { name: 'Quinta-Feira', key: 'quinta' },
    { name: 'Sexta-Feira', key: 'sexta' },
    { name: 'Sábado', key: 'sabado' },
    { name: 'Domingo', key: 'domingo' },
  ];

}
