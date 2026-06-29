(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.users = window.CasperIMS.features.users || { components: {} };
  const { useState } = React;
  const { roles, users } = window.CasperIMS.shared.constants.mockData;
  const { ScreenHeader } = window.CasperIMS.shared.components;

  function UsersScreen() {
    const [selected, setSelected] = useState(users[0]);
    return (
      <section className="screen">
        <ScreenHeader eyebrow="Role-based access" title="Users" description="Manage account status, role, department, and profile fields for admins, managers, agents, and end users." />
        <div className="two-column">
          <section className="panel">
            <div className="panel-title"><h3>User directory</h3><button className="primary small">+ Add user</button></div>
            <div className="user-list">
              {users.map((user) => (
                <button key={user.id} className={selected.id === user.id ? "active" : ""} onClick={() => setSelected(user)}>
                  <strong>{user.name}</strong>
                  <span>{user.role} · {user.department}</span>
                </button>
              ))}
            </div>
          </section>
          <section className="panel">
            <div className="panel-title"><h3>User detail</h3><span className={selected.active ? "pill green" : "pill red"}>{selected.active ? "Active" : "Inactive"}</span></div>
            <form className="stack-form">
              <label>Full name<input defaultValue={selected.name} /></label>
              <label>Email<input defaultValue={selected.email} /></label>
              <label>Role<select defaultValue={selected.role}>{["Super Admin", ...roles].map((item) => <option key={item}>{item}</option>)}</select></label>
              <label>Department<input defaultValue={selected.department} /></label>
              <label className="check"><input type="checkbox" defaultChecked={selected.active} /> Active user</label>
              <button className="primary" type="button">Save user</button>
            </form>
          </section>
        </div>
      </section>
    );
  }

  window.CasperIMS.features.users.components.UsersScreen = UsersScreen;
})();
