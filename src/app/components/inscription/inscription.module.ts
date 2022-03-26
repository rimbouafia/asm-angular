import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { ListeInscriptionComponent } from './liste-inscription/liste-inscription.component';





@NgModule({
  declarations: [
    InscriptionComponent,
    ListeInscriptionComponent
  ],
  imports: [
    CommonModule, 
    RadioButtonModule,
    CalendarModule,
    DropdownModule,
    CheckboxModule,
    FileUploadModule,






  ]
})
export class InscriptionModule { }
