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

    StoresComponent,
    StoreDetailsComponent,
    StoreListingComponent,
    StoreEditComponent,
    BlogGallerySliderComponent,
    BlogPostComponent,
    PostListingComponent,
    PostAddComponent,
    PostDetailsComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    SigninComponent,
    FooterComponent,
    AboutusComponent,
    OurTeamComponent,
    ContactusComponent,
    TermsConditionComponent,
    CounterComponent,
    AboutContentComponent,
    ContactFormComponent,
    ContactContentComponent,
    FaqComponent,
    PageNotFoundComponent,
    // ProductDetailsComponent,
    // ProductEditComponent,
    // ProductListingComponent,
    StoreAddComponent,
    UploadComponent
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
