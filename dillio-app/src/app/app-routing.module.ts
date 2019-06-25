import { SigninComponent } from './core/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostComponent } from './features/blog-post/blog-post.component';
import { PostAddComponent } from './features/blog-post/post-add/post-add.component';
import { PostDetailsComponent } from './features/blog-post/post-details/post-details.component';
import { StoreDetailsComponent } from './features/stores/store-details/store-details.component';
import { StoreListingComponent } from './features/stores/store-listing/store-listing.component';
import { ProductListingComponent } from './features/products/product-listing/product-listing.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

const routes: Routes = [
  { path : 'home' , component: ProductListingComponent },
  { path : 'home/:txtSearch/:val' , component: ProductListingComponent },
  { path : 'blog' , component: BlogPostComponent },
  { path : 'blog/listing' , component: BlogPostComponent },
  { path : 'blog/add' , component: PostAddComponent },
  { path : 'blog/:id/edit' , component: PostAddComponent },
  { path : 'blog/:id/details' , component: PostDetailsComponent },
  { path : 'stores/:id' , component: StoreDetailsComponent },
  { path : 'stores' , component: StoreListingComponent },
  { path : 'signin', component: SigninComponent},
  { path : '' , redirectTo: 'home' , pathMatch: 'full' },
  { path : 'page-not-found' , component: PageNotFoundComponent },
  { path : '**' , component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
