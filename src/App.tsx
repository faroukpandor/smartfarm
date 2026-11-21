import { useEffect, useMemo, useState } from "react";
import { farmRepository } from "./repositories/farmRepository";
import { livestockAssessmentRepository } from "./repositories/livestockAssessmentRepository";
import { calculateHerdPerformance, type LivestockAssessment } from "./domain/livestockPerformance";
import type { Farm } from "./domain/farm";

type Module = "Overview" | "Crops" | "Livestock" | "Inventory" | "Tasks" | "Finance";
const modules: Module[] = ["Overview", "Crops", "Livestock", "Inventory", "Tasks", "Finance"];

const today = () => new Date().toISOString().slice(0, 10);
const emptyForm = () => ({
  periodStart: today(),
  periodEnd: today(),
  breedingFemalesExposed: "0",
  femalesCalved: "0",
  calvesBornAlive: "0",
  calvesWeaned: "0",
  totalWeaningWeightKg: "",
  notes: "",
});

function metric(value: number | undefined, suffix = "") {
  return value === undefined || !Number.isFinite(value) ? "—" : `${value.toFixed(1)}${suffix}`;
}

function App() {
  const [active, setActive] = useState<Module>("Overview");
  const [farms, setFarms] = useState<Farm[]>([]);
  const [assessments, setAssessments] = useState<LivestockAssessment[]>([]);
  const [showSetup, setShowSetup] = useState(false);
  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [form, setForm] = useState(emptyForm);
  const [saveError, setSaveError] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const loadFarms = async () => setFarms(await farmRepository.list());
  const loadAssessments = async (farmId: string) => setAssessments(await livestockAssessmentRepository.listByFarm(farmId));
  useEffect(() => { void loadFarms(); }, []);
  useEffect(() => {
    if (farms[0]) void loadAssessments(farms[0].id);
    else setAssessments([]);
  }, [farms]);

  const currentFarm = farms[0];
  const numeric = useMemo(() => ({
    breedingFemalesExposed: Number(form.breedingFemalesExposed),
    femalesCalved: Number(form.femalesCalved),
    calvesBornAlive: Number(form.calvesBornAlive),
    calvesWeaned: Number(form.calvesWeaned),
    totalWeaningWeightKg: form.totalWeaningWeightKg.trim() === "" ? undefined : Number(form.totalWeaningWeightKg),
  }), [form]);
  const liveMetrics = useMemo(() => {
    const values = Object.values(numeric).filter((v): v is number => v !== undefined);
    if (values.some((v) => !Number.isFinite(v) || v < 0)) return undefined;
    return calculateHerdPerformance(numeric);
  }, [numeric]);

  const createFarm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    try {
      const now = new Date().toISOString();
      await farmRepository.save({ id: crypto.randomUUID(), name, ownerName, location, createdAt: now, updatedAt: now });
      setName(""); setOwnerName(""); setLocation(""); setShowSetup(false);
      await loadFarms();
    } catch {
      setError("Please provide a farm name, owner name and location.");
    }
  };

  const saveAssessment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaveError(""); setSavedMessage("");
    if (!currentFarm) {
      setSaveError("Create a farm profile before recording a livestock assessment.");
      return;
    }
    const now = new Date().toISOString();
    const totalWeight = form.totalWeaningWeightKg.trim() === "" ? undefined : Number(form.totalWeaningWeightKg);
    const record = {
      id: crypto.randomUUID(),
      farmId: currentFarm.id,
      periodStart: form.periodStart,
      periodEnd: form.periodEnd,
      breedingFemalesExposed: Number(form.breedingFemalesExposed),
      femalesCalved: Number(form.femalesCalved),
      calvesBornAlive: Number(form.calvesBornAlive),
      calvesWeaned: Number(form.calvesWeaned),
      ...(totalWeight === undefined ? {} : { totalWeaningWeightKg: totalWeight }),
      notes: form.notes,
      createdAt: now,
      updatedAt: now,
    };
    try {
      await livestockAssessmentRepository.save(record);
      await loadAssessments(currentFarm.id);
      setForm(emptyForm());
      setSavedMessage("Assessment saved on this device. It remains available offline.");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Please check the values and try again.";
      setSaveError(message.includes("periodEnd") ? "The end date must be on or after the start date."
        : message.includes("femalesCalved") ? "Females calved cannot exceed breeding females exposed."
        : message.includes("calvesWeaned") ? "Calves weaned cannot exceed calves born alive."
        : "Please enter valid whole-number animal counts and a non-negative weight.");
    }
  };

  return (
    <main className="app-shell">
      <header className="topbar"><div><p className="eyebrow">CLIMATE-RESILIENT FARM OPERATIONS</p><h1>SmartFarm</h1><p className="subtitle">Operational truth first. Intelligence second.</p></div><span className="offline-badge">● Offline ready</span></header>
      <nav className="module-nav" aria-label="Farm modules">
        {modules.map((module) => <button key={module} className={active === module ? "nav-button active" : "nav-button"} onClick={() => setActive(module)}>{module}</button>)}
      </nav>
      {active === "Overview" ? (
        <>
          <section className="hero"><div><p className="eyebrow">FARM CONTROL CENTRE</p><h2>{currentFarm ? currentFarm.name : "Build a reliable farm record before adding automation."}</h2><p>{currentFarm ? currentFarm.location + " · Owner: " + currentFarm.ownerName : "Record production, livestock, inputs, work and money locally, then export or synchronise later."}</p></div><button className="primary" onClick={() => setShowSetup(true)}>Create farm</button></section>
          <section className="cards" aria-label="Farm summary">
            {[[ "Registered farms", String(farms.length), "Stored locally"],["Livestock assessments",String(assessments.length),"Saved on this device"],["Open tasks","0","Nothing overdue"],["Inventory items","0","Local-first ledger"]].map(([label,value,note]) => <article className="card" key={label}><span>{label}</span><strong>{value}</strong><small>{note}</small></article>)}
          </section>
          <section className="panel"><div><p className="eyebrow">NEXT ACTION</p><h3>{currentFarm ? "Farm foundation saved locally" : "Set up your first farm"}</h3><p>Start with the farm profile. Then record herd performance, production, water, crops and finance.</p></div><button className="secondary" onClick={() => setShowSetup(true)}>{currentFarm ? "Add farm" : "Open setup"}</button></section>
          {showSetup && <section className="panel setup-panel" aria-label="Farm setup"><p className="eyebrow">FARM SETUP</p><h3>Create a local farm record</h3><form onSubmit={createFarm} className="setup-form"><label>Farm name<input value={name} onChange={(e) => setName(e.target.value)} required /></label><label>Owner / manager<input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required /></label><label>Location<input value={location} onChange={(e) => setLocation(e.target.value)} required /></label>{error && <p role="alert">{error}</p>}<div><button type="submit" className="primary">Save locally</button><button type="button" className="secondary" onClick={() => setShowSetup(false)}>Cancel</button></div></form></section>}
        </>
      ) : active === "Livestock" ? (
        <section className="livestock-workspace">
          <div className="section-heading"><p className="eyebrow">HERD PERFORMANCE · FIRST RELEASE</p><h2>Breeding and weaning assessment</h2><p>Record one defined breeding cohort or reporting period. Calculations use the counts you enter; no assumed benchmarks or stocking-rate recommendations are applied.</p></div>
          {!currentFarm ? <div className="panel"><div><h3>Farm profile required</h3><p>Create a farm on the Overview tab before saving livestock records.</p></div><button className="primary" onClick={() => { setActive("Overview"); setShowSetup(true); }}>Create farm</button></div> : (
            <>
              <div className="farm-context"><strong>{currentFarm.name}</strong><span>{currentFarm.location}</span><span>Saved locally on this device</span></div>
              <form className="assessment-form" onSubmit={saveAssessment}>
                <div className="form-section"><h3>1. Reporting period</h3><div className="form-grid"><label>Period start<input type="date" value={form.periodStart} onChange={(e) => setForm({...form,periodStart:e.target.value})} required /></label><label>Period end<input type="date" value={form.periodEnd} onChange={(e) => setForm({...form,periodEnd:e.target.value})} required /></label></div></div>
                <div className="form-section"><h3>2. Herd and calf records</h3><p className="helper">Use animals from the same defined breeding group and period. Enter zero if none; do not estimate missing records.</p><div className="form-grid">
                  <label>Breeding females exposed<input type="number" min="0" step="1" value={form.breedingFemalesExposed} onChange={(e) => setForm({...form,breedingFemalesExposed:e.target.value})} required /></label>
                  <label>Females that calved<input type="number" min="0" step="1" value={form.femalesCalved} onChange={(e) => setForm({...form,femalesCalved:e.target.value})} required /></label>
                  <label>Calves born alive<input type="number" min="0" step="1" value={form.calvesBornAlive} onChange={(e) => setForm({...form,calvesBornAlive:e.target.value})} required /></label>
                  <label>Calves weaned<input type="number" min="0" step="1" value={form.calvesWeaned} onChange={(e) => setForm({...form,calvesWeaned:e.target.value})} required /></label>
                  <label>Total weight of calves weaned (kg)<input type="number" min="0" step="0.1" placeholder="Optional — leave blank if not weighed" value={form.totalWeaningWeightKg} onChange={(e) => setForm({...form,totalWeaningWeightKg:e.target.value})} /></label>
                </div></div>
                <div className="form-section"><h3>3. Notes and data limitations</h3><label>Notes<textarea rows={3} maxLength={2000} placeholder="Record group definition, missing records, weighing method or relevant context." value={form.notes} onChange={(e) => setForm({...form,notes:e.target.value})} /></label></div>
                <div className="metrics-panel"><div className="metrics-heading"><div><p className="eyebrow">LIVE CALCULATIONS</p><h3>Herd performance indicators</h3></div><span>Calculated from entered counts</span></div><div className="metrics-grid">
                  <article><span>Calving rate</span><strong>{metric(liveMetrics?.calvingRatePercent,"%")}</strong><small>Females calved ÷ females exposed</small></article>
                  <article><span>Calf survival to weaning</span><strong>{metric(liveMetrics?.calfSurvivalToWeaningPercent,"%")}</strong><small>Calves weaned ÷ calves born alive</small></article>
                  <article><span>Weaning rate</span><strong>{metric(liveMetrics?.weaningRatePercent,"%")}</strong><small>Calves weaned ÷ females exposed</small></article>
                  <article><span>Kg weaned per exposed female</span><strong>{metric(liveMetrics?.kgWeanedPerExposedFemale," kg")}</strong><small>Total weaning weight ÷ females exposed</small></article>
                </div><p className="helper">A dash means the denominator is zero or the optional weight was not supplied. These are descriptive indicators, not a profitability verdict or a breed/ranch benchmark.</p></div>
                {saveError && <p className="form-error" role="alert">{saveError}</p>}{savedMessage && <p className="form-success" role="status">{savedMessage}</p>}
                <div className="form-actions"><button type="submit" className="primary">Save assessment offline</button><button type="button" className="secondary" onClick={() => setForm(emptyForm())}>Clear form</button></div>
              </form>
              <div className="history-panel"><h3>Saved assessments</h3>{assessments.length === 0 ? <p className="helper">No assessments recorded for this farm yet.</p> : <div className="assessment-list">{assessments.map((item) => { const m = calculateHerdPerformance(item); return <article key={item.id}><div><strong>{item.periodStart} to {item.periodEnd}</strong><span>{item.breedingFemalesExposed} breeding females exposed · {item.calvesWeaned} calves weaned</span></div><div className="history-metrics"><span>Weaning rate <b>{metric(m.weaningRatePercent,"%")}</b></span><span>Calving <b>{metric(m.calvingRatePercent,"%")}</b></span></div></article>; })}</div>}</div>
            </>
          )}
        </section>
      ) : <section className="panel module-placeholder"><p className="eyebrow">{active.toUpperCase()}</p><h2>{active} module</h2><p>This module is intentionally being built on the shared SmartFarm data model.</p></section>}
    </main>
  );
}
export default App;
