import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="site-wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="brand footer-brand">
              FOUND<span className="brand-accent">RY</span>
            </Link>
            <p>A clean B2B directory connecting verified Indian enterprises with products, services and meaningful business opportunities.</p>
          </div>
          <div><h4>Marketplace</h4><Link href="/products">All products</Link><Link href="/companies">Companies</Link><Link href="/requirements">Buyer requirements</Link></div>
          <div><h4>For business</h4><Link href="/register">Join marketplace</Link><Link href="/requirements#post">Post requirement</Link><Link href="/products">Product categories</Link></div>
          <div><h4>Support</h4><Link href="/about">About</Link><Link href="/contact">Contact us</Link><Link href="/login">Member login</Link></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Foundry Marketplace.</span><span>Privacy &nbsp; • &nbsp; Terms &nbsp; • &nbsp; Disclaimer</span></div>
      </div>
    </footer>
  );
}
