
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