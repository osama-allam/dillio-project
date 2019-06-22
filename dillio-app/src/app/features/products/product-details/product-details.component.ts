import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { Review } from 'src/app/_models/product-review';
import { ProductService } from 'src/app/services/product.service';
import { ProductReviewService } from 'src/app/services/product-review.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()product:Product;
  @Input()reviews:Review[];

  constructor(private productservice:ProductService,private reviewservice:ProductReviewService) { }

  ngOnInit() {
    this.product=this.productservice.getById(1);
    this.reviews=this.reviewservice.getReviewOfProduct(2);
  }

}
