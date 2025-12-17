import { Component } from '@angular/core';
import { B } from '../b/b';

@Component({
  selector: 'app-a',
  imports: [B],
  templateUrl: './a.html',
  styleUrl: './a.css',
})
export class A {

}
