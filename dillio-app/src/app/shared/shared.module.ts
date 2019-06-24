import { StarRatingModule } from 'angular-star-rating';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FeedbackFormModalComponent } from './feedback-form-modal/feedback-form-modal.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProductImagesComponent } from './product-images/product-images.component';
import { SingleProductWrapComponent } from './single-product-wrap/single-product-wrap.component';
import { ProductAreaComponent } from './product-area/product-area.component';
import { MaterialModule } from '../material.module';
import { FileUploadModule } from 'ng2-file-upload';
import { OwlModule } from 'ngx-owl-carousel';
@NgModule({
  imports: [
    CommonModule,
    StarRatingModule.forRoot(),
    OwlModule,
    MaterialModule,
    FileUploadModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DropdownComponent,
    CategoryMenuComponent,
    ProductImagesComponent,
    SingleProductWrapComponent,
    ProductAreaComponent,
    FeedbackFormModalComponent,
  ],
  exports: [
    DropdownComponent,
    CategoryMenuComponent,
    ProductImagesComponent,
    SingleProductWrapComponent,
    ProductAreaComponent,
    FeedbackFormModalComponent,

    CommonModule,
    FormsModule,
    MaterialModule,
    FileUploadModule,
    ReactiveFormsModule,
    OwlModule,
    StarRatingModule
  ]
})
export class SharedModule { }
