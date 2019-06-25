import { Component, OnInit, Input } from '@angular/core';
import { Stores } from 'src/app/_models/stores';
import { StoresService } from 'src/app/services/stores.service';

@Component({
  selector: 'app-store-listing',
  templateUrl: './store-listing.component.html',
  styleUrls: ['./store-listing.component.css']
})
export class StoreListingComponent implements OnInit {

  @Input() stores: Stores[];
  constructor(private storeService: StoresService) { }

  ngOnInit() {
    this.stores = this.storeService.getAll();
  }
}
