import { Component } from '@angular/core';

@Component({
  selector: 'app-print-pill',
  templateUrl: './print-pill.component.html',
  styleUrls: ['./print-pill.component.css']
})
export class PrintPillComponent {
  collapseStates: boolean[] = [false, false, false, false,true]; // Keep track of collapse states for each index

  toggleCollapse(index: number): void {
    this.collapseStates[index] = !this.collapseStates[index];
  }

  isCollapseOpen(index: number): boolean {
    return this.collapseStates[index];
  }
}
