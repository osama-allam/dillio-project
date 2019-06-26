
export interface Reviews{
    id?:number;
    description?:string;
    name?:string;
    email?:string;
    productId?:number;
    UserId?:number;
    StoreId:number;
    Date?:string;
    rating?:number;
    // avatarUrl?:string;
}
export interface ReviewToDisplay{
  id?:number;
  reviewDescription?:string;
  name?:string;
  email?:string;
  UserId?:number;
  reviewDate?:string;
  rating?:number;
  // avatarUrl?:string;
}
export interface ReviewResolved {
  reviews: ReviewToDisplay[];
  error?: any;
}
