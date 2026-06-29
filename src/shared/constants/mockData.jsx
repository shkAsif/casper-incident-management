(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.shared = window.CasperIMS.shared || {};
  window.CasperIMS.shared.constants = window.CasperIMS.shared.constants || {};

  const roles = ["Admin", "Manager", "Agent", "End User"];
  const statuses = ["Open", "In Progress", "Pending", "Resolved", "Closed"];
  const categorySeed = [
    { id: 1, name: "IT", description: "Applications, devices, network, and access", active: true },
    { id: 2, name: "HR", description: "People operations and employee services", active: true },
    { id: 3, name: "Facilities", description: "Office, building, and workplace support", active: true },
    { id: 4, name: "Security", description: "Physical and cyber security events", active: true },
    { id: 5, name: "Compliance", description: "Policy, audit, privacy, and regulatory events", active: true },
  ];
  const prioritySeed = [
    { id: 1, name: "Critical", response: "15 min", resolution: "4 hrs", color: "#c2410c" },
    { id: 2, name: "High", response: "30 min", resolution: "8 hrs", color: "#b45309" },
    { id: 3, name: "Medium", response: "2 hrs", resolution: "24 hrs", color: "#2563eb" },
    { id: 4, name: "Low", response: "8 hrs", resolution: "72 hrs", color: "#047857" },
  ];
  const users = [
    { id: "u1", name: "Avery Stone", email: "avery.stone@casper.example", role: "Admin", department: "IT Operations", active: true },
    { id: "u2", name: "Mina Rao", email: "mina.rao@casper.example", role: "Agent", department: "Workplace Technology", active: true },
    { id: "u3", name: "Jordan Lee", email: "jordan.lee@casper.example", role: "Manager", department: "Customer Operations", active: true },
    { id: "u4", name: "Noah Wells", email: "noah.wells@casper.example", role: "Agent", department: "Security Operations", active: true },
    { id: "u5", name: "Priya Shah", email: "priya.shah@casper.example", role: "End User", department: "Finance", active: true },
  ];
  const teams = [
    { id: 1, name: "Service Desk", active: true, members: ["Mina Rao", "Avery Stone"] },
    { id: 2, name: "Security Operations", active: true, members: ["Noah Wells"] },
    { id: 3, name: "Facilities Response", active: true, members: ["Jordan Lee"] },
  ];
  const initialIncidents = [
    {
      id: "inc-1",
      ticket: "INC-2026-00041",
      title: "VPN authentication failures for finance users",
      description: "Finance team cannot complete multi-factor authentication while connecting through VPN.",
      category: "IT",
      priority: "Critical",
      status: "Open",
      reportedBy: "Priya Shah",
      assignedTo: "Mina Rao",
      team: "Service Desk",
      created: "2026-06-29 08:45",
      responseDue: "2026-06-29 09:00",
      resolutionDue: "2026-06-29 12:45",
      breached: true,
      attachments: ["vpn-error-log.txt", "mfa-screenshot.png"],
      impact: "Finance close activities delayed",
    },
    {
      id: "inc-2",
      ticket: "INC-2026-00040",
      title: "Badge reader offline at west entrance",
      description: "Employees are tailgating because the badge reader is not accepting credentials.",
      category: "Security",
      priority: "High",
      status: "In Progress",
      reportedBy: "Jordan Lee",
      assignedTo: "Noah Wells",
      team: "Security Operations",
      created: "2026-06-29 07:25",
      responseDue: "2026-06-29 07:55",
      resolutionDue: "2026-06-29 15:25",
      breached: false,
      attachments: ["reader-photo.jpg"],
      impact: "Physical access control degraded",
    },
    {
      id: "inc-3",
      ticket: "INC-2026-00039",
      title: "Payroll export validation warning",
      description: "Compliance flag appears during payroll export validation for three contractor records.",
      category: "Compliance",
      priority: "Medium",
      status: "Pending",
      reportedBy: "Avery Stone",
      assignedTo: "Jordan Lee",
      team: "Service Desk",
      created: "2026-06-28 16:10",
      responseDue: "2026-06-28 18:10",
      resolutionDue: "2026-06-29 16:10",
      breached: false,
      attachments: ["validation-summary.pdf"],
      impact: "Manual review required before export",
    },
    {
      id: "inc-4",
      ticket: "INC-2026-00038",
      title: "Conference room display flickers",
      description: "Display in Indigo 5 intermittently blanks during presentations.",
      category: "Facilities",
      priority: "Low",
      status: "Resolved",
      reportedBy: "Noah Wells",
      assignedTo: "Mina Rao",
      team: "Facilities Response",
      created: "2026-06-27 10:30",
      responseDue: "2026-06-27 18:30",
      resolutionDue: "2026-06-30 10:30",
      breached: false,
      attachments: [],
      impact: "Meeting room usability reduced",
    },
  ];
  const initialComments = {
    "inc-1": [
      { author: "Priya Shah", role: "End User", body: "The issue is affecting the entire finance close group.", internal: false, time: "08:50" },
      { author: "Mina Rao", role: "Agent", body: "Checking conditional access logs and MFA service health.", internal: true, time: "09:04" },
    ],
    "inc-2": [
      { author: "Noah Wells", role: "Agent", body: "Technician dispatched. Reader has power but controller is not responding.", internal: false, time: "08:20" },
    ],
  };
  const audits = [
    { ticket: "INC-2026-00041", actor: "Mina Rao", action: "Assigned", oldValue: "Unassigned", newValue: "Service Desk / Mina Rao", time: "2026-06-29 08:48" },
    { ticket: "INC-2026-00041", actor: "System", action: "SLA Warning", oldValue: "On Track", newValue: "Response overdue", time: "2026-06-29 09:01" },
    { ticket: "INC-2026-00040", actor: "Noah Wells", action: "StatusChanged", oldValue: "Open", newValue: "In Progress", time: "2026-06-29 07:44" },
    { ticket: "INC-2026-00039", actor: "Jordan Lee", action: "StatusChanged", oldValue: "In Progress", newValue: "Pending", time: "2026-06-28 18:25" },
  ];

  window.CasperIMS.shared.constants.mockData = {
    roles,
    statuses,
    categorySeed,
    prioritySeed,
    users,
    teams,
    initialIncidents,
    initialComments,
    audits,
  };
})();
