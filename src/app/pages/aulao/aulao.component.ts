import { Component } from '@angular/core';

@Component({
  selector: 'app-aulao',
  templateUrl: './aulao.component.html',
  styleUrls: ['./aulao.component.css']
})
export class AulaoComponent {

  listaSextaVisible: boolean = false;
  headerSexta: string = "Preencha seus Dados"

  showListaSexta() { 
    this.listaSextaVisible = true;
  }

  listaSabadoVisible: boolean = false;
  headerSabado: string = "Preencha seus Dados"

  showListaSabado() { 
    this.listaSabadoVisible = true;
  }

}
