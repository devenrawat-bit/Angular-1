import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  imports: [ReactiveFormsModule],
  styleUrl: './user.css',
})
export class User {
  http = inject(HttpClient);//to make the api calls 

  userForm = new FormGroup({
    userId: new FormControl(1),
    emailId: new FormControl(''),
    password: new FormControl(''),
    fullName: new FormControl(''),
    mobileNo: new FormControl('')
  });

  // onSaveUser() {
  //   const formValue = this.userForm.value;
  //   //this will give the data in the object form, and now the data is ready for the api call 
  //   this.http.post('https://api.freeprojectapi.com/api/GoalTracker/register', formValue).subscribe((result: any) => {
  //     alert('user registered successfully');
  //   })
  // }
  //the below one is the modern way to use the subscribe method 


  onSaveUser() {
    const formVal = this.userForm.value;
    this.http.post('/api/GoalTracker/register', formVal).subscribe({
      next: (res: any) => {
        alert("User registered successfully!");
        this.userForm.reset({ userId: 1 });
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('Registration failed. Please try again.');
      }
    })
  }
}
