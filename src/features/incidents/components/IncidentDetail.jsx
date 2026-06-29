(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.incidents = window.CasperIMS.features.incidents || { components: {}, hooks: {} };
  const { statuses, users, teams, audits } = window.CasperIMS.shared.constants.mockData;
  const { ScreenHeader, Field, StatusBadge, PriorityBadge } = window.CasperIMS.shared.components;

  function IncidentDetail({ incident, comments, changeStatus, addComment, assignIncident, setActive }) {
    return (
      <section className="screen">
        <ScreenHeader
          eyebrow={incident.ticket}
          title={incident.title}
          description={incident.description}
          action={<button className="primary" onClick={() => setActive("incident-edit")}>Edit incident</button>}
        />
        <div className="detail-grid">
          <section className="panel wide">
            <div className="ticket-meta">
              <StatusBadge status={incident.status} />
              <PriorityBadge priority={incident.priority} />
              <span>{incident.category}</span>
              <span>{incident.team}</span>
            </div>
            <div className="workflow">
              {statuses.map((status) => (
                <button key={status} className={statuses.indexOf(status) <= statuses.indexOf(incident.status) ? "done" : ""} onClick={() => changeStatus(status)}>
                  <span></span>{status}
                </button>
              ))}
            </div>
            <div className="field-grid">
              <Field label="Reported by" value={incident.reportedBy} />
              <Field label="Assigned to" value={incident.assignedTo} />
              <Field label="Created" value={incident.created} />
              <Field label="Business impact" value={incident.impact} />
            </div>
          </section>
          <section className="panel">
            <div className="panel-title"><h3>SLA tracking</h3><span className={incident.breached ? "pill red" : "pill green"}>{incident.breached ? "Breach" : "Healthy"}</span></div>
            <Field label="Response due" value={incident.responseDue} />
            <Field label="Resolution due" value={incident.resolutionDue} />
            <div className="sla-meter"><i style={{ width: incident.breached ? "92%" : "48%" }}></i></div>
            <p className="muted">{incident.breached ? "Response SLA needs escalation review." : "Resolution window remains available."}</p>
          </section>
          <section className="panel">
            <div className="panel-title"><h3>Assignment</h3><span className="pill">Reassign</span></div>
            <form className="stack-form" onSubmit={assignIncident}>
              <label>Agent<select name="assignedTo" defaultValue={incident.assignedTo}>{users.filter((item) => item.role !== "End User").map((item) => <option key={item.id}>{item.name}</option>)}</select></label>
              <label>Team<select name="team" defaultValue={incident.team}>{teams.map((item) => <option key={item.id}>{item.name}</option>)}</select></label>
              <button className="primary" type="submit">Update assignment</button>
            </form>
          </section>
          <section className="panel">
            <div className="panel-title"><h3>Attachments</h3><span className="pill">{incident.attachments.length}</span></div>
            <ul className="file-list">
              {incident.attachments.length ? incident.attachments.map((file) => <li key={file}><span>FILE</span>{file}</li>) : <li>No files attached yet</li>}
            </ul>
            <label className="file-field"><input type="file" multiple /><span>Add evidence</span></label>
          </section>
          <section className="panel wide">
            <div className="panel-title"><h3>Comments</h3><span className="pill">{comments.length}</span></div>
            <div className="comment-list">
              {comments.map((comment, index) => (
                <article key={`${comment.author}-${index}`} className={comment.internal ? "internal" : ""}>
                  <strong>{comment.author}<span>{comment.role} · {comment.time}</span></strong>
                  <p>{comment.body}</p>
                </article>
              ))}
            </div>
            <form className="comment-form" onSubmit={addComment}>
              <textarea name="comment" placeholder="Add update, workaround, customer note, or internal finding"></textarea>
              <label className="check"><input name="internal" type="checkbox" /> Internal note</label>
              <button className="primary" type="submit">Add comment</button>
            </form>
          </section>
          <section className="panel">
            <div className="panel-title"><h3>Audit log</h3><span className="pill">12 mo retention</span></div>
            <div className="audit-list">
              {audits.filter((item) => item.ticket === incident.ticket).map((item) => (
                <article key={`${item.action}-${item.time}`}>
                  <strong>{item.action}</strong>
                  <span>{item.actor} changed {item.oldValue} to {item.newValue}</span>
                  <small>{item.time}</small>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    );
  }

  window.CasperIMS.features.incidents.components.IncidentDetail = IncidentDetail;
})();
