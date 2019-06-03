import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { CategoryService } from 'src/app/services/category.service';
import { SubcategoryService } from 'src/app/services/subcategory.service';
import { SubCategory } from 'src/app/_models/subcategory';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {
@Input() categories:Category[];
@Input() subcategories:SubCategory[];
  constructor(private catservice:CategoryService,private subcat:SubcategoryService) { }

  ngOnInit() {
    this.categories=this.catservice.getall();
    this.subcategories=this.subcat.getall();
  }

}
