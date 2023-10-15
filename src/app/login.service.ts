import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  checkLoginDetails(login:any):boolean {
    if(login.email=="user@gmail.com" && login.password=="user@123"){
      console.log("Password correct");
      return true;
    }else {
      console.log("Password wrong");
      return false;
    }
  }
}
