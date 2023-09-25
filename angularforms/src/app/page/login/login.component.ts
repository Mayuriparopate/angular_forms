import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
 obj;
  constructor(private router:Router,private commonService:CommonServiceService) { }

  ngOnInit() {
  }
  submit(myForm:NgForm){
    this.obj={
      mobile:myForm.value.mobile,
      email:myForm.value.email
    }
    

    this.commonService.setUserData(this.obj);
    this.router.navigate(['/userDetails']);
  }
}
