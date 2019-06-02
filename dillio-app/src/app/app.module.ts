import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SideFilterComponent } from './features/side-filter/side-filter.component';
import { FilterResultComponent } from './features/filter-result/filter-result.component';
import { CategoryMenuComponent } from './shared/category-menu/category-menu.component';
import { CategoryService } from './services/category.service';
import { SubcategoryService } from './services/subcategory.service';
import { ProductService } from './services/product.service';
import { ProductImagesComponent } from './shared/product-images/product-images.component';
import { SingleProductWrapComponent } from './shared/single-product-wrap/single-product-wrap.component';
import { ProductAreaComponent } from './shared/product-area/product-area.component';
import { SingleProductDetailsComponent } from './features/single-product-details/single-product-details.component';
import { ProductDetailsComponent } from './core/product-details/product-details.component';
import { ProductFormReviewComponent } from './features/product-form-review/product-form-review.component';
import { ProductReviewService } from './services/product-review.service';
import { StoresService } from './services/stores.service';
import { StoreListingComponent } from './features/store/store-listing/store-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideFilterComponent,
    FilterResultComponent,
    CategoryMenuComponent,
    ProductImagesComponent,
    SingleProductWrapComponent,
    ProductAreaComponent,
    SingleProductDetailsComponent,
    ProductDetailsComponent,
    ProductFormReviewComponent,
    StoreListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    FormsModule
  ],
  providers: [CategoryService,
              SubcategoryService,
              ProductService,
              ProductReviewService,
              StoresService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
