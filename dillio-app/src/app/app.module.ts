import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SideFilterComponent } from './features/side-filter/side-filter.component';
import { FilterResultComponent } from './features/filter-result/filter-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideFilterComponent,
    FilterResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
