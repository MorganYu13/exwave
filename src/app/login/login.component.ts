import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginName!:string;
  loginPassword!:string; 

  onSignIn(loginName:string, loginPassword:string){
    console.log(this.loginName, this.loginPassword); 
    
  }
}
