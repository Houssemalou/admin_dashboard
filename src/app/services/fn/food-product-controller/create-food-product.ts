/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { FoodProduct } from '../../models/food-product';

export interface CreateFoodProduct$Params {
      body: FoodProduct
}

export function createFoodProduct(http: HttpClient, rootUrl: string, params: CreateFoodProduct$Params, context?: HttpContext): Observable<StrictHttpResponse<FoodProduct>> {
  const rb = new RequestBuilder(rootUrl, createFoodProduct.PATH, 'post');
  if (params) {
    rb.body(params.body, 'application/json');
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<FoodProduct>;
    })
  );
}

createFoodProduct.PATH = '/foodproducts';
