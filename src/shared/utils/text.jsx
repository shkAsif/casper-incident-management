(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.shared = window.CasperIMS.shared || {};
  window.CasperIMS.shared.utils = window.CasperIMS.shared.utils || {};

  function cls(value) {
    return String(value || "").toLowerCase().replace(/\s+/g, "-");
  }

  window.CasperIMS.shared.utils.cls = cls;
})();
