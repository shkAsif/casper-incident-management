(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.shared = window.CasperIMS.shared || {};
  window.CasperIMS.shared.components = window.CasperIMS.shared.components || {};
  const { cls } = window.CasperIMS.shared.utils;

  function StatusBadge({ status }) {
    return <span className={`status ${cls(status)}`}>{status}</span>;
  }

  function PriorityBadge({ priority }) {
    return <span className={`priority ${cls(priority)}`}>{priority}</span>;
  }

  Object.assign(window.CasperIMS.shared.components, { StatusBadge, PriorityBadge });
})();
