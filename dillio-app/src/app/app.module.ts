import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


// import { StarRatingModule } from 'angular-star-rating';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './shared/dropdown/dropdown.component';
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
import { ProductFormReviewComponent } from './features/product-form-review/product-form-review.component';
import { ProductReviewService } from './services/product-review.service';
import { StoresService } from './services/stores.service';
import { FooterComponent } from './core/footer/footer.component';
import { ImagesGalleryComponent } from './features/images-gallery/images-gallery.component';
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
import { FeedbackFormModalComponent } from './shared/feedback-form-modal/feedback-form-modal.component';
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
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { ProductListingComponent } from './features/products/product-listing/product-listing.component';
import { ProductEditComponent } from './features/products/product-edit/product-edit.component';



@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
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
    ProductDetailsComponent,
    ProductFormReviewComponent,
    FooterComponent,
    StoresComponent,
    StoreDetailsComponent,
    StoreListingComponent,
    StoreEditComponent,
    ImagesGalleryComponent,
    BlogGallerySliderComponent,
    BlogPostComponent,
    PostListingComponent,
    PostAddComponent,
    PostDetailsComponent,
    PostComponent,
    LoginComponent,
    RegisterComponent,
    SigninComponent,
    FeedbackFormModalComponent,
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
    ProductDetailsComponent,
    ProductEditComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    // StarRatingModule.forRoot()
  ],
  providers: [CategoryService,
              SubcategoryService,
              ProductService,
              ProductReviewService,
              StoresService,
              ContactSubjectService,
              postService],
  bootstrap: [AppComponent]
})
export class AppModule { }
