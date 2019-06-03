import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IStoreDetails } from 'src/app/_models/store-details';
import { ViewActivatorService } from './../../../services/view-activator.service';
import { Subscription } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-store-details',
  templateUrl: './store-details.component.html',
  styleUrls: ['./store-details.component.css']
})
export class StoreDetailsComponent implements OnInit, OnDestroy {

  // subscription: Subscription;
  storeDetails: IStoreDetails;
  feedbackForm: FormGroup;
  constructor(private viewActivator: ViewActivatorService) {
    this.storeDetails = {
      name: 'souq.com',
      description: '100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom.' +
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. quibusdam corporis,' +
      ' earum facilis et nostrum dolorum accusamus similique eveniet quia pariatur.',
      logoUrl: 'https://www.logosvgpng.com/wp-content/uploads/2018/04/souq-com-logo-vector.png',
      siteUrl: 'https://egypt.souq.com/eg-en/',
      emails: ['email@souq.com','email2@souq.com'],
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
        answer: 'You can either receive full refund for your entire order,'+
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

   }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      'customerRating': new FormControl('', Validators.required),
      'userReview': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }
  onSubmit() {
    console.log(this.feedbackForm);
    this.resetForm();
  }
  resetForm() {
    this.feedbackForm.reset({
      'customerRating': '',
    });
  }
  ngOnDestroy(): void {
    // this.subscription.unsubscribe();

  }
}
