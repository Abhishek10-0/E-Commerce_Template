export type Product = {
  slug: string;
  name: string;
  category: string;
  location: string;
  companySlug: string;
  company: string;
  price: string;
  unit: string;
  moq: string;
  image: string;
  gallery: string[];
  short: string;
  description: string;
  specs: Record<string, string>;
  featured?: boolean;
};

export type Company = {
  slug: string;
  name: string;
  initials: string;
  sector: string;
  location: string;
  established: string;
  employees: string;
  description: string;
  certifications: string[];
  cover: string;
};

export const categories = [
  { slug: "machinery", name: "Industrial Machinery", icon: "⚙", count: "5,240" },
  { slug: "technology", name: "Technology & IT", icon: "⌘", count: "3,180" },
  { slug: "construction", name: "Construction", icon: "▰", count: "4,280" },
  { slug: "healthcare", name: "Healthcare", icon: "✚", count: "2,160" },
  { slug: "electrical", name: "Electrical", icon: "ϟ", count: "2,940" },
  { slug: "agriculture", name: "Agriculture", icon: "♧", count: "3,420" },
  { slug: "packaging", name: "Packaging", icon: "◫", count: "1,860" },
  { slug: "energy", name: "Energy", icon: "◉", count: "1,280" },
];

export const companies: Company[] = [
  {
    slug: "atlas-mechanical",
    name: "Atlas Mechanical Pvt. Ltd.",
    initials: "AM",
    sector: "Industrial Machinery",
    location: "Pune, Maharashtra",
    established: "2008",
    employees: "120–250",
    description: "A precision engineering company manufacturing industrial gear systems, CNC assemblies and made-to-order automation components for Indian and global OEMs.",
    certifications: ["ISO 9001:2015", "CE Compliant", "Verified SME"],
    cover: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "novatech-systems",
    name: "NovaTech Systems",
    initials: "NT",
    sector: "Technology & IT",
    location: "Bengaluru, Karnataka",
    established: "2014",
    employees: "80–120",
    description: "Enterprise software and digital transformation partner offering ERP, analytics, cloud migration and managed technology services to growing businesses.",
    certifications: ["ISO 27001", "SOC 2 Ready", "Verified SME"],
    cover: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "greengrid-energy",
    name: "GreenGrid Energy",
    initials: "GG",
    sector: "Renewable Energy",
    location: "Ahmedabad, Gujarat",
    established: "2011",
    employees: "60–100",
    description: "A commercial solar and energy-efficiency company delivering rooftop systems, energy audits and industrial power optimization projects.",
    certifications: ["MNRE Channel Partner", "ISO 14001", "Verified SME"],
    cover: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "earthpack-india",
    name: "EarthPack India",
    initials: "EP",
    sector: "Packaging",
    location: "Surat, Gujarat",
    established: "2016",
    employees: "40–80",
    description: "Sustainable packaging manufacturer specialising in recyclable corrugated boxes, retail packaging and custom industrial transit solutions.",
    certifications: ["FSC Certified", "ISO 9001", "Verified SME"],
    cover: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=1400&q=85",
  },
  {
    slug: "primelabs-india",
    name: "PrimeLabs India",
    initials: "PL",
    sector: "Healthcare & Testing",
    location: "New Delhi, Delhi NCR",
    established: "2006",
    employees: "150–300",
    description: "Independent laboratory testing and compliance partner for pharmaceutical, food, chemical and industrial product manufacturers.",
    certifications: ["NABL Accredited", "GLP Compliant", "Verified SME"],
    cover: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1400&q=85",
  },
];

