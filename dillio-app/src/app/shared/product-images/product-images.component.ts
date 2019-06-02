import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/services/product.service';
declare var $: any;




@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrls: ['./product-images.component.css']
})
export class ProductImagesComponent implements OnInit {
  @Input() products: Product

  mySlideOptions = { items: 1, dots: true, nav: false };
  myCarouselOptions = { items: 3, dots: true, nav: true };

  constructor(private productservice: ProductService) { }

  ngOnInit() {
    this.products = this.productservice.getById(1);

  }
}
