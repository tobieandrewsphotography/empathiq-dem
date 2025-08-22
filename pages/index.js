export default function Home() {
  return (
    <main style={{fontFamily:'system-ui, Arial', padding:24, maxWidth:960, margin:'0 auto'}}>
      <h1>EmpathIQ — Demo Hub</h1>
      <p>Choose a path to explore the clickable demo:</p>
      <ul style={{lineHeight:'2'}}>
        <li><a href="/neuro-ally">🧠 Neuro Ally (Conversational Flow + Stand Up mode)</a></li>
        <li><a href="/business">💼 Business / Sales (Objection Reframer)</a></li>
        <li><a href="/project">📂 Project Builder (Know who you’re presenting to)</a></li>
      </ul>
      <hr style={{margin:'24px 0'}}/>
      <p style={{opacity:.8}}>This is an MVP demo: no audio recorded, no data stored. The “what to say next” is simulated via a local API.</p>
    </main>
  );
}
