(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.pages = window.CasperIMS.pages || {};
  const { Dashboard } = window.CasperIMS.features.dashboard.components;

  function DashboardPage({ controller }) {
    return <Dashboard incidents={controller.incidents} metrics={controller.metrics} openIncident={controller.openIncident} setActive={controller.setActive} />;
  }

  window.CasperIMS.pages.DashboardPage = DashboardPage;
})();
