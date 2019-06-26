import { Component, OnInit, Input } from '@angular/core';
import { Reviews, ReviewResolved, ReviewToDisplay } from 'src/app/_models/Review';
import { Product, ProductResolved, IProduct } from 'src/app/_models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IProduct;
  reviews: ReviewToDisplay[];
  private productSubscription: Subscription;
  private reviewsSubscription: Subscription;

  constructor(private _alertify: AlertifyService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getProductResolvedData();
    this.getReviewsResolvedData();
  }
  getProductResolvedData() {
    this.productSubscription = this.route.data.subscribe(data => {
      const resolvedData: ProductResolved = data.resolvedProduct;
      this._alertify.error(resolvedData.error);
      this.onProductRetrieved(resolvedData.product);
    });
  }
  getReviewsResolvedData() {
    this.productSubscription = this.route.data.subscribe(data => {
      const resolvedData: ReviewResolved = data.resolvedReviews;
      this._alertify.error(resolvedData.error);
      this.onReviewRetrieved(resolvedData.reviews);
    });
  }
  onProductRetrieved(product: IProduct): void {
    this.product = product;
    if (!this.product) {
      this.router.navigate(['/page-not-found']);
    } else {
      // this.displayData(product);
      console.log(JSON.stringify(this.product));
    }
  }
  onReviewRetrieved(reviews: ReviewToDisplay[]): void {
    this.reviews = reviews;
    if (!this.reviews) {
      this.router.navigate(['/page-not-found']);
    } else {
      console.log(JSON.stringify(this.reviews));
    }
  }
}
