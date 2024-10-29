import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { DashboardService } from '../../services/dashboard.service';
import { Partner } from '../../interfaces/dashboard.interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partner-grid',
  standalone: true,
  imports: [AgGridAngular, CommonModule],
  template: `
    <div class="grid-container">
      <ag-grid-angular
        class="ag-theme-alpine-dark"
        [rowData]="partners"
        [columnDefs]="columnDefs"
        [defaultColDef]="defaultColDef"
        domLayout="autoHeight"
      >
      </ag-grid-angular>
    </div>
  `,
  styles: [`
    .grid-container {
      background-color: var(--card-bg);
      padding: 0;
      border-radius: 4px;
    }
    
    :host ::ng-deep .ag-theme-alpine-dark {
      --ag-header-background-color: var(--primary-blue);
      --ag-header-foreground-color: white;
      --ag-background-color: var(--card-bg);
      --ag-row-hover-color: rgba(255, 255, 255, 0.1);
      --ag-header-column-separator-display: none;
    }
    
    ag-grid-angular {
      width: 100%;
      height: 400px;
    }
  `]
})
export class PartnerGridComponent implements OnInit {
  partners: Partner[] = [];
  columnDefs: ColDef[] = [
    { 
      field: 'name', 
      headerName: 'DC Partner Name', 
      flex: 2
    },
    { 
      field: 'packoutTo3b18Time', 
      headerName: 'Packout message receipt to 3B18 elapsed time', 
      flex: 1,
      valueFormatter: params => `${params.value} min`
    },
    { 
      field: 'packoutTo3b2scTime', 
      headerName: 'Packout message to 3B2SC - elapsed time', 
      flex: 1,
      valueFormatter: params => `${params.value} min`
    }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true
  };

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.loadPartners();
  }

  private loadPartners() {
    this.dashboardService.getPartners().subscribe(
      response => this.partners = response.partners
    );
  }
}