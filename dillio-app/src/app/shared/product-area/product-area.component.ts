import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-product-area',
  templateUrl: './product-area.component.html',
  styleUrls: ['./product-area.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ProductAreaComponent implements OnInit {

  constructor() {


   }
  ngOnInit() {
    this.productAreaActivator();
  }

  productAreaActivator(): void {
    $(".product-active").owlCarousel({
      loop: true,
      rewind: true,
      nav: false,
      dots: false,
      lazyLoad: true,
      autoplay: true,
      autoplayTimeout: 5000,
      item: 5,
      responsive: {
        0: {
            items: 1
        },
        480: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        1200: {
            items: 5
        }
      }});
      const owl = $('.product-active');
      // Go to the next item
      $('#next').click(function() {
          owl.trigger('next.owl.carousel');
      })
      // Go to the previous item
      $('#pre').click(function() {
          // With optional speed parameter
          // Parameters has to be in square bracket '[]'
          owl.trigger('prev.owl.carousel', [300]);
      })
  }
}
