(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.admin = window.CasperIMS.features.admin || { components: {} };
  const { categorySeed, prioritySeed, teams, users } = window.CasperIMS.shared.constants.mockData;
  const { ScreenHeader } = window.CasperIMS.shared.components;

  function AdminScreen({ type }) {
    const config = {
      categories: { title: "Categories", rows: categorySeed, fields: ["name", "description", "active"] },
      priorities: { title: "Priorities & SLA", rows: prioritySeed, fields: ["name", "response", "resolution", "color"] },
      teams: { title: "Teams", rows: teams, fields: ["name", "members", "active"] },
    }[type];
    return (
      <section className="screen">
        <ScreenHeader eyebrow="Admin configuration" title={config.title} description="Maintain the values used by incident intake, routing, role controls, reporting, and SLA calculation." />
        <div className="admin-layout">
          <section className="panel">
            <div className="panel-title"><h3>Records</h3><button className="primary small">+ Add record</button></div>
            <div className="table-wrap">
              <table>
                <thead><tr>{config.fields.map((field) => <th key={field}>{field}</th>)}<th></th></tr></thead>
                <tbody>
                  {config.rows.map((row) => (
                    <tr key={row.id}>
                      {config.fields.map((field) => <td key={field}>{Array.isArray(row[field]) ? row[field].join(", ") : String(row[field])}</td>)}
                      <td><button className="ghost small">Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          <section className="panel">
            <div className="panel-title"><h3>{config.title} form</h3><span className="pill">Draft</span></div>
            <form className="stack-form">
              {type === "priorities" ? (
                <>
                  <label>Name<input defaultValue="Critical" /></label>
                  <label>Response time<input defaultValue="15 min" /></label>
                  <label>Resolution time<input defaultValue="4 hrs" /></label>
                  <label>Color code<input defaultValue="#c2410c" /></label>
                </>
              ) : type === "teams" ? (
                <>
                  <label>Team name<input defaultValue="Service Desk" /></label>
                  <label>Members<select multiple defaultValue={["Mina Rao"]}>{users.map((user) => <option key={user.id}>{user.name}</option>)}</select></label>
                  <label className="check"><input type="checkbox" defaultChecked /> Active</label>
                </>
              ) : (
                <>
                  <label>Name<input defaultValue="IT" /></label>
                  <label>Description<textarea defaultValue="Applications, devices, network, and access" /></label>
                  <label className="check"><input type="checkbox" defaultChecked /> Active</label>
                </>
              )}
              <button className="primary" type="button">Save configuration</button>
            </form>
          </section>
        </div>
      </section>
    );
  }

  window.CasperIMS.features.admin.components.AdminScreen = AdminScreen;
})();
