import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _http:HttpClient) { }
  //loaod all the categories
  public categories()
  {
    return this._http.get('http://localhost:8080/category/');
  }

  //add new category
  public addCategory(category) {
    return this._http.post('http://localhost:8080/category/', category);
  }
}
