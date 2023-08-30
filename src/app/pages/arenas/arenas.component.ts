import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.css']
})
export class ArenasComponent {

  onSubmit() { 
      console.log(this.form.value);
    }

  states = [ 
    {name: 'rvl', abbrev: 'Riplay Villa Lobos'},
    {name: 'radi', abbrev: 'Riplay Alto do Ipiranga'},
  ];

  form = new FormGroup({
    state: new FormControl(this.states[2]),
  });
}
