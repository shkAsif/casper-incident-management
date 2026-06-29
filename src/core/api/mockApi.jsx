(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.core = window.CasperIMS.core || {};
  window.CasperIMS.core.api = window.CasperIMS.core.api || {};

  function createMockResponse(data) {
    return Promise.resolve({ data, success: true });
  }

  window.CasperIMS.core.api.createMockResponse = createMockResponse;
})();
