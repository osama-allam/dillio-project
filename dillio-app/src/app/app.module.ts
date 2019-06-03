import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
import { NavComponent } from './core/nav/nav.component';
import { MiddleHeaderComponent } from './core/header/middle-header/middle-header.component';
import { BottomHeaderComponent } from './core/header/bottom-header/bottom-header.component';
import { ProductsComponent } from './features/featured-products/products/products.component';
import { ProductComponent } from './features/featured-products/product/product.component';
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
import { FooterComponent } from './core/footer/footer.component';
import { StoresComponent } from './core/stores/stores.component';
import { StoreDetailsComponent } from './core/stores/store-details/store-details.component';
import { StoresListComponent } from './core/stores/stores-list/stores-list.component';
import { ImagesGalleryComponent } from './features/images-gallery/images-gallery.component';
import { BlogGallerySliderComponent } from './features/blog-gallery-slider/blog-gallery-slider.component';
import { BlogPostComponent } from './features/blog-post/blog-post.component';
import { PostListingComponent } from './features/blog-post/post-listing/post-listing.component';
import { PostAddComponent } from './features/blog-post/post-add/post-add.component';
import { PostDetailsComponent } from './features/blog-post/post-details/post-details.component';
import { PostComponent } from './features/blog-post/post/post.component';
import { postService } from './features/blog-post/post.service';
import { ListingProductsComponent } from './features/listing-products/listing-products.component';
@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    NavComponent,
    HeaderComponent,
    MiddleHeaderComponent,
    BottomHeaderComponent,
    ProductsComponent,
    ProductComponent,
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
    StoreListingComponent,
    FooterComponent,
    StoresComponent,
    StoreDetailsComponent,
    StoresListComponent,
    ImagesGalleryComponent,
    BlogGallerySliderComponent,
    BlogPostComponent,
    PostListingComponent,
    PostAddComponent,
    PostDetailsComponent,
    PostComponent,
    ListingProductsComponent
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
              StoresService,
              postService],
              

  bootstrap: [AppComponent]
})
export class AppModule { }
