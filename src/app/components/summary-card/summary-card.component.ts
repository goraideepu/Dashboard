import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="metric-card">
      <div class="metric-label">{{ label }}</div>
      <div class="metric-value" [style.color]="color">{{ value }}</div>
    </div>
  `,
  styles: [`
    .metric-card {
      text-align: left;
    }
  `]
})
export class SummaryCardComponent {
  @Input() label!: string;
  @Input() value!: string | number;
  @Input() color: string = '#ffffff';
}