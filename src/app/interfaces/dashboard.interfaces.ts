export interface SummaryStatistics {
  today: {
    slaViolations: number;
    successRate: number;
    elapsedTime: number;
  };
  thisMonth: {
    slaBreached: number;
    b318Sent: number;
    b32scReceived: number;
    elapsedTime: number;
  };
}

export interface TimelineData {
  date: string;
  slaViolations: number;
  b318Sent: number;
  b32scReceived: number;
}

export interface Partner {
  partnerId: string;
  name: string;
  packoutTo3b18Time: number;
  packoutTo3b2scTime: number;
  status: 'active' | 'inactive';
}

export interface SLAViolation {
  id: string;
  partnerId: string;
  partnerName: string;
  violationType: string;
  timestamp: string;
  elapsedTime: number;
  orderNumber: string;
  expectedTime: number;
  actualTime: number;
  status: string;
}