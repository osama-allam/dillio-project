import { ReviewService } from './../services/review.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ReviewResolved } from '../_models/Review';
import { Observable, of } from 'rxjs';
import { ProductResolved } from '../_models/product';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductReviewResolver implements Resolve<ReviewResolved> {

  constructor(private _reviewService: ReviewService) { }
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<ReviewResolved> {
      const id = route.paramMap.get('id');
      if (isNaN(+id)) {
        const message = `Product id was not a number: ${id}`;
        // console.error(message);
        return of({ reviews: null, error: message });
      }

      return this._reviewService.getProductReviews(+id)
                .pipe(
                  map(reviews => ({reviews})),
                  catchError(error => {
                    const message = `Retrieval error: ${error}`;
                    // console.error(message);
                    return of({ reviews: null, error: message });
                  })
                );
  }
}
