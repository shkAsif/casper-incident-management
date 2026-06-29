(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.shared = window.CasperIMS.shared || {};
  window.CasperIMS.shared.layouts = window.CasperIMS.shared.layouts || {};
  const { roles } = window.CasperIMS.shared.constants.mockData;

  function Sidebar({ active, role, setActive }) {
    const items = [
      ["dashboard", "Dashboard", "D"],
      ["incidents", "Incidents", "I"],
      ["incident-new", "New Incident", "+"],
      ["reports", "Reports", "R"],
      ["users", "Users", "U"],
      ["categories", "Categories", "C"],
      ["priorities", "Priorities", "P"],
      ["teams", "Teams", "T"],
      ["profile", "Profile", "A"],
    ];
    return (
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">C</span>
          <div>
            <strong>Casper IMS</strong>
            <small>{role} workspace</small>
          </div>
        </div>
        <nav>
          {items.map(([id, label, icon]) => (
            <button key={id} className={active === id ? "active" : ""} onClick={() => setActive(id)}>
              <span className="nav-icon">{icon}</span>
              {label}
            </button>
          ))}
        </nav>
        <div className="sidebar-note">
          <strong>SLA policy</strong>
          <span>Critical 15m / 4h</span>
          <span>High 30m / 8h</span>
        </div>
      </aside>
    );
  }

  function Topbar({ role, setRole, themeMode, setThemeMode, noticeOpen, setNoticeOpen, setAuthenticated }) {
    return (
      <header className="topbar">
        <div>
          <p className="eyebrow">Enterprise command center</p>
          <h1>Casper Incident Management</h1>
        </div>
        <div className="topbar-actions">
          <label className="compact-label">Role
            <select value={role} onChange={(event) => setRole(event.target.value)}>
              {roles.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label className="compact-label">Theme
            <select value={themeMode} onChange={(event) => setThemeMode(event.target.value)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </label>
          <button className="icon-button" title="Notifications" onClick={() => setNoticeOpen(!noticeOpen)}>N<span className="dot"></span></button>
          <button className="ghost" onClick={() => setAuthenticated(false)}>Logout</button>
        </div>
        {noticeOpen && (
          <div className="notification-popover">
            <strong>Notifications</strong>
            <p>INC-2026-00041 breached response SLA.</p>
            <p>INC-2026-00040 changed to In Progress.</p>
            <p>Payroll export warning is awaiting compliance review.</p>
          </div>
        )}
      </header>
    );
  }

  function AppShell({ active, role, setActive, setRole, themeMode, setThemeMode, noticeOpen, setNoticeOpen, setAuthenticated, children }) {
    return (
      <div className="app-shell">
        <Sidebar active={active} role={role} setActive={setActive} />
        <main className="workspace">
          <Topbar
            role={role}
            setRole={setRole}
            themeMode={themeMode}
            setThemeMode={setThemeMode}
            noticeOpen={noticeOpen}
            setNoticeOpen={setNoticeOpen}
            setAuthenticated={setAuthenticated}
          />
          {children}
        </main>
      </div>
    );
  }

  Object.assign(window.CasperIMS.shared.layouts, { AppShell, Sidebar, Topbar });
})();
