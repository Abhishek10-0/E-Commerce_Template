"use client";

import { useState } from "react";
import type { Product } from "../data/marketplace";

export default function ProductDetailInteractive({ product }: { product: Product }) {
  const [image, setImage] = useState(product.gallery[0]);
  const [tab, setTab] = useState("description");
  const tabs = ["description", "specifications", "shipping"];

  return (
    <>
      <div className="product-detail-grid">
        <div className="gallery"><img className="gallery-main" src={image} alt={product.name} /><div className="gallery-thumbs">{product.gallery.map((item, index) => <button className={image === item ? "active" : ""} key={item} onClick={() => setImage(item)}><img src={item} alt={`${product.name} view ${index + 1}`} /></button>)}</div></div>
        <div className="product-summary"><span className="verified-inline">● Verified product listing</span><span className="eyebrow">{product.category}</span><h1>{product.name}</h1><p className="product-short">{product.short}</p><div className="supplier-line">By <a href={`/companies/${product.companySlug}`}>{product.company}</a> <span>✓</span></div><div className="price-block"><strong>{product.price}</strong><span>{product.unit}</span></div><dl className="quick-specs"><div><dt>Minimum order</dt><dd>{product.moq}</dd></div><div><dt>Supplier location</dt><dd>{product.location}</dd></div><div><dt>Response time</dt><dd>Usually within 24 hours</dd></div></dl><a className="button button-red button-wide" href="#enquire">Get best price →</a><a className="button button-outline button-wide" href={`/companies/${product.companySlug}`}>View supplier profile</a></div>
      </div>
      <div className="product-tabs"><div className="tab-list">{tabs.map((item) => <button key={item} className={tab === item ? "active" : ""} onClick={() => setTab(item)}>{item}</button>)}</div><div className="tab-panel">{tab === "description" && <div><h2>Product overview</h2><p>{product.description}</p><p>Business buyers can submit their requirement to receive pricing, availability and delivery information directly from the verified supplier.</p></div>}{tab === "specifications" && <div><h2>Technical specifications</h2><div className="spec-table">{Object.entries(product.specs).map(([key, value]) => <div key={key}><span>{key}</span><strong>{value}</strong></div>)}</div></div>}{tab === "shipping" && <div><h2>Supply & delivery</h2><p>Lead time and delivery terms are confirmed against quantity, configuration and destination. Pan-India logistics coordination and export packaging can be requested during enquiry.</p><ul className="check-list"><li>Commercial quotation from supplier</li><li>GST invoice and business documentation</li><li>Dispatch updates after confirmed order</li></ul></div>}</div></div>
    </>
  );
}
