import Link from 'next/link'

export default function CtaBand({
  heading = 'Need a reliable local partner?',
  text = 'Tell us what the site needs. We will come back to you within one working day.',
}) {
  return (
    <section className="cta-band">
      <div>
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
      <div className="cta-actions">
        <Link href="/#contact" className="btn">
          Contact us
        </Link>
        <a href="/downloads/OGP-Services-Company-Profile.pdf" download className="btn btn-ghost">
          Download company profile
        </a>
      </div>
    </section>
  )
}
