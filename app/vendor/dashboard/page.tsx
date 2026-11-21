"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Activity, ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, BarChart3, Bell, Box, BriefcaseBusiness, Check, ChevronDown, CircleHelp, CreditCard, ExternalLink, Eye, ImagePlus, LayoutDashboard, LogOut, MessageSquare, MoreHorizontal, Package, Plus, Search, Settings, ShieldCheck, Star, Store, Tag, X } from "lucide-react";
import { formatETB, vendors, VendorProduct } from "../../vendor-data";

const initialProducts: VendorProduct[] = vendors[0].products;
const initialInquiries = [
  { id: 1, name: "Selamawit T.", product: "Selam solid wood coffee table", date: "Today, 10:42 AM", message: "Could you share more photos of the natural oak finish? Is delivery available in Kazanchis?", status: "New" },
  { id: 2, name: "Daniel M.", product: "Haven oak bed frame", date: "Yesterday", message: "I’m interested in the queen-size bed. What is the current lead time?", status: "In progress" },
  { id: 3, name: "Hana G.", product: "Woven lounge chair", date: "Nov 18, 2026", message: "Do you have this chair in a darker wood finish?", status: "Resolved" }
];
const navItems = [
  { label: "Overview", icon: LayoutDashboard },
  { label: "My shop profile", icon: Store },
  { label: "Products", icon: Package },
  { label: "Promotions", icon: Tag },
  { label: "Customer inquiries", icon: MessageSquare },
  { label: "Reviews & ratings", icon: Star },
  { label: "Analytics", icon: BarChart3 },
  { label: "Subscription", icon: CreditCard }
];

