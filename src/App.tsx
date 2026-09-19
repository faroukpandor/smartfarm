import { useMemo, useState } from "react";

type Module = "Overview" | "Crops" | "Livestock" | "Inventory" | "Tasks" | "Finance";

const modules: Module[] = ["Overview", "Crops", "Livestock", "Inventory", "Tasks", "Finance"];

function App() {
  const [active, setActive] = useState<Module>("Overview");

  const cards = useMemo(
    () => [
      { label: "Active crop cycles", value: "0", note: "Ready for first farm setup" },
      { label: "Livestock groups", value: "0", note: "No records yet" },
      { label: "Open tasks", value: "0", note: "Nothing overdue" },
      { label: "Inventory items", value: "0", note: "Local-first ledger" },
    ],
    [],
  );

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">CLIMATE-RESILIENT FARM OPERATIONS</p>
          <h1>SmartFarm</h1>
          <p className="subtitle">Operational truth first. Intelligence second.</p>
        </div>
        <span className="offline-badge">● Offline ready</span>
      </header>

      <nav className="module-nav" aria-label="Farm modules">
        {modules.map((module) => (
          <button
            key={module}
            className={active === module ? "nav-button active" : "nav-button"}
            onClick={() => setActive(module)}
          >
            {module}
          </button>
        ))}
      </nav>

      {active === "Overview" ? (
        <>
          <section className="hero">
            <div>
              <p className="eyebrow">FARM CONTROL CENTRE</p>
              <h2>Build a reliable farm record before adding automation.</h2>
              <p>
                SmartFarm is designed for low-connectivity environments. Record production,
                livestock, inputs, work and money locally, then export or synchronise later.
              </p>
            </div>
            <button className="primary">Create farm</button>
          </section>

          <section className="cards" aria-label="Farm summary">
            {cards.map((card) => (
              <article className="card" key={card.label}>
                <span>{card.label}</span>
                <strong>{card.value}</strong>
                <small>{card.note}</small>
              </article>
            ))}
          </section>

          <section className="panel">
            <div>
              <p className="eyebrow">NEXT ACTION</p>
              <h3>Set up your first farm</h3>
              <p>
                Start with the farm profile, fields or production units, water sources and
                enterprises. Every later module builds on this foundation.
              </p>
            </div>
            <button className="secondary">Open setup</button>
          </section>
        </>
      ) : (
        <section className="panel module-placeholder">
          <p className="eyebrow">{active.toUpperCase()}</p>
          <h2>{active} module</h2>
          <p>This module is intentionally being built on the shared SmartFarm data model.</p>
        </section>
      )}
    </main>
  );
}

export default App;
