import { Injectable } from '@angular/core';
import { Category } from '../_models/category';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
categories:Category[];
baseUrl = environment.apiUrl;
  constructor(private http:HttpClient) {
    // this.categories=[
    //   {id:1,name:'Laptop'},
    //   {id:2,name:'TV & Audio'},
    //   {id:3,name:'Books'},
    //   {id:4,name:'Eletronics'},
    //   {id:5,name:'Womens Fashion'},
    //   {id:6,name:'Mens Fashion'},
    //   {id:7,name:'Health & Household'},
    //   {id:8,name:'Home & Kitchen'},
    //   {id:9,name:'Sports & Outdoors'},
    //   {id:10,name:'Tools & Home Improvement'},
    //   {id:11,name:'Toys & Games'},
    //   ]
   }

  //  getall(){
  //    return this.categories.slice();
  //  }


   getall(): Observable<Category[]> {
    //  return this.products.slice();
    
      return this.http.get<Category[]>(this.baseUrl + 'Category/');
    }
    getCategory(id: number): Observable<Category> {
      if (id === 0) {
        return of(this.initializeProduct());
      }
      return this.http.get<Category>(this.baseUrl + 'Category/' + id);
    }



    initializeProduct(): Category {
      return {
        id: 0,
        name: null,
        
      };
    }
   
}
