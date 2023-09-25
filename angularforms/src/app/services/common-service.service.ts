import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
 userDetails =new BehaviorSubject<string>("default message");
 updatedValue = this.userDetails.asObservable();
// private userVal = new BehaviorSubject<string>("default message");
// currentMessage = this.userVal.asObservable();
//userDetails =new Subject<string>();
  constructor(private http:HttpClient) { }

 async setUserData(data){
   this.userDetails.next(data)
  }

  getList():Observable<any>{
return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}
