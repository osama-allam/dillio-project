import { Injectable } from '@angular/core';
import { Stores } from '../_models/stores';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { store } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
stores:Stores[];
  constructor() { 
    this.stores=[
      {id:1,name:'town team',image:'./assets/images/stores/applianceeg.png'},
      {id:2,name:'Imedia Stores',image:'./assets/images/stores/rizkalla.png'},
      {id:3,name:'diwanegypt',image:'./assets/images/stores/btech.png'},
      {id:4,name:'taki-vita',image:'./assets/images/stores/compume.png'},
      {id:5,name:'flipflopsegypt',image:'./assets/images/stores/digitalcity.png'},
      {id:6,name:'Carrefour',image:'./assets/images/stores/egygamer.png'},
      {id:7,name:'radioshack',image:'./assets/images/stores/radioshack.png'},
      {id:8,name:'Rizkalla',image:'./assets/images/stores/rizkalla.png'},
      {id:9,name:'Orange',image:'./assets/images/stores/orange.png'},
      {id:10,name:'Souq',image:'./assets/images/stores/applianceeg.png'},
      {id:11,name:'Jumia',image:'./assets/images/stores/applianceeg.png'},
      {id:12,name:'Cairo sales',image:'./assets/images/stores/applianceeg.png'},
      {id:13,name:'B.Tech',image:'./assets/images/stores/btech.png'},
      {id:14,name:'computer shop',image:'./assets/images/stores/computershop.png'},
      {id:15,name:'egypt labtop',image:'./assets/images/stores/egyptlaptop.png'},
      {id:16,name:'buri',image:'./assets/images/stores/applianceeg.png'},
      {id:17,name:'herobabystore',image:'./assets/images/stores/applianceeg.png'},
      {id:18,name:'Appliance Egypt',image:'./assets/images/stores/applianceeg.png'},
      {id:19,name:'fitnesshubeg',image:'./assets/images/stores/egyptlaptop.png'},
      {id:20,name:'Jansport Egyp',image:'./assets/images/stores/jansport.png'},
      {id:21,name:'Bescletta',image:'./assets/images/stores/twelvewatch.png'},
      {id:22,name:'The Giftery',image:'./assets/images/stores/iwatchstores.png'},
      {id:23,name:'The Makan',image:'./assets/images/stores/themakan.png'},
      {id:24,name:'One Roof Store',image:'./assets/images/stores/applianceeg.png'},
  ];
  }

getAll():Stores[]{
  return this.stores.slice();
}
}
