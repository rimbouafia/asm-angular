import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']

})
export class InscriptionComponent implements OnInit {

  paymentOptions: any[];
  selectedDate:any;
  selectedSexe:any;
  valSlider = 50;
  valColor = '#424242';
  valSwitch: boolean;
  selectedVille:any;
  selectedFaculte:any;
  selectedSpicialte:any;
  valRadio: string; 
  valCheck: string[] = [];
  uploadedFiles: any[] = [];


    VilleItems = [
        { name: 'Tunis', code: 'Option 1' },
        { name: 'Sfax', code: 'Option 2' },
        { name: 'Sousse', code: 'Option 3' },
        { name: 'Monastir', code: 'Option 4' },
        { name: 'Mahdia', code: 'Option 5' },
        { name: 'Kairouan', code: 'Option 6' },
        { name: 'Kassrine', code: 'Option 7' }
        
    ];
    FaculteItems = [
      { name: 'ISGIS', code: 'Option 1' },
      { name: 'ISIMS', code: 'Option 2' },
      { name: 'INETCOM', code: 'Option 3' },
      { name: 'FSEG', code: 'Option 4' },
      { name: 'ISG', code: 'Option 5' }      
  ];
  specialiteItems = [
    { name: 'informatique de gestion', code: 'Option 1' },
    { name: 'Big Data', code: 'Option 2' },
    { name: 'Réseaux Informatique', code: 'Option 3' },
    { name: 'Intelligence Artificielle', code: 'Option 4' },
    { name: ' Informatique', code: 'Option 5' },
    { name: '  Systéme Embarqué', code: 'Option 6' }
    
    
];

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onUpload(event) {
    for (const file of event.files) {
        this.uploadedFiles.push(file);
    }   
   
    

  }
  
}
