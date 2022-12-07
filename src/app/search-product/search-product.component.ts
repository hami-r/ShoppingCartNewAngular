import { Component } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent {
  name = ""
  searchProduct = () => {
    let data:any = {
      "name":this.name
    }
    console.log(data);
    
  }
}
