import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { PagingService } from 'src/app/services/paging.service';
import { ActivatedRoute } from '@angular/router';
import { Productlisting } from 'src/app/_models/product-listing-viewmodel';
import { IProductList } from 'src/app/_models/product';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  totalproducts: IProductList[];
  products: IProductList[];
  CurrentPage:number;
  totalpages:number;
  Arr = Array;
  constructor(
    private productServices: ProductService,
    private pagerService: PagingService,
    private activatedRoute: ActivatedRoute) {

      const txtsendS = this.activatedRoute.snapshot.paramMap.get("txtSearch");
      const curVal = this.activatedRoute.snapshot.paramMap.get("val");
      this.totalproducts = [];
      this.products = [];
      if(txtsendS != null && curVal !=null){

        this.totalproducts = this.searchFunc(parseInt( curVal) ,txtsendS );

      }else{
        this.productServices.getall().subscribe(pro => {
          this.totalproducts = pro;
          debugger;
          this.CurrentPage = 1;
          this.setPage(this.CurrentPage);
        });
      }


    // console.log(txtsendS);
    // console.log(curVal);

    // this.activatedRoute.queryParams.subscribe(params => {
    //   const txtsendS = params['txtSearch'];
    //    
    //   const curVal = params['val'];

    //   console.log(txtsendS + curVal);
    //   console.log(curVal);

    // });
  }

  ngOnInit() {
    //   
    this.activatedRoute.url.subscribe(url =>{
         

      const txtsendS = this.activatedRoute.snapshot.paramMap.get("txtSearch");
      const curVal = this.activatedRoute.snapshot.paramMap.get("val");
      if(txtsendS != null && curVal !=null){
        this.totalproducts = this.searchFunc(parseInt(curVal) ,txtsendS );
     
     
      
      }else{
        this.productServices.getall().subscribe(pro => {
          this.totalproducts = pro;
          this.CurrentPage = 1;
          this.setPage(this.CurrentPage);

        });
      
      // // debugger;
      // if(!this.totalproducts[0].title){
      //   this.totalproducts = this.productServices.products;
      //   window.alert("your search wasn't found");

      // }
      this.CurrentPage = 1;
      this.setPage(this.CurrentPage);
      }
        });
  }

  pager: any = {};

  setPage(page: number) {
    //  
    this.pager = this.pagerService.getPage(this.totalproducts.length, page);

    this.products = this.totalproducts.slice(this.pager.startIndex, this.pager.endIndex + 1);

    this.totalpages = this.pager.totalPages;
  }

  changePage(pageNum:number){
    //  
    if(pageNum <= this.totalpages && pageNum >= 1){

      this.CurrentPage = pageNum;
      this.setPage(this.CurrentPage);
      // window.scrollTo(0, 0);

      window.scrollTo({ left: 0, top: 250, behavior: 'smooth' });
    }
}

searchFunc(cate:Number,txtS:string):IProductList[]{
  let retArr:IProductList[];
  retArr = [];
  let Arr:IProductList[];
  let i = 0;
   this.productServices.getall().subscribe(pro => {
    Arr = pro;
    Arr.forEach(ele => {
      if((ele.categoryId == cate && (ele.name.toLowerCase().includes(txtS)||ele.description.toLowerCase().includes(txtS.toLowerCase())))
      || (cate == -1 && (ele.name.toLowerCase().includes(txtS.toLowerCase())||ele.description.toLowerCase().includes(txtS.toLowerCase())))
      ||(cate == ele.categoryId && txtS=="")){
        
        retArr[i] =ele;
        i++;
        
      }
      
    });
    this.totalproducts = retArr;
     
    if(this.totalproducts.length == 0){
      this.productServices.getall().subscribe(pro => {
        this.totalproducts = pro;
        this.CurrentPage = 1;
        this.setPage(this.CurrentPage);
        window.alert("your search wasn't found");

      });

    }

    this.CurrentPage = 1;
    this.setPage(this.CurrentPage);
  });

  return retArr;
}



deletePro(proId:Number){
   var result= window.confirm("Are you sure You want to delete this product ?!!");
   if(result){
        this.productServices.DeleteProduct(proId);
   }
}
}
