import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any = {};
  constructor(private Auth:AuthService) { }

  ngOnInit() {
  }

  register(){
    this.Auth.register(this.model).subscribe(next =>{
      console.log("Registered Successfully");
    },err=>{
      console.log("Did not register");
    });
  }

  cancel(){
    console.log("canceled")
  }
}
