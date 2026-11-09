import './globals.css'
import TopBar from '../components/TopBar'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'

export const metadata = {
  metadataBase: new URL('https://ogpservices.co.za'),
  title: {
    default: 'OGP Services | Civil Construction, Cleaning & Mining Support in Rustenburg',
    template: '%s | OGP Services',
  },
  description:
    'OGP Services is a Rustenburg contractor for civil construction, industrial cleaning, vegetation control and mining support. Work completed for Sibanye-Stillwater and Royal Bafokeng Administration.',
  keywords:
    'mining support services Rustenburg, industrial cleaning Rustenburg, grass cutting North West, civil construction Rustenburg, OGP Services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
