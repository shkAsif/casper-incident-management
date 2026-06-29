(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.dashboard = window.CasperIMS.features.dashboard || { components: {} };
  const { statuses, prioritySeed } = window.CasperIMS.shared.constants.mockData;
  const { ScreenHeader, Metric, IncidentTable } = window.CasperIMS.shared.components;

  function Dashboard({ incidents, metrics, openIncident, setActive }) {
    const priorityCounts = prioritySeed.map((priority) => ({
      ...priority,
      count: incidents.filter((incident) => incident.priority === priority.name).length,
    }));
    const statusCounts = statuses.map((status) => ({
      status,
      count: incidents.filter((incident) => incident.status === status).length,
    }));
    return (
      <section className="screen">
        <ScreenHeader
          eyebrow="Real-time operations"
          title="Dashboard"
          description="KPI summary, SLA risk, incident mix, and the latest operational activity."
          action={<button className="primary" onClick={() => setActive("incident-new")}>+ New incident</button>}
        />
        <div className="kpi-grid">
          <Metric label="Open incidents" value={metrics.open} trend="+3 today" tone="blue" />
          <Metric label="SLA breached" value={metrics.breached} trend="Needs action" tone="red" />
          <Metric label="Resolved today" value={metrics.resolved} trend="On target" tone="green" />
          <Metric label="SLA compliance" value={`${metrics.compliance}%`} trend={metrics.avgResolution} tone="teal" />
        </div>
        <div className="dashboard-grid">
          <section className="panel">
            <div className="panel-title"><h3>Incidents by priority</h3><span className="pill">Auto-SLA mapped</span></div>
            <div className="chart-row">
              <div className="donut" style={{ background: "conic-gradient(#c2410c 0 25%, #b45309 25% 50%, #2563eb 50% 75%, #047857 75% 100%)" }}>
                <span>{incidents.length}</span>
              </div>
              <div className="legend">
                {priorityCounts.map((item) => (
                  <span key={item.name}><i style={{ background: item.color }}></i>{item.name} · {item.count}</span>
                ))}
              </div>
            </div>
          </section>
          <section className="panel">
            <div className="panel-title"><h3>Status flow</h3><span className="pill">Open to closed</span></div>
            <div className="bar-list">
              {statusCounts.map((item) => (
                <div className="bar-row" key={item.status}>
                  <span>{item.status}</span>
                  <div><i style={{ width: `${Math.max(12, item.count * 24)}%` }}></i></div>
                  <strong>{item.count}</strong>
                </div>
              ))}
            </div>
          </section>
          <section className="panel wide">
            <div className="panel-title"><h3>Recent incidents</h3><button className="ghost small" onClick={() => setActive("incidents")}>View all</button></div>
            <IncidentTable incidents={incidents.slice(0, 5)} openIncident={openIncident} compact />
          </section>
          <section className="panel">
            <div className="panel-title"><h3>Casper assist</h3><span className="pill green">Triage hints</span></div>
            <ul className="assist-list">
              <li>Prioritize INC-2026-00041 because response SLA is already breached.</li>
              <li>Security Operations has one active high-priority access-control incident.</li>
              <li>Attach VPN logs before escalation to reduce reassignment loops.</li>
            </ul>
          </section>
        </div>
      </section>
    );
  }

  window.CasperIMS.features.dashboard.components.Dashboard = Dashboard;
})();
