import { Component, OnInit, Input } from '@angular/core';
import { Stores } from 'src/app/_models/stores';
import { StoresService } from 'src/app/services/stores.service';
import { Observable, throwError } from 'rxjs';
import {MatPaginatorModule} from '@angular/material';

@Component({
  selector: 'app-store-listing',
  templateUrl: './store-listing.component.html',
  styleUrls: ['./store-listing.component.css']
})
export class StoreListingComponent implements OnInit {

  stores: Stores[];
  count:number[];
  errormessage:string;
  page:Number;

  constructor(private storeService: StoresService) { 
   this.count=[];
   this.page = 2;
  }

  ngOnInit() {
    this.storeService.getAll().subscribe(
      stores =>{
        this.stores = stores;
      },
      error =>this.errormessage = <any>error
    );
   
  }
}
