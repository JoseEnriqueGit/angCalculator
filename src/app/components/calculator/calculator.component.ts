import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  display = '';

  onClick(event: any) {
    const value = event.currentTarget.name;

    console.log(event.currentTarget.name);

    if (value === '=') {
      try {
        this.display = eval(this.display).toString();
      } catch {
        this.display = 'Error';
      }
    } else if (value === 'C') {
      this.display = '';
    } else {
      this.display = this.display.concat(event.currentTarget.name);
    }
  }
}
