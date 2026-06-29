(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.incidents = window.CasperIMS.features.incidents || {};
  window.CasperIMS.features.incidents.api = {
    endpoints: ["listIncidents", "getIncident", "createIncident", "updateIncident", "uploadAttachment"],
  };
})();
