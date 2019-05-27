import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.dropdownActivator();
  }
  dropdownActivator() {
    $('.ht-setting-trigger, .ht-currency-trigger, .ht-language-trigger, .hm-minicart-trigger, .cw-sub-menu').on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $(this).siblings('.ht-setting, .ht-currency, .ht-language, .minicart, .cw-sub-menu li').slideToggle();
    });
    $('.ht-setting-trigger.is-active').siblings('.catmenu-body').slideDown();

    $(window).on('scroll',function() {
      if ($(this).scrollTop() > 300) {
        $('.header-sticky').addClass("sticky");
      } else {
        $('.header-sticky').removeClass("sticky");
      }
    });
  }
  toggleDrop() {
    $('.nice-select').toggleClass('open');
  }
}
