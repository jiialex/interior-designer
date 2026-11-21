"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, Check, Clock3, Heart, Instagram, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Star, X } from "lucide-react";
import { formatETB, Vendor } from "../../vendor-data";

const reviews = [
  { name: "Mimi K.", date: "October 2026", rating: 5, text: "Beautifully made and even better in person. The team helped us choose a finish that works perfectly in our home." },
  { name: "Dawit A.", date: "September 2026", rating: 5, text: "Thoughtful service and excellent craftsmanship. It feels good to support a local maker." },
  { name: "Rahel T.", date: "August 2026", rating: 4, text: "Great quality and clear communication throughout. Would happily shop here again." }
];

export default function VendorStorefront({ vendor }: { vendor: Vendor }) {
  const [category, setCategory] = useState("All products");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [inquirySent, setInquirySent] = useState(false);
  const categories = ["All products", ...Array.from(new Set(vendor.products.map((product) => product.category)))];
  const products = vendor.products.filter((product) => category === "All products" || product.category === category);
  const product = vendor.products.find((item) => item.id === selectedProduct);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setInquirySent(true);
  }

  return (
    <main className="vendor-page">
      <header className="vendor-topbar">
        <Link href="/vendors" className="vendor-brand"><span className="vendor-brand-mark">⌂</span><span>HOMELY <i>AI</i><small>LOCAL FINDS, MADE FOR HOME</small></span></Link>
        <nav><Link href="/">Home</Link><Link className="current" href="/vendors">Marketplace</Link><a href="#products">Products</a><a href="#reviews">Reviews</a></nav>
        <Link href="/vendor/dashboard" className="vendor-top-action">Vendor dashboard <ArrowRight size={15} /></Link>
      </header>

      <div className="store-back"><Link href="/vendors"><ArrowLeft size={15} /> Back to marketplace</Link>{vendor.premium && <span className="sponsored-tag">PROMOTED BUSINESS</span>}</div>
      <section className="store-cover" style={{ backgroundImage: `linear-gradient(90deg, rgba(23,61,43,.66), rgba(23,61,43,.06)), url("${vendor.cover}")` }}>
        <span className="store-cover-caption">A HOMELY AI LOCAL BUSINESS</span>
      </section>
      <section className="store-profile">
        <div className="store-logo" style={{ backgroundImage: `url("${vendor.logo}")` }} />
        <div className="store-intro">
          <div className="store-title-line"><h1>{vendor.name}</h1>{vendor.verified && <span className="verified-chip"><BadgeCheck size={15} /> Verified business</span>}{vendor.premium && <span className="premium-chip">PREMIUM</span>}</div>
          <p>{vendor.tagline}</p>
          <div className="store-meta"><span><MapPin size={15} /> {vendor.location}</span><span><Star size={15} fill="currentColor" /> <b>{vendor.rating.toFixed(1)}</b> ({vendor.reviewCount} reviews)</span><span>{vendor.category}</span></div>
        </div>
        <button className="button button-dark store-contact-button" onClick={() => { setSelectedProduct(""); setInquirySent(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}><MessageCircle size={16} /> Contact shop</button>
      </section>
      <nav className="store-nav"><a href="#home">Shop home</a><a href="#about">About</a><a href="#products">Products</a><a href="#promotions">Promotions</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a></nav>

      <section className="store-content" id="home">
        <div className="store-main-column">
          <div className="store-welcome">
            <div className="store-section-heading"><span className="vendor-eyebrow">WELCOME TO {vendor.name.toUpperCase()}</span><h2>Considered pieces, made for living.</h2><p>{vendor.description}</p></div>
            <div className="store-benefits"><span><ShieldCheck size={17} /> Verified local business</span><span><Star size={16} fill="currentColor" /> {vendor.rating.toFixed(1)} from {vendor.reviewCount} reviews</span><span><Clock3 size={16} /> {vendor.hours}</span></div>
          </div>

          <section className="store-products-section" id="products">
            <div className="store-products-title"><div><span className="vendor-eyebrow">MADE WITH INTENTION</span><h2>Shop our collection</h2></div><span>{products.length} products</span></div>
            <div className="store-category-filters">{categories.map((item) => <button key={item} className={category === item ? "selected" : ""} onClick={() => setCategory(item)}>{item}</button>)}</div>
            <div className="store-product-grid">{products.map((item) => <article className="store-product-card" key={item.id}>
              <div className="store-product-photo-wrap">
                <Link href={`/vendors/${vendor.slug}/products/${item.id}`} className="store-product-image" style={{ backgroundImage: `url("${item.image}")` }} aria-label={`View ${item.name}`}>
                  {item.oldPrice && <span className="discount-label">OFFER</span>}
                </Link>
                <button className={`save-product ${favorites.includes(item.id) ? "is-saved" : ""}`} onClick={() => setFavorites((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])} aria-label={`${favorites.includes(item.id) ? "Remove" : "Save"} ${item.name}`}><Heart size={17} fill={favorites.includes(item.id) ? "currentColor" : "none"} /></button>
              </div>
              <div className="store-product-details"><span>{item.category} · {item.style}</span><Link href={`/vendors/${vendor.slug}/products/${item.id}`} className="store-product-name-link"><h3>{item.name}</h3></Link><div className="store-product-price"><b>{formatETB(item.price)}</b>{item.oldPrice && <del>{formatETB(item.oldPrice)}</del>}</div><small>{item.availability} · {item.material}</small><Link className="store-product-open" href={`/vendors/${vendor.slug}/products/${item.id}`}>View product <ArrowRight size={14} /></Link><button onClick={() => { setSelectedProduct(item.id); setInquirySent(false); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}>Ask about this <ArrowRight size={14} /></button></div>
            </article>)}</div>
          </section>

          <section className="store-promo" id="promotions"><span className="promo-icon">✳</span><div><span className="vendor-eyebrow">A LITTLE SOMETHING FOR YOU</span><h2>{vendor.offer}</h2><p>Ask us for details and availability when you get in touch.</p></div><span className="promo-mark">LOCAL OFFER</span></section>

          <section className="store-reviews" id="reviews">
            <div className="store-products-title"><div><span className="vendor-eyebrow">CUSTOMER EXPERIENCES</span><h2>Reviews from the community</h2></div><span><Star size={15} fill="currentColor" /> {vendor.rating.toFixed(1)} / 5</span></div>
            <div className="review-summary"><b>{vendor.rating.toFixed(1)}</b><div><div className="review-stars">★★★★★</div><small>Based on {vendor.reviewCount} customer reviews</small></div><div className="review-bars">{[5, 4, 3, 2, 1].map((stars, index) => <div key={stars}><span>{stars}★</span><i><span style={{ width: `${[78, 16, 5, 1, 0][index]}%` }} /></i></div>)}</div></div>
            <div className="review-list">{reviews.map((review) => <article key={review.name} className="review-card"><div className="review-card-top"><b>{review.name}</b><span>{review.date}</span></div><div className="review-stars">{"★".repeat(review.rating)}<span>{"★".repeat(5 - review.rating)}</span></div><p>{review.text}</p><small><Check size={13} /> Verified customer interaction</small></article>)}</div>
            <p className="review-policy"><ShieldCheck size={15} /> Reviews reflect customer experiences. Every customer follows the same review rules, regardless of the shop’s plan.</p>
          </section>
        </div>

        <aside className="store-sidebar">
          <section className="store-side-card" id="about"><span className="vendor-eyebrow">ABOUT THE BUSINESS</span><h3>Good work, good people.</h3><p>{vendor.description}</p><div className="side-detail"><MapPin size={16} /><span>{vendor.location}<small>Visit our showroom</small></span></div><div className="side-detail"><Clock3 size={16} /><span>Opening hours<small>{vendor.hours}</small></span></div></section>
          <section className="store-side-card"><span className="vendor-eyebrow">GET IN TOUCH</span><h3>We’d love to hear from you.</h3><a className="side-contact" href={`tel:${vendor.phone.replaceAll(" ", "")}`}><Phone size={15} /> {vendor.phone}</a><a className="side-contact" href={`mailto:${vendor.email}`}><Mail size={15} /> {vendor.email}</a><a className="side-contact" href={`https://instagram.com/${vendor.instagram.replace("@", "")}`} target="_blank" rel="noreferrer"><Instagram size={15} /> {vendor.instagram}</a></section>
          <section className="store-contact-form" id="contact"><span className="vendor-eyebrow">PRODUCT QUESTIONS & QUOTES</span><h3>Send an inquiry</h3>{inquirySent ? <div className="inquiry-success"><Check size={20} /><b>Thanks for reaching out!</b><span>Your inquiry is ready. This demo doesn’t send messages yet.</span><button onClick={() => setInquirySent(false)}>Send another</button></div> : <form onSubmit={submitInquiry}>
            {product && <div className="inquiry-product"><span>ASKING ABOUT</span><b>{product.name}</b><small>{formatETB(product.price)}</small><button type="button" aria-label="Remove selected product" onClick={() => setSelectedProduct("")}><X size={14} /></button></div>}
            <label>Your name<input name="name" required placeholder="Full name" /></label><label>Email or phone<input name="replyTo" required placeholder="How can we reach you?" /></label><label>Your message<textarea name="message" required rows={4} placeholder="Ask a question or request a quote" /></label><button className="button button-dark" type="submit">Send inquiry <ArrowRight size={15} /></button><small>Your contact details are only for responding to this inquiry.</small>
          </form>}</section>
          <div className="verified-note"><ShieldCheck size={16} /><span><b>Shop with confidence</b><small>HOMELY AI verifies business profiles. Always confirm order terms directly with the shop.</small></span></div>
        </aside>
      </section>
      <footer className="vendor-footer"><Link href="/vendors"><ArrowLeft size={14} /> All local vendors</Link><span>Thoughtful spaces. Local hands. Made for homes in Ethiopia.</span><Link href="/vendor/dashboard">For vendors <ArrowRight size={14} /></Link></footer>
    </main>
  );
}
