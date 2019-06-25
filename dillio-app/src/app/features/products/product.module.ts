import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductFormReviewComponent } from '../product-form-review/product-form-review.component';
import { ImagesGalleryComponent } from '../images-gallery/images-gallery.component';
import { ProductResolver } from 'src/app/_resolvers/product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products',
        children: [
          {
            path: '',
            component: ProductListingComponent
          },
          {
            path: ':id',
            component: ProductDetailsComponent,
            // resolve: { resolvedData: ProductResolver }
          },
          {
            path: ':id/edit',
            component: ProductEditComponent,
            // canDeactivate: [ProductEditGuard],
            resolve: { resolvedData: ProductResolver }
          }
        ]
      }

    ])
  ],
  declarations: [
    ImagesGalleryComponent,
    ProductFormReviewComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ],
  exports: [
    ImagesGalleryComponent,
    ProductFormReviewComponent,
    ProductListingComponent,
    ProductDetailsComponent,
    ProductEditComponent
  ]
})
export class ProductModule { }
