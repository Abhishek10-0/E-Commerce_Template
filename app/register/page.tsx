import Link from "next/link";
import LeadForm from "../../components/LeadForm";

export default function RegisterPage() {
  return <main className="auth-page"><section className="auth-panel auth-visual register-visual"><div><span className="kicker"><i /> Grow with the network</span><h1>Build your verified marketplace presence.</h1><p>Create a company profile, list products and connect with active buyers.</p><ul className="check-list light-list"><li>Professional business profile</li><li>Product and service catalogue</li><li>Buyer enquiry access</li></ul></div></section><section className="auth-panel auth-form-panel"><div className="auth-box auth-box-wide"><span className="auth-logo">FOUND<span className="brand-accent">RY</span></span><h2>Create business account</h2><p>Start with basic details. Verification can be completed afterward.</p><LeadForm kind="register" button="Create account" /><div className="auth-links"><span>Already registered? <Link href="/login">Sign in</Link></span></div></div></section></main>;
}
