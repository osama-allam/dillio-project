import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.product-action a, .social-link a').tooltip({
      animated: 'fade',
      placement: 'top',
      container: 'body'
    });
  }

}
