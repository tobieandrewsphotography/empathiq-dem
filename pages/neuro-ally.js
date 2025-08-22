import { useState } from "react";
import PathHeader from "../shared/PathHeader";
import CoachCard from "../shared/CoachCard";
import ToneDial from "../shared/ToneDial";

export default function NeuroAlly() {
  const [tone, setTone] = useState("Calm Assertive");
  const [goal, setGoal] = useState("Be heard without escalating");
  const [transcript, setTranscript] = useState("Them: I’m frustrated you didn’t reply earlier.");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);

  async function getSuggestion() {
    setLoading(true);
    try {
      const r = await fetch("/api/suggest", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ mode: "neuro", tone, goal, transcript })
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
        title="Neuro Ally"
        subtitle="Conversational Flow Coach & Stand Up for Myself"
        backHref="/"
      />

      <div className="panel">
        <label className="label">Your goal</label>
        <input className="input" value={goal} onChange={e=>setGoal(e.target.value)} />

        <label className="label" style={{marginTop:12}}>Conversation so far</label>
        <textarea className="textarea" rows={4} value={transcript} onChange={e=>setTranscript(e.target.value)} />

        <ToneDial tone={tone} onChange={setTone} />

        <button className="button" onClick={getSuggestion} disabled={loading}>
          {loading ? "Thinking…" : "What should I say next?"}
        </button>

        {suggestion && (
          <CoachCard
            title="Suggested phrasing"
            content={suggestion}
            tips={[
              "Keep your pace slow; use a soft entry.",
              "Name the feeling once, then ask a calibrated question.",
              "Pause for 2–3 seconds after the key sentence."
            ]}
          />
        )}
      </div>

      <div className="panel soft">
        <h3>Stand Up for Myself (de-escalation)</h3>
        <p className="muted">
          If your heart rate spikes, try: “I want to stay respectful. Can we slow down so I can explain clearly?”
        </p>
        <p className="muted">
          Boundary phrase: “I’m happy to discuss this. I’m not okay with being yelled at.”
        </p>
      </div>
    </main>
  );
}
