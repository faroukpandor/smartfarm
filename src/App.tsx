import { useEffect, useState } from "react";
import { farmRepository } from "./repositories/farmRepository";
import type { Farm } from "./domain/farm";

type Module = "Overview" | "Crops" | "Livestock" | "Inventory" | "Tasks" | "Finance";
const modules: Module[] = ["Overview", "Crops", "Livestock", "Inventory", "Tasks", "Finance"];

function App() {
  const [active, setActive] = useState<Module>("Overview");
  const [farms, setFarms] = useState<Farm[]>([]);
  const [showSetup, setShowSetup] = useState(false);
  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const loadFarms = async () => setFarms(await farmRepository.list());
  useEffect(() => { void loadFarms(); }, []);

  const createFarm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const now = new Date().toISOString();
      await farmRepository.save({
        id: crypto.randomUUID(), name, ownerName, location, createdAt: now, updatedAt: now,
      });
      setName(""); setOwnerName(""); setLocation(""); setShowSetup(false);
      await loadFarms();
    } catch {
      setError("Please provide a farm name, owner name and location.");
    }
  };

  const currentFarm = farms[0];
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
          <button key={module} className={active === module ? "nav-button active" : "nav-button"} onClick={() => setActive(module)}>
            {module}
          </button>
        ))}
      </nav>

      {active === "Overview" ? (
        <>
          <section className="hero">
            <div>
              <p className="eyebrow">FARM CONTROL CENTRE</p>
              <h2>{currentFarm ? currentFarm.name : "Build a reliable farm record before adding automation."}</h2>
              <p>{currentFarm ? currentFarm.location + " · Owner: " + currentFarm.ownerName : "Record production, livestock, inputs, work and money locally, then export or synchronise later."}</p>
            </div>
            <button className="primary" onClick={() => setShowSetup(true)}>Create farm</button>
          </section>

          <section className="cards" aria-label="Farm summary">
            {[
              ["Registered farms", String(farms.length), "Stored locally"],
              ["Active crop cycles", "0", "Ready for production records"],
              ["Open tasks", "0", "Nothing overdue"],
              ["Inventory items", "0", "Local-first ledger"],
            ].map(([label, value, note]) => (
              <article className="card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>
            ))}
          </section>

          <section className="panel">
            <div>
              <p className="eyebrow">NEXT ACTION</p>
              <h3>{currentFarm ? "Farm foundation saved locally" : "Set up your first farm"}</h3>
              <p>Start with the farm profile. Fields, enterprises, water, crops, livestock and finance will build on this foundation.</p>
            </div>
            <button className="secondary" onClick={() => setShowSetup(true)}>{currentFarm ? "Add farm" : "Open setup"}</button>
          </section>

          {showSetup && (
            <section className="panel" aria-label="Farm setup">
              <p className="eyebrow">FARM SETUP</p>
              <h3>Create a local farm record</h3>
              <form onSubmit={createFarm} className="setup-form">
                <label>Farm name<input value={name} onChange={(e) => setName(e.target.value)} required /></label>
                <label>Owner / manager<input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required /></label>
                <label>Location<input value={location} onChange={(e) => setLocation(e.target.value)} required /></label>
                {error && <p role="alert">{error}</p>}
                <div><button type="submit" className="primary">Save locally</button><button type="button" className="secondary" onClick={() => setShowSetup(false)}>Cancel</button></div>
              </form>
            </section>
          )}
        </>
      ) : (
        <section className="panel module-placeholder">
          <p className="eyebrow">{active.toUpperCase()}</p><h2>{active} module</h2>
          <p>This module is intentionally being built on the shared SmartFarm data model.</p>
        </section>
      )}
    </main>
  );
}
export default App;
