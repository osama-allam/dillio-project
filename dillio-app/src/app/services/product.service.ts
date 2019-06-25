import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IProduct } from './../_models/product';
import { Injectable } from '@angular/core';
import { Product } from '../_models/product';
import { CategoryService } from './category.service';
import { Productdetailsviewmodel } from '../_models/product-details-viewmodel';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

baseUrl = environment.apiUrl;
products: Product[];

categories = new CategoryService().categories;
  constructor(private http: HttpClient) {

    this.products = [
      {id: 1, price: 350, discount: 50, largeimageUrl: [
        'assets/images/product/large-size/2.jpg',
        'assets/images/product/large-size/1.jpg',
      'assets/images/product/large-size/3.jpg',
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/5.jpg',
      'assets/images/product/large-size/6.jpg'],
      smallimageUrl: ['assets/images/product/small-size/1.jpg',
      'assets/images/product/small-size/2.jpg',
      'assets/images/product/small-size/3.jpg',
      'assets/images/product/small-size/4.jpg',
      'assets/images/product/small-size/5.jpg',
      'assets/images/product/small-size/6.jpg'],
      title: 'My TiTle',
      description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
      category: this.categories[0]
    },
    {id: 2, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/3.jpg',
      'assets/images/product/large-size/1.jpg',
      'assets/images/product/large-size/2.jpg',
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/5.jpg',
      'assets/images/product/large-size/6.jpg'],
      smallimageUrl: ['assets/images/product/small-size/1.jpg',
      'assets/images/product/small-size/2.jpg',
      'assets/images/product/small-size/3.jpg',
      'assets/images/product/small-size/4.jpg',
      'assets/images/product/small-size/5.jpg',
      'assets/images/product/small-size/6.jpg'],
      title: 'My TiTle',
      description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
      category: this.categories[0]
    },

    {id: 3, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/1.jpg',
      'assets/images/product/large-size/2.jpg',
      'assets/images/product/large-size/3.jpg',
      'assets/images/product/large-size/5.jpg',
      'assets/images/product/large-size/6.jpg'],
      smallimageUrl: ['assets/images/product/small-size/1.jpg',
      'assets/images/product/small-size/2.jpg',
      'assets/images/product/small-size/3.jpg',
      'assets/images/product/small-size/4.jpg',
      'assets/images/product/small-size/5.jpg',
      'assets/images/product/small-size/6.jpg'],
      title: 'My TiTle',
      description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
      category: this.categories[0]
    },

    {id: 4, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/5.jpg',
      'assets/images/product/large-size/1.jpg',
      'assets/images/product/large-size/2.jpg',
      'assets/images/product/large-size/3.jpg',
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/6.jpg'],
      smallimageUrl: ['assets/images/product/small-size/1.jpg',
      'assets/images/product/small-size/2.jpg',
      'assets/images/product/small-size/3.jpg',
      'assets/images/product/small-size/4.jpg',
      'assets/images/product/small-size/5.jpg',
      'assets/images/product/small-size/6.jpg'],
      title: 'My TiTle',
      description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
      category: this.categories[0]
    },
    {id: 5, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/6.jpg',
      'assets/images/product/large-size/1.jpg',
    'assets/images/product/large-size/2.jpg',
    'assets/images/product/large-size/3.jpg',
    'assets/images/product/large-size/4.jpg',
    'assets/images/product/large-size/5.jpg'
  ],
    smallimageUrl: ['assets/images/product/small-size/1.jpg',
    'assets/images/product/small-size/2.jpg',
    'assets/images/product/small-size/3.jpg',
    'assets/images/product/small-size/4.jpg',
    'assets/images/product/small-size/5.jpg',
    'assets/images/product/small-size/6.jpg'],
    title: 'My TiTle',
    description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
    category: this.categories[1]
    },
    {id: 6, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/2.jpg',
      'assets/images/product/large-size/1.jpg',
    'assets/images/product/large-size/3.jpg',
    'assets/images/product/large-size/4.jpg',
    'assets/images/product/large-size/5.jpg',
    'assets/images/product/large-size/6.jpg'],
    smallimageUrl: ['assets/images/product/small-size/1.jpg',
    'assets/images/product/small-size/2.jpg',
    'assets/images/product/small-size/3.jpg',
    'assets/images/product/small-size/4.jpg',
    'assets/images/product/small-size/5.jpg',
    'assets/images/product/small-size/6.jpg'],
    title: 'My TiTle',
    description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
    category: this.categories[1]
    },
    {id: 7, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/3.jpg',
      'assets/images/product/large-size/1.jpg',
    'assets/images/product/large-size/2.jpg',
    'assets/images/product/large-size/4.jpg',
    'assets/images/product/large-size/5.jpg',
    'assets/images/product/large-size/6.jpg'],
    smallimageUrl: ['assets/images/product/small-size/1.jpg',
    'assets/images/product/small-size/2.jpg',
    'assets/images/product/small-size/3.jpg',
    'assets/images/product/small-size/4.jpg',
    'assets/images/product/small-size/5.jpg',
    'assets/images/product/small-size/6.jpg'],
    title: 'My TiTle',
    description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
    category: this.categories[1]
    },
    {id: 8, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/1.jpg',
    'assets/images/product/large-size/2.jpg',
    'assets/images/product/large-size/3.jpg',
    'assets/images/product/large-size/5.jpg',
    'assets/images/product/large-size/6.jpg'],
    smallimageUrl: ['assets/images/product/small-size/1.jpg',
    'assets/images/product/small-size/2.jpg',
    'assets/images/product/small-size/3.jpg',
    'assets/images/product/small-size/4.jpg',
    'assets/images/product/small-size/5.jpg',
    'assets/images/product/small-size/6.jpg'],
    title: 'My TiTle',
    description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
    category: this.categories[1]
    },
    {id: 8, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/5.jpg',
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/1.jpg',
    'assets/images/product/large-size/2.jpg',
    'assets/images/product/large-size/3.jpg',
    'assets/images/product/large-size/6.jpg'],
    smallimageUrl: ['assets/images/product/small-size/1.jpg',
    'assets/images/product/small-size/2.jpg',
    'assets/images/product/small-size/3.jpg',
    'assets/images/product/small-size/4.jpg',
    'assets/images/product/small-size/5.jpg',
    'assets/images/product/small-size/6.jpg'],
    title: 'My TiTle',
    description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
    category: this.categories[1]
    },
    {id: 9, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/5.jpg',
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/1.jpg',
    'assets/images/product/large-size/2.jpg',
    'assets/images/product/large-size/3.jpg',
    'assets/images/product/large-size/6.jpg'],
    smallimageUrl: ['assets/images/product/small-size/1.jpg',
    'assets/images/product/small-size/2.jpg',
    'assets/images/product/small-size/3.jpg',
    'assets/images/product/small-size/4.jpg',
    'assets/images/product/small-size/5.jpg',
    'assets/images/product/small-size/6.jpg'],
    title: 'My TiTle',
    description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
    category: this.categories[1]
    },
    {id: 10, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/5.jpg',
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/1.jpg',
    'assets/images/product/large-size/2.jpg',
    'assets/images/product/large-size/3.jpg',
    'assets/images/product/large-size/6.jpg'],
    smallimageUrl: ['assets/images/product/small-size/1.jpg',
    'assets/images/product/small-size/2.jpg',
    'assets/images/product/small-size/3.jpg',
    'assets/images/product/small-size/4.jpg',
    'assets/images/product/small-size/5.jpg',
    'assets/images/product/small-size/6.jpg'],
    title: 'My TiTle',
    description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
    category: this.categories[1]
    },
    {id: 11, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/5.jpg',
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/1.jpg',
    'assets/images/product/large-size/2.jpg',
    'assets/images/product/large-size/3.jpg',
    'assets/images/product/large-size/6.jpg'],
    smallimageUrl: ['assets/images/product/small-size/1.jpg',
    'assets/images/product/small-size/2.jpg',
    'assets/images/product/small-size/3.jpg',
    'assets/images/product/small-size/4.jpg',
    'assets/images/product/small-size/5.jpg',
    'assets/images/product/small-size/6.jpg'],
    title: 'My TiTle',
    description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
    category: this.categories[1]
    },
    {id: 12, price: 350, discount: 50, largeimageUrl: [
      'assets/images/product/large-size/5.jpg',
      'assets/images/product/large-size/4.jpg',
      'assets/images/product/large-size/1.jpg',
    'assets/images/product/large-size/2.jpg',
    'assets/images/product/large-size/3.jpg',
    'assets/images/product/large-size/6.jpg'],
    smallimageUrl: ['assets/images/product/small-size/1.jpg',
    'assets/images/product/small-size/2.jpg',
    'assets/images/product/small-size/3.jpg',
    'assets/images/product/small-size/4.jpg',
    'assets/images/product/small-size/5.jpg',
    'assets/images/product/small-size/6.jpg'],
    title: 'My TiTle',
    description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
    category: this.categories[1]
    },
      // {id:2,price:360,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:3,price:400,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:4 ,price:410,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:5,price:789,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:6,price:780,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:7,price:320,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
    ];

}
getall(): Productdetailsviewmodel[] {
 return this.products.slice();
}
getProduct(id: number): Observable<IProduct> {
  if (id === 0) {
    return of(this.initializeProduct());
  }
  return this.http.get<IProduct>(this.baseUrl + 'product/' + id);
}
  initializeProduct(): IProduct {
    return {
      id: 0,
      name: null,
      price: null,
      discount: null,
      categoryId: null,
      description: null,
      specs: [],
      images: []
    };
  }
}

