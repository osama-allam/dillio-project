import { IBranch } from './branch';
import { ICustomerReview } from './customer-review';

export interface IStoreDetails {
  logoUrl: string;
  name: string;
  siteUrl: string;
  branches: IBranch[];
  totalRating: number;
  deliveryInfo: string;
  customerReviews: ICustomerReview[];
  returnAndReview: [{question: string, answer: string}];
}
