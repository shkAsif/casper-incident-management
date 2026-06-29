(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.core = window.CasperIMS.core || {};
  window.CasperIMS.core.store = window.CasperIMS.core.store || {};
  const { useEffect, useMemo, useState } = React;
  const { initialIncidents, initialComments } = window.CasperIMS.shared.constants.mockData;
  const { useIncidentFilters } = window.CasperIMS.features.incidents.hooks;

  function useAppController() {
    const [authenticated, setAuthenticated] = useState(false);
    const [authMode, setAuthMode] = useState("login");
    const [active, setActive] = useState("dashboard");
    const [role, setRole] = useState("Admin");
    const [incidents, setIncidents] = useState(initialIncidents);
    const [comments, setComments] = useState(initialComments);
    const [selectedId, setSelectedId] = useState(initialIncidents[0].id);
    const [filters, setFilters] = useState({ search: "", status: "All", priority: "All", category: "All", assignee: "All" });
    const [noticeOpen, setNoticeOpen] = useState(false);
    const [themeMode, setThemeMode] = useState(() => {
      return window.localStorage.getItem("casper-theme-mode") || "system";
    });

    const selectedIncident = incidents.find((incident) => incident.id === selectedId) || incidents[0];
    const filteredIncidents = useIncidentFilters(incidents, filters);
    const metrics = useMemo(() => {
      const open = incidents.filter((item) => ["Open", "In Progress", "Pending"].includes(item.status)).length;
      const breached = incidents.filter((item) => item.breached).length;
      const resolved = incidents.filter((item) => item.status === "Resolved").length;
      return {
        open,
        breached,
        resolved,
        compliance: Math.max(0, Math.round(((incidents.length - breached) / incidents.length) * 100)),
        avgResolution: "6.4 hrs",
      };
    }, [incidents]);

    useEffect(() => {
      document.documentElement.dataset.theme = themeMode;
      document.documentElement.style.colorScheme = themeMode === "dark" ? "dark" : themeMode === "light" ? "light" : "light dark";
      window.localStorage.setItem("casper-theme-mode", themeMode);
    }, [themeMode]);

    function openIncident(id, destination = "incident-detail") {
      setSelectedId(id);
      setActive(destination);
    }

    function handleIncidentSubmit(event, mode) {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const nowTicket = `INC-2026-${String(42 + incidents.length).padStart(5, "0")}`;
      const payload = {
        id: mode === "edit" ? selectedIncident.id : `inc-${Date.now()}`,
        ticket: mode === "edit" ? selectedIncident.ticket : nowTicket,
        title: form.get("title"),
        description: form.get("description"),
        category: form.get("category"),
        priority: form.get("priority"),
        status: form.get("status") || "Open",
        reportedBy: form.get("reportedBy") || "Priya Shah",
        assignedTo: form.get("assignedTo"),
        team: form.get("team"),
        created: mode === "edit" ? selectedIncident.created : "2026-06-29 10:15",
        responseDue: form.get("responseDue") || "2026-06-29 10:45",
        resolutionDue: form.get("resolutionDue") || "2026-06-29 18:15",
        breached: form.get("breached") === "on",
        attachments: mode === "edit" ? selectedIncident.attachments : ["uploaded-evidence.zip"],
        impact: form.get("impact"),
      };

      if (mode === "edit") {
        setIncidents((items) => items.map((item) => (item.id === selectedIncident.id ? payload : item)));
        openIncident(payload.id, "incident-detail");
      } else {
        setIncidents((items) => [payload, ...items]);
        setSelectedId(payload.id);
        setComments((items) => ({ ...items, [payload.id]: [] }));
        setActive("incident-detail");
      }
    }

    function changeStatus(nextStatus) {
      setIncidents((items) => items.map((item) => (item.id === selectedIncident.id ? { ...item, status: nextStatus } : item)));
    }

    function assignIncident(event) {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      setIncidents((items) =>
        items.map((item) =>
          item.id === selectedIncident.id
            ? { ...item, assignedTo: form.get("assignedTo"), team: form.get("team") }
            : item
        )
      );
    }

    function addComment(event) {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const body = String(form.get("comment") || "").trim();
      if (!body) return;
      setComments((items) => ({
        ...items,
        [selectedIncident.id]: [
          ...(items[selectedIncident.id] || []),
          { author: "Avery Stone", role, body, internal: form.get("internal") === "on", time: "Now" },
        ],
      }));
      event.currentTarget.reset();
    }

    return {
      authenticated,
      setAuthenticated,
      authMode,
      setAuthMode,
      active,
      setActive,
      role,
      setRole,
      incidents,
      comments,
      selectedIncident,
      filters,
      setFilters,
      noticeOpen,
      setNoticeOpen,
      themeMode,
      setThemeMode,
      metrics,
      filteredIncidents,
      openIncident,
      handleIncidentSubmit,
      changeStatus,
      assignIncident,
      addComment,
    };
  }

  window.CasperIMS.core.store.useAppController = useAppController;
})();
