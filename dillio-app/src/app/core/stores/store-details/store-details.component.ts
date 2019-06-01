import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(()=> {
      $('.star-rating').barrating({
        theme: 'fontawesome-stars'
    });
});
  }

}
