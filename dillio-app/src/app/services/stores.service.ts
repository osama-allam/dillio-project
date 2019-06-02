import { Injectable } from '@angular/core';
import { IStoreDetails } from '../_models/store-details';

@Injectable({
  providedIn: 'root'
})
export class StoresService {
  storeDetails: IStoreDetails;
  constructor() { }
}
