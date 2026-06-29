(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.pages = window.CasperIMS.pages || {};
  const { UsersScreen } = window.CasperIMS.features.users.components;
  const { AdminScreen } = window.CasperIMS.features.admin.components;
  const { Profile } = window.CasperIMS.features.settings.components;

  function UsersPage() {
    return <UsersScreen />;
  }

  function AdminPage({ type }) {
    return <AdminScreen type={type} />;
  }

  function ProfilePage({ controller }) {
    return <Profile role={controller.role} />;
  }

  Object.assign(window.CasperIMS.pages, { UsersPage, AdminPage, ProfilePage });
})();
