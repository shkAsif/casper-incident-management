(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.incidents = window.CasperIMS.features.incidents || {};
  window.CasperIMS.features.incidents.types = {
    IncidentStatus: "Open | In Progress | Pending | Resolved | Closed",
    Priority: "Critical | High | Medium | Low",
  };
})();
