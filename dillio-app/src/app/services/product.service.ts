import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IProduct, IProductList } from './../_models/product';
import { Injectable } from '@angular/core';
import { Product } from '../_models/product';
import { CategoryService } from './category.service';
import { Productdetailsviewmodel } from '../_models/product-details-viewmodel';
import { of, Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

baseUrl = environment.apiUrl;
products: Product[];

categories = new CategoryService().categories;
  constructor(private http: HttpClient) {

  //   this.products = [
  //     {id: 1, price: 350, discount: 50, largeimageUrl: [
  //       'assets/images/product/large-size/2.jpg',
  //       'assets/images/product/large-size/1.jpg',
  //     'assets/images/product/large-size/3.jpg',
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/5.jpg',
  //     'assets/images/product/large-size/6.jpg'],
  //     smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //     'assets/images/product/small-size/2.jpg',
  //     'assets/images/product/small-size/3.jpg',
  //     'assets/images/product/small-size/4.jpg',
  //     'assets/images/product/small-size/5.jpg',
  //     'assets/images/product/small-size/6.jpg'],
  //     title: 'My TiTle',
  //     description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //     category: this.categories[0]
  //   },
  //   {id: 2, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/3.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //     'assets/images/product/large-size/2.jpg',
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/5.jpg',
  //     'assets/images/product/large-size/6.jpg'],
  //     smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //     'assets/images/product/small-size/2.jpg',
  //     'assets/images/product/small-size/3.jpg',
  //     'assets/images/product/small-size/4.jpg',
  //     'assets/images/product/small-size/5.jpg',
  //     'assets/images/product/small-size/6.jpg'],
  //     title: 'My TiTle',
  //     description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //     category: this.categories[0]
  //   },

  //   {id: 3, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //     'assets/images/product/large-size/2.jpg',
  //     'assets/images/product/large-size/3.jpg',
  //     'assets/images/product/large-size/5.jpg',
  //     'assets/images/product/large-size/6.jpg'],
  //     smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //     'assets/images/product/small-size/2.jpg',
  //     'assets/images/product/small-size/3.jpg',
  //     'assets/images/product/small-size/4.jpg',
  //     'assets/images/product/small-size/5.jpg',
  //     'assets/images/product/small-size/6.jpg'],
  //     title: 'My TiTle',
  //     description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //     category: this.categories[0]
  //   },

  //   {id: 4, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/5.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //     'assets/images/product/large-size/2.jpg',
  //     'assets/images/product/large-size/3.jpg',
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/6.jpg'],
  //     smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //     'assets/images/product/small-size/2.jpg',
  //     'assets/images/product/small-size/3.jpg',
  //     'assets/images/product/small-size/4.jpg',
  //     'assets/images/product/small-size/5.jpg',
  //     'assets/images/product/small-size/6.jpg'],
  //     title: 'My TiTle',
  //     description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //     category: this.categories[0]
  //   },
  //   {id: 5, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/6.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //   'assets/images/product/large-size/2.jpg',
  //   'assets/images/product/large-size/3.jpg',
  //   'assets/images/product/large-size/4.jpg',
  //   'assets/images/product/large-size/5.jpg'
  // ],
  //   smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //   'assets/images/product/small-size/2.jpg',
  //   'assets/images/product/small-size/3.jpg',
  //   'assets/images/product/small-size/4.jpg',
  //   'assets/images/product/small-size/5.jpg',
  //   'assets/images/product/small-size/6.jpg'],
  //   title: 'My TiTle',
  //   description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //   category: this.categories[1]
  //   },
  //   {id: 6, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/2.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //   'assets/images/product/large-size/3.jpg',
  //   'assets/images/product/large-size/4.jpg',
  //   'assets/images/product/large-size/5.jpg',
  //   'assets/images/product/large-size/6.jpg'],
  //   smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //   'assets/images/product/small-size/2.jpg',
  //   'assets/images/product/small-size/3.jpg',
  //   'assets/images/product/small-size/4.jpg',
  //   'assets/images/product/small-size/5.jpg',
  //   'assets/images/product/small-size/6.jpg'],
  //   title: 'My TiTle',
  //   description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //   category: this.categories[1]
  //   },
  //   {id: 7, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/3.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //   'assets/images/product/large-size/2.jpg',
  //   'assets/images/product/large-size/4.jpg',
  //   'assets/images/product/large-size/5.jpg',
  //   'assets/images/product/large-size/6.jpg'],
  //   smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //   'assets/images/product/small-size/2.jpg',
  //   'assets/images/product/small-size/3.jpg',
  //   'assets/images/product/small-size/4.jpg',
  //   'assets/images/product/small-size/5.jpg',
  //   'assets/images/product/small-size/6.jpg'],
  //   title: 'My TiTle',
  //   description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //   category: this.categories[1]
  //   },
  //   {id: 8, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //   'assets/images/product/large-size/2.jpg',
  //   'assets/images/product/large-size/3.jpg',
  //   'assets/images/product/large-size/5.jpg',
  //   'assets/images/product/large-size/6.jpg'],
  //   smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //   'assets/images/product/small-size/2.jpg',
  //   'assets/images/product/small-size/3.jpg',
  //   'assets/images/product/small-size/4.jpg',
  //   'assets/images/product/small-size/5.jpg',
  //   'assets/images/product/small-size/6.jpg'],
  //   title: 'My TiTle',
  //   description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //   category: this.categories[1]
  //   },
  //   {id: 8, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/5.jpg',
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //   'assets/images/product/large-size/2.jpg',
  //   'assets/images/product/large-size/3.jpg',
  //   'assets/images/product/large-size/6.jpg'],
  //   smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //   'assets/images/product/small-size/2.jpg',
  //   'assets/images/product/small-size/3.jpg',
  //   'assets/images/product/small-size/4.jpg',
  //   'assets/images/product/small-size/5.jpg',
  //   'assets/images/product/small-size/6.jpg'],
  //   title: 'My TiTle',
  //   description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //   category: this.categories[1]
  //   },
  //   {id: 9, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/5.jpg',
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //   'assets/images/product/large-size/2.jpg',
  //   'assets/images/product/large-size/3.jpg',
  //   'assets/images/product/large-size/6.jpg'],
  //   smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //   'assets/images/product/small-size/2.jpg',
  //   'assets/images/product/small-size/3.jpg',
  //   'assets/images/product/small-size/4.jpg',
  //   'assets/images/product/small-size/5.jpg',
  //   'assets/images/product/small-size/6.jpg'],
  //   title: 'My TiTle',
  //   description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //   category: this.categories[1]
  //   },
  //   {id: 10, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/5.jpg',
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //   'assets/images/product/large-size/2.jpg',
  //   'assets/images/product/large-size/3.jpg',
  //   'assets/images/product/large-size/6.jpg'],
  //   smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //   'assets/images/product/small-size/2.jpg',
  //   'assets/images/product/small-size/3.jpg',
  //   'assets/images/product/small-size/4.jpg',
  //   'assets/images/product/small-size/5.jpg',
  //   'assets/images/product/small-size/6.jpg'],
  //   title: 'My TiTle',
  //   description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //   category: this.categories[1]
  //   },
  //   {id: 11, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/5.jpg',
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //   'assets/images/product/large-size/2.jpg',
  //   'assets/images/product/large-size/3.jpg',
  //   'assets/images/product/large-size/6.jpg'],
  //   smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //   'assets/images/product/small-size/2.jpg',
  //   'assets/images/product/small-size/3.jpg',
  //   'assets/images/product/small-size/4.jpg',
  //   'assets/images/product/small-size/5.jpg',
  //   'assets/images/product/small-size/6.jpg'],
  //   title: 'My TiTle',
  //   description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //   category: this.categories[1]
  //   },
  //   {id: 12, price: 350, discount: 50, largeimageUrl: [
  //     'assets/images/product/large-size/5.jpg',
  //     'assets/images/product/large-size/4.jpg',
  //     'assets/images/product/large-size/1.jpg',
  //   'assets/images/product/large-size/2.jpg',
  //   'assets/images/product/large-size/3.jpg',
  //   'assets/images/product/large-size/6.jpg'],
  //   smallimageUrl: ['assets/images/product/small-size/1.jpg',
  //   'assets/images/product/small-size/2.jpg',
  //   'assets/images/product/small-size/3.jpg',
  //   'assets/images/product/small-size/4.jpg',
  //   'assets/images/product/small-size/5.jpg',
  //   'assets/images/product/small-size/6.jpg'],
  //   title: 'My TiTle',
  //   description: 'My Desc 100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom. Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis, earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
  //   category: this.categories[1]
  //   },
      // {id:2,price:360,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:3,price:400,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:4 ,price:410,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:5,price:789,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:6,price:780,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
      // {id:7,price:320,discount:50,largeimageUrl:['assets/images/product/large-size/1.jpg']},
    // ];

}
getall(): Observable<IProductList[]> {
  return this.http.get<IProductList[]>(this.baseUrl + 'product/');
}
getProduct(id: number): Observable<IProduct> {
  if (id === 0) {
    return of(this.initializeProduct());
  }
  return this.http.get<IProduct>(this.baseUrl + 'product/' + id);
}
createProduct(product: IProduct): Observable<IProduct> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<IProduct>(this.baseUrl + 'product', product, { headers: headers })
    .pipe(
      // tap(data => console.log('createProduct: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
}
updateProduct(product: IProduct): Observable<IProduct> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<IProduct>(this.baseUrl + 'product/' + product.id, product, { headers: headers })
    .pipe(
      // tap(() => console.log('updateProduct: ' + product.id)),
      // Return the product on an update
      map(() => product),
      catchError(this.handleError)
    );
}


DeleteProduct(proId:Number){
  const params = new HttpParams().set('id', proId.toString());

  this.http.delete<IProduct>(environment.apiUrl,  { params })
  .subscribe(
    result => console.log(result),
    err => console.error(err)
  );
}

private handleError(err) {
  // in a real world app, we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage: string;
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;

  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
  }
  console.error(err);
  return throwError(errorMessage);
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

