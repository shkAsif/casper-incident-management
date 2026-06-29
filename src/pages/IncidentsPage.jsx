(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.pages = window.CasperIMS.pages || {};
  const { IncidentList } = window.CasperIMS.features.incidents.components;

  function IncidentsPage({ controller }) {
    return (
      <IncidentList
        filters={controller.filters}
        setFilters={controller.setFilters}
        incidents={controller.filteredIncidents}
        allIncidents={controller.incidents}
        openIncident={controller.openIncident}
        setActive={controller.setActive}
      />
    );
  }

  window.CasperIMS.pages.IncidentsPage = IncidentsPage;
})();
