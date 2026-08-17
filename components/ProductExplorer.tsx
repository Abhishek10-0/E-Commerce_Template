"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";
import { categories, products } from "../data/marketplace";

export default function ProductExplorer() {
  const params = useSearchParams();
  const [query, setQuery] = useState(() => params.get("q") ?? "");
  const [category, setCategory] = useState(() => params.get("category") ?? "all");
  const [location, setLocation] = useState("all");
  const [sort, setSort] = useState("featured");

  const result = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = products.filter((product) => {
      const text = `${product.name} ${product.company} ${product.short} ${product.category} ${product.location}`.toLowerCase();
      return (!normalized || text.includes(normalized)) && (category === "all" || product.category === category) && (location === "all" || product.location === location);
    });
    return [...filtered].sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "company") return a.company.localeCompare(b.company);
      return Number(Boolean(b.featured)) - Number(Boolean(a.featured));
    });
  }, [query, category, location, sort]);

  return (
    <div className="catalog-layout">
      <aside className="filter-panel">
        <div className="filter-heading"><h3>Filters</h3><button onClick={() => { setQuery(""); setCategory("all"); setLocation("all"); }}>Reset</button></div>
        <label>Search products</label>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Product or supplier" />
        <label>Category</label>
        <select value={category} onChange={(event) => setCategory(event.target.value)}><option value="all">All categories</option>{categories.map((item) => <option key={item.slug} value={item.slug}>{item.name}</option>)}</select>
        <label>Supplier location</label>
        <select value={location} onChange={(event) => setLocation(event.target.value)}><option value="all">All India</option>{[...new Set(products.map((product) => product.location))].sort().map((item) => <option key={item}>{item}</option>)}</select>
        <div className="filter-note"><strong>Need something specific?</strong><p>Post one requirement and let verified suppliers respond.</p><a href="/requirements#post">Post requirement →</a></div>
      </aside>
      <div>
        <div className="catalog-toolbar"><p><strong>{result.length}</strong> products found</p><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="featured">Featured first</option><option value="name">Product name</option><option value="company">Company name</option></select></div>
        {result.length ? <div className="product-grid">{result.map((product) => <ProductCard key={product.slug} product={product} />)}</div> : <div className="empty-state"><span>⌕</span><h3>No matching products</h3><p>Try another term or reset your filters.</p></div>}
      </div>
    </div>
  );
}