export const products: Product[] = [
  {
    slug: "industrial-gear-assembly",
    name: "Industrial Gear Assembly",
    category: "machinery",
    location: "Maharashtra",
    companySlug: "atlas-mechanical",
    company: "Atlas Mechanical Pvt. Ltd.",
    price: "Price on request",
    unit: "Per assembly",
    moq: "5 assemblies",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
    ],
    short: "Heavy-duty precision gear assembly for industrial transmission systems.",
    description: "Engineered for continuous industrial operation, this high-torque gear assembly combines precision-machined alloy components with hardened teeth and controlled backlash. Custom ratios, shaft sizes and mounting configurations are available for OEM requirements.",
    specs: { Material: "Alloy steel", "Gear ratio": "5:1 to 40:1", Torque: "Up to 8,500 Nm", Accuracy: "DIN Class 7", Warranty: "18 months" },
    featured: true,
  },
  {
    slug: "recyclable-packaging-boxes",
    name: "Recyclable Packaging Boxes",
    category: "packaging",
    location: "Gujarat",
    companySlug: "earthpack-india",
    company: "EarthPack India",
    price: "₹34",
    unit: "Per piece",
    moq: "500 pieces",
    image: "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1607166452427-7e4477079cb9?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    ],
    short: "FSC-certified corrugated packaging for retail and industrial shipping.",
    description: "Made from high-recycled-content kraft board, these customizable corrugated boxes balance strength, presentation and responsible sourcing. Choose size, flute profile, print colours and protective inserts based on the application.",
    specs: { Material: "Recycled kraft board", Ply: "3 / 5 / 7 ply", Printing: "Up to 4 colours", Certification: "FSC", Recyclable: "100%" },
    featured: true,
  },
  {
    slug: "laboratory-testing-services",
    name: "Laboratory Testing Services",
    category: "healthcare",
    location: "Delhi NCR",
    companySlug: "primelabs-india",
    company: "PrimeLabs India",
    price: "Custom quotation",
    unit: "Per test panel",
    moq: "1 sample",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=85",
    ],
    short: "NABL-accredited chemical, pharmaceutical and product testing.",
    description: "Comprehensive analytical testing for raw materials and finished goods, with method validation, documentation and regulatory support. Service packages are configured to your product category and compliance market.",
    specs: { Accreditation: "NABL", Turnaround: "3–10 working days", Reports: "Digitally signed", Sampling: "Pickup available", Coverage: "Pan India" },
    featured: true,
  },
  {
    slug: "enterprise-erp-cloud-suite",
    name: "Enterprise ERP Cloud Suite",
    category: "technology",
    location: "Karnataka",
    companySlug: "novatech-systems",
    company: "NovaTech Systems",
    price: "₹28,000",
    unit: "Per month",
    moq: "10 users",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    ],
    short: "Cloud ERP for inventory, finance, procurement and operations.",
    description: "A modular ERP platform designed for growing manufacturers and service businesses. Start with core finance and inventory, then add procurement, CRM, production planning and analytics as your operations expand.",
    specs: { Deployment: "Cloud / Private cloud", Users: "10–1,000+", Support: "24/7", Integrations: "REST API", Backup: "Daily automated" },
    featured: true,
  },
  {
    slug: "commercial-solar-power-system",
    name: "Commercial Solar Power System",
    category: "energy",
    location: "Gujarat",
    companySlug: "greengrid-energy",
    company: "GreenGrid Energy",
    price: "₹1.8L onwards",
    unit: "Per system",
    moq: "5 kW",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1000&q=85",
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=85",
    ],
    short: "Turnkey rooftop solar systems for commercial and industrial sites.",
    description: "End-to-end solar deployment covering site survey, system design, approvals, installation, monitoring and maintenance. Solutions are optimized around tariff, roof profile and target payback period.",
    specs: { Capacity: "5 kW to 5 MW", Panels: "Mono PERC / TOPCon", Warranty: "25-year performance", Monitoring: "Real-time cloud", Service: "AMC available" },
  },
  {
    slug: "smart-electrical-control-panel",
    name: "Smart Electrical Control Panel",
    category: "electrical",
    location: "Maharashtra",
    companySlug: "atlas-mechanical",
    company: "Atlas Mechanical Pvt. Ltd.",
    price: "₹68,000",
    unit: "Per unit",
    moq: "1 unit",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1000&q=85",
    gallery: ["https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1000&q=85"],
    short: "Custom-built control panel with industrial protection and monitoring.",
    description: "Factory-tested LT control panels engineered to application load, protection class and automation requirements. Options include PLC integration, remote monitoring and energy metering.",
    specs: { Voltage: "415 V", Protection: "IP54 / IP65", Standards: "IEC 61439", Enclosure: "Powder-coated CRCA", Testing: "FAT included" },
  },
  {
    slug: "warehouse-management-software",
    name: "Warehouse Management Software",
    category: "technology",
    location: "Karnataka",
    companySlug: "novatech-systems",
    company: "NovaTech Systems",
    price: "Request proposal",
    unit: "Annual licence",
    moq: "1 warehouse",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    gallery: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85"],
    short: "Barcode-ready inventory, dispatch and warehouse control platform.",
    description: "Improve receiving, put-away, picking, replenishment and dispatch accuracy with a configurable warehouse platform that integrates with ERP and courier systems.",
    specs: { Deployment: "Cloud", Barcode: "1D / 2D", Warehouses: "Unlimited", Integration: "API / Webhooks", Mobile: "Android app" },
  },
  {
    slug: "industrial-transit-packaging",
    name: "Industrial Transit Packaging",
    category: "packaging",
    location: "Gujarat",
    companySlug: "earthpack-india",
    company: "EarthPack India",
    price: "Price on request",
    unit: "Per kit",
    moq: "100 kits",
    image: "https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1000&q=85",
    gallery: ["https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=1000&q=85"],
    short: "Export-grade corrugated and protective packaging for machinery.",
    description: "Application-specific transit packs combining corrugated structures, edge protection, moisture barriers and custom inserts for safe domestic and export movement.",
    specs: { Load: "Up to 250 kg", Treatment: "Export compliant", Customization: "Full", Printing: "Available", Testing: "Drop-test options" },
  },
  {
    slug: "solar-energy-audit",
    name: "Industrial Energy Audit",
    category: "energy",
    location: "Gujarat",
    companySlug: "greengrid-energy",
    company: "GreenGrid Energy",
    price: "₹45,000 onwards",
    unit: "Per facility",
    moq: "1 facility",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85",
    gallery: ["https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85"],
    short: "Detailed industrial energy assessment with actionable savings plan.",
    description: "Measure power quality, load profile and process consumption to identify practical efficiency projects with investment, savings and payback estimates.",
    specs: { Duration: "2–5 days", Report: "Detailed DPR", Instruments: "Class A", Followup: "Included", Standards: "BEE aligned" },
  },
];

export const buyerRequirements = [
  { title: "Automated packaging line for FMCG plant", category: "Packaging", location: "Mumbai", budget: "₹35–50 lakh", closes: "4 days", responses: 12 },
  { title: "Annual cloud security assessment", category: "Technology & IT", location: "Bengaluru", budget: "₹8–12 lakh", closes: "6 days", responses: 8 },
  { title: "Commercial rooftop solar installation", category: "Energy", location: "Surat", budget: "₹45–60 lakh", closes: "8 days", responses: 17 },
  { title: "Precision aluminium components", category: "Industrial Machinery", location: "Chennai", budget: "Price required", closes: "3 days", responses: 21 },
];

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
export const getCompany = (slug: string) => companies.find((company) => company.slug === slug);
export const productsByCompany = (slug: string) => products.filter((product) => product.companySlug === slug);
