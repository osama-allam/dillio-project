import { ProductModule } from './features/products/product.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { StarRatingModule } from 'angular-star-rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiddleHeaderComponent } from './core/header/middle-header/middle-header.component';
import { BottomHeaderComponent } from './core/header/bottom-header/bottom-header.component';
import { ProductComponent } from './features/featured-products/product/product.component';
import { HeaderComponent } from './core/header/header.component';
import { SideFilterComponent } from './features/side-filter/side-filter.component';
import { FilterResultComponent } from './features/filter-result/filter-result.component';
import { CategoryService } from './services/category.service';
import { SubcategoryService } from './services/subcategory.service';
import { ProductService } from './services/product.service';
import { ProductReviewService } from './services/product-review.service';
import { StoresService } from './services/stores.service';
import { FooterComponent } from './core/footer/footer.component';
import { BlogGallerySliderComponent } from './features/blog-gallery-slider/blog-gallery-slider.component';
import { BlogPostComponent } from './features/blog-post/blog-post.component';
import { postService } from './features/blog-post/post.service';
import { PostListingComponent } from './features/blog-post/post-listing/post-listing.component';
import { PostAddComponent } from './features/blog-post/post-add/post-add.component';
import { PostDetailsComponent } from './features/blog-post/post-details/post-details.component';
import { PostComponent } from './features/blog-post/post/post.component';
import { LoginComponent } from './core/login/login.component';
import { RegisterComponent } from './core/register/register.component';
import { SigninComponent } from './core/signin/signin.component';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { OurTeamComponent } from './features/aboutus/our-team/our-team.component';
import { ContactusComponent } from './features/contactus/contactus.component';
import { TermsConditionComponent } from './features/terms-condition/terms-condition.component';
import { CounterComponent } from './features/aboutus/counter/counter.component';
import { AboutContentComponent } from './features/aboutus/about-content/about-content.component';
import { ContactFormComponent } from './features/contactus/contact-form/contact-form.component';
import { ContactContentComponent } from './features/contactus/contact-content/contact-content.component';
import { FaqComponent } from './features/faq/faq.component';
import { ContactSubjectService } from './services/icontactus-subject.service';
import { StoreEditComponent } from './features/stores/store-edit/store-edit.component';
import { StoreListingComponent } from './features/stores/store-listing/store-listing.component';
import { StoreDetailsComponent } from './features/stores/store-details/store-details.component';
import { StoresComponent } from './features/stores/stores.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MiddleHeaderComponent,
    BottomHeaderComponent,
    ProductComponent,
    HeaderComponent,
    SideFilterComponent,
    FilterResultComponent,
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
    UploadComponent,
    
  ],
  imports: [
    BrowserModule,
    OwlModule,
    SharedModule, // will be removed after adding to other modules
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
  ],
  providers: [CategoryService,
              SubcategoryService,
              ProductService,
              ProductReviewService,
              StoresService,
              postService,
              ContactSubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
