import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  constructor(private api:ApiService) {}
  name = ""
  address = ""
  email = ""
  phoneNo = ""
  password = ""
  confirmPassword = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "address":this.address,
      "email":this.email,
      "phoneNo":this.phoneNo,
      "password":this.password,
      "confirmPassword":this.confirmPassword
    }
    console.log(data);
    this.api.login(data).subscribe(
      (response:any) => {
        if(this.password != this.confirmPassword){
          alert("Passwords donot match")
        } else{
          if(response.status == "success"){
            alert("registered successfully")
            this.name = ""
            this.address = ""
            this.email = ""
            this.phoneNo = ""
            this.password = ""
            this.confirmPassword = ""
          } else {
            alert("Something wrong")
          }
        } 
      }
    )
  }

}
