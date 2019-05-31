import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

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
import { SingleProductWrapComponent } from './shared/single-product-wrap/single-product-wrap.component';
import { ProductAreaComponent } from './shared/product-area/product-area.component';
import { FooterComponent } from './core/footer/footer.component';
import { BlogPostComponent } from './features/blog-post/blog-post.component';
import { PostListingComponent } from './features/blog-post/post-listing/post-listing.component';
import { PostAddComponent } from './features/blog-post/post-add/post-add.component';
import { PostDetailsComponent } from './features/blog-post/post-details/post-details.component';

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
    SingleProductWrapComponent,
    ProductAreaComponent,
    FooterComponent,
    BlogPostComponent,
    PostListingComponent,
    PostAddComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
