
export interface SignInModel {

 id:number|null;
 firstname:string;
 lastname:string;
email: string;
MotDePasse: string;
phonenumber:number;
creationDate:Date|null;
roles?: Role[];

}
interface LoginResponse {

  token: string;
}
export interface Role {
  
 id:number|null;
 name:string;
 user?: SignInModel[];
}
export interface Category {
  id: number;
  name: string;
  description: string;
  supplements: Supplement[];
  foodItems: FoodProduct[];
}
export interface FoodProduct {
  id: number;
  name: string;
  description: string;
  delivery_price: number;
  pickup_price: number;
  category?: Category;
  itemtype?: Itemtype;
  allergens?: Ingredient[];
}
export interface Supplement {
  id: number;
  name: string;
  price: number;
  category?: Category;
}
export interface Itemtype {
  id: number;
  name: string;
  description: string;
}
export interface Ingredient {
  id: number;
  name: string;
  description: string;
}


  