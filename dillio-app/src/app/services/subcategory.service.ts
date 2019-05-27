import { Injectable } from '@angular/core';
import { SubCategory } from '../_models/subcategory';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {
Subcategories:SubCategory[];
  constructor() {
    this.Subcategories=[
      {id:1,name:'TV & Video',categoryId:1},
      {id:2,name:'Audio & Theater',categoryId:1},
      {id:3,name:'Camera, Photo',categoryId:1},
      {id:4,name:'Cell Phones',categoryId:1},
      {id:5,name:'Headphones',categoryId:1},
      {id:6,name:'Video Games',categoryId:1},
      {id:7,name:'Wireless Speakers',categoryId:1},  
    ]
   }

   getall(){
     return this.Subcategories.slice();
   }
}
