(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.incidents = window.CasperIMS.features.incidents || { components: {}, hooks: {} };
  const { statuses, prioritySeed, categorySeed, users, teams } = window.CasperIMS.shared.constants.mockData;
  const { ScreenHeader } = window.CasperIMS.shared.components;

  function IncidentForm({ mode, incident = {}, onSubmit }) {
    return (
      <section className="screen">
        <ScreenHeader
          eyebrow={mode === "edit" ? incident.ticket : "Incident intake"}
          title={mode === "edit" ? "Edit incident" : "Create incident"}
          description="Capture the operational fields required for categorization, SLA calculation, routing, evidence, and audit."
        />
        <form className="form-grid panel" onSubmit={(event) => onSubmit(event, mode === "edit" ? "edit" : "create")}>
          <label className="span-2">Title<input name="title" required defaultValue={incident.title || ""} placeholder="Short incident summary" /></label>
          <label className="span-2">Description<textarea name="description" required defaultValue={incident.description || ""} placeholder="What happened, who is affected, and what has been tried?" /></label>
          <label>Category<select name="category" defaultValue={incident.category || "IT"}>{categorySeed.map((item) => <option key={item.id}>{item.name}</option>)}</select></label>
          <label>Priority<select name="priority" defaultValue={incident.priority || "Medium"}>{prioritySeed.map((item) => <option key={item.id}>{item.name}</option>)}</select></label>
          <label>Status<select name="status" defaultValue={incident.status || "Open"}>{statuses.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>Reported by<select name="reportedBy" defaultValue={incident.reportedBy || "Priya Shah"}>{users.map((item) => <option key={item.id}>{item.name}</option>)}</select></label>
          <label>Assigned agent<select name="assignedTo" defaultValue={incident.assignedTo || "Mina Rao"}>{users.filter((item) => item.role !== "End User").map((item) => <option key={item.id}>{item.name}</option>)}</select></label>
          <label>Team<select name="team" defaultValue={incident.team || "Service Desk"}>{teams.map((item) => <option key={item.id}>{item.name}</option>)}</select></label>
          <label>Response due<input name="responseDue" defaultValue={incident.responseDue || ""} placeholder="YYYY-MM-DD HH:mm" /></label>
          <label>Resolution due<input name="resolutionDue" defaultValue={incident.resolutionDue || ""} placeholder="YYYY-MM-DD HH:mm" /></label>
          <label className="span-2">Business impact<input name="impact" defaultValue={incident.impact || ""} placeholder="Affected service, department, or risk" /></label>
          <label className="file-field span-2">Attachments<input type="file" multiple /><span>Images, documents, logs, or zip bundles</span></label>
          <label className="check"><input name="breached" type="checkbox" defaultChecked={incident.breached || false} /> Mark SLA as breached</label>
          <div className="form-actions span-2">
            <button className="primary" type="submit">{mode === "edit" ? "Save incident" : "Create incident"}</button>
            <button className="ghost" type="reset">Reset fields</button>
          </div>
        </form>
      </section>
    );
  }

  window.CasperIMS.features.incidents.components.IncidentForm = IncidentForm;
})();
