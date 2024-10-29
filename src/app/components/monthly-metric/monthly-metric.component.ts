import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monthly-metric',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="metric-card">
      <div class="metric-label" [style.color]="color">{{ label }}</div>
      <div class="metric-value" [style.color]="color">{{ value }}</div>
    </div>
  `,
  styles: [`
    .metric-card {
      text-align: left;
    }
    .metric-label {
      font-size: 1.2rem;
    }
    .metric-value {
      font-size: 2rem;
      font-weight: bold;
    }
  `]
})
export class MonthlyMetricComponent {
  @Input() label!: string;
  @Input() value!: number;
  @Input() color: string = '#ffffff';
}