(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.shared = window.CasperIMS.shared || {};
  window.CasperIMS.shared.components = window.CasperIMS.shared.components || {};
  const { StatusBadge, PriorityBadge } = window.CasperIMS.shared.components;

  function IncidentTable({ incidents, openIncident, compact }) {
    return (
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Title</th>
              <th>Status</th>
              <th>Priority</th>
              {!compact && <th>Category</th>}
              <th>Assignee</th>
              {!compact && <th>SLA</th>}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {incidents.map((incident) => (
              <tr key={incident.id}>
                <td>
                  <button className="link-button" onClick={() => openIncident(incident.id)}>
                    {incident.ticket}
                  </button>
                </td>
                <td>{incident.title}<small>{incident.impact}</small></td>
                <td><StatusBadge status={incident.status} /></td>
                <td><PriorityBadge priority={incident.priority} /></td>
                {!compact && <td>{incident.category}</td>}
                <td>{incident.assignedTo}</td>
                {!compact && (
                  <td>{incident.breached ? <span className="sla breached">Breached</span> : <span className="sla">On track</span>}</td>
                )}
                <td><button className="ghost small" onClick={() => openIncident(incident.id)}>Open</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  window.CasperIMS.shared.components.IncidentTable = IncidentTable;
})();
