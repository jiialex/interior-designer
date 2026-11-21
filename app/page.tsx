"use client";

import { useRef, useState } from "react";
import {
  ArrowRight, Search, Menu, X, UploadCloud, Camera, Sparkles,
  ShoppingCart, Hammer, ShieldCheck, Star, MapPin, CheckCircle2,
  ChevronDown, Sofa, BadgeCheck, Heart, Leaf
} from "lucide-react";

const styles = [
  { name: "Modern Ethiopian", note: "Contemporary with heritage", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=85" },
  { name: "Traditional", note: "Craft, texture & warmth", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=85" },
  { name: "Minimalist", note: "Simple and peaceful", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=85" },
  { name: "Scandinavian", note: "Bright and natural", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=85" },
  { name: "Afro-modern", note: "Bold local character", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=85" },
];

const products = [
  { name: "Handwoven accent cushion", price: "1,200 ETB", shop: "Habesha Home", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=85", tag: "Handmade", href: "/vendors/habesha-home/products/accent-cushion" },
  { name: "Solid wood coffee table", price: "18,500 ETB", shop: "Addis Wood Studio", image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=700&q=85", tag: "Local maker", href: "/vendors/addis-wood-studio/products/coffee-table" },
  { name: "Modern green sofa", price: "68,500 ETB", shop: "Mekdes Furniture", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=85", tag: "Popular", href: "/vendors/mekdes-furniture/products/green-sofa" },
];

const professionals = [
  { name: "Fitsum Tesfaye", role: "Carpenter & furniture maker", location: "Addis Ababa", rating: "4.9", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=85" },
  { name: "Liya Design Studio", role: "Interior designer", location: "Addis Ababa", rating: "4.8", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=85" },
];

export default function HomePage() {
  const fileInput = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleFile(file?: File) {
    if (!file) return;
    setFileName(file.name);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-cream text-ink">
      <header className="site-header">
        <a href="#" className="brand" aria-label="HOMELY AI home">
          <span className="brand-mark"><span className="roof">⌂</span><Leaf size={16} /></span>
          <span><strong>HOMELY <i>AI</i></strong><small>Your Space. Your Style. Your Budget.</small></span>
        </a>
        <nav className={`desktop-nav ${mobileOpen ? "nav-open" : ""}`}>
          <a className="active" href="#">Home</a><a href="#design">AI Design</a><a href="/vendors">Shop</a><a href="#professionals">Professionals</a><a href="#about">About</a><a href="#pricing">Pricing</a>
        </nav>
        <div className="header-actions">
          <label className="search-box"><Search size={17} /><input aria-label="Search" placeholder="Search furniture, styles..." /></label>
          <a className="signin" href="#signin">Sign in</a>
          <a className="button button-dark header-cta" href="#design">Get started <ArrowRight size={16} /></a>
        </div>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="design">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> DESIGNED FOR THE WAY WE LIVE</div>
          <h1>Bring your home<br /><em>to life.</em></h1>
          <p>Reimagine your space with AI, discover beautiful furniture from local makers, and find skilled professionals you can trust.</p>
          <div className="hero-points"><span><CheckCircle2 /> AI room design</span><span><CheckCircle2 /> Local furniture</span><span><CheckCircle2 /> Trusted experts</span></div>
          <a href="#design-tool" className="button button-dark hero-button">Design my room <ArrowRight size={17} /></a>
          <div className="hero-note">A little inspiration. A lot of possibility.</div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" role="img" aria-label="Warm modern living room with Ethiopian-inspired decor" />
          <div className="photo-caption"><span className="caption-dot" /> MODERN HERITAGE LIVING</div>
          <div className="floating-card">
            <span className="mini-label"><Sparkles size={13} /> YOUR ROOM, REIMAGINED</span>
            <div className="mini-before-after">
              <div><span>BEFORE</span><div className="mini-room before" /></div>
              <ArrowRight size={19} />
              <div><span>AFTER</span><div className="mini-room after" /></div>
            </div>
            <strong>From everyday to extraordinary.</strong>
          </div>
          <div className="pattern-stamp">✳</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Platform benefits">
        <div><span className="benefit-icon"><Sparkles /></span><p><b>AI-powered designs</b><small>Visualize your next room</small></p></div>
        <div><span className="benefit-icon"><ShoppingCart /></span><p><b>Shop local furniture</b><small>Discover real products</small></p></div>
        <div><span className="benefit-icon"><Hammer /></span><p><b>Skilled professionals</b><small>Find help near you</small></p></div>
        <div><span className="benefit-icon"><ShieldCheck /></span><p><b>Trusted community</b><small>Reviews you can rely on</small></p></div>
      </section>

      <section className="upload-section section-wrap" id="design-tool">
        <div className="section-heading">
          <div><span className="eyebrow"><Sparkles size={13} /> START WITH YOUR SPACE</span><h2>What could your home become?</h2><p>Upload a room photo and explore a fresh direction that feels like you.</p></div>
          <a className="text-link" href="#styles">Explore inspiration <ArrowRight size={16} /></a>
        </div>
        <div className="upload-panel">
          <div className="upload-copy">
            <span className="number-tag">01 / AI ROOM DESIGN</span>
            <h3>See the potential<br />in every corner.</h3>
            <p>Choose a room, pick a style, and let HOMELY AI help you imagine a beautiful new look while keeping the character of your space.</p>
            <ul><li><CheckCircle2 /> Generate realistic design concepts</li><li><CheckCircle2 /> Compare different styles</li><li><CheckCircle2 /> Discover furniture that fits the look</li></ul>
          </div>
          <div className="upload-drop" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); handleFile(e.dataTransfer.files?.[0]); }}>
            <div className="upload-symbol"><UploadCloud size={27} /></div>
            <h3>{fileName ? "Your photo is ready" : "Upload a photo of your room"}</h3>
            <p>{fileName || "JPG, PNG or WEBP · A clear room photo works best"}</p>
            <input ref={fileInput} type="file" accept="image/png,image/jpeg,image/webp" hidden onChange={(e) => handleFile(e.target.files?.[0])} />
            <button className="button button-dark" onClick={() => fileInput.current?.click()}><Camera size={16} /> Choose a photo</button>
            <small>AI design generation will be connected in the next development step.</small>
          </div>
        </div>
      </section>

      <section className="styles-section section-wrap" id="styles">
        <div className="section-heading">
          <div><span className="eyebrow">FIND YOUR FEEL</span><h2>Explore design styles</h2><p>From clean modern lines to spaces inspired by Ethiopian craft and culture.</p></div>
          <a className="text-link" href="#design">View all styles <ArrowRight size={16} /></a>
        </div>
        <div className="style-grid">
          {styles.map((style, i) => <a className="style-card" href="#design-tool" key={style.name}>
            <div className="style-image" style={{ backgroundImage: `url("${style.image}")` }}><span>0{i + 1}</span></div>
            <div className="style-info"><b>{style.name}</b><small>{style.note}</small></div>
          </a>)}
        </div>
      </section>

      <section className="market-section section-wrap" id="shop">
        <div className="section-heading">
          <div><span className="eyebrow">MADE TO BELONG IN YOUR HOME</span><h2>Shop local. Style beautifully.</h2><p>Find furniture and decor from local shops, makers, and creative businesses.</p></div>
          <a className="text-link" href="/vendors">Explore marketplace <ArrowRight size={16} /></a>
        </div>
        <div className="product-grid">
          {products.map((product) => <article className="product-card" key={product.name}>
            <div className="homepage-product-image-wrap"><a href={product.href} className="product-image" style={{ backgroundImage: `url("${product.image}")` }} aria-label={`View ${product.name}`}><span>{product.tag}</span></a><button aria-label={`Save ${product.name}`} className="heart"><Heart size={17} /></button></div>
            <div className="product-info"><div><a href={product.href}><b>{product.name}</b></a><a href={product.href.replace(/\/products\/.*$/, "")}><small>{product.shop}</small></a></div><strong>{product.price}</strong></div>
            <a href={product.href} className="product-link">View product <ArrowRight size={14} /></a>
          </article>)}
        </div>
        <div className="market-note"><Sofa size={19} /><span>Supporting local creativity, craftsmanship, and small businesses.</span><b>Made with care in Ethiopia</b></div>
      </section>

      <section className="pro-section section-wrap" id="professionals">
        <div className="section-heading">
          <div><span className="eyebrow">GOOD WORK STARTS WITH GOOD PEOPLE</span><h2>Meet your home professionals</h2><p>Connect with skilled people who can help bring your ideas to life.</p></div>
          <a className="text-link" href="#professionals">Find a professional <ArrowRight size={16} /></a>
        </div>
        <div className="pro-grid">
          {professionals.map((pro) => <article className="pro-card" key={pro.name}>
            <div className="pro-avatar" style={{ backgroundImage: `url("${pro.image}")` }} />
            <div className="pro-details"><div className="pro-name">{pro.name} <BadgeCheck size={15} /></div><p>{pro.role}</p><small><MapPin size={13} /> {pro.location}</small><div className="rating"><Star size={14} fill="currentColor" /> {pro.rating} <span>· Verified profile</span></div></div>
            <a href="#professionals" className="button button-outline">View profile <ArrowRight size={14} /></a>
          </article>)}
        </div>
      </section>

      <section className="heritage-banner" id="about">
        <div className="banner-pattern" />
        <div className="banner-content"><span className="eyebrow">ROOTED IN LOCAL CREATIVITY</span><h2>Beautiful homes.<br /><em>A better Ethiopia.</em></h2><p>Modern ideas, local craftsmanship, and a community that helps every space feel like home.</p><a href="#design-tool" className="button button-gold">Start your home journey <ArrowRight size={17} /></a></div>
        <div className="banner-image" />
      </section>

      <section className="pricing-strip section-wrap" id="pricing">
        <div><span className="eyebrow">MORE ROOM TO IMAGINE</span><h2>Make your next idea happen.</h2><p>Start for free. Upgrade when you want more design possibilities.</p></div>
        <a href="#design-tool" className="button button-dark">Explore HOMELY AI Premium <ArrowRight size={16} /></a>
      </section>

      <footer className="footer">
        <div className="footer-top">
          <a href="#" className="brand footer-brand"><span className="brand-mark"><span className="roof">⌂</span><Leaf size={16} /></span><span><strong>HOMELY <i>AI</i></strong><small>Your Space. Your Style. Your Budget.</small></span></a>
          <p>Thoughtful spaces. Local hands.<br />A home that feels like yours.</p>
          <div className="footer-links"><b>Explore</b><a href="#design">AI Design</a><a href="/vendors">Furniture marketplace</a><a href="#professionals">Professionals</a></div>
          <div className="footer-links"><b>HOMELY AI</b><a href="#about">About us</a><a href="#pricing">Premium</a><a href="#signin">Sign in</a></div>
          <div className="footer-links"><b>Stay inspired</b><span>Design ideas and local finds, in your inbox.</span><label className="newsletter"><input placeholder="Your email address" /><button aria-label="Subscribe"><ArrowRight size={16} /></button></label></div>
        </div>
        <div className="footer-bottom"><span>© 2026 HOMELY AI. Demo website concept.</span><span>Made for homes in Ethiopia <span className="tiny-star">✳</span></span></div>
      </footer>
    </main>
  );
}
