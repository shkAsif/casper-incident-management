(() => {
  const { useAppController } = window.CasperIMS.core.store;
  const { renderRoute } = window.CasperIMS.core.router;
  const { AuthScreen, AppShell } = window.CasperIMS.shared.layouts;

  function App() {
    const controller = useAppController();

    if (!controller.authenticated) {
      return (
        <AuthScreen
          authMode={controller.authMode}
          setAuthMode={controller.setAuthMode}
          themeMode={controller.themeMode}
          setThemeMode={controller.setThemeMode}
          onEnter={() => controller.setAuthenticated(true)}
        />
      );
    }

    return (
      <AppShell
        active={controller.active}
        role={controller.role}
        setActive={controller.setActive}
        setRole={controller.setRole}
        themeMode={controller.themeMode}
        setThemeMode={controller.setThemeMode}
        noticeOpen={controller.noticeOpen}
        setNoticeOpen={controller.setNoticeOpen}
        setAuthenticated={controller.setAuthenticated}
      >
        {renderRoute(controller)}
      </AppShell>
    );
  }

  window.CasperIMS.App = App;
  ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
