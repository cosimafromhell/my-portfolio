import Container from './container';
import ExternalServiceProfileLinkIconSection from '../components/ExternalServiceProfileLinkIconSection';
import Link from 'next/link';

export default function Footer() {
  const h4CommonClassName = "text-lg md:text-xl lg:text-2xl tracking-tighter leading-tight mb-10 lg:mb-0 lg:pr-4 lg:w-1/2";

  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="grid grid-cols-2">
          <div className="py-10 md:py-20">
            <h3 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight ml-2 mb-2">
              Other Profile
          </h3>
            <ExternalServiceProfileLinkIconSection />
          </div>
          <div className="grid grid-cols-2 items-center py-12">
            <h4 className={h4CommonClassName}>
              <Link href="/">
                <a className="hover:bg-yellow-400">HOME</a>
              </Link>
            </h4>
            <h4 className={h4CommonClassName}>
              <Link href="/blog">
                <a className="hover:bg-yellow-400">BLOG</a>
              </Link>
            </h4>
            <h4 className={h4CommonClassName}>
              <Link href="/mail">
                <a className="hover:bg-yellow-400">CONTACT</a>
              </Link>
            </h4>
          </div>
        </div>
      </Container>
    </footer>
  )
}
