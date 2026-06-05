import './globals.css'

export const metadata = {
  title: 'OGP Services (Pty) Ltd | Civil Contractor & Mining Support — Rustenburg',
  description: 'OGP Services — CIDB registered civil contractor and mining support company based in Rustenburg, North West. Track record with Royal Bafokeng Administration and Sibanye Stillwater. Reg: 2019/343931/07.',
  keywords: 'civil contractor Rustenburg, mining support Rustenburg, OGP Services, grass cutting mine Rustenburg, boundary wall construction, CIDB contractor North West, B-BBEE contractor, Sibanye Stillwater supplier, RBA contractor',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
