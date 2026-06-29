(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.settings = window.CasperIMS.features.settings || { components: {} };
  const { ScreenHeader, Field } = window.CasperIMS.shared.components;

  function Profile({ role }) {
    return (
      <section className="screen">
        <ScreenHeader eyebrow="Account" title="Profile" description="Personal settings, notification preferences, and role visibility." />
        <div className="two-column">
          <section className="panel">
            <div className="profile-card">
              <span className="avatar">AS</span>
              <h3>Avery Stone</h3>
              <p>{role} · IT Operations</p>
            </div>
            <div className="field-grid">
              <Field label="Email" value="avery.stone@casper.example" />
              <Field label="Time zone" value="Asia/Calcutta" />
              <Field label="Default team" value="Service Desk" />
              <Field label="Session security" value="JWT authenticated" />
            </div>
          </section>
          <section className="panel">
            <div className="panel-title"><h3>Notification preferences</h3><span className="pill">Email + app</span></div>
            <form className="stack-form">
              <label className="check"><input type="checkbox" defaultChecked /> Incident assigned to me</label>
              <label className="check"><input type="checkbox" defaultChecked /> SLA warning or breach</label>
              <label className="check"><input type="checkbox" defaultChecked /> Status changed</label>
              <label className="check"><input type="checkbox" /> Daily digest</label>
              <button className="primary" type="button">Save preferences</button>
            </form>
          </section>
        </div>
      </section>
    );
  }

  window.CasperIMS.features.settings.components.Profile = Profile;
})();
