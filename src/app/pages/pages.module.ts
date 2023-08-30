import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';

import { ArenasComponent } from './arenas/arenas.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { DiadasemanaComponent } from './diadasemana/diadasemana.component';
import { FormapgtoComponent } from './formapgto/formapgto.component';

@NgModule({
  declarations: [
     ArenasComponent,
     LoginComponent,
     MainComponent,
     DiadasemanaComponent,
     FormapgtoComponent,
  ],
  imports: [
    BrowserModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CheckboxModule,
    

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  exports: [ ArenasComponent,LoginComponent, MainComponent, DiadasemanaComponent]
})
export class PagesModule { }