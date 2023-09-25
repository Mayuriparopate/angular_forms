import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Builder } from 'protractor';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
reactiveform ;
obj;
  constructor(private fb:FormBuilder,private commonService:CommonServiceService,private router:Router) {
    this.reactiveform= this.fb.group({
      'name':['',Validators.required],
      'email':['',[Validators.required,Validators.email]],
      'mobile':['',[Validators.required,Validators.pattern('[0-9]{10}')]],
    })
   }

  ngOnInit(): void {
  }
  submit(){
    this.obj={
      name: this.reactiveform.value.name,
      email:this.reactiveform.value.email,
      mobile:this.reactiveform.value.mobile
    }
    this.commonService.setUserData(this.obj);
    this.router.navigate(['/userDetails']);
  }

}
