import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class ViewActivatorService {
  selectedRating: number;
  selectedEditRatingChanged = new Subject<number>();
  constructor() { }
  footerActivator(): void {
    $('.product-action a, .social-link a').tooltip({
      animated: 'fade',
      placement: 'top',
      container: 'body'
    });
  }
  headerActivator(): void {

      $('.ht-setting-trigger, .ht-currency-trigger, .ht-language-trigger, .hm-minicart-trigger, .cw-sub-menu').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $(this).siblings('.ht-setting, .ht-currency, .ht-language, .minicart, .cw-sub-menu li').slideToggle();
      });
      $('.ht-setting-trigger.is-active').siblings('.catmenu-body').slideDown();

      $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
          $('.header-sticky').addClass('sticky');
        } else {
          $('.header-sticky').removeClass('sticky');
        }
      });

    }
    niceSelectToggleDrop(): void {

      $('.nice-select').toggleClass('open');
    }
    starsRatingEditActivator(selector: string = '.star-rating-edit', initialValue: number = -1): void {
      this.selectedRating = initialValue;
      $(() => {
          $(selector).barrating('show', {
            theme: 'fontawesome-stars-o',
            initialRating: initialValue,
            showSelectedRating: true,
            onSelect: function(value, text, event) {
              if (typeof(event) !== 'undefined') {
                // rating was selected by a user
                this.selectedRating = value;
                console.log(this.selectedRating);
              }
            }
        });
      });
    }
    starsRatingReadonlyActivator(selector: string = '.star-rating-readonly', initialValue: number = -1): void {
      $(() => {
        $(selector).barrating({
          theme: 'fontawesome-stars-o',
          readonly: true,
          initialRating: initialValue
      });
    });
  }
  starsRatingSetValue(selector: string = '.star-rating-readonly', value: number = -1): void {
      $(() => {
        $(selector).barrating('set', value);
    });
  }
  blogGallerySliderActivator(): void {

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
  productFeaturedActivator(): void {
      $('.featured-product-active').owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
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
    });
  }

 imagesGalleryActivator(): void {

  $('.product-details-images').each(function() {
   let $this = $(this);
   let $thumb = $this.siblings('.product-details-thumbs, .tab-style-left');
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
  $('.product-details-thumbs').each(function() {
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
  $('.tab-style-left, .tab-style-right').each(function() {
       let $this = $(this);
       let $details = $this.siblings('.product-details-images');
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
  venoboxActivator(): void {
    $('.venobox').venobox({
      spinner: 'wave',
      spinColor: '#cb9a00',
  });
 }

 productAreaActivator(): void {
  $('.product-active').owlCarousel({
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
    });
    // Go to the previous item
  $('#pre').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });
}
}
