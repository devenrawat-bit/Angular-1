import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
// import { elementAt } from 'rxjs';

@Component({
  selector: 'app-attribute',
  imports: [NgClass, NgStyle],
  templateUrl: './attribute.html',
  styleUrl: './attribute.css',
})
export class Attribute {
  val = signal<boolean>(false);

  studentList = [
    { name: 'deven', city: 'dehradun', 'status': true },
    { name: 'rahul', city: 'solahpur', 'status': false },
    {
      name: 'rocky', city: 'tehri', status: true
    }
  ]
  themeClass: string = "bg-success";
  textColor: string = 'lightBlue';

  myCss: any = {
    'background-color': 'blue',
    'color': 'white',
    'font-size': '30px'
  }





























  //  studentList.forEach(item => {
  //   console.log(item.name); });


  // ngOnInit() {
  //   this.studentList.forEach(item => {
  //     console.log('studentList ' + item.name);
  //   });
  // }
}
