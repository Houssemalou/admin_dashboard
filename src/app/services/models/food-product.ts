
export interface FoodProduct {
  allergens?: 'barley'|'oats' |'spelt'|'kamut' |'rye'|'wheat'|'almonds' |'cashews' |'macadamia' |'pistachio nuts' |'walnuts' |'Brazil nuts'| 'hazel nuts' |'pecan nuts'|' Queensland nuts'|'Contains crustaceans and products thereof'|'Contains eggs and products thereof'|'Contains fish and products thereof'|'Contains peanuts and products thereof';
  delivery_price?: number;
  description?: string;
  id?: number;
  imageUrl?: string;
  itemType?: 'NO_ALCOOL' | 'WITH_ALCOOL';
  name?: string;
  pickup_price?: number;
  supplement?: 'PIZZA_SUPP' | 'TACOS_SUPP' | 'SANDWITCH_SUPP' | 'SALD_SUPP' | 'DISHES_SUPP';
}
