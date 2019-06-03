import { IBranch } from './branch';
import { ICustomerReview } from './customer-review';

export interface IStoreDetails {
  logoUrl: string;
  name: string;
  description: string;
  siteUrl: string;
  emails: string[];
  branches: IBranch[];
  totalRating: number;
  deliveryInfo: string;
  customerReviews: ICustomerReview[];
  returnAndWarranty: {question: string, answer: string}[];
}
