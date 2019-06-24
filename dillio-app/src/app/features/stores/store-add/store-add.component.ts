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
public response;

  constructor(private storeservice:StoresService) {
  this.response={dbpath:''};
   }

  ngOnInit() {
    this.store={};
    this.newstore={}; 
  }

  public uploadFinished = (event) => {
    this.response = event;
  }
   OnAddStore(myform:NgForm){
     
     this.newstore={
       name:this.store.name,
       description:this.store.description,
       Url:this.response.dbPath
     }

    this.storeservice.Add(this.newstore).subscribe(
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
