"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, BadgeCheck, Heart, MapPin, Search, ShieldCheck, SlidersHorizontal, Star, Store } from "lucide-react";
import { approvedVendors, formatETB } from "../vendor-data";

const categories = ["All categories", "Sofas & chairs", "Beds & mattresses", "Tables & desks", "Wardrobes & storage", "Curtains & carpets", "Lighting", "Kitchen furniture", "Home decoration"];

export default function VendorsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [style, setStyle] = useState("Any style");
  const [availability, setAvailability] = useState("Any availability");
  const [maxPrice, setMaxPrice] = useState("");
  const [saved, setSaved] = useState<string[]>([]);

  const products = useMemo(() => approvedVendors.flatMap((vendor) => vendor.products.map((product) => ({ ...product, vendor })))
    .filter(({ name, description, vendor, category: productCategory, price, style: productStyle, availability: stock }) =>
      (!query || `${name} ${description} ${vendor.name} ${vendor.location}`.toLowerCase().includes(query.toLowerCase())) &&
      (category === "All categories" || productCategory === category) &&
      (style === "Any style" || productStyle === style) &&
      (availability === "Any availability" || stock === availability) &&
      (!maxPrice || price <= Number(maxPrice))
    ), [query, category, style, availability, maxPrice]);

  function toggleSaved(id: string) {
    setSaved((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]);
  }

  return (
    <main className="vendor-page">
      <header className="vendor-topbar">
        <Link href="/" className="vendor-brand"><span className="vendor-brand-mark">⌂</span><span>HOMELY <i>AI</i><small>LOCAL FINDS, MADE FOR HOME</small></span></Link>
        <nav><Link href="/">Home</Link><Link className="current" href="/vendors">Marketplace</Link><a href="#shops">Our vendors</a></nav>
        <Link href="/vendor/dashboard" className="vendor-top-action">Vendor dashboard <ArrowRight size={15} /></Link>
      </header>

      <section className="market-hero">
        <div className="market-hero-copy">
          <span className="vendor-eyebrow"><Store size={14} /> THE HOMELY AI MARKETPLACE</span>
          <h1>Find pieces with<br /><em>a story to tell.</em></h1>
          <p>Discover furniture and home finds from Ethiopia’s independent makers, trusted shops and creative businesses.</p>
          <div className="market-proof"><span><ShieldCheck size={16} /> Verified local businesses</span><span><Star size={15} fill="currentColor" /> Genuine customer reviews</span></div>
        </div>
        <div className="market-hero-image"><span className="hero-note-card"><b>Made close to home.</b><small>Thoughtful design, local hands.</small></span></div>
      </section>

      <section className="vendor-content">
        <div className="vendor-content-heading">
          <div><span className="vendor-eyebrow">A BETTER WAY TO SHOP LOCAL</span><h2>Find your next favorite</h2><p>Browse products from real local businesses. Prices shown in ETB.</p></div>
          <span className="market-result-count">{products.length} items to explore</span>
        </div>

        <div className="market-filters">
          <label className="market-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search products, shops or locations" aria-label="Search products, shops or locations" /></label>
          <label><span>Category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span>Style</span><select value={style} onChange={(event) => setStyle(event.target.value)}>{["Any style", "Traditional", "Modern", "Afro-modern"].map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span>Availability</span><select value={availability} onChange={(event) => setAvailability(event.target.value)}>{["Any availability", "In stock", "Made to order", "Out of stock"].map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span>Max price (ETB)</span><input type="number" min="0" value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} placeholder="No limit" /></label>
        </div>
        <div className="filter-mobile-note"><SlidersHorizontal size={15} /> Refine your search with the filters above</div>

        {products.length ? <div className="market-product-grid">
          {products.map(({ vendor, ...product }) => <article className="market-product-card" key={`${vendor.slug}-${product.id}`}>
            <div className="market-product-photo-wrap">
              <Link href={`/vendors/${vendor.slug}/products/${product.id}`} className="market-product-photo" style={{ backgroundImage: `url("${product.image}")` }} aria-label={`View ${product.name}`}>
                {vendor.premium && <span className="sponsored-tag">PROMOTED</span>}
                <span className="stock-tag">{product.availability}</span>
              </Link>
              <button type="button" className={`save-product ${saved.includes(product.id) ? "is-saved" : ""}`} onClick={() => toggleSaved(product.id)} aria-label={`${saved.includes(product.id) ? "Remove" : "Save"} ${product.name}`}><Heart size={17} fill={saved.includes(product.id) ? "currentColor" : "none"} /></button>
            </div>
            <div className="market-product-info">
              <span className="product-category">{product.category} · {product.style}</span>
              <Link className="market-product-name-link" href={`/vendors/${vendor.slug}/products/${product.id}`}><h3>{product.name}</h3></Link>
              <Link className="market-vendor-link" href={`/vendors/${vendor.slug}`}>{vendor.name}{vendor.verified && <BadgeCheck size={14} />}<span><Star size={12} fill="currentColor" /> {vendor.rating.toFixed(1)} ({vendor.reviewCount})</span></Link>
              <div className="market-price-row"><b>{formatETB(product.price)}</b>{product.oldPrice && <del>{formatETB(product.oldPrice)}</del>}</div>
              <div className="market-card-bottom"><span><MapPin size={13} /> {vendor.location}</span><Link href={`/vendors/${vendor.slug}`} aria-label={`View ${vendor.name}`}><ArrowRight size={16} /></Link></div>
            </div>
          </article>)}
        </div> : <div className="empty-products"><Search size={22} /><b>No products match those filters</b><span>Try another category or clear your search.</span><button type="button" onClick={() => { setQuery(""); setCategory("All categories"); setStyle("Any style"); setAvailability("Any availability"); setMaxPrice(""); }}>Clear filters</button></div>}

        <section className="vendor-directory" id="shops">
          <div className="vendor-content-heading"><div><span className="vendor-eyebrow">MEET THE MAKERS</span><h2>Good things start with good people.</h2><p>Discover local shops, their products and what customers say about them.</p></div><span className="market-result-count">{approvedVendors.length} verified local shops</span></div>
          <div className="vendor-shop-grid">{approvedVendors.map((vendor) => <article className="vendor-shop-card" key={vendor.slug}>
            <Link href={`/vendors/${vendor.slug}`} className="shop-cover" style={{ backgroundImage: `url("${vendor.cover}")` }}>
              {vendor.premium && <span className="sponsored-tag">PROMOTED</span>}
              <span className="shop-avatar" style={{ backgroundImage: `url("${vendor.logo}")` }} />
            </Link>
            <div className="shop-card-body">
              <div className="shop-card-title"><h3>{vendor.name}</h3>{vendor.verified && <BadgeCheck size={17} aria-label="Verified business" />}</div>
              <p>{vendor.tagline}</p>
              <div className="shop-card-meta"><span><Star size={14} fill="currentColor" /> {vendor.rating.toFixed(1)} <small>({vendor.reviewCount})</small></span><span><MapPin size={14} /> {vendor.location}</span></div>
              <div className="shop-card-bottom"><span>{vendor.category}</span><Link href={`/vendors/${vendor.slug}`}>Visit shop <ArrowRight size={14} /></Link></div>
            </div>
          </article>)}</div>
        </section>

        <aside className="vendor-join-banner"><div><span className="vendor-eyebrow">ARE YOU A LOCAL MAKER?</span><h2>Your next customer is looking for you.</h2><p>Build your shop profile, showcase your products and grow your business with HOMELY AI.</p></div><Link href="/vendor/register" className="button button-gold">Apply to become a vendor <ArrowRight size={16} /></Link></aside>
      </section>
      <footer className="vendor-footer"><Link href="/">HOMELY <i>AI</i></Link><span>Thoughtful spaces. Local hands. Made for homes in Ethiopia.</span><Link href="/vendor/dashboard">For vendors <ArrowRight size={14} /></Link></footer>
    </main>
  );
}
