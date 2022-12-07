import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  name = ""
  image = ""
  category = ""
  price = ""
  description = ""

  readValues = () => {
    let data:any = {
      "name":this.name,
      "image":this.image,
      "category":this.category,
      "price":this.price,
      "description":this.description
    }
    console.log(data);
    
  }
}
