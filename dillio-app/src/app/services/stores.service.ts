import { Injectable } from '@angular/core';
import { Stores } from '../_models/stores';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { store } from '@angular/core/src/render3';
import { IStoreDetails } from '../_models/store-details';
import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError ,tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'No Auth'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StoresService {
private url = 'https://localhost:44396/api/store'
oldstore:Stores[];
stores: Stores[];



  constructor(private http:HttpClient) {
  //   this.stores = [
  //     {id: 1, name: 'town team', image: './assets/images/stores/applianceeg.png', rating: 3.5},
  //     {id: 2, name: 'Imedia Stores', image: './assets/images/stores/rizkalla.png', rating: 3.5},
  //     {id: 3, name: 'diwanegypt', image: './assets/images/stores/btech.png', rating: 3.5},
  //     {id: 4, name: 'taki-vita', image: './assets/images/stores/compume.png', rating: 3.5},
  //     {id: 5, name: 'flipflopsegypt', image: './assets/images/stores/digitalcity.png', rating: 3.5},
  //     {id: 6, name: 'Carrefour', image: './assets/images/stores/egygamer.png', rating: 0},
  //     {id: 7, name: 'radioshack', image: './assets/images/stores/radioshack.png'},
  //     {id: 8, name: 'Rizkalla', image: './assets/images/stores/rizkalla.png', rating: 3.5},
  //     {id: 9, name: 'Orange', image: './assets/images/stores/orange.png', rating: 3.5},
  //     {id: 10, name: 'Souq', image: './assets/images/stores/applianceeg.png', rating: 3.5},
  //     {id: 11, name: 'Jumia', image: './assets/images/stores/applianceeg.png', rating: 3.5},
  //     {id: 12, name: 'Cairo sales', image: './assets/images/stores/applianceeg.png', rating: 3.5},
  //     {id: 13, name: 'B.Tech', image: './assets/images/stores/btech.png', rating: 3.5},
  //     {id: 14, name: 'computer shop', image: './assets/images/stores/computershop.png', rating: 3.5},
  //     {id: 15, name: 'egypt labtop', image: './assets/images/stores/egyptlaptop.png', rating: 3.5},
  //     {id: 16, name: 'buri', image: './assets/images/stores/applianceeg.png', rating: 3.5},
  //     {id: 17, name: 'herobabystore', image: './assets/images/stores/applianceeg.png', rating: 3.5},
  //     {id: 18, name: 'Appliance Egypt', image: './assets/images/stores/applianceeg.png', rating: 3.5},
  //     {id: 19, name: 'fitnesshubeg', image: './assets/images/stores/egyptlaptop.png', rating: 3.5},
  //     {id: 20, name: 'Jansport Egypt', image: './assets/images/stores/jansport.png', rating: 3.5},
  //     {id: 21, name: 'Bescletta', image: './assets/images/stores/twelvewatch.png', rating: 3.5},
  //     {id: 22, name: 'The Giftery', image: './assets/images/stores/iwatchstores.png', rating: 3.5},
  //     {id: 23, name: 'The Makan', image: './assets/images/stores/themakan.png', rating: 3.5},
  //     {id: 24, name: 'One Roof Store', image: './assets/images/stores/applianceeg.png', rating: 3.5},


  // ];
  }

getAll():Observable<Stores[]>{
return this.http.get<Stores[]>(this.url).pipe(
  tap(data=> console.log('All :'+JSON.stringify(data))),
  catchError(this.handleError)
);}


Add(newstore:Stores):Observable<Stores>{
  return this.http.post<Stores>(this.url, newstore, httpOptions)
  .pipe(
    catchError(this.handleError)
  );
  // let res = false;
  //   const olength = this.stores.length;
  //   const nlenght = this.stores.push(newstore);
  //   if (olength !== nlenght) {
  //     newstore.id = this.stores.length;
  //     res = true;
  //   }
  //   return res;
}

private handleError(err:HttpErrorResponse){
let errorMessage='';
if(err.error instanceof ErrorEvent){
  errorMessage=`An error occurred : ${err.error.message}`;
}
else{
  errorMessage=`server returned code:${err.status}, error message is : ${err.message}`;
}
console.error(errorMessage);
return throwError(errorMessage);
}



// edit(id:number,storeitem:Stores){

//   let res = false;
//   const index = this.stores.findIndex(a =>a.id === storeitem.id);
//   if(index >= 0){
//       this.stores[index]=storeitem;
//       res = true;
//   }
//   return res;

// }

// getById(id:number):Stores{
//   id=+id;
//   return this.stores.find(a => a.id === id);
// }
}
