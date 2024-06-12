import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { FoodProduct } from '../../../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class FoodProductService {

  private baseUrl = 'http://localhost:8080/foodproducts';

  constructor(private http: HttpClient) { }

  getAllFoodProducts(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(this.baseUrl);
  }

  getFoodProductById(id: number): Observable<FoodProduct> {
    return this.http.get<FoodProduct>(`${this.baseUrl}/${id}`);
  }

  createFoodProduct(foodProduct: FoodProduct): Observable<FoodProduct> {
    return this.http.post<FoodProduct>(this.baseUrl, foodProduct);
  }

  updateFoodProduct(id: number, foodProduct: FoodProduct): Observable<FoodProduct> {
    return this.http.put<FoodProduct>(`${this.baseUrl}/${id}`, foodProduct);
  }

  deleteFoodProduct(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
