import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SummaryCardComponent } from './app/components/summary-card/summary-card.component';
import { MonthlyMetricComponent } from './app/components/monthly-metric/monthly-metric.component';
import { PartnerGridComponent } from './app/components/partner-grid/partner-grid.component';
import { TimelineChartComponent } from './app/components/timeline-chart/timeline-chart.component';
import { DashboardService } from './app/services/dashboard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    SummaryCardComponent, 
    MonthlyMetricComponent,
    PartnerGridComponent,
    TimelineChartComponent
  ],
  template: `
    <div class="dashboard-container">
      <div class="metrics-section">
        <div class="section-title">Today</div>
        <div class="metrics-grid">
          <app-summary-card
            label="SLA Violations"
            [value]="summaryData?.today?.slaViolations || 0"
            color="var(--danger-red)"
          ></app-summary-card>
          
          <app-summary-card
            label="Success Rate"
            [value]="(summaryData?.today?.successRate || 0) + '%'"
            color="var(--success-green)"
          ></app-summary-card>
          
          <app-summary-card
            label="Elapsed Time"
            [value]="(summaryData?.today?.elapsedTime || 0) + ' Min'"
            color="var(--text-light)"
          ></app-summary-card>
        </div>

        <div class="section-title">This Month</div>
        <div class="monthly-metrics">
          <app-monthly-metric
            label="SLA Breached"
            [value]="summaryData?.thisMonth?.slaBreached || 0"
            color="var(--danger-red)"
          ></app-monthly-metric>
          
          <app-monthly-metric
            label="3B18 Sent"
            [value]="summaryData?.thisMonth?.b318Sent || 0"
            color="var(--success-green)"
          ></app-monthly-metric>
          
          <app-monthly-metric
            label="3B2SC Received"
            [value]="summaryData?.thisMonth?.b32scReceived || 0"
            color="var(--primary-blue)"
          ></app-monthly-metric>
        </div>

        <app-partner-grid></app-partner-grid>
        <app-timeline-chart></app-timeline-chart>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-container {
      padding: 2rem;
      background-color: var(--dark-bg);
      min-height: 100vh;
    }
    
    .metrics-section {
      max-width: 1400px;
      margin: 0 auto;
    }
  `]
})
export class App implements OnInit {
  summaryData: any;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadSummaryData();
  }

  private loadSummaryData() {
    this.dashboardService.getSummaryStatistics().subscribe(
      data => this.summaryData = data
    );
  }
}

bootstrapApplication(App, {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    DashboardService
  ]
}).catch(err => console.error(err));