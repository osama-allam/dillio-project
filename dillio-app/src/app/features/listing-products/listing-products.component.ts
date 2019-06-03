import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/_models/product';
import { PagingService } from 'src/app/services/paging.service';

@Component({
  selector: 'app-listing-products',
  templateUrl: './listing-products.component.html',
  styleUrls: ['./listing-products.component.css']
})
export class ListingProductsComponent implements OnInit {
  totalproducts: Product[];
  products: Product[];
  CurrentPage:number;
  totalpages:number;
  Arr = Array;
  constructor(public productServices: ProductService,private pagerService: PagingService) {
    
    this.totalproducts = this.productServices.products;
    this.CurrentPage = 1;
    this.setPage(this.CurrentPage);
  }
  
  ngOnInit() {
  }

  pager: any = {};

  setPage(page: number) {
    // debugger;
    this.pager = this.pagerService.getPage(this.totalproducts.length, page);

    this.products = this.totalproducts.slice(this.pager.startIndex, this.pager.endIndex + 1);

    this.totalpages = this.pager.totalPages;
  }

  changePage(pageNum:number){
    // debugger;
    if(pageNum <= this.totalpages && pageNum >= 1){

      this.CurrentPage = pageNum;
      this.setPage(this.CurrentPage);
      // window.scrollTo(0, 0);

      window.scrollTo({ left: 0, top: 250, behavior: 'smooth' });
    }
  }

}
