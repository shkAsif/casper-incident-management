(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.core = window.CasperIMS.core || {};
  window.CasperIMS.core.router = window.CasperIMS.core.router || {};
  const {
    DashboardPage,
    IncidentsPage,
    IncidentDetailPage,
    IncidentCreatePage,
    IncidentEditPage,
    ReportsPage,
    UsersPage,
    AdminPage,
    ProfilePage,
  } = window.CasperIMS.pages;

  const ROUTE_PATHS = {
    dashboard: "dashboard",
    incidents: "incidents",
    incidentNew: "incident-new",
    incidentDetail: "incident-detail",
    incidentEdit: "incident-edit",
    reports: "reports",
    users: "users",
    categories: "categories",
    priorities: "priorities",
    teams: "teams",
    profile: "profile",
  };

  function renderRoute(controller) {
    switch (controller.active) {
      case ROUTE_PATHS.dashboard:
        return <DashboardPage controller={controller} />;
      case ROUTE_PATHS.incidents:
        return <IncidentsPage controller={controller} />;
      case ROUTE_PATHS.incidentNew:
        return <IncidentCreatePage controller={controller} />;
      case ROUTE_PATHS.incidentDetail:
        return <IncidentDetailPage controller={controller} />;
      case ROUTE_PATHS.incidentEdit:
        return <IncidentEditPage controller={controller} />;
      case ROUTE_PATHS.users:
        return <UsersPage controller={controller} />;
      case ROUTE_PATHS.categories:
        return <AdminPage type="categories" />;
      case ROUTE_PATHS.priorities:
        return <AdminPage type="priorities" />;
      case ROUTE_PATHS.teams:
        return <AdminPage type="teams" />;
      case ROUTE_PATHS.reports:
        return <ReportsPage controller={controller} />;
      case ROUTE_PATHS.profile:
        return <ProfilePage controller={controller} />;
      default:
        return <DashboardPage controller={controller} />;
    }
  }

  Object.assign(window.CasperIMS.core.router, { ROUTE_PATHS, renderRoute });
})();
