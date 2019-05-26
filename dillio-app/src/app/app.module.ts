import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleProductWrapComponent } from './shared/single-product-wrap/single-product-wrap.component';
import { ProductAreaComponent } from './shared/product-area/product-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleProductWrapComponent,
    ProductAreaComponent
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
