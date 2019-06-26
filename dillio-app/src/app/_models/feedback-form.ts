export interface IFeedbackModalData {
  logoUrl: string;
  siteUrl: string;
  title: string;
  description: string;
  feedbackData: IFeedbackData;
}
export class IFeedbackData {
  description?:string;
  Name?: string;
  email?: string;
  rating?: number;
  StoreId?:number;
}
