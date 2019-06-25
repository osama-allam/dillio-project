export interface IFeedbackModalData {
  logoUrl: string;
  siteUrl: string;
  title: string;
  description: string;
  feedbackData: IFeedbackData;
}
export interface IFeedbackData {
  rating: number;
  userReview: string;
  username: string;
  email: string;
}
