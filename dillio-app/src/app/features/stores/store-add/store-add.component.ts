import { Component, OnInit, Input } from '@angular/core';
import { Stores } from 'src/app/_models/stores';
import { NgForm } from '@angular/forms';
import { StoresService } from 'src/app/services/stores.service';

@Component({
  selector: 'app-store-add',
  templateUrl: './store-add.component.html',
  styleUrls: ['./store-add.component.css']
})
export class StoreAddComponent implements OnInit {
@Input() store:Stores;
newstore:Stores;
oldstore:Stores;
editmode = false;
stores:Stores[];
  constructor(private storeservice:StoresService) { }

  ngOnInit() {
    this.store={};
    
  }

   OnAddStore(myform:NgForm){
    this.storeservice.Add(this.store).subscribe(
      store=>this.stores.push(store)
    );
    console.log('done');

  //    this.newstore = {name:this.store.name , description:this.store.description,Url:this.store.Url,Rating:3.5};
  // //   if(this.editmode){
  // //     this.storeservice.edit(this.store.id,this.newstore);
  // //   }
  // //   else {
  //     this.storeservice.Add(this.newstore);
  // //   }
   }



}
