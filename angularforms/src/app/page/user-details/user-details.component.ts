import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  data
  list
  constructor(private commonService:CommonServiceService,private router:Router) { 

    
  }
 
  ngOnInit():void {
  
   this.commonService.updatedValue.subscribe(data=>this.data = data);
    this.commonService.updatedValue.subscribe(data=>{
      this.data = data;
     })
    ;
    this.getData();
    
  }
  editProfile(){
this.router.navigate(['/editProfile'])
  }

  getData(){
    this.commonService.getList().subscribe((data)=>{
      this.list = data;
      this.addValue()
    })
  }

  addValue(){
    this.list = this.list.filter((element,index) => {
      this.list[index].push({selected:false})
    });
  }

}
