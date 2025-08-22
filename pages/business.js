import { useState } from "react";
import PathHeader from "../shared/PathHeader";
import CoachCard from "../shared/CoachCard";
import ToneDial from "../shared/ToneDial";

const SAMPLE_OBJECTION = "It’s too expensive.";

export default function Business() {
  const [tone, setTone] = useState("Calm Assertive");
  const [objection, setObjection] = useState(SAMPLE_OBJECTION);
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function reframe() {
    setLoading(true);
    try {
      const r = await fetch("/api/suggest", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ mode:"business", tone, objection })
      });
      const data = await r.json();
      setSuggestion(data.nextLine);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <PathHeader
        title="Business / Sales"
        subtitle="Objection Reframer & Deal Mover"
        backHref="/"
      />

      <div className="panel">
        <label className="label">Prospect objection</label>
        <input className="input" value={objection} onChange={e=>setObjection(e.target.value)} />
        <ToneDial tone={tone} onChange={setTone} />
        <button className="button" onClick={reframe} disabled={loading}>
          {loading ? "Reframing…" : "Reframe Objection"}
        </button>

        {suggestion && (
          <CoachCard
            title="Suggested phrasing"
            content={suggestion}
            tips={[
              "Mirror their last 1–3 words once.",
              "Label the emotion without judgment.",
              "Ask a calibrated question: 'How can we…?'"
            ]}
          />
        )}
      </div>

      <div className="panel soft">
        <h3>Deal Mover Snapshot</h3>
        <ul className="bullets">
          <li>Next action: clarify value vs price</li>
          <li>Send 2-line recap email after call</li>
          <li>Schedule decision date (no open loops)</li>
        </ul>
      </div>
    </main>
  );
}
