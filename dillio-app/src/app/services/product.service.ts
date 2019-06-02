import { Injectable } from '@angular/core';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:Product[];
  constructor() { 
    this.products = this.products=[
      {id:1,price:350,discount:50,largeimageUrl:['./assets/images/product/large-size/1.jpg',
      './assets/images/product/large-size/2.jpg',
      './assets/images/product/large-size/3.jpg',
      './assets/images/product/large-size/4.jpg',
      './assets/images/product/large-size/5.jpg',
      './assets/images/product/large-size/6.jpg'],
      smallimageUrl:['./assets/images/product/small-size/1.jpg',
      './assets/images/product/small-size/2.jpg',
      './assets/images/product/small-size/3.jpg',
      './assets/images/product/small-size/4.jpg',
      './assets/images/product/small-size/5.jpg',
      './assets/images/product/small-size/6.jpg'],
      title:'My TiTle',
      description:'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',

    },
      // {id:2,price:360,discount:50,largeimageUrl:['./assets/images/product/large-size/1.jpg']},
      // {id:3,price:400,discount:50,largeimageUrl:['./assets/images/product/large-size/1.jpg']},
      // {id:4 ,price:410,discount:50,largeimageUrl:['./assets/images/product/large-size/1.jpg']},
      // {id:5,price:789,discount:50,largeimageUrl:['./assets/images/product/large-size/1.jpg']},
      // {id:6,price:780,discount:50,largeimageUrl:['./assets/images/product/large-size/1.jpg']},
      // {id:7,price:320,discount:50,largeimageUrl:['./assets/images/product/large-size/1.jpg']},
    ]
  
}
getall():Product[]{
 return this.products.slice();
}
getById(id:number):Product{
  id=+id;
  return this.products.find(a => a.id === id);
}
  }

