import Link from "next/link";
import LeadForm from "../../components/LeadForm";

export default function LoginPage() {
  return <main className="auth-page"><section className="auth-panel auth-visual"><div><span className="kicker"><i /> Member access</span><h1>Welcome back to your business network.</h1><p>Manage company listings, enquiries, requirements and marketplace activity.</p></div></section><section className="auth-panel auth-form-panel"><div className="auth-box"><span className="auth-logo">FOUND<span className="brand-accent">RY</span></span><h2>Sign in</h2><p>Use your registered business email.</p><LeadForm kind="login" button="Sign in" compact /><div className="auth-links"><a href="#">Forgot password?</a><span>New here? <Link href="/register">Create account</Link></span></div></div></section></main>;
}
