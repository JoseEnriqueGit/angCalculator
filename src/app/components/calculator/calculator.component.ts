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

    if (value === '=') {
      try {
        if (this.display === '' || this.display === 'Error') {
          this.display = this.display = '';
        } else {
          this.display = eval(this.display).toString();
        }
      } catch {
        this.display = 'Error';
      }
    } else if (value === 'C') {
      this.display = '';
    } else if (value === 'DEL') {
      this.display = this.display.slice(0, -1);
    } else {
      if (this.display === 'Error') {
        this.display = '';
        this.display = this.display.concat(event.currentTarget.name);
      } else {
        this.display = this.display.concat(event.currentTarget.name);
      }
    }
  }
}
