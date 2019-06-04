import { ViewActivatorService } from './../../../services/view-activator.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private viewActivator: ViewActivatorService) { }

  ngOnInit() {
    this.viewActivator.productFeaturedActivator();
  }
}
