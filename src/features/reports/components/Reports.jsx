(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.reports = window.CasperIMS.features.reports || { components: {} };
  const { categorySeed, teams } = window.CasperIMS.shared.constants.mockData;
  const { ScreenHeader, IncidentTable } = window.CasperIMS.shared.components;

  function Reports({ incidents }) {
    return (
      <section className="screen">
        <ScreenHeader
          eyebrow="Management reporting"
          title="Reports"
          description="SLA breach review, incident trends, and team performance for admins and managers."
          action={<button className="primary">Export CSV</button>}
        />
        <div className="reports-grid">
          <section className="panel">
            <div className="panel-title"><h3>SLA breach report</h3><span className="pill red">{incidents.filter((item) => item.breached).length} breached</span></div>
            <IncidentTable incidents={incidents.filter((item) => item.breached)} openIncident={() => {}} compact />
          </section>
          <section className="panel">
            <div className="panel-title"><h3>Trend by category</h3><span className="pill">Last 7 days</span></div>
            <div className="bar-list tall">
              {categorySeed.map((category) => {
                const count = incidents.filter((item) => item.category === category.name).length;
                return <div className="bar-row" key={category.id}><span>{category.name}</span><div><i style={{ width: `${Math.max(15, count * 30)}%` }}></i></div><strong>{count}</strong></div>;
              })}
            </div>
          </section>
          <section className="panel wide">
            <div className="panel-title"><h3>Team performance</h3><span className="pill green">Resolution rate</span></div>
            <div className="performance-grid">
              {teams.map((team, index) => (
                <article key={team.id}>
                  <strong>{team.name}</strong>
                  <span>{[94, 88, 91][index]}% SLA compliance</span>
                  <div className="sla-meter"><i style={{ width: `${[94, 88, 91][index]}%` }}></i></div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    );
  }

  window.CasperIMS.features.reports.components.Reports = Reports;
})();
