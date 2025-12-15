import { AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './component/admin/admin';
import { DataBinding } from "./component/data-binding/data-binding";
import { Signal } from "./component/signal/signal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, DataBinding, Signal],
  templateUrl: './app.html', 
  styleUrl: './app.css'
})
export class App implements OnInit, AfterViewInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  } //the oninit here is the interface

  protected readonly title = signal('App Sec');

  ngOnInit(): void { //this the lifecycle 
    console.log('app component initialized');
  }

  ngAfterViewInit(): void {
    console.log('app component view initialized-onDestroy');
  }
}
