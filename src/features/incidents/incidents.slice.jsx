(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.incidents = window.CasperIMS.features.incidents || {};
  window.CasperIMS.features.incidents.slice = {
    name: "incidents",
    reducers: ["createIncident", "updateIncident", "assignIncident", "addComment", "changeStatus"],
  };
})();
