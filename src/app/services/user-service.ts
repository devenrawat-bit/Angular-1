import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
}) 
//this above is the class decorator as it is placed above the class 
export class UserService {
  //service follows the s of the solid principle (single use)
  getSumOfTwo(one:number,two:number)
  {
    return one+two;
  }
}
