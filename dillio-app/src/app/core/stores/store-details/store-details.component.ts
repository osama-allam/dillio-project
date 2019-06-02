import { ViewActivatorService } from './../../../services/view-activator.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  constructor(private viewActivator: ViewActivatorService) { }

  ngOnInit() {
    this.viewActivator.starsRatingEditActivator();
    this.viewActivator.starsRatingReadonlyActivator();
  }

}
