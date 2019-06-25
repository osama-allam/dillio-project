import { Injectable } from '@angular/core';
import { Stores } from '../_models/stores';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { store } from '@angular/core/src/render3';
import { IStoreDetails } from '../_models/store-details';
import { HttpClient, HttpErrorResponse , HttpHeaders,HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError ,tap } from 'rxjs/operators';
import { IBranch } from '../_models/branch';
import { Review } from '../_models/product-review';
import { Reviews } from '../_models/Review';
import { IFeedbackData } from '../_models/feedback-form';

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
private url = 'http://localhost:50202/api/store';
private bUrl='http://localhost:50202/api/branch/store';
private rUrl='http://localhost:50202/api/review/store';
private srUrl='http://localhost:50202/api/review/store'
oldstore:Stores[];
stores: Stores[];



  constructor(private http:HttpClient) {
  }

getAll():Observable<Stores[]>{
return this.http.get<Stores[]>(this.url).pipe(
  tap(data=> console.log('All :'+JSON.stringify(data))),
  catchError(this.handleError)
);
}
getStore(id: number): Observable<Stores> {
  const url = `${this.url}/${id}`;
  return this.http.get<Stores>(url).pipe(
    tap(data => console.log('All :'+JSON.stringify(data))),
    catchError(this.handleError)
  );
}
getBranchesOfStore(id:number):Observable<IBranch[]>{
  
  const branchUrl = `${this.bUrl}/${id}`;
return this.http.get<IBranch[]>(branchUrl).pipe(
  tap(data=> console.log('All :'+JSON.stringify(data))),
  catchError(this.handleError)
);
}
Add(newstore:Stores):Observable<Stores>{
  return this.http.post<Stores>(this.url, newstore, httpOptions)
  .pipe(
    catchError(this.handleError)
  );
}
AddReviewOnStore(newreview:IFeedbackData,id:number):Observable<Reviews>{
  const reviewUrl =`${this.srUrl}/${id}`;
  return this.http.post<Reviews>(reviewUrl,  
    {
      ReviewDescription:newreview.description,
      Name:newreview.Name,
      email:newreview.email,
      rating:newreview.rating,
    }
    , httpOptions)
  .pipe(
    catchError(this.handleError)
  );
}
getReviewsOfStore(id:number):Observable<Reviews[]>{
  const reviewUrl =`${this.rUrl}/${id}`;
return this.http.get<Reviews[]>(reviewUrl).pipe(
  tap(data=> console.log('All :'+JSON.stringify(data))),
   catchError(this.handleError)
   );

}

update(storeitem:Stores):Observable<Stores>{
  return this.http.put(`${this.url}/${storeitem.id}` , storeitem , httpOptions).pipe(
    tap(data=> console.log('All :'+JSON.stringify(data))),
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
}
