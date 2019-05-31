import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.css']
})
export class ImagesGalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.imagesGalleryActivator();
    this.venoboxActivator();
  }
 imagesGalleryActivator() {

 $('.product-details-images').each(function(){
  var $this = $(this);
  var $thumb = $this.siblings('.product-details-thumbs, .tab-style-left');
  $this.slick({
     arrows: false,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: false,
     autoplaySpeed: 5000,
     dots: false,
     infinite: true,
     centerMode: false,
     centerPadding: 0,
     asNavFor: $thumb,
 });
});
$('.product-details-thumbs').each(function(){
      const $this = $(this);
      const $details = $this.siblings('.product-details-images');
      $this.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<span class="slick-prev"><i class="fa fa-angle-left"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fa fa-angle-right"></i></span>',
        asNavFor: $details,
    });
    });
    $('.tab-style-left, .tab-style-right').each(function(){
      var $this = $(this);
      var $details = $this.siblings('.product-details-images');
      $this.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        vertical: true,
        centerPadding: 0,
        prevArrow: '<span class="slick-prev"><i class="fa fa-angle-down"></i></span>',
        nextArrow: '<span class="slick-next"><i class="fa fa-angle-up"></i></span>',
        asNavFor: $details,
    });
    });

 }
 venoboxActivator() {
  $('.venobox').venobox({
    spinner:'wave',
    spinColor:'#cb9a00',
});
}
}
