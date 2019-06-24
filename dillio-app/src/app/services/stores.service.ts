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

getById(id:number):Observable<Stores>{
  const url = `${this.url}/${id}`;
  return this.http.get<Stores>(url).pipe(
    tap(data=> console.log('All :'+JSON.stringify(data))),
    catchError(this.handleError)
    
  );
}

update(storeitem:Stores):Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type':  'application/json'})
  };
  return this.http.put(`${this.url}/${storeitem.id}` , storeitem , httpOptions).pipe(
    tap(data=> console.log('All :'+JSON.stringify(data))),
    catchError(this.handleError)
  );
}

}
