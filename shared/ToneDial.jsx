const OPTIONS = ["Calm Assertive","Warm Empathetic","Tactical Curious"];

export default function ToneDial({ tone, onChange }) {
  return (
    <div style={{margin:'12px 0 8px 0'}}>
      <label className="label">Tone</label>
      <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
        {OPTIONS.map(opt => (
          <button
            key={opt}
            className={tone===opt ? "chip chip--active" : "chip"}
            onClick={()=>onChange(opt)}
            type="button"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
