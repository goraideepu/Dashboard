import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SummaryStatistics, TimelineData, Partner, SLAViolation } from '../interfaces/dashboard.interfaces';
import { MOCK_SUMMARY_DATA, MOCK_PARTNERS_DATA } from './mock-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly apiUrl = '/api/dashboard';
  private readonly useMockData = true; // Toggle this to switch between mock and real API

  constructor(private http: HttpClient) {}

  getSummaryStatistics(): Observable<SummaryStatistics> {
    if (this.useMockData) {
      return of(MOCK_SUMMARY_DATA);
    }
    return this.http.get<SummaryStatistics>(`${this.apiUrl}/summary`);
  }

  getTimelineData(startDate: string, endDate: string): Observable<{ data: TimelineData[], totalRecords: number }> {
    if (this.useMockData) {
      return of({ data: [], totalRecords: 0 }); // Add mock timeline data if needed
    }
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);
    return this.http.get<{ data: TimelineData[], totalRecords: number }>(`${this.apiUrl}/timeline`, { params });
  }

  getPartners(): Observable<{ partners: Partner[] }> {
    if (this.useMockData) {
      return of(MOCK_PARTNERS_DATA);
    }
    return this.http.get<{ partners: Partner[] }>(`${this.apiUrl}/partners`);
  }

  getSLAViolations(date: string, page: number, size: number): Observable<{
    violations: SLAViolation[];
    totalCount: number;
    currentPage: number;
    totalPages: number;
  }> {
    if (this.useMockData) {
      return of({
        violations: [],
        totalCount: 0,
        currentPage: 0,
        totalPages: 0
      });
    }
    const params = new HttpParams()
      .set('date', date)
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(`${this.apiUrl}/violations`, { params });
  }
}