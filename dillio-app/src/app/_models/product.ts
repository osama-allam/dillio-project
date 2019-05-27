
import { Category } from './category';


export interface Product{
    id?:number;
    price?:number;
    discount?:number;
    largeimageUrl?:string[];
    smallimageUrl?:string[];
    category?:Category;
    tags?:string[];
}