import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule], //remember to import FormsModule for ngModel to work
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  // string, number, boolean, date

  courseName: string = 'Angular 20';
  data:string="dev";
  data1:string="devd";
  // data1:string="devd";

  isActive: boolean = false;

  constructor() {
    console.log(this.courseName);
    this.courseName = 'Angular 20 - Updated';
    console.log(this.courseName);
    
  }

  fire()
  {
    alert('button clicked');
  }
  showCityName()
  {
    alert('city changed');
  }

  onWindowChange()
  {
    console.log("changed ");
  }

  fireMouse()
  {
    console.log('entered');
    
  }

}
