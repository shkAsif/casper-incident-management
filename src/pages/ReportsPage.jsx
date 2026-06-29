(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.pages = window.CasperIMS.pages || {};
  const { Reports } = window.CasperIMS.features.reports.components;

  function ReportsPage({ controller }) {
    return <Reports incidents={controller.incidents} />;
  }

  window.CasperIMS.pages.ReportsPage = ReportsPage;
})();
