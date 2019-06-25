import { Category } from './category';

export interface Productlisting{
    id?:number;
    price?:number;
    description?:string;
    title?:string;
    largeimageUrl?:string[];
    category?:Category;
}