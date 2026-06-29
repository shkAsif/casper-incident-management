(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.shared = window.CasperIMS.shared || {};
  window.CasperIMS.shared.layouts = window.CasperIMS.shared.layouts || {};
  const { roles } = window.CasperIMS.shared.constants.mockData;
  const { Metric } = window.CasperIMS.shared.components;

  function AuthScreen({ authMode, setAuthMode, onEnter, themeMode = "system", setThemeMode = () => {} }) {
    return (
      <main className="auth-page">
        <section className="auth-visual">
          <div className="brand-row">
            <span className="brand-mark">C</span>
            <span>Casper Incident Management</span>
          </div>
          <h1>Resolve enterprise incidents before they become business interruptions.</h1>
          <p>
            Centralized intake, SLA visibility, assignment, comments, file evidence, audit history, and reports for IT and operational response teams.
          </p>
          <div className="auth-metrics">
            <Metric label="SLA Compliance" value="92%" />
            <Metric label="Open Incidents" value="18" />
            <Metric label="Avg Response" value="21m" />
          </div>
        </section>
        <section className="auth-card" aria-label="Authentication">
          <div className="segmented">
            <button className={authMode === "login" ? "active" : ""} onClick={() => setAuthMode("login")}>Login</button>
            <button className={authMode === "register" ? "active" : ""} onClick={() => setAuthMode("register")}>Register</button>
          </div>
          <h2>{authMode === "login" ? "Welcome back" : "Create your account"}</h2>
          <form onSubmit={(event) => { event.preventDefault(); onEnter(); }}>
            {authMode === "register" && (
              <>
                <label>Full name<input defaultValue="Avery Stone" /></label>
                <label>Department<input defaultValue="IT Operations" /></label>
              </>
            )}
            <label>Email<input type="email" defaultValue="admin@casper.example" /></label>
            <label>Password<input type="password" defaultValue="CasperDemo123" /></label>
            {authMode === "register" && (
              <label>Role<select defaultValue="End User">{roles.map((item) => <option key={item}>{item}</option>)}</select></label>
            )}
            <button className="primary full" type="submit">{authMode === "login" ? "Sign in" : "Create account"}</button>
            <button className="ghost full" type="button" onClick={onEnter}>View demo workspace</button>
          </form>
          <label className="theme-field">Theme
            <select value={themeMode} onChange={(event) => setThemeMode(event.target.value)}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System</option>
            </select>
          </label>
        </section>
      </main>
    );
  }

  window.CasperIMS.shared.layouts.AuthScreen = AuthScreen;
})();
