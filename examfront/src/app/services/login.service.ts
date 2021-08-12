import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject=new BehaviorSubject<boolean>(this.getuser());

  constructor(private http:HttpClient) {}
  baseUrl='http://localhost:8080/user';

// current user: which is loggedin 
  public getCurrentUser()
  {
    return this.http.get('http://localhost:8080/current-user');
  }

  //generate token

  public generateToken(loginData: any)
  {
    return this.http.post('http://localhost:8080/generate-token', loginData);
  }

  //Login user: set token in Local Storage
  public loginUser(token)
  {
    localStorage.setItem('token', token);
    
    return true;
  }

  //isLogin: user is logged in or not
public isLoggedIn()
{
  var tokenStr=localStorage.getItem('token');
  if(tokenStr == undefined || tokenStr == '' || tokenStr == null)
  {
    return false;
  } else {
    return true;
  }
}

//Logout: remove token from local Storage
public logout()
{
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return true;
}

//Get token 
public getToken()
{
  return localStorage.getItem('token');
}

//set userDetail
public setUser(user)
{
  localStorage.setItem("user",JSON.stringify(user));
}

//get user
public getuser()
{
  var userStr=localStorage.getItem('user');
  if(userStr!=null)
  {
    return JSON.parse(userStr);
  }else{
    this.logout();
    return null;
  }
}

//get user role
public getUserRole()
{
  let user = this.getuser()
  return user.authorities[0].authority;

}
}
