import { IBranch } from './branch';

export interface Stores {
    id?: number;
    name?: string;
    Url?: string;
    description?:string;
    Rating?: number;
    branches?: IBranch[];
    //emails?:string[];
}
