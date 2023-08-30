import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { AulaoComponent } from './aulao.component';
import { ListasComponent } from './listas/listas.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';


@NgModule({
  declarations: [ AulaoComponent, ListasComponent ],
  imports: [
    BrowserModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CheckboxModule,
    InputTextModule,
    RadioButtonModule,
    CalendarModule
    
    

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [ AulaoComponent, ListasComponent]
})
export class AulaoModule { }