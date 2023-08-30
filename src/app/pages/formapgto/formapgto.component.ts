import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formapgto',
  templateUrl: './formapgto.component.html',
  styleUrls: ['./formapgto.component.css']
})
export class FormapgtoComponent {
  onSubmit() { 
    console.log(this.form.value);
  }

states = [ 
  {name: 'gympass', abbrev: 'GYMPASS'},
  {name: 'card', abbrev: 'Cartão de Credito'},
];

form = new FormGroup({
  state: new FormControl(this.states[2]),
});
}
