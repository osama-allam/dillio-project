import { StoresListComponent } from './core/stores/stores-list/stores-list.component';
import { SigninComponent } from './core/signin/signin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostComponent } from './features/blog-post/blog-post.component';
import { PostAddComponent } from './features/blog-post/post-add/post-add.component';
import { PostDetailsComponent } from './features/blog-post/post-details/post-details.component';
import { StoreDetailsComponent } from './core/stores/store-details/store-details.component';

const routes: Routes = [
  { path : 'blog' , component: BlogPostComponent },
  { path : 'blog/listing' , component: BlogPostComponent },
  { path : 'blog/add' , component: PostAddComponent },
  { path : 'blog/:id/edit' , component: PostAddComponent },
  { path : 'blog/:id/details' , component: PostDetailsComponent },
  { path : 'home' , component: BlogPostComponent },
  { path : 'stores/:id' , component: StoreDetailsComponent },
  { path : 'stores' , component: StoresListComponent },
  { path : 'signin', component: SigninComponent},
  { path : '' , redirectTo: 'home' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
