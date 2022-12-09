import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {
  userId:any = ""
  
  constructor(private api:ApiService) {
    this.userId = localStorage.getItem("userInfo")
    console.log(this.userId);
    let data:any = {
      "id":this.userId
    }
    
    api.getProfile(data).subscribe(
      (response:any) => {
        console.log(response)
        this.fetchedData=response
      }
    )
  }
  fetchedData:any = []

  
}
