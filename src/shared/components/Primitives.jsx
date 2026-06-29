(() => {
  window.CasperIMS = window.CasperIMS || {};
  window.CasperIMS.shared = window.CasperIMS.shared || {};
  window.CasperIMS.shared.components = window.CasperIMS.shared.components || {};

  function ScreenHeader({ eyebrow, title, description, action }) {
    return (
      <header className="screen-header">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {action}
      </header>
    );
  }

  function Metric({ label, value, trend, tone }) {
    return (
      <article className={`metric ${tone || ""}`}>
        <span>{label}</span>
        <strong>{value}</strong>
        {trend && <small>{trend}</small>}
      </article>
    );
  }

  function Field({ label, value }) {
    return (
      <div className="field">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    );
  }

  function Select({ value, onChange, options }) {
    return (
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    );
  }

  Object.assign(window.CasperIMS.shared.components, {
    ScreenHeader,
    Metric,
    Field,
    Select,
  });
})();
