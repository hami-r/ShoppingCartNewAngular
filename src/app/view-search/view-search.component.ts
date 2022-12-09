import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-search',
  templateUrl: './view-search.component.html',
  styleUrls: ['./view-search.component.css']
})
export class ViewSearchComponent {
  name = ""
  searchData:any = []
  constructor(private api:ApiService) {
    this.api.fetchProduct().subscribe(
      (response:any) => {
        this.searchData = response
      }
    )
  }
  
   
  searchProd = () => {
    let data:any = {
      "name":this.name
    }
    console.log(data);
    this.api.searchProduct(data).subscribe(
      (response:any) => {
        console.log(response);
        if (response.length==0) {
          alert("Invalid")
        } else {
          this.searchData=response
        }
        
      }
    )
  }
}
