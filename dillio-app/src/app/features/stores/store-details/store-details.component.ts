import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IStoreDetails } from 'src/app/_models/store-details';
import { IFeedbackModalData, IFeedbackData } from 'src/app/_models/feedback-form';
import { StoresService } from 'src/app/services/stores.service';
import { Stores } from 'src/app/_models/stores';
import { IBranch } from 'src/app/_models/branch';
import { Reviews } from 'src/app/_models/Review';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit {

  submitted = false;
  feedbackForm: FormGroup;
  newStore:Stores;
  branches:IBranch[];
  errormessage:string;
  storeDetails: IStoreDetails;
  formData: IFeedbackModalData;
  reviewArr:Reviews[];
  count:number;
  id: number;
  private sub: any;

  constructor(private storeservice:StoresService,private route: ActivatedRoute) {
    this.newStore={branches:[]};
    this.storeDetails = {
      id: 1,
      name: 'souq.com',
      description: '100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom.' +
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis,' +
      ' earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
      logoUrl: 'https://www.logosvgpng.com/wp-content/uploads/2018/04/souq-com-logo-vector.png',
      siteUrl: 'https://Dillio.com/eg-en/',
      emails: ['email@Dillio.com', 'email2@Dillio.com'],
      branches: [{
        name: 'Cairo',
        address: 'Building No.2, Cairo, Egypt',
        phones: ['010123456789', '0111555888']
      },
      {
        name: 'Giza',
        address: 'Building No.2, Cairo, Egypt',
        phones: ['010123456789', '0111555888']
      }],
      deliveryInfo: 'Free Shipping',
      totalRating: 3.5,
      returnAndWarranty: [{
        question: 'Are returns permitted? What are the conditions and time limit?',
        answer: 'All products can be returned in their original condition free of charge.'
      }, {
        question: 'Will I be refunded or given a store credit to buy something else from Cairo Sales?',
        answer: 'You can either receive full refund for your entire order,' +
        ' or receive store credit which can be used to buy any products at a later date with no expiration date.'
      }],
      customerReviews: [{
        id: 1,
        avatarUrl: 'assets/images/product-details/user.png',
        username: 'Osama',
        productName: 'Mobile',
        rating: 4.2,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores ' +
        'adipisci optio ex, laboriosam facilis non pariatur itaque illo sunt?',
        reviewDate: '20 nov, 2018'
      }, {
        id: 2,
        avatarUrl: 'assets/images/product-details/user.png',
        username: 'Hossam',
        productName: 'watch',
        rating: 2.5,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores ' +
        'adipisci optio ex, laboriosam facilis ',
        reviewDate: '05 jan, 2015'
      }]
    };

    this.formData = {
      logoUrl: 'https://www.logosvgpng.com/wp-content/uploads/2018/04/souq-com-logo-vector.png',
      siteUrl: 'https://egypt.souq.com/eg-en/',
      description: '100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom.' +
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis,' +
      ' earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
      title: 'souq.com',
      feedbackData: {
        rating: 0,
        description: '',
        Name: '',
        email: ''
      }
    };
    this.count = 0;
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });

this.storeservice.getBranchesOfStore(this.id).subscribe(
  branch =>{
    this.branches = branch
  },
  error =>this.errormessage = <any>error
)

  this.storeservice.getStore(this.id).subscribe(
    stores =>{
      // debugger;
      this.newStore = stores;
    },
    error =>this.errormessage = <any>error
  );

this.storeservice.getReviewsOfStore(this.id).subscribe(
  review=>{
    // debugger;
    this.reviewArr = review;
  },
  error =>this.errormessage = <any>error
)

  }
  onModalFormSubmitted(event: IFeedbackData) {
    console.log(event);
  }
}


