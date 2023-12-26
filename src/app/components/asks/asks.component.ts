import { Component } from '@angular/core';

@Component({
  selector: 'app-asks',
  templateUrl: './asks.component.html',
  styleUrls: ['./asks.component.css']
})
export class AsksComponent {
  collapsed: { [key: number]: boolean } = {};
  
  constructor() {
    // Initialize all FAQ items to be collapsed
    for (let i = 1; i <= 6; i++) {
      this.collapsed[i] = false;
    }
  }

  toggleCollapse(id: number) {
    this.collapsed[id] = !this.collapsed[id];
  }
}