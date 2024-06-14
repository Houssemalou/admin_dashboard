import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-allergens-modal',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './allergens-modal.component.html',
  styleUrls: ['./allergens-modal.component.css']
})
export class AllergensModalComponent {
  cereals = [
    { id: 'barley', name: 'Barley', checked: false },
    { id: 'oats', name: 'Oats', checked: false },
    { id: 'spelt', name: 'Spelt', checked: false },
    { id: 'kamut', name: 'Kamut', checked: false },
    { id: 'rye', name: 'Rye', checked: false },
    { id: 'wheat', name: 'Wheat', checked: false }
  ];

  nuts = [
    { id: 'almonds', name: 'Almonds', checked: false },
    { id: 'cashews', name: 'Cashews', checked: false },
    { id: 'macadamia', name: 'Macadamia', checked: false },
    { id: 'pistachio', name: 'Pistachio nuts', checked: false },
    { id: 'walnuts', name: 'Walnuts', checked: false },
    { id: 'brazilNuts', name: 'Brazil nuts', checked: false },
    { id: 'hazelnuts', name: 'Hazelnuts', checked: false },
    { id: 'pecanNuts', name: 'Pecan nuts', checked: false },
    { id: 'queenslandNuts', name: 'Queensland nuts', checked: false }
  ];

  furtherAllergens = [
    { id: 'crustaceans', name: 'Contains crustaceans and products thereof', checked: false },
    { id: 'eggs', name: 'Contains eggs and products thereof', checked: false },
    { id: 'fish', name: 'Contains fish and products thereof', checked: false },
    { id: 'peanuts', name: 'Contains peanuts and products thereof', checked: false },
    { id: 'soybeans', name: 'Contains soybeans and products thereof', checked: false },
    { id: 'milk', name: 'Contains milk and products thereof (including lactose)', checked: false },
    { id: 'celery', name: 'Contains celery and products thereof', checked: false },
    { id: 'mustard', name: 'Contains mustard and products thereof', checked: false },
    { id: 'sesameSeeds', name: 'Contains sesame seeds and products thereof', checked: false },
    { id: 'sulphites', name: 'Contains sulphur dioxide and sulphites', checked: false },
    { id: 'lupin', name: 'Contains lupin and products thereof', checked: false },
    { id: 'molluscs', name: 'Contains molluscs and products thereof', checked: true }
  ];

  noAllergens = false;
  selectedAllergens: string[]=["bhnj"];

  constructor() {}

  saveChanges(): void {
 
      this.selectedAllergens = [];
    
   
      this.cereals.forEach(cereal => {
        if (cereal.checked) {
          this.selectedAllergens.push(cereal.name);
        }
      });
    
  
      this.nuts.forEach(nut => {
        if (nut.checked) {
          this.selectedAllergens.push(nut.name);
        }
      });
    
  
      this.furtherAllergens.forEach(allergen => {
        if (allergen.checked) {
          this.selectedAllergens.push(allergen.name);
        }
      });
    
     
      if (this.noAllergens) {
        this.selectedAllergens.push("No allergens");
      }
    
  
      console.log(this.selectedAllergens);
   
    
 

  }}

