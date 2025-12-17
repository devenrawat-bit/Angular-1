import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  imports: [FormsModule, CommonModule],
  templateUrl: './photos.html',
  styleUrl: './photos.css',
})
export class Photos implements OnInit {

  test = signal(12);

  /**
   *
   */
  constructor() {
    debugger;
    this.getAllPhotos()
    console.log("ctor", this.photosList);
  }

  ngOnInit() {
    setTimeout(() => {
      this.test.set(456);
    }, 2000);
  }




  //get call 
  photosList: any;
  // test: any;
  //post api call 
  newPhoto: any = {
    "albumId": 0,
    "id": 0,
    "title": "test",
    "url": "test",
    "thumbnailUrl": "test"
  }



  // constructor(private http:HttpClient) {
  // } this is the older way to hit the api via di using ctor injection, below is the modern way to do so 

  http = inject(HttpClient); //new way 
  cdr = inject(ChangeDetectorRef);
  //now the below method will not called automatically so we have to implement the oninit

  //at soon as the page will load this ngoninit will be called and that will trigger the call 

  getAllPhotos() {
    debugger;
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((result: any) => {
      this.photosList = result;
      // this.cdr.detectChanges();
      console.log(this.photosList);
    })
  }

  //post call 
  postPhoto() {
    // debugger;
    this.http.post('https://jsonplaceholder.typicode.com/photos', this.newPhoto).subscribe((result: any) => {
      alert('api call success');
      // debugger;
    })
  }
}
