import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  constructor(private route:Router,private api:ApiService) {}

  email = ""
  password = ""
  verifyData:any = []
  readValues = () => {
    let data = {
      "email": this.email,
      "password": this.password
    }
    console.log(data);
    this.api.verify(data).subscribe(
      (response:any) => {
        if (response.length == 0) {
          alert("Invalid credentials")
        } else {
          this.verifyData=response
            this.route.navigate(['/userview'])
          }
        }
    )
    
  }
}
