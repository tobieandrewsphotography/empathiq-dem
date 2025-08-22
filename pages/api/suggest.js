export default function handler(req, res) {
  const { mode, tone, goal, transcript, objection } = req.body || {};
  let nextLine = "Let me make sure I’m understanding you.";

  if (mode === "neuro") {
    nextLine =
      tone === "Warm Empathetic"
        ? "It sounds like you felt let down. I want to fix that—what would help right now?"
        : tone === "Tactical Curious"
        ? "Can I ask—what part felt most frustrating so I can address it directly?"
        : "I hear you. I didn’t intend to create stress, and I’m ready to make this right.";
    if (goal && goal.toLowerCase().includes("be heard")) {
      nextLine = nextLine + " I’ll keep this brief so I don’t overwhelm you.";
    }
  }

  if (mode === "business") {
    const obj = (objection || "").toLowerCase();
    if (obj.includes("expensive")) {
      nextLine =
        tone === "Warm Empathetic"
          ? "Totally fair—cost needs to feel comfortable. Can I show you where clients usually see the value first?"
          : tone === "Tactical Curious"
          ? "How are you comparing price vs. outcome on this? That’ll help me tailor the scope."
          : "Makes sense. If we anchored on outcomes that remove risk in week one, would the price make more sense?";
    } else {
      nextLine = "What metric matters most for you here—speed, risk, or ROI?";
    }
  }

  res.status(200).json({ nextLine });
}
