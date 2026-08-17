"use client";

import { FormEvent, useState } from "react";

type Props = { title?: string; button?: string; compact?: boolean; kind?: "enquiry" | "requirement" | "contact" | "register" | "login" };

export default function LeadForm({ title, button = "Submit", compact = false, kind = "enquiry" }: Props) {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  if (sent) return <div className="success-box"><span>✓</span><h3>Submitted successfully</h3><p>This is a frontend demo. Your flow and success state are working correctly.</p><button onClick={() => setSent(false)}>Submit another response</button></div>;

  return (
    <form className={`lead-form ${compact ? "compact" : ""}`} onSubmit={submit}>
      {title && <h3>{title}</h3>}
      {kind === "login" ? <><label>Email address<input type="email" required placeholder="name@company.com" /></label><label>Password<input type="password" required placeholder="••••••••" /></label></> : <>
        <div className="form-row"><label>Full name<input required placeholder="Your name" /></label><label>Business email<input required type="email" placeholder="name@company.com" /></label></div>
        {kind === "register" && <><div className="form-row"><label>Company name<input required placeholder="Registered company name" /></label><label>Mobile number<input required placeholder="10-digit number" /></label></div><label>Primary business category<select required><option value="">Select category</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label></>}
        {kind === "requirement" && <><div className="form-row"><label>Product or service<input required placeholder="What do you need?" /></label><label>Required quantity<input required placeholder="Quantity / project size" /></label></div><label>Delivery location<input required placeholder="City, State" /></label></>}
        {kind === "contact" && <label>Subject<select><option>General enquiry</option><option>Membership support</option><option>Buyer support</option><option>Seller support</option></select></label>}
        {kind !== "register" && <label>{kind === "requirement" ? "Requirement details" : "Message"}<textarea required placeholder={kind === "requirement" ? "Specifications, preferred timeline and other details" : "Tell the supplier what you need"} /></label>}
      </>}
      <button className="button button-primary" type="submit">{button} →</button>
      <small>By submitting, you agree to the marketplace terms and privacy policy.</small>
    </form>
  );
}

const categories = ["Industrial Machinery", "Technology & IT", "Construction", "Healthcare", "Electrical", "Agriculture", "Packaging", "Energy", "Other"];
