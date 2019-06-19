import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { IContactUsSubject } from 'src/app/_model/icontactus-subject';
import { IContactUs } from 'src/app/_model/icontactus';
import { ContactSubjectService } from 'src/app/_services/icontactus-subject.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  icontactus: IContactUs;
  subjects: IContactUsSubject[];

  constructor(private contactSubjectService: ContactSubjectService) { }

  ngOnInit() {
    this.icontactus={};
    this.subjects = this.contactSubjectService.getAll();
  }

  onSubmit(myForm: NgForm){
    this.icontactus.name = myForm.value.customerName;
    this.icontactus.email = myForm.value.customerEmail;
    this.icontactus.message = myForm.value.contactMessage;
    this.icontactus.fkSubjectId = myForm.value.ddlSubject; 
  }

}
