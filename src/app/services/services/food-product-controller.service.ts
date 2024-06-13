/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { createFoodProduct } from '../fn/food-product-controller/create-food-product';
import { CreateFoodProduct$Params } from '../fn/food-product-controller/create-food-product';
import { deleteFoodProduct } from '../fn/food-product-controller/delete-food-product';
import { DeleteFoodProduct$Params } from '../fn/food-product-controller/delete-food-product';
import { FoodProduct } from '../models/food-product';
import { getAllFoodProducts } from '../fn/food-product-controller/get-all-food-products';
import { GetAllFoodProducts$Params } from '../fn/food-product-controller/get-all-food-products';
import { getFoodProductById } from '../fn/food-product-controller/get-food-product-by-id';
import { GetFoodProductById$Params } from '../fn/food-product-controller/get-food-product-by-id';
import { updateFoodProduct } from '../fn/food-product-controller/update-food-product';
import { UpdateFoodProduct$Params } from '../fn/food-product-controller/update-food-product';

@Injectable({ providedIn: 'root' })
export class FoodProductControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `getFoodProductById()` */
  static readonly GetFoodProductByIdPath = '/foodproducts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFoodProductById()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFoodProductById$Response(params: GetFoodProductById$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodProduct>> {
    return getFoodProductById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFoodProductById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFoodProductById(params: GetFoodProductById$Params, context?: HttpContext): Observable<FoodProduct> {
    return this.getFoodProductById$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodProduct>): FoodProduct => r.body)
    );
  }

  /** Path part for operation `updateFoodProduct()` */
  static readonly UpdateFoodProductPath = '/foodproducts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFoodProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFoodProduct$Response(params: UpdateFoodProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodProduct>> {
    return updateFoodProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateFoodProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFoodProduct(params: UpdateFoodProduct$Params, context?: HttpContext): Observable<FoodProduct> {
    return this.updateFoodProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodProduct>): FoodProduct => r.body)
    );
  }

  /** Path part for operation `deleteFoodProduct()` */
  static readonly DeleteFoodProductPath = '/foodproducts/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFoodProduct()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFoodProduct$Response(params: DeleteFoodProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteFoodProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteFoodProduct$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFoodProduct(params: DeleteFoodProduct$Params, context?: HttpContext): Observable<void> {
    return this.deleteFoodProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `getAllFoodProducts()` */
  static readonly GetAllFoodProductsPath = '/foodproducts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllFoodProducts()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllFoodProducts$Response(params?: GetAllFoodProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<FoodProduct>>> {
    return getAllFoodProducts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllFoodProducts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllFoodProducts(params?: GetAllFoodProducts$Params, context?: HttpContext): Observable<Array<FoodProduct>> {
    return this.getAllFoodProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<FoodProduct>>): Array<FoodProduct> => r.body)
    );
  }

  /** Path part for operation `createFoodProduct()` */
  static readonly CreateFoodProductPath = '/foodproducts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createFoodProduct()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFoodProduct$Response(params: CreateFoodProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodProduct>> {
    return createFoodProduct(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createFoodProduct$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFoodProduct(params: CreateFoodProduct$Params, context?: HttpContext): Observable<FoodProduct> {
    return this.createFoodProduct$Response(params, context).pipe(
      map((r: StrictHttpResponse<FoodProduct>): FoodProduct => r.body)
    );
  }

}
