(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.features = window.CasperIMS.features || {};
  window.CasperIMS.features.incidents = window.CasperIMS.features.incidents || { components: {}, hooks: {} };

  function useIncidentFilters(incidents, filters) {
    const { useMemo } = React;
    return useMemo(() => {
      return incidents.filter((incident) => {
        const query = `${incident.ticket} ${incident.title} ${incident.description}`.toLowerCase();
        return (
          query.includes(filters.search.toLowerCase()) &&
          (filters.status === "All" || incident.status === filters.status) &&
          (filters.priority === "All" || incident.priority === filters.priority) &&
          (filters.category === "All" || incident.category === filters.category) &&
          (filters.assignee === "All" || incident.assignedTo === filters.assignee)
        );
      });
    }, [filters, incidents]);
  }

  window.CasperIMS.features.incidents.hooks.useIncidentFilters = useIncidentFilters;
})();
