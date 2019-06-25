import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/_models/product-review';

@Component({
  selector: 'app-product-form-review',
  templateUrl: './product-form-review.component.html',
  styleUrls: ['./product-form-review.component.css']
})
export class ProductFormReviewComponent implements OnInit {
@Input() review:Review;
  constructor() {
    this.review={rating:1};
   }

  ngOnInit() {
  }

  save(myform:NgForm){
    console.log( myform.controls);
    
  }

}
