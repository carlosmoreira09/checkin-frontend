import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  
   form = new FormGroup({
          date: new FormControl<Date | null>(null),
          text: new FormControl<string | null>(null),
          pgto: new FormControl<string | null>(null),
      });

      selectedDay: any[] = [];

      days: any[] = [
        { name: 'GYMPASS', key: 'gympass' },
        { name: 'Cartão', key: 'cartao' },

      ];
  onSubmit() { 
    console.log(this.form.value.date);
  }
}
