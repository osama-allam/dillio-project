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


  productFeaturedActivator(): void {
    $('.featured-product-active').owlCarousel({
      loop: true,
      // nav: true,
      autoplay: false,
      autoplayTimeout: 5000,
      // navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
      item: 3,
      responsive: {
         0: {
             items: 1
         },
         768: {
             items: 2
         },
         992: {
             items: 2
         },
         1100: {
             items: 2
         },
         1200: {
             items: 2
         }
     }
  })
}
}
