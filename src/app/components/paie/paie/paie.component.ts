import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paie',
  templateUrl: './paie.component.html',
  styleUrls: ['./paie.component.css']
})
export class PaieComponent implements OnInit {
  @Input() start: number = 0;
  @Input() end: number = 8000;
  @Input() end1: number = 40;
  @Input() end2: number = 92;
  @Input() duration: number = 1000; // Durée en millisecondes

  currentNumber: number = 0;
  currentNumber1: number = 0;
  currentNumber2: number = 0;

  ngOnInit() {
    this.animateCounter(this.end, (value) => this.currentNumber = value);
    this.animateCounter(this.end1, (value) => this.currentNumber1 = value);
    this.animateCounter(this.end2, (value) => this.currentNumber2 = value);
  }

  private animateCounter(end: number, updateFunction: (value: number) => void): void {
    const interval = this.duration / end;
    let currentValue = 0;
    const timer = setInterval(() => {
      currentValue++;
      updateFunction(currentValue);

      if (currentValue >= end) {
        clearInterval(timer);
      }
    }, interval);
  }
}
