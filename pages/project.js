import { useState } from "react";
import PathHeader from "../shared/PathHeader";
import CoachCard from "../shared/CoachCard";

export default function ProjectBuilder() {
  const [target, setTarget] = useState("HyperStore AI — Product Director");
  const [hook, setHook] = useState("");

  function makeHook() {
    setHook(
      `Thanks for the time today. I studied ${target.split("—")[0].trim()}’s focus on reliability and I’ve mapped my plan to your roadmap so you can see traction in week one.`
    );
  }

  return (
    <main className="container">
      <PathHeader
        title="Project Builder"
        subtitle="Know who you’re presenting to (quick brief)"
        backHref="/"
      />

      <div className="panel">
        <label className="label">Target person / company</label>
        <input className="input" value={target} onChange={e=>setTarget(e.target.value)} />
        <button className="button" onClick={makeHook}>Generate Opening Hook</button>

        {hook && (
          <CoachCard
            title="Opening hook"
            content={hook}
            tips={[
              "Lead with their priorities, not yours.",
              "Promise one concrete outcome.",
              "Invite correction: 'What did I miss?'"
            ]}
          />
        )}
      </div>

      <div className="panel soft">
        <h3>Briefing Notes</h3>
        <ul className="bullets">
          <li>Values: reliability, speed-to-value, low risk</li>
          <li>Tone: analytical, collaborative</li>
          <li>Close with: one ask + next step</li>
        </ul>
      </div>
    </main>
  );
}
