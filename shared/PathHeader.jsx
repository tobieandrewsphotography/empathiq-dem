export default function PathHeader({ title, subtitle, backHref="/" }) {
  return (
    <header style={{margin:'16px 0 20px 0'}}>
      <a href={backHref} style={{textDecoration:'none', fontSize:14}}>← Back</a>
      <h1 style={{margin:'8px 0 4px 0'}}>{title}</h1>
      <p style={{margin:0, opacity:.8}}>{subtitle}</p>
      <hr style={{margin:'16px 0'}}/>
    </header>
  );
}
