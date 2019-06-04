import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IFeedbackModalData, IFeedbackData } from 'src/app/_models/feedback-form';
declare var $: any;

@Component({
  selector: 'app-feedback-form-modal',
  templateUrl: './feedback-form-modal.component.html',
  styleUrls: ['./feedback-form-modal.component.css']
})
export class FeedbackFormModalComponent implements OnInit {

  @Input() editMode = false;
  @Input() formData: IFeedbackModalData;
  @Output() formSubmitted = new EventEmitter<IFeedbackData>();
  submitted = false;
  submittedData: IFeedbackData;
  feedbackForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.initForm();
    $('#myModal').modal({backdrop: 'static', keyboard: false});
  }

  initForm() {
    this.feedbackForm = new FormGroup({
      customerRating: new FormControl('', Validators.required),
      userReview: new FormControl(null, Validators.required),
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email])
    });
  }
  onSubmit() {
    if (this.feedbackForm.valid) {
      this.submittedData = this.fillSubmittedData(this.feedbackForm);
      this.formSubmitted.emit(this.submittedData);
      this.resetForm();
      $('#mymodal').modal('toggle');
    } else {
      this.validateAllFormFields(this.feedbackForm);
    }
  }
  resetForm() {
    this.feedbackForm.reset({
      customerRating: '',
    });
  }
  fillSubmittedData(form: FormGroup): IFeedbackData {
    let data: IFeedbackData;
    data = {
      rating: form.value.customerRating,
      userReview: form.value.userReview,
      username: form.value.username,
      email: form.value.email
    };
    return data;
  }
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
}
}