export default function VendorDashboardPage() {
  const [active, setActive] = useState("Overview");
  const [products, setProducts] = useState(initialProducts);
  const [inquiries, setInquiries] = useState(initialInquiries);
  const [showProductForm, setShowProductForm] = useState(false);
  const [notice, setNotice] = useState("");

  function addProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const price = Number(form.get("price"));
    const name = String(form.get("name")).trim();
    const item: VendorProduct = {
      id: `new-${Date.now()}`, name, description: "New product listing", category: "Home decoration",
      price, dimensions: "Add dimensions", colors: ["Natural"], material: "Add material",
      style: "Modern", availability: "In stock",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80"
    };
    setProducts((current) => [item, ...current]);
    setShowProductForm(false);
    setNotice(`${name} added to your demo catalogue.`);
  }

  function toggleAvailability(id: string) {
    setProducts((current) => current.map((item) => item.id === id ? { ...item, availability: item.availability === "Out of stock" ? "In stock" : "Out of stock" } : item));
  }

  function changeInquiryStatus(id: number) {
    setInquiries((current) => current.map((inquiry) => inquiry.id === id ? { ...inquiry, status: inquiry.status === "Resolved" ? "In progress" : "Resolved" } : inquiry));
  }

  const stats = [
    { label: "Profile visits", value: "1,284", change: "+12.8%", icon: Eye },
    { label: "Product views", value: "3,642", change: "+8.4%", icon: Box },
    { label: "Customer inquiries", value: "28", change: "+6 this week", icon: MessageSquare },
    { label: "Saved products", value: "164", change: "+18 this month", icon: Star }
  ];

  return (
    <main className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <Link href="/" className="dashboard-brand"><span className="vendor-brand-mark">⌂</span><span>HOMELY <i>AI</i><small>VENDOR STUDIO</small></span></Link>
        <div className="dashboard-shop-switch"><span className="dashboard-shop-avatar">A</span><span><b>Addis Wood Studio</b><small>Verified vendor</small></span><ChevronDown size={15} /></div>
        <span className="dashboard-nav-label">WORKSPACE</span>
        <nav className="dashboard-nav">{navItems.map(({ label, icon: Icon }) => <button key={label} onClick={() => { setActive(label); setNotice(""); }} className={active === label ? "active" : ""}><Icon size={17} />{label}{label === "Customer inquiries" && <span className="nav-count">2</span>}</button>)}</nav>
        <div className="dashboard-help"><CircleHelp size={17} /><b>Need a hand?</b><p>Our vendor team is here to help you get set up.</p><a href="mailto:vendors@homelyai.example">Contact support <ArrowRight size={13} /></a></div>
        <button className="dashboard-logout"><LogOut size={16} /> Sign out</button>
      </aside>

      <section className="dashboard-main">
        <header className="dashboard-header">
          <div className="dashboard-breadcrumb"><span>Vendor workspace</span><span>/</span><b>{active}</b></div>
          <div className="dashboard-header-actions"><Link href="/vendors/addis-wood-studio" target="_blank"><ExternalLink size={15} /> View public shop</Link><button aria-label="Notifications"><Bell size={17} /><i /></button><span className="dashboard-user-avatar">A</span></div>
        </header>
        <div className="dashboard-content">
          {notice && <div className="dashboard-notice"><Check size={16} />{notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><X size={15} /></button></div>}
          {active === "Overview" && <Overview stats={stats} products={products} inquiries={inquiries} onNavigate={setActive} onAddProduct={() => setShowProductForm(true)} />}
          {active === "Products" && <ProductManagement products={products} onAdd={() => setShowProductForm(true)} onToggle={toggleAvailability} />}
          {active === "Customer inquiries" && <InquiryManagement inquiries={inquiries} onToggle={changeInquiryStatus} />}
          {active === "Reviews & ratings" && <ReviewManagement />}
          {active === "Analytics" && <Analytics />}
          {active === "Promotions" && <Promotions />}
          {active === "Subscription" && <Subscription />}
          {active === "My shop profile" && <ShopProfile />}
        </div>
      </section>

      {showProductForm && <div className="dashboard-modal-backdrop" onClick={() => setShowProductForm(false)}><section className="dashboard-modal" role="dialog" aria-modal="true" aria-labelledby="add-product-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" onClick={() => setShowProductForm(false)} aria-label="Close"><X size={18} /></button><span className="vendor-eyebrow">PRODUCT CATALOGUE</span><h2 id="add-product-title">Add a product</h2><p>Create a quick listing in your demo shop catalogue.</p>
        <form onSubmit={addProduct}><label>Product name<input name="name" required placeholder="e.g. Handcrafted side table" /></label><label>Price (ETB)<input name="price" type="number" min="1" required placeholder="e.g. 8500" /></label><label>Product photo<div className="upload-placeholder"><ImagePlus size={19} /> Image upload is a demo placeholder</div></label><div className="modal-actions"><button type="button" className="dashboard-secondary-button" onClick={() => setShowProductForm(false)}>Cancel</button><button type="submit" className="dashboard-primary-button"><Plus size={15} /> Add product</button></div></form>
      </section></div>}
    </main>
  );
}

