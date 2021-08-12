import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  baseUrl='http://localhost:8080/user';

  constructor(
   private http:HttpClient) {}

  // add user

  public addUser(user: any){
return this.http.post('http://localhost:8080/user/', user);
  }
}
