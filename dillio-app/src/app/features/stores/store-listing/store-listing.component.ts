import { Component, OnInit, Input } from '@angular/core';
import { Stores } from 'src/app/_models/stores';
import { StoresService } from 'src/app/services/stores.service';
import { Observable, throwError } from 'rxjs';
import {MatPaginatorModule} from '@angular/material';
import { PagingService } from 'src/app/services/paging.service';

@Component({
  selector: 'app-store-listing',
  templateUrl: './store-listing.component.html',
  styleUrls: ['./store-listing.component.css']
})
export class StoreListingComponent implements OnInit {

  stores: Stores[];
  allstores: Stores[];
  count:number[];
  errormessage:string;
  page:Number;
  CurrentPage:number;
  totalpages:number;
  pager: any = {};
  Arr= Array;
  constructor(
    private storeService: StoresService,
    private pagerService: PagingService,) { 
   this.count=[];
   this.page = 2;
  }

  ngOnInit() {
    this.storeService.getAll().subscribe(
      stores =>{
        this.allstores = stores;
        this.CurrentPage = 1;
        this.setPage(this.CurrentPage);
      },
      error =>this.errormessage = <any>error
    );
   
  }



  setPage(page: number) {
    // debugger;
    this.pager = this.pagerService.getPage(this.allstores.length, page,18);

    this.stores = this.allstores.slice(this.pager.startIndex, this.pager.endIndex + 1);

    this.totalpages = this.pager.totalPages;
  }


  changePage(pageNum:number){
    // debugger;
    if(pageNum <= this.totalpages && pageNum >= 1){

      this.CurrentPage = pageNum;
      this.setPage(this.CurrentPage);
      // window.scrollTo(0, 0);

      window.scrollTo({ left: 0, top: 300, behavior: 'smooth' });
    }
}
}
