import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-scråeen min-w-full md:min-w-0 h-screen">
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
