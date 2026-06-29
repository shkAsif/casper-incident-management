(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.incidents = window.CasperIMS.features.incidents || { components: {}, hooks: {} };
  const { statuses, prioritySeed, categorySeed, users } = window.CasperIMS.shared.constants.mockData;
  const { ScreenHeader, Metric, Select, IncidentTable } = window.CasperIMS.shared.components;

  function IncidentList({ filters, setFilters, incidents, allIncidents, openIncident, setActive }) {
    return (
      <section className="screen">
        <ScreenHeader
          eyebrow="Incident lifecycle"
          title="Incidents"
          description="Search, filter, assign, and track SLA state across every reported issue."
          action={<button className="primary" onClick={() => setActive("incident-new")}>+ Create incident</button>}
        />
        <div className="filters">
          <label>Search<input value={filters.search} onChange={(event) => setFilters({ ...filters, search: event.target.value })} placeholder="Ticket, title, description" /></label>
          <label>Status<Select value={filters.status} onChange={(value) => setFilters({ ...filters, status: value })} options={["All", ...statuses]} /></label>
          <label>Priority<Select value={filters.priority} onChange={(value) => setFilters({ ...filters, priority: value })} options={["All", ...prioritySeed.map((item) => item.name)]} /></label>
          <label>Category<Select value={filters.category} onChange={(value) => setFilters({ ...filters, category: value })} options={["All", ...categorySeed.map((item) => item.name)]} /></label>
          <label>Assignee<Select value={filters.assignee} onChange={(value) => setFilters({ ...filters, assignee: value })} options={["All", ...users.map((item) => item.name)]} /></label>
        </div>
        <section className="panel">
          <IncidentTable incidents={incidents} openIncident={openIncident} />
        </section>
        <div className="summary-strip">
          <Metric label="Total records" value={allIncidents.length} />
          <Metric label="Filtered" value={incidents.length} />
          <Metric label="Critical open" value={allIncidents.filter((item) => item.priority === "Critical" && item.status !== "Closed").length} />
        </div>
      </section>
    );
  }

  window.CasperIMS.features.incidents.components.IncidentList = IncidentList;
})();
