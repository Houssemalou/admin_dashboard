import { Component } from '@angular/core';

@Component({
  selector: 'app-allergens-modal',
  templateUrl: './allergens-modal.component.html',
  styleUrls: ['./allergens-modal.component.css']
})
export class AllergensModalComponent {
  cereals = [
    { id: 'barley', name: 'barley', checked: false },
    { id: 'oats', name: 'oats', checked: false },
    { id: 'spelt', name: 'spelt', checked: false },
    { id: 'kamut', name: 'kamut', checked: false },
    { id: 'rye', name: 'rye', checked: false },
    { id: 'wheat', name: 'wheat', checked: false }
  ];

  nuts = [
    { id: 'almonds', name: 'almonds', checked: false },
    { id: 'cashews', name: 'cashews', checked: false },
    { id: 'macadamia', name: 'macadamia', checked: false },
    { id: 'pistachio', name: 'pistachio nuts', checked: false },
    { id: 'walnuts', name: 'walnuts', checked: false },
    { id: 'brazilNuts', name: 'Brazil nuts', checked: false },
    { id: 'hazelnuts', name: 'hazelnuts', checked: false },
    { id: 'pecanNuts', name: 'pecan nuts', checked: false },
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
    { id: 'molluscs', name: 'Contains molluscs and products thereof', checked: false }
  ];

  noAllergens = false;

  saveChanges() {
    // Logic to save the selected allergens
    console.log('Cereals:', this.cereals);
    console.log('Nuts:', this.nuts);
    console.log('Further Allergens:', this.furtherAllergens);
    console.log('No Allergens:', this.noAllergens);
  }
}
