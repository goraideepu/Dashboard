import { Component, OnInit } from '@angular/core';
import { AgChartsAngular } from 'ag-charts-angular';

@Component({
  selector: 'app-timeline-chart',
  standalone: true,
  imports: [AgChartsAngular],
  template: `
    <div class="chart-container">
      <ag-charts-angular
        [options]="chartOptions"
      >
      </ag-charts-angular>
    </div>
  `,
  styles: [`
    .chart-container {
      height: 300px;
      background-color: var(--dark-bg);
    }
  `]
})
export class TimelineChartComponent implements OnInit {
  public chartOptions = {
    background: {
      fill: 'var(--dark-bg)'
    },
    data: [
      { date: '01-OCT-24', b318: 10, b32sc: 5, sla: 15 },
      { date: '02-OCT-24', b318: 45, b32sc: 65, sla: 50 },
      { date: '03-OCT-24', b318: 32, b32sc: 34, sla: 72 },
      { date: '04-OCT-24', b318: 10, b32sc: 5, sla: 15 },
      { date: '05-OCT-24', b318: 45, b32sc: 65, sla: 50 }
    ],
    series: [
      {
        type: 'column',
        xKey: 'date',
        yKey: 'b318',
        yName: '3B18',
        fill: '#00a651'
      },
      {
        type: 'column',
        xKey: 'date',
        yKey: 'b32sc',
        yName: '3B2SC',
        fill: '#049fd9'
      },
      {
        type: 'column',
        xKey: 'date',
        yKey: 'sla',
        yName: 'SLA',
        fill: '#e31837'
      }
    ],
    axes: [
      {
        type: 'category',
        position: 'bottom',
        label: {
          color: 'white'
        },
        line: {
          color: '#333'
        }
      },
      {
        type: 'number',
        position: 'left',
        label: {
          color: 'white'
        },
        line: {
          color: '#333'
        }
      }
    ],
    legend: {
      position: 'bottom',
      color: 'white',
      item: {
        label: {
          color: 'white'
        }
      }
    }
  } as any;

  ngOnInit() {}
}