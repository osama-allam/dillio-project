import { Injectable } from '@angular/core';
import { Category } from '../_models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categories:Category[];
  constructor() {
    this.categories=[
      {id:1,name:'Laptop'},
      {id:2,name:'TV & Audio'},
      {id:3,name:'Books'},
      {id:4,name:'Eletronics'},
      {id:5,name:'Womens Fashion'},
      {id:6,name:'Mens Fashion'},
      {id:7,name:'Health & Household'},
      {id:8,name:'Home & Kitchen'},
      {id:9,name:'Sports & Outdoors'},
      {id:10,name:'Tools & Home Improvement'},
      {id:11,name:'Toys & Games'},
      ]
   }

   getall(){
     return this.categories.slice();
   }

   
}
