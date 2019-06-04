import { Component, OnInit, Input } from '@angular/core';
import { Stores } from 'src/app/_models/stores';
import { StoresService } from 'src/app/services/stores.service';

@Component({
  selector: 'app-stores-list',
  templateUrl: './stores-list.component.html',
  styleUrls: ['./stores-list.component.css']
})
export class StoresListComponent implements OnInit {
  @Input() stores: Stores[];
  constructor(private storeService: StoresService) { }

  ngOnInit() {
    this.stores = this.storeService.getAll();
  }
}
