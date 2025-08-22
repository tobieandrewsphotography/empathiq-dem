export default function CoachCard({ title, content, tips=[] }) {
  return (
    <div className="coach">
      <h3>{title}</h3>
      <p className="bigline">{content}</p>
      {tips.length > 0 && (
        <>
          <h4 style={{marginTop:12}}>Delivery tips</h4>
          <ul className="bullets">{tips.map((t,i)=><li key={i}>{t}</li>)}</ul>
        </>
      )}
    </div>
  );
}
