import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
msg:string="";
  loginRef = new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

  constructor(public loginService:LoginService,public router:Router){}  //DI for LoginService
  checkLoginDetails(): void{
    let login = this.loginRef.value;

    if(this.loginService.checkLoginDetails(login)){
      console.log("about to navigate to home");
       this.router.navigate(["dashboard"]);
    }else {
      console.log("got an error");
      this.msg="incorrect details, try again";
    }
    this.loginRef.reset();
  }
}