function PageTitle({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
  return <div className="dashboard-page-title"><div><span className="vendor-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>{action}</div>;
}

function Overview({ stats, products, inquiries, onNavigate, onAddProduct }: { stats: { label: string; value: string; change: string; icon: typeof Eye }[]; products: VendorProduct[]; inquiries: typeof initialInquiries; onNavigate: (label: string) => void; onAddProduct: () => void }) {
  return <>
    <PageTitle eyebrow="SATURDAY, NOVEMBER 21, 2026" title="Good afternoon, Addis Wood Studio" description="Here’s how your shop is doing. Keep sharing the craft behind each piece." action={<button onClick={onAddProduct} className="dashboard-primary-button"><Plus size={16} /> Add a product</button>} />
    <div className="dashboard-plan-banner"><span className="plan-icon"><BriefcaseBusiness size={19} /></span><div><b>Premium plan <span>ACTIVE</span></b><small>Your profile and featured products are getting promoted placement.</small></div><Link href="/vendors/addis-wood-studio">View promoted shop <ArrowRight size={14} /></Link><span className="banner-sparkle">✳</span></div>
    <div className="dashboard-stat-grid">{stats.map(({ label, value, change, icon: Icon }) => <article className="dashboard-stat" key={label}><div className="stat-top"><span>{label}</span><Icon size={17} /></div><b>{value}</b><small><ArrowUpRight size={13} /> {change}</small></article>)}</div>
    <div className="dashboard-overview-grid">
      <section className="dashboard-panel analytics-preview"><div className="dashboard-panel-heading"><div><h2>Shop performance</h2><p>Visits and product views over the last 7 days</p></div><button>Last 7 days <ChevronDown size={14} /></button></div><div className="chart-legend"><span><i /> Profile visits</span><span><i /> Product views</span></div><div className="dashboard-chart">{[["Mon", 46, 61], ["Tue", 55, 74], ["Wed", 42, 59], ["Thu", 77, 82], ["Fri", 60, 69], ["Sat", 90, 77], ["Sun", 66, 54]].map(([day, a, b]) => <div className="chart-day" key={day}><div className="chart-bars"><i style={{ height: `${a}%` }} /><i style={{ height: `${b}%` }} /></div><small>{day}</small></div>)}</div><div className="chart-footnote"><span><Activity size={14} /> Views are up this week</span><button onClick={() => onNavigate("Analytics")}>View analytics <ArrowRight size={14} /></button></div></section>
      <section className="dashboard-panel product-preview"><div className="dashboard-panel-heading"><div><h2>Product snapshot</h2><p>{products.length} active listings</p></div><button onClick={() => onNavigate("Products")}>Manage <ArrowRight size={14} /></button></div>{products.slice(0, 3).map((product) => <div className="mini-product-row" key={product.id}><span className="mini-product-image" style={{ backgroundImage: `url("${product.image}")` }} /><span className="mini-product-copy"><b>{product.name}</b><small>{formatETB(product.price)}</small></span><i className={`status-dot ${product.availability === "Out of stock" ? "inactive" : ""}`} /></div>)}</section>
    </div>
    <section className="dashboard-panel inquiry-preview"><div className="dashboard-panel-heading"><div><h2>Latest inquiries</h2><p>Keep the conversation moving</p></div><button onClick={() => onNavigate("Customer inquiries")}>All inquiries <ArrowRight size={14} /></button></div>{inquiries.slice(0, 2).map((inquiry) => <div className="mini-inquiry-row" key={inquiry.id}><span className="inquiry-avatar">{inquiry.name.slice(0, 1)}</span><span className="mini-inquiry-copy"><b>{inquiry.name} <small>asked about</small> {inquiry.product}</b><span>{inquiry.message}</span></span><span className={`inquiry-status ${inquiry.status.toLowerCase().replace(" ", "-")}`}>{inquiry.status}</span><button onClick={() => onNavigate("Customer inquiries")} aria-label="Open inquiries"><ArrowRight size={15} /></button></div>)}</section>
    <p className="dashboard-rating-note"><ShieldCheck size={15} /> Premium promotion can increase visibility, but it never changes your customer rating. Your genuine customer rating remains <b>4.9/5</b>.</p>
  </>;
}

function ProductManagement({ products, onAdd, onToggle }: { products: VendorProduct[]; onAdd: () => void; onToggle: (id: string) => void }) {
  return <><PageTitle eyebrow="YOUR CATALOGUE" title="Products" description="Keep your listings current, accurate and easy to discover." action={<button onClick={onAdd} className="dashboard-primary-button"><Plus size={16} /> Add product</button>} />
    <div className="dashboard-toolbar"><label><Search size={16} /><input placeholder="Search products" /></label><button><ArrowDownRight size={15} /> Filter</button><span>{products.length} products</span></div>
    <section className="dashboard-panel dashboard-table-wrap"><table className="dashboard-table"><thead><tr><th>PRODUCT</th><th>PRICE</th><th>AVAILABILITY</th><th>VIEWS</th><th>STATUS</th><th /></tr></thead><tbody>{products.map((product, index) => <tr key={product.id}><td><div className="table-product"><span style={{ backgroundImage: `url("${product.image}")` }} /><span><b>{product.name}</b><small>{product.category} · {product.style}</small></span></div></td><td>{formatETB(product.price)}</td><td><span className={`availability-pill ${product.availability === "Out of stock" ? "unavailable" : ""}`}><i />{product.availability}</span></td><td>{[284, 193, 145, 88][index % 4]}</td><td>{index < 2 && <span className="promoted-product-label">FEATURED</span>}</td><td><button className="table-menu" onClick={() => onToggle(product.id)} title="Toggle availability"><MoreHorizontal size={19} /></button></td></tr>)}</tbody></table><div className="table-footnote">Select the menu to toggle a product’s availability. Editing and image uploads are demo placeholders.</div></section>
  </>;
}

function InquiryManagement({ inquiries, onToggle }: { inquiries: typeof initialInquiries; onToggle: (id: number) => void }) {
  return <><PageTitle eyebrow="CUSTOMER CARE" title="Customer inquiries" description="Questions and quote requests from your potential customers." action={<button className="dashboard-secondary-button"><Settings size={15} /> Inquiry settings</button>} />
    <div className="inquiry-counts"><span><b>{inquiries.filter((item) => item.status === "New").length}</b> New</span><span><b>{inquiries.filter((item) => item.status === "In progress").length}</b> In progress</span><span><b>{inquiries.filter((item) => item.status === "Resolved").length}</b> Resolved</span></div>
    <div className="dashboard-inquiry-list">{inquiries.map((inquiry) => <article className="dashboard-inquiry-card" key={inquiry.id}><div className="inquiry-avatar">{inquiry.name.slice(0, 1)}</div><div className="inquiry-full-copy"><div className="inquiry-title"><b>{inquiry.name}</b><span>{inquiry.date}</span><i className={`inquiry-status ${inquiry.status.toLowerCase().replace(" ", "-")}`}>{inquiry.status}</i></div><small>Product: {inquiry.product}</small><p>{inquiry.message}</p><div className="inquiry-card-actions"><a href={`mailto:?subject=${encodeURIComponent(`Re: ${inquiry.product}`)}`} className="dashboard-primary-button"><MessageSquare size={14} /> Reply by email</a><button onClick={() => onToggle(inquiry.id)} className="dashboard-secondary-button"><Check size={14} /> {inquiry.status === "Resolved" ? "Reopen inquiry" : "Mark resolved"}</button></div></div></article>)}</div>
  </>;
}

function ReviewManagement() {
  const [reply, setReply] = useState("Thank you for supporting our workshop, Meseret. We hope you enjoy it for years to come!");
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  return <><PageTitle eyebrow="YOUR REPUTATION" title="Reviews & ratings" description="Customer feedback helps shoppers choose with confidence." />
    <div className="dashboard-review-summary dashboard-panel"><div><span className="vendor-eyebrow">YOUR CUSTOMER RATING</span><strong>4.9 <small>/ 5</small></strong><div className="review-stars">★★★★★</div><span>Based on 48 genuine reviews</span></div><div className="review-bars">{[5, 4, 3, 2, 1].map((stars, index) => <div key={stars}><span>{stars} stars</span><i><span style={{ width: `${[78, 16, 5, 1, 0][index]}%` }} /></i><small>{[38, 8, 2, 0, 0][index]}</small></div>)}</div></div>
    <article className="dashboard-panel dashboard-review-card"><div className="review-card-top"><b>Meseret W.</b><span>Nov 19, 2026 · Woven lounge chair</span></div><div className="review-stars">★★★★★</div><p>Beautiful craftsmanship and the chair is so comfortable. I appreciated the help choosing the right finish.</p>{editing ? <form className="review-response-form" onSubmit={(event) => { event.preventDefault(); setEditing(false); setSaved(true); }}><label htmlFor="review-response">Public response</label><textarea id="review-response" rows={3} value={reply} onChange={(event) => setReply(event.target.value)} /><div><button type="button" className="dashboard-secondary-button" onClick={() => setEditing(false)}>Cancel</button><button type="submit" className="dashboard-primary-button">Save response</button></div></form> : <div className="review-reply"><BadgeCheck size={15} /><span><b>Your public response</b><small>{reply}</small></span></div>}{saved && <small className="response-saved-note">Response saved in this demo.</small>}{!editing && <button className="dashboard-secondary-button" onClick={() => { setEditing(true); setSaved(false); }}><MessageSquare size={14} /> Edit response</button>}</article>
    <p className="dashboard-rating-note"><ShieldCheck size={15} /> Reviews cannot be removed because they are negative. Report a review only if you believe it violates community guidelines. All vendors follow the same review policy.</p>
  </>;
}

function Analytics() {
  return <><PageTitle eyebrow="UNDERSTAND YOUR REACH" title="Shop analytics" description="See how customers discover your shop and products." action={<button className="dashboard-secondary-button">Last 30 days <ChevronDown size={14} /></button>} />
    <div className="dashboard-stat-grid">{[{ label: "Profile visits", value: "5,812", change: "+18.2%", icon: Eye }, { label: "Product views", value: "12,460", change: "+11.4%", icon: Box }, { label: "Inquiries", value: "86", change: "+9.8%", icon: MessageSquare }, { label: "Saved products", value: "642", change: "+14.3%", icon: Star }].map(({ label, value, change, icon: Icon }) => <article className="dashboard-stat" key={label}><div className="stat-top"><span>{label}</span><Icon size={17} /></div><b>{value}</b><small><ArrowUpRight size={13} /> {change} vs prior period</small></article>)}</div>
    <section className="dashboard-panel analytics-preview analytics-full"><div className="dashboard-panel-heading"><div><h2>Customer discovery</h2><p>Daily shop and product views</p></div><span className="chart-legend"><span><i /> Profile visits</span><span><i /> Product views</span></span></div><div className="dashboard-chart">{[["Oct 26", 46, 61], ["Oct 31", 55, 74], ["Nov 5", 42, 59], ["Nov 10", 77, 82], ["Nov 15", 60, 69], ["Nov 20", 90, 77], ["Today", 66, 54]].map(([day, a, b]) => <div className="chart-day" key={day}><div className="chart-bars"><i style={{ height: `${a}%` }} /><i style={{ height: `${b}%` }} /></div><small>{day}</small></div>)}</div></section>
    <section className="dashboard-panel analytics-sources"><h2>Where customers find you</h2>{[["Marketplace search", "48%"], ["Promoted placement", "32%"], ["Direct shop link", "20%"]].map(([label, percent]) => <div key={label}><span>{label}</span><i><b style={{ width: percent }} /></i><strong>{percent}</strong></div>)}</section>
  </>;
}

function Promotions() {
  const [created, setCreated] = useState(false);
  return <><PageTitle eyebrow="HELP YOUR BUSINESS STAND OUT" title="Promotions" description="Create seasonal offers and choose products to feature." action={<button onClick={() => setCreated(true)} className="dashboard-primary-button"><Plus size={16} /> Create promotion</button>} />
    {created && <div className="dashboard-notice"><Check size={16} /> Promotion draft created. Add your campaign details before publishing.<button onClick={() => setCreated(false)} aria-label="Dismiss"><X size={15} /></button></div>}
    <div className="promotion-stats"><article className="dashboard-panel"><Tag size={18} /><b>2</b><span>Active promotions</span></article><article className="dashboard-panel"><Eye size={18} /><b>2,460</b><span>Promotion impressions</span></article><article className="dashboard-panel"><ArrowUpRight size={18} /><b>6.8%</b><span>Click-through rate</span></article></div>
    <article className="dashboard-panel active-campaign"><div className="campaign-art"><span>ADDIS<br />WOOD</span><b>MADE TO LAST</b></div><div className="campaign-copy"><span className="campaign-live">ACTIVE · NOV 1–30</span><h2>Made for gathering</h2><p>Complimentary delivery in Addis on orders over 25,000 ETB.</p><span>Featured products: Selam coffee table, Haven bed frame</span><div><b>1,840</b><small>impressions</small><b>126</b><small>shop visits</small></div></div><button className="table-menu" aria-label="Campaign options"><MoreHorizontal size={20} /></button></article>
    <div className="premium-feature-callout"><span className="plan-icon"><BriefcaseBusiness size={18} /></span><div><b>Make more room for your story</b><p>Premium includes enhanced placement, customizable banners and additional campaign tools.</p></div><span className="promoted-product-label">PREMIUM</span></div>
  </>;
}

function Subscription() {
  return <><PageTitle eyebrow="YOUR PLAN & BILLING" title="Subscription" description="Choose the business tools and promotional reach that fit your shop." />
    <section className="current-plan-card"><div><span className="vendor-eyebrow">CURRENT PLAN</span><h2>Premium <span>ACTIVE</span></h2><p>Enhanced tools for Addis Wood Studio.</p><small>Renews Dec 01, 2026 · Demo subscription, no payment connected</small></div><BriefcaseBusiness size={33} /></section>
    <div className="plan-comparison"><article className="dashboard-panel"><span className="vendor-eyebrow">GET STARTED</span><h2>Standard</h2><p>Everything you need to bring your shop online.</p><ul><li><Check /> Business storefront and profile</li><li><Check /> Product catalogue and images</li><li><Check /> Customer inquiries</li><li><Check /> Basic insights and genuine reviews</li><li><Check /> Ordinary marketplace search placement</li></ul><button className="dashboard-secondary-button">Current plan</button></article><article className="dashboard-panel premium-plan-card"><span className="vendor-eyebrow">MORE WAYS TO GROW</span><h2>Premium <span>POPULAR</span></h2><p>More tools to help your business get noticed.</p><ul><li><Check /> Everything in Standard</li><li><Check /> Featured and promoted placement</li><li><Check /> Enhanced storefront customization</li><li><Check /> Additional promotional campaigns</li><li><Check /> Advanced product and profile insights</li></ul><button className="dashboard-primary-button">Manage premium plan <ArrowRight size={14} /></button></article></div>
    <p className="dashboard-rating-note"><ShieldCheck size={15} /> Premium purchases promotional opportunities only. It never increases, changes or guarantees your customer rating. Ratings come from customer experiences.</p>
  </>;
}

function ShopProfile() {
  const [saved, setSaved] = useState(false);
  return <><PageTitle eyebrow="YOUR BUSINESS ON HOMELY AI" title="My shop profile" description="Keep your public business information clear and up to date." action={<Link href="/vendors/addis-wood-studio" className="dashboard-secondary-button"><ExternalLink size={15} /> Preview profile</Link>} />
    <section className="dashboard-panel profile-editor"><div className="profile-cover-preview"><span>SHOP COVER PHOTO</span><button className="dashboard-secondary-button"><ImagePlus size={15} /> Change cover</button></div><div className="profile-logo-edit"><span className="dashboard-shop-avatar">A</span><button className="dashboard-secondary-button">Change logo</button></div><div className="profile-form-grid"><label>Business name<input defaultValue="Addis Wood Studio" /></label><label>Business category<select defaultValue="Furniture & woodworking"><option>Furniture & woodworking</option><option>Home decor & textiles</option></select></label><label className="wide-field">Business description<textarea defaultValue="A family-run Addis workshop bringing locally sourced hardwood and thoughtful contemporary design together." rows={4} /></label><label>Shop location<input defaultValue="Bole, Addis Ababa" /></label><label>Contact phone<input defaultValue="+251 911 234 567" /></label><label>Contact email<input defaultValue="hello@addiswood.example" /></label><label>Social profile<input defaultValue="@addiswoodstudio" /></label></div><button className="dashboard-primary-button" onClick={() => setSaved(true)}>Save changes</button>{saved && <span className="verification-status"><Check size={14} /> Changes saved in this demo</span>}<span className="verification-status"><BadgeCheck size={15} /> Verified business profile</span></section>
  </>;
}
