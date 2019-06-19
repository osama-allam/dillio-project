import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import {FormsModule} from '@angular/forms';

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
    AboutusComponent,
    OurTeamComponent,
    ContactusComponent,
    TermsConditionComponent,
    CounterComponent,
    AboutContentComponent,
    ContactFormComponent,
    ContactContentComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OwlModule
  ],
  providers: [
    ContactSubjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
