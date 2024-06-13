/* tslint:disable */
/* eslint-disable */
import { FoodProduct } from '../models/food-product';
export interface Category {
  description?: string;
  foodItems?: Array<FoodProduct>;
  id?: number;
  name?: string;
}
