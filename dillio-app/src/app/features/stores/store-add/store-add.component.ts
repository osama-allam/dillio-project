import { Component, OnInit, Input } from '@angular/core';
import { Stores } from 'src/app/_models/stores';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {
@Input() store:Stores;
  constructor() { }

  ngOnInit() {
    this.store={};
  }

  save(myform:NgForm){
    console.log(this.store);
  }

}
