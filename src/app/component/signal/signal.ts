import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
 course:string='angular';
 version =signal(20);
 //to make it a type specific
 duration=signal<string>('2 months');

 city=signal<string[]>(['nagpur','dehradun','pune']);

 addCity(cityName:string)
 {
  this.city.update((old:string[])=>[...old,cityName]); //spread opertaor, copy all the values of the older var
 }
}
