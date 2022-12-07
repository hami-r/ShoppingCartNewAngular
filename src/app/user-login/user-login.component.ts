import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private route:Router) {}

  username = ""
  password = ""

  readValues = () => {
    let data = {
      "username": this.username,
      "password": this.password
    }
    console.log(data);

    // if(this.username=="user" && this.password=="123"){
    //   this.route.navigate(['/view'])
    // } else {
    //   alert("Invalid user")
    // }
    
  }
}
