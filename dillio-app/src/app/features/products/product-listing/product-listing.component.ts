import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { PagingService } from 'src/app/services/paging.service';
import { ActivatedRoute } from '@angular/router';
import { Productlisting } from 'src/app/_models/product-listing-viewmodel';
import { IProduct } from 'src/app/_models/product';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  totalproducts: IProduct[];
  products: IProduct[];
  CurrentPage:number;
  totalpages:number;
  Arr = Array;
  constructor(
    private productServices: ProductService,
    private pagerService: PagingService,
    private activatedRoute: ActivatedRoute,
    private categoryService:CategoryService) {

      // const txtsendS = this.activatedRoute.snapshot.paramMap.get("txtSearch");
      // const curVal = this.activatedRoute.snapshot.paramMap.get("val");

      // if(txtsendS != null && curVal !=null){

      //   this.totalproducts = this.searchFunc(parseInt( curVal) ,txtsendS );

      // }else{

      this.totalproducts = [];
      this.products = [];

        this.productServices.getall().subscribe(pro => {
          debugger;
          this.totalproducts = pro;
          this.CurrentPage = 1;
          this.setPage(this.CurrentPage);
        });
      // }

    


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
    //  debugger;
    this.activatedRoute.url.subscribe( url =>{
      debugger;

      const txtsendS = this.activatedRoute.snapshot.paramMap.get("txtSearch");
      const curVal = this.activatedRoute.snapshot.paramMap.get("val");
      if(txtsendS != null && curVal !=null){
       this.searchFunc(parseInt(curVal) ,txtsendS );
     
     
      
      }else{
        this.productServices.getall().subscribe(pro => {
          this.totalproducts = pro;
          this.CurrentPage = 1;
          this.setPage(this.CurrentPage);
        });
      this.totalproducts = this.searchFunc(parseInt(curVal) ,txtsendS );
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

      window.scrollTo({ left: 0, top: 300, behavior: 'smooth' });
    }
}

searchFunc(cate:Number,txtS:string):IProduct[]{
  let retArr:IProduct[];
   retArr = [];
  let Arr:IProduct[];
  let i = 0;
  this.productServices.getall().subscribe(pro => {
    Arr = pro;
   
    Arr.forEach(ele => {

        if((ele.categoryId == cate && (ele.name.toLowerCase().includes(txtS)||ele.description.toLowerCase().includes(txtS.toLowerCase())))
        || (cate == -1 && (ele.name.toLowerCase().includes(txtS.toLowerCase())||ele.description.toLowerCase().includes(txtS.toLowerCase())))
        ||(txtS == "" && ele.categoryId == cate)){
          debugger;
          retArr[i] =ele;
          i++;
          
        }

        
      });



      this.totalproducts = retArr;


        if(!this.totalproducts[0]){
          this.productServices.getall().subscribe(pro => {
            this.totalproducts = pro;
            this.CurrentPage = 1;
            this.setPage(this.CurrentPage);
          });
          
           window.alert("your search wasn't found");
        }
        this.CurrentPage = 1;
        this.setPage(this.CurrentPage);

  });

  return retArr;
}


getCategory(catId:number):string{
  if(catId != undefined){
    this.categoryService.getCategory(catId).subscribe(ca => {
      return ca.name;
    });
  }

    return "";
}

}
