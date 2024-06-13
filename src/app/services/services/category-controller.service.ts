/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { Category } from '../models/category';
import { createCategory } from '../fn/category-controller/create-category';
import { CreateCategory$Params } from '../fn/category-controller/create-category';
import { deleteCategory } from '../fn/category-controller/delete-category';
import { DeleteCategory$Params } from '../fn/category-controller/delete-category';
import { getAllCategories } from '../fn/category-controller/get-all-categories';
import { GetAllCategories$Params } from '../fn/category-controller/get-all-categories';
import { updateCategory } from '../fn/category-controller/update-category';
import { UpdateCategory$Params } from '../fn/category-controller/update-category';

@Injectable({ providedIn: 'root' })
export class CategoryControllerService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateCategory()` */
  static readonly UpdateCategoryPath = '/Category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory$Response(params: UpdateCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Category>> {
    return updateCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory(params: UpdateCategory$Params, context?: HttpContext): Observable<Category> {
    return this.updateCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Category>): Category => r.body)
    );
  }

  /** Path part for operation `deleteCategory()` */
  static readonly DeleteCategoryPath = '/Category/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory$Response(params: DeleteCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return deleteCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deleteCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory(params: DeleteCategory$Params, context?: HttpContext): Observable<void> {
    return this.deleteCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `createCategory()` */
  static readonly CreateCategoryPath = '/Category';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory$Response(params: CreateCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<Category>> {
    return createCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory(params: CreateCategory$Params, context?: HttpContext): Observable<Category> {
    return this.createCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<Category>): Category => r.body)
    );
  }

  /** Path part for operation `getAllCategories()` */
  static readonly GetAllCategoriesPath = '/Category/getAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories$Response(params?: GetAllCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<Category>>> {
    return getAllCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getAllCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories(params?: GetAllCategories$Params, context?: HttpContext): Observable<Array<Category>> {
    return this.getAllCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<Category>>): Array<Category> => r.body)
    );
  }

}
