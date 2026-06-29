(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.core = window.CasperIMS.core || {};
  window.CasperIMS.core.auth = window.CasperIMS.core.auth || {};

  const RBAC = {
    Admin: ["dashboard", "incidents", "incident-new", "reports", "users", "categories", "priorities", "teams", "profile"],
    Manager: ["dashboard", "incidents", "reports", "profile"],
    Agent: ["dashboard", "incidents", "incident-new", "profile"],
    "End User": ["dashboard", "incidents", "incident-new", "profile"],
  };

  function canAccess(role, route) {
    return (RBAC[role] || []).includes(route);
  }

  Object.assign(window.CasperIMS.core.auth, { RBAC, canAccess });
})();
