"use client";

import Link from "next/link";
import { useState } from "react";
import { BadgeCheck, Check, ChevronDown, CircleAlert, Eye, Search, ShieldCheck, Store, X } from "lucide-react";
import { vendors } from "../../vendor-data";

type ApplicationStatus = "Pending" | "Verified" | "Rejected" | "Suspended";
type Application = { id: string; business: string; representative: string; category: string; location: string; submitted: string; status: ApplicationStatus };

const representatives: Record<string, string> = {
  "addis-wood-studio": "Abebe Kebede",
  "habesha-home": "Marta Girma",
  "mekdes-furniture": "Mekdes Tadesse",
  "lidet-lighting": "Lidet Alemu",
  "tana-textile-house": "Selam Tadesse",
  "eden-kitchen-studio": "Eden Bekele",
  "guzo-carpet-collective": "Yared Tesfaye",
  "kora-living": "Yonas Bekele"
};
const initialApplications: Application[] = vendors.map((vendor, index) => ({
  id: vendor.slug,
  business: vendor.name,
  representative: representatives[vendor.slug] ?? "Business representative",
  category: vendor.category,
  location: vendor.location,
  submitted: `Nov ${20 - index}, 2026`,
  status: vendor.verified ? "Verified" : "Pending"
}));

export default function AdminVendorsPage() {
  const [applications, setApplications] = useState(initialApplications);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All statuses");
  const [notice, setNotice] = useState("");

  function updateStatus(id: string, status: ApplicationStatus) {
    setApplications((current) => current.map((application) => application.id === id ? { ...application, status } : application));
    setNotice(`${applications.find((application) => application.id === id)?.business ?? "Vendor"} marked ${status.toLowerCase()} in this demo.`);
  }

  const filtered = applications.filter((application) =>
    (!query || `${application.business} ${application.representative} ${application.location}`.toLowerCase().includes(query.toLowerCase())) &&
    (statusFilter === "All statuses" || application.status === statusFilter)
  );
  const pendingCount = applications.filter((application) => application.status === "Pending").length;

  return <main className="dashboard-shell admin-shell">
    <aside className="dashboard-sidebar"><Link href="/" className="dashboard-brand"><span className="vendor-brand-mark">⌂</span><span>HOMELY <i>AI</i><small>ADMIN CONSOLE</small></span></Link><div className="admin-console-label"><ShieldCheck size={15} /> PLATFORM ADMIN</div><nav className="dashboard-nav"><button className="active"><Store size={17} />Vendor applications<span className="nav-count">{pendingCount}</span></button><button><CircleAlert size={17} />Reported content</button><button><BadgeCheck size={17} />Review moderation</button></nav><div className="dashboard-help"><b>Moderator reminder</b><p>Premium placement never changes customer ratings. Apply the same review rules to every vendor.</p></div></aside>
    <section className="dashboard-main"><header className="dashboard-header"><div className="dashboard-breadcrumb"><span>Admin console</span><span>/</span><b>Vendor applications</b></div><Link href="/vendors" className="admin-market-link"><Eye size={14} />Public marketplace</Link></header>
      <div className="dashboard-content"><div className="dashboard-page-title"><div><span className="vendor-eyebrow">BUSINESS VERIFICATION</span><h1>Vendor applications</h1><p>Review business information and manage verification status.</p></div><span className="admin-pending-counter">{pendingCount} pending review</span></div>
        {notice && <div className="dashboard-notice"><Check size={15} />{notice}<button onClick={() => setNotice("")} aria-label="Dismiss"><X size={14} /></button></div>}
        <div className="admin-summary-row"><article><span>Total vendors</span><b>{applications.length}</b><small>Registered businesses</small></article><article><span>Verified</span><b>{applications.filter((item) => item.status === "Verified").length}</b><small>Approved storefronts</small></article><article><span>Pending review</span><b>{pendingCount}</b><small>Require a decision</small></article><article><span>Suspended</span><b>{applications.filter((item) => item.status === "Suspended").length}</b><small>Currently not visible</small></article></div>
        <div className="admin-table-toolbar"><label><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search business, representative or location" /></label><select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>{["All statuses", "Pending", "Verified", "Rejected", "Suspended"].map((item) => <option key={item}>{item}</option>)}</select></div>
        <section className="dashboard-panel dashboard-table-wrap"><table className="dashboard-table admin-table"><thead><tr><th>BUSINESS</th><th>OWNER / REPRESENTATIVE</th><th>BUSINESS CATEGORY</th><th>LOCATION</th><th>SUBMITTED</th><th>STATUS</th><th>ACTIONS</th></tr></thead><tbody>{filtered.map((application) => {
          const vendor = vendors.find((item) => item.slug === application.id);
          return <tr key={application.id}><td><div className="admin-business-name"><span>{application.business.slice(0, 1)}</span><b>{application.business}</b></div></td><td>{application.representative}</td><td>{application.category}</td><td>{application.location}</td><td>{application.submitted}</td><td><span className={`admin-status ${application.status.toLowerCase()}`}>{application.status}</span></td><td><div className="admin-actions">{vendor && <Link href={`/vendors/${vendor.slug}`} title="Review storefront"><Eye size={14} /></Link>}<button onClick={() => updateStatus(application.id, "Verified")} title="Approve and verify"><Check size={14} /></button><button onClick={() => updateStatus(application.id, "Rejected")} title="Reject application"><X size={14} /></button><button onClick={() => updateStatus(application.id, application.status === "Suspended" ? "Verified" : "Suspended")} title={application.status === "Suspended" ? "Restore vendor" : "Suspend vendor"}><ChevronDown size={14} /></button></div></td></tr>;
        })}</tbody></table>{filtered.length === 0 && <p className="admin-empty">No vendor applications match those filters.</p>}</section>
        <p className="dashboard-rating-note"><ShieldCheck size={15} /> Approval, rejection and suspension controls are interactive demo states only. In production, enforce permissions and status changes server-side.</p>
      </div>
    </section>
  </main>;
}
