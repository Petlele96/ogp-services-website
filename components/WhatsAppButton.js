const LINK =
  'https://wa.me/27795335440?text=' +
  encodeURIComponent('Hello OGP Services, I would like to make an enquiry.')

export default function WhatsAppButton() {
  return (
    <a
      className="wa-btn"
      href={LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with OGP Services on WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 20l1.3-4.2A8 8 0 1 1 8.4 18.8L4 20z"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  )
}
