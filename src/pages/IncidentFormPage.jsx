(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.pages = window.CasperIMS.pages || {};
  const { IncidentForm } = window.CasperIMS.features.incidents.components;

  function IncidentCreatePage({ controller }) {
    return <IncidentForm mode="create" onSubmit={controller.handleIncidentSubmit} />;
  }

  function IncidentEditPage({ controller }) {
    return <IncidentForm mode="edit" incident={controller.selectedIncident} onSubmit={controller.handleIncidentSubmit} />;
  }

  Object.assign(window.CasperIMS.pages, { IncidentCreatePage, IncidentEditPage });
})();
