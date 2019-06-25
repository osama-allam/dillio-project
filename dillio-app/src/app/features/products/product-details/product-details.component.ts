import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/_models/product-review';
import { ProductService } from 'src/app/services/product.service';
import { ProductReviewService } from 'src/app/services/product-review.service';
import { Productdetailsviewmodel } from 'src/app/_models/product-details-viewmodel';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  @Input()productdetails:Productdetailsviewmodel;
  @Input()reviews:Review[];

  constructor(private productservice:ProductService,private reviewservice:ProductReviewService) { }

  ngOnInit() {
    // this.productdetails=this.productservice.getProduct(1);
    // this.reviews=this.reviewservice.getReviewOfProduct(2);
  }

}
