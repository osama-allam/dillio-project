import { ViewActivatorService } from './../../services/view-activator.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/services/product.service';
declare var $: any;

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {
  @Input() products: Product;
  constructor(private viewActivator: ViewActivatorService,private productservice: ProductService) { }

  ngOnInit() {
    this.viewActivator.imagesGalleryActivator();
    this.viewActivator.venoboxActivator();

    //this.products = this.productservice.getById(1);

  }
}
