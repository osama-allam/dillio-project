import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-blog-gallery-slider',
  templateUrl: './blog-gallery-slider.component.html',
  styleUrls: ['./blog-gallery-slider.component.css']
})
export class BlogGallerySliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.blogGallerySLiderActivator();
  }
  blogGallerySLiderActivator() {

	const gallery = $('.li-blog-gallery-slider');
	gallery.slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		fade: true,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 768,
					settings: {
						arrows: false,
				}
			},
		]
	});
  }
}
