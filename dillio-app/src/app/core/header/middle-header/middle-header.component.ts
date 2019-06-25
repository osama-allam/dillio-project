
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/_models/category';
import {NgForm} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { ViewActivatorService } from 'src/app/services/view-activator.service';

declare var $: any;

@Component({
  selector: 'app-middle-header',
  templateUrl: './middle-header.component.html',
  styleUrls: ['./middle-header.component.css']
})
export class MiddleHeaderComponent implements OnInit {

  categories:Category[];
currentCatSearch:{val:Number, name:string};
txtSearch:string;
// @Output() outSearch=new EventEmitter<string>();
  constructor(
    private viewActivator: ViewActivatorService,
    private category:CategoryService,
    private router:Router,
    private activatedRoute : ActivatedRoute
    ) {
    this.categories = category.categories;
    this.currentCatSearch = {val:-1,name:"All"};

    const txtsendS = this.activatedRoute.snapshot.params.txtSearch;
    const curVal = this.activatedRoute.snapshot.params.val;


    if(curVal != null){
      this.currentCatSearch.val = parseInt(curVal);
    }

  }

  ngOnInit() {
    this.viewActivator.headerActivator();
    this.txtSearch="";
  }
  toggleDrop() {
    this.viewActivator.niceSelectToggleDrop();
  }


drpsearchclick(cat:Category){
  this.currentCatSearch.name = cat.name;
    this.currentCatSearch.val = cat.id;
}


searchbtnClick(){
  console.log(this.txtSearch);
  // this.outSearch.emit(this.txtSearch);
  let params = new URLSearchParams();

  // params.append('txtS', this.txtSearch);
  // params.append('curVal', this.currentCatSearch.val.toString());
  this.router.navigate(['/home/',this.txtSearch, this.currentCatSearch.val ]);
}

}
