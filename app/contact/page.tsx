import LeadForm from "../../components/LeadForm";

export default function ContactPage() {
  return <main><section className="page-hero"><div className="site-wrap"><span className="breadcrumbs">Home / Contact</span><h1>How can we help?</h1><p>Contact marketplace support for buyer, supplier or membership assistance.</p></div></section><section className="section section-white"><div className="site-wrap contact-layout"><div className="contact-cards"><article><span>☎</span><h3>Marketplace helpline</h3><p>1800 000 4040</p><small>Monday–Friday, 10 AM–6 PM</small></article><article><span>✉</span><h3>Email support</h3><p>marketplace@smechamber.in</p><small>Response within one business day</small></article><article><span>⌖</span><h3>Office</h3><p>Mumbai, Maharashtra</p><small>India business support centre</small></article></div><LeadForm title="Send us a message" button="Send message" kind="contact" /></div></section></main>;
}
