"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, Check, Clock3, Heart, MapPin, MessageCircle, PackageCheck, ShieldCheck, Star } from "lucide-react";
import { formatETB, Vendor, VendorProduct } from "../../../../vendor-data";

const customerNotes = [
  { name: "Mimi K.", rating: 5, note: "The finish is beautiful and the shop helped us choose the right size for our space." },
  { name: "Dawit A.", rating: 5, note: "Excellent local craftsmanship. Clear communication from start to finish." }
];

export default function ProductDetail({ vendor, product }: { vendor: Vendor; product: VendorProduct }) {
  const [saved, setSaved] = useState(false);
  const [sent, setSent] = useState(false);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return <main className="vendor-page">
    <header className="vendor-topbar">
      <Link href="/vendors" className="vendor-brand"><span className="vendor-brand-mark">⌂</span><span>HOMELY <i>AI</i><small>LOCAL FINDS, MADE FOR HOME</small></span></Link>
      <nav><Link href="/">Home</Link><Link className="current" href="/vendors">Marketplace</Link><Link href={`/vendors/${vendor.slug}`}>Shop profile</Link></nav>
      <Link href="/vendor/dashboard" className="vendor-top-action">Vendor dashboard <ArrowRight size={15} /></Link>
    </header>

    <div className="product-detail-breadcrumb"><Link href="/vendors"><ArrowLeft size={14} /> Marketplace</Link><span>/</span><Link href={`/vendors/${vendor.slug}`}>{vendor.name}</Link><span>/</span><span>{product.name}</span></div>

    <section className="product-detail-layout">
      <div className="product-detail-main">
        <div className="product-detail-image" style={{ backgroundImage: `url("${product.image}")` }}>
          {vendor.premium && <span className="sponsored-tag">PROMOTED</span>}
          <button type="button" className={`save-product ${saved ? "is-saved" : ""}`} onClick={() => setSaved((value) => !value)} aria-label={saved ? "Remove from saved products" : "Save product"}><Heart size={18} fill={saved ? "currentColor" : "none"} /></button>
        </div>
        <div className="product-detail-information">
          <span className="vendor-eyebrow">{product.category.toUpperCase()} · {product.style.toUpperCase()}</span>
          <h1>{product.name}</h1>
          <div className="product-detail-price"><b>{formatETB(product.price)}</b>{product.oldPrice && <del>{formatETB(product.oldPrice)}</del>}<span>{product.availability}</span></div>
          <p>{product.description}</p>
          <div className="product-spec-grid"><div><span>MATERIAL</span><b>{product.material}</b></div><div><span>DIMENSIONS</span><b>{product.dimensions}</b></div><div><span>COLORS</span><b>{product.colors.join(", ")}</b></div><div><span>STYLE</span><b>{product.style}</b></div></div>
          <div className="product-detail-actions"><a className="button button-dark" href="#product-inquiry"><MessageCircle size={16} /> Ask about this product</a><Link className="dashboard-secondary-button" href={`/vendors/${vendor.slug}`}>Visit shop <ArrowRight size={14} /></Link></div>
          <p className="product-detail-disclaimer"><ShieldCheck size={15} /> Contact the vendor to confirm pricing, availability, delivery and order terms.</p>
        </div>
        <section className="product-review-section"><div className="store-products-title"><div><span className="vendor-eyebrow">CUSTOMER FEEDBACK</span><h2>Reviews for this shop</h2></div><span><Star size={15} fill="currentColor" /> {vendor.rating.toFixed(1)} ({vendor.reviewCount})</span></div><p>Customer ratings reflect genuine experiences with the vendor. Premium placement does not affect ratings.</p>{customerNotes.map((review) => <article className="product-review-note" key={review.name}><div className="review-card-top"><b>{review.name}</b><span>Verified customer</span></div><div className="review-stars">{"★".repeat(review.rating)}</div><p>{review.note}</p></article>)}<Link href={`/vendors/${vendor.slug}#reviews`} className="product-all-reviews">See all {vendor.reviewCount} shop reviews <ArrowRight size={14} /></Link></section>
      </div>
      <aside className="product-detail-sidebar">
        <Link href={`/vendors/${vendor.slug}`} className="product-vendor-card"><span className="product-vendor-cover" style={{ backgroundImage: `url("${vendor.cover}")` }} /><span className="product-vendor-avatar" style={{ backgroundImage: `url("${vendor.logo}")` }} /><span className="product-vendor-info"><b>{vendor.name} {vendor.verified && <BadgeCheck size={15} />}</b><small>{vendor.category}</small><span><Star size={14} fill="currentColor" /> <b>{vendor.rating.toFixed(1)}</b> · {vendor.reviewCount} reviews</span><span><MapPin size={13} /> {vendor.location}</span></span><span className="product-vendor-cta">View vendor profile <ArrowRight size={14} /></span></Link>
        <section className="product-inquiry-card" id="product-inquiry"><span className="vendor-eyebrow">CONTACT THE SELLER</span><h2>Interested in this piece?</h2>{sent ? <div className="inquiry-success"><Check size={20} /><b>Inquiry ready to go!</b><span>This demo doesn’t send messages yet. Contact the shop directly to complete your request.</span></div> : <form onSubmit={submitInquiry}><label>Your name<input name="name" required placeholder="Full name" /></label><label>Email or phone<input name="contact" required placeholder="How can they reach you?" /></label><label>Message<textarea name="message" rows={4} defaultValue={`Hello, I'm interested in the ${product.name}. Please share more details.`} required /></label><button className="button button-dark" type="submit">Send product inquiry <ArrowRight size={14} /></button><small>Your inquiry is about <b>{product.name}</b>.</small></form>}</section>
        <div className="product-safety-note"><PackageCheck size={17} /><span><b>Made locally, bought directly</b><small>HOMELY AI connects you with the shop. Confirm payment and delivery directly with the vendor.</small></span></div>
        <div className="product-hours-note"><Clock3 size={15} /> Shop hours: {vendor.hours}</div>
      </aside>
    </section>
    <footer className="vendor-footer"><Link href="/vendors"><ArrowLeft size={14} /> Back to marketplace</Link><span>Thoughtful spaces. Local hands. Made for homes in Ethiopia.</span><Link href={`/vendors/${vendor.slug}`}>Visit shop <ArrowRight size={14} /></Link></footer>
  </main>;
}
