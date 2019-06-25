import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Reviews } from '../_models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl = environment.apiUrl;
  reviews: Reviews[];

  constructor(private http: HttpClient) { }

  getProductReviews(id: number): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(this.baseUrl + 'review/product/' + id);
  }

  getStoreReviews(id: number): Observable<Reviews[]> {
    return this.http.get<Reviews[]>(this.baseUrl + 'review/store/' + id);
  }
}
