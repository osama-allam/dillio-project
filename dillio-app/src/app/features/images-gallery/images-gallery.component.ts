import { ViewActivatorService } from './../../services/view-activator.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

  constructor(private viewActivator: ViewActivatorService) { }

  ngOnInit() {
    this.viewActivator.imagesGalleryActivator();
    this.viewActivator.venoboxActivator();
  }
}
