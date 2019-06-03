import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/_models/product';

@Component({
  selector: 'app-single-product-details',
  templateUrl: './single-product-details.component.html',
  styleUrls: ['./single-product-details.component.css']
})
export class SingleProductDetailsComponent implements OnInit {
@Input()product:Product
  constructor(private productservice:ProductService) { }

  ngOnInit() {
    this.product=this.productservice.getById(1);
  }

}
