import { ViewActivatorService } from './../../services/view-activator.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-blog-gallery-slider',
  templateUrl: './blog-gallery-slider.component.html',
  styleUrls: ['./blog-gallery-slider.component.css']
})
export class BlogGallerySliderComponent implements OnInit {

  constructor(private viewActivator: ViewActivatorService) { }

  ngOnInit() {
    this.viewActivator.blogGallerySliderActivator();
  }
}
