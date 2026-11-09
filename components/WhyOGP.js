const pillars = [
  {
    num: '01',
    title: 'Local to the mines',
    text: 'We are based in Photsaneng, a host community for nearby mining operations. We mobilise fast and hire locally.',
  },
  {
    num: '02',
    title: 'Proven on site',
    text: 'We have completed work for Sibanye-Stillwater and Royal Bafokeng Administration.',
  },
  {
    num: '03',
    title: 'Compliant and ready',
    text: 'CSD registered. B-BBEE compliant. SARS tax compliant. COIDA in good standing.',
  },
  {
    num: '04',
    title: 'One partner, many services',
    text: 'Construction, cleaning, vegetation control and mining support under one contract. Plant and haulage come through our hire and partner network.',
  },
]

export default function WhyOGP() {
  return (
    <section className="sec sec-dark" id="why-ogp">
      <div className="eyebrow">Why OGP</div>
      <h2 className="h2">Why mines and clients choose us.</h2>
      <div className="why-grid">
        {pillars.map(p => (
          <div className="why-card" key={p.num}>
            <div className="why-num">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
