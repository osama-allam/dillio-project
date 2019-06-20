import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/_models/product';
import { PagingService } from 'src/app/services/paging.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(
    private productServices: ProductService,
    private pagerService: PagingService,
    private activatedRoute: ActivatedRoute) {
    
      const txtsendS = this.activatedRoute.snapshot.paramMap.get("txtSearch");
      const curVal = this.activatedRoute.snapshot.paramMap.get("val");
      
      if(txtsendS != null && curVal !=null){
        
        this.totalproducts = this.searchFunc(parseInt( curVal) ,txtsendS );
        this.activatedRoute.url.subscribe(url =>{
          const txtsendS = this.activatedRoute.snapshot.paramMap.get("txtSearch");
          const curVal = this.activatedRoute.snapshot.paramMap.get("val");
          this.totalproducts = this.searchFunc(parseInt(curVal) ,txtsendS );
            });
      }else{

        this.totalproducts = this.productServices.products;
      }

    this.CurrentPage = 1;
    this.setPage(this.CurrentPage);


    // console.log(txtsendS);
    // console.log(curVal);

    // this.activatedRoute.queryParams.subscribe(params => {
    //   const txtsendS = params['txtSearch'];
    //   debugger;
    //   const curVal = params['val'];
      
    //   console.log(txtsendS + curVal);
    //   console.log(curVal);
      
    // });
  }
  
  ngOnInit() {
    // debugger;
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



  searchFunc(cate:Number,txtS:string):Product[]{
    let retArr:Product[];
    retArr = [{}];
    let Arr:Product[];
    let i = 0;
    Arr = this.productServices.products;
    Arr.forEach(ele => {
          if((ele.category.id == cate && (ele.title.includes(txtS)||ele.description.includes(txtS)))
           || (cate == -1 && (ele.title.includes(txtS)||ele.description.includes(txtS)))){
            
              retArr[i] =ele;
              i++;
            
          }
          
    });

    return retArr;
  }

}
