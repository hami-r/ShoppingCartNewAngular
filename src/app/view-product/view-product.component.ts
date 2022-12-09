import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  constructor(private api:ApiService) {
    this.api.fetchProduct().subscribe(
      (response:any) => {
        this.product=response
        console.log(response);
        
        
      }
    )
  }
  product:any = []
}
