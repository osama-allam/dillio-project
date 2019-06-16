import { ViewActivatorService } from './../../services/view-activator.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-product-area',
  templateUrl: './product-area.component.html',
  styleUrls: ['./product-area.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ProductAreaComponent implements OnInit {

  constructor(private viewActivator: ViewActivatorService) {


   }
  ngOnInit() {
    this.viewActivator.productAreaActivator();

  }

}
