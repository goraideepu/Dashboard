export const MOCK_SUMMARY_DATA = {
  today: {
    slaViolations: 50,
    successRate: 99.43,
    elapsedTime: 10
  },
  thisMonth: {
    slaBreached: 256,
    b318Sent: 4023,
    b32scReceived: 2356,
    elapsedTime: 10
  }
};

export const MOCK_PARTNERS_DATA: { partners: Array<{
  partnerId: string;
  name: string;
  packoutTo3b18Time: number;
  packoutTo3b2scTime: number;
  status: 'active' | 'inactive';
}> } = {
  partners: [
    {
      partnerId: "1",
      name: "SIENAO NETWORKS INC",
      packoutTo3b18Time: 10,
      packoutTo3b2scTime: 6,
      status: "active" as const
    },
    {
      partnerId: "2",
      name: "Delta Networks (DNI)",
      packoutTo3b18Time: 25,
      packoutTo3b2scTime: 10,
      status: "active" as const
    },
    {
      partnerId: "3",
      name: "Lite On Technology Corp",
      packoutTo3b18Time: 5,
      packoutTo3b2scTime: 12,
      status: "active" as const
    },
    {
      partnerId: "4",
      name: "Cloud Network Technology Singapore Pte Ltd",
      packoutTo3b18Time: 15,
      packoutTo3b2scTime: 25,
      status: "active" as const
    },
    {
      partnerId: "5",
      name: "Sercomm Corp.",
      packoutTo3b18Time: 8,
      packoutTo3b2scTime: 4,
      status: "active" as const
    },
    {
      partnerId: "6",
      name: "VIVOTEK INC",
      packoutTo3b18Time: 12,
      packoutTo3b2scTime: 10,
      status: "active" as const
    },
    {
      partnerId: "7",
      name: "Foxconn",
      packoutTo3b18Time: 6,
      packoutTo3b2scTime: 8,
      status: "active" as const
    }
  ]
};