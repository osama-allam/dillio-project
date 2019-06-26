
import { Component, OnInit } from '@angular/core';


declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
     category.getall().subscribe(cate => {
      this.categories = cate;
    });
    this.currentCatSearch = {val:-1,name:"All"};

    const txtsendS = this.activatedRoute.snapshot.params.txtSearch;
    const curVal = this.activatedRoute.snapshot.params.val;


  constructor() { }

  ngOnInit() {
  }


}
