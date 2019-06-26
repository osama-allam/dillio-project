import { Image } from './../_model/image';

import { Category } from './category';


export interface Product{
    id?:number;
    price?:number;
    discount?:number;
    description?:string;
    title?:string;
    largeimageUrl?:string[];
    smallimageUrl?:string[];
    category?:Category;
}
export interface Spec {
  name: string;
  value: string;
  ProductId: number;

}
export interface IProduct {
  id: number;
  name: string;
  price: number;
  discount: number;
  categoryId: number;
  description: string;
  specs: Spec[];
  images: Image[];
}
export interface ProductResolved {
  product: IProduct;
  error?: any;
}


export interface IProductList {
  id: number;
  name: string;
  price: number;
  discount: number;
  description: string;
  categoryId: number;
  categoryName:string;
  images: Image[];
}
