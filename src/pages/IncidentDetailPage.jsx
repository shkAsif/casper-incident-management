(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.pages = window.CasperIMS.pages || {};
  const { IncidentDetail } = window.CasperIMS.features.incidents.components;

  function IncidentDetailPage({ controller }) {
    const incident = controller.selectedIncident;
    if (!incident) return null;
    return (
      <IncidentDetail
        incident={incident}
        comments={controller.comments[incident.id] || []}
        changeStatus={controller.changeStatus}
        addComment={controller.addComment}
        assignIncident={controller.assignIncident}
        setActive={controller.setActive}
      />
    );
  }

  window.CasperIMS.pages.IncidentDetailPage = IncidentDetailPage;
})();
