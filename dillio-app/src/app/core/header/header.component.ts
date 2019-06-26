
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/_models/category';
import { ViewActivatorService } from 'src/app/services/view-activator.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router, ActivatedRoute } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    
  }
constructor(){}
}
