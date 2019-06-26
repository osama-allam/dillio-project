import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReviewToDisplay } from '../_models/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  baseUrl = environment.apiUrl;
  reviews: ReviewToDisplay[];

  constructor(private http: HttpClient) { }

  getProductReviews(id: number): Observable<ReviewToDisplay[]> {
    return this.http.get<ReviewToDisplay[]>(this.baseUrl + 'review/product/' + id);
  }

  getStoreReviews(id: number): Observable<ReviewToDisplay[]> {
    return this.http.get<ReviewToDisplay[]>(this.baseUrl + 'review/store/' + id);
  }
}
