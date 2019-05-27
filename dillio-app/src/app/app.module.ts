import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideFilterComponent,
    FilterResultComponent,
    CategoryMenuComponent,
    ProductImagesComponent,
    SingleProductWrapComponent,
    ProductAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule
  ],
  providers: [CategoryService,
              SubcategoryService,
              ProductService],
              
  bootstrap: [AppComponent]
})
export class AppModule { }
