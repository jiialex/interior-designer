"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, Check, FileText, ShieldCheck, Store } from "lucide-react";

export default function VendorRegistrationPage() {
  const [submitted, setSubmitted] = useState(false);

  function submitApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return <main className="vendor-page">
    <header className="vendor-topbar"><Link href="/vendors" className="vendor-brand"><span className="vendor-brand-mark">⌂</span><span>HOMELY <i>AI</i><small>LOCAL FINDS, MADE FOR HOME</small></span></Link><nav><Link href="/vendors">Marketplace</Link><Link href="/vendor/dashboard">Vendor studio</Link></nav><Link href="/vendors" className="vendor-top-action"><ArrowLeft size={15} /> Back to shops</Link></header>
    <section className="registration-layout">
      <div className="registration-intro"><span className="vendor-eyebrow"><Store size={14} /> SELL WITH HOMELY AI</span><h1>Good work deserves to be <em>discovered.</em></h1><p>Create a digital storefront for your furniture, home-decor or interior-product business. Share your story, list your products and meet your next customers.</p><div className="registration-benefits"><span><Check size={16} /> A public business storefront</span><span><Check size={16} /> Product listings and inquiries</span><span><Check size={16} /> Genuine customer reviews</span></div><div className="registration-policy"><ShieldCheck size={18} /><span><b>Your trust comes first</b><small>Business profiles are reviewed before appearing as verified. Premium plans affect promotional tools only—not customer ratings.</small></span></div></div>
      <section className="registration-card">
        {submitted ? <div className="application-success"><span><Check size={24} /></span><span className="vendor-eyebrow">APPLICATION RECEIVED</span><h2>Thanks for introducing your business.</h2><p>Your application is now <b>Pending review</b>. An administrator will verify your business information before your shop can receive a verified badge or appear as an approved storefront.</p><div><FileText size={17} /> Status: <b>Pending</b></div><Link href="/vendors" className="button button-dark">Return to marketplace <ArrowRight size={15} /></Link><small>This demonstration form doesn’t upload or save your information.</small></div> : <>
          <span className="vendor-eyebrow">VENDOR APPLICATION</span><h2>Tell us about your shop</h2><p>Share your business details. All fields marked * are required.</p>
          <form onSubmit={submitApplication}>
            <label>Business or shop name *<input name="business" required placeholder="e.g. Addis Wood Studio" /></label>
            <label>Owner or authorized representative *<input name="representative" required placeholder="Full name" /></label>
            <div className="registration-form-row"><label>Business email *<input name="email" type="email" required placeholder="you@business.com" /></label><label>Phone number *<input name="phone" type="tel" required placeholder="+251 ..." /></label></div>
            <div className="registration-form-row"><label>Business location *<input name="location" required placeholder="Area, city" /></label><label>Business category *<select name="category" required defaultValue=""><option value="" disabled>Select a category</option><option>Furniture & woodworking</option><option>Home decor & textiles</option><option>Furniture & upholstery</option><option>Lighting & interior products</option><option>Other home business</option></select></label></div>
            <label>Business description<textarea name="description" rows={3} placeholder="What makes your business special?" /></label>
            <label>Business documents (optional)<span className="registration-upload"><FileText size={17} /><span><b>Attach supporting documents</b><small>Business license or other supporting details</small></span><input type="file" name="documents" /></span></label>
            <label className="registration-consent"><input type="checkbox" required /> I confirm these business details are accurate and agree to the vendor review process.</label>
            <button type="submit" className="button button-dark">Submit for verification <ArrowRight size={15} /></button>
          </form>
          <div className="registration-footnote"><BadgeCheck size={14} /> Only approved businesses receive the verified business badge.</div>
        </>}
      </section>
    </section>
    <footer className="vendor-footer"><Link href="/vendors">HOMELY <i>AI</i></Link><span>Thoughtful spaces. Local hands. Made for homes in Ethiopia.</span><Link href="/vendor/dashboard">Vendor studio <ArrowRight size={14} /></Link></footer>
  </main>;
}
