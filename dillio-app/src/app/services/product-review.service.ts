import { Injectable, Input } from '@angular/core';
import { Review } from '../_models/product-review';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewService {
 review:Review[];
  constructor() { 
    this.review=[
      {id:1,name:'tarek hesham',email:'t@t.com',productId:1,review:'Your product is very good'},
      {id:2,name:'ahmed mohamed',email:'a@a.com',productId:1,review:'Your product is very bad'},
      {id:3,name:'hussien ibrahim',email:'h@h.com',productId:1,review:'Your product is excellent'},
      {id:4,name:'yasser gamal',email:'y@y.com',productId:1,review:'Your product is simple'},
      {id:5,name:'yasser gamal',email:'y@y.com',productId:2,review:'Your product is simple'},
      {id:6,name:'yasser gamal',email:'y@y.com',productId:2,review:'Your product is simple'},
    ]
  }


  getall(){
     return this.review.slice();
  }
  getReviewOfProduct(id:number):Review[]{
    var element:Review[]=[{}];
    let c=0;
    for (let index = 0; index < this.review.length; index++) {
      if(this.review[index].productId == +id){
         element[c] = this.review[index];
         c++;
      }
    }
    return element;
  }

  add(review:Review): boolean {
    let res = false;
    const olength = this.review.length;
    const nlenght = this.review.push(review);
    if (olength !== nlenght) {
      review.id = this.review.length;
      res = true;
    }
    return res;
  }
}

