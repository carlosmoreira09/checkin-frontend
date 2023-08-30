import { Component, } from '@angular/core';

@Component({
  selector: "app-main",
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  arenaVisible: boolean = false;
  headerArena: string = "Escolha a Arena"
  showArena() { 
    this.arenaVisible = true;
  }

  selectDayVisible: boolean = false;
  headerSelectDay: string = "Escolha o(s) dia(s) da aula(s)"
  showSelectDay() { 
    this.selectDayVisible = true;
  }

  selectPgtoVisible: boolean = false;
  headerSelectPgto: string = "Escolha Forma de Pagamento"
  showPgto() { 
    this.selectPgtoVisible = true;
  }

}
