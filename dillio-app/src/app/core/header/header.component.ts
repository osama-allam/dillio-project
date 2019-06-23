import { ViewActivatorService } from './../../services/view-activator.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private viewActivator: ViewActivatorService) { }

  ngOnInit() {
    this.viewActivator.headerActivator();
  }
  toggleDrop() {
    this.viewActivator.niceSelectToggleDrop();
  }
}
