import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  select: string = '';
  isStudentActive = signal<boolean>(false);

  changeStatus(value: boolean) {
    this.isStudentActive.set(value);
  }

  cityList = ["Pune", "Nagpur", ["Mumbai"]];
}

