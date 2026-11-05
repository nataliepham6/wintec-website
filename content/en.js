/* =====================================================================
   WINTEC WEBSITE — ENGLISH CONTENT
   ---------------------------------------------------------------------
   Edit any text below and save. Refresh the page to see the change.
   • To ADD an item: copy one { ... } block in a list, paste it after a
     comma, and change the text.
   • To REMOVE an item: delete its whole { ... } block (and its comma).
   • Images live in  assets/img/  — put a new photo there and use its
     file name, e.g.  image: "assets/img/my-photo.jpg"
   ===================================================================== */
window.SITE_CONTENT = window.SITE_CONTENT || {};
window.SITE_CONTENT.en = {
  langName: "English",
  htmlLang: "en",
  pageTitle: "Wintec Foam — Specialist Polyurethane Foam Manufacturer, Vietnam",
  metaDescription: "Wintec Foam (Vinh Duc Co., Ltd.) — a Vietnam–Singapore joint venture making 300+ custom polyurethane foam grades in Tay Ninh, Vietnam since 2009.",

  ui: {
    nav: {
      about: "About", technology: "Technology", products: "Products",
      certifications: "Certifications", services: "Services",
      markets: "Markets", why: "Why Wintec", contact: "Contact"
    },
    quote: "Request a quote",
    explore: "Explore products",
    learnMore: "Learn more",
    density: "Density",
    keyFeatures: "Key features",
    close: "Close",
    menu: "Menu",
    send: "Send enquiry",
    formName: "Your name",
    formCompany: "Company",
    formEmail: "Email",
    formMessage: "What foam do you need?",
    formNote: "This opens your email app with the message ready to send.",
    openMap: "Open in Google Maps",
    backToTop: "Back to top",
    rights: "All rights reserved."
  },

  hero: {
    eyebrow: "Specialist Polyurethane Foam Manufacturer · Est. 2009 · Tay Ninh, Vietnam",
    titleLines: ["Precision foam.", "Proven compliance.", "Reliable supply."],
    highlight: 0, // which line (0, 1 or 2) is shown in orange
    text: "Wintec Foam Enterprise Limited — operating as Vinh Duc Co., Ltd. — is a Vietnam–Singapore joint venture formulating, foaming and cutting more than 300 custom PU foam grades for brands across Asia, Europe, North America and Australia.",
    image: "assets/img/factory.jpg",
    imageCaption: "Our factory — Tay Ninh"
  },

  stats: [
    { value: 15, suffix: "+", label: "Years of operation" },
    { value: 300, suffix: "+", label: "Foam grades available" },
    { value: 28800, suffix: "", label: "Factory area (m²)" },
    { value: 120, prefix: "~", suffix: "", label: "Dedicated employees" }
  ],

  about: {
    kicker: "01 — Who we are",
    title: "A foam maker, not a foam reseller",
    paragraphs: [
      "Wintec Foam Enterprise Limited — operating under its Vietnamese entity Công Ty TNHH Vĩnh Đức — is a Vietnam–Singapore joint venture founded in 2009 in Tay Ninh Province, Vietnam. Built on a shared commitment to manufacturing excellence and product innovation, the company has grown into one of the region's foremost specialists in custom polyurethane (PU) foam.",
      "We are not a distributor and we do not resell commodity foam. Every block we produce is formulated in-house, poured on our own computer-controlled Automatic Machine Foaming (AMF) and Automatic Batch Foaming (ABF) lines, and cut to specification on our CNC machinery. Owning the whole process gives our customers the consistency, traceability and technical support they cannot get from intermediaries.",
      "From our 28,800 m² headquarters, a team of around 120 specialists serves furniture makers, bedding brands, automotive suppliers and contract manufacturers — delivering more than 300 proprietary foam grades on just-in-time schedules."
    ],
    gallery: [
      { image: "assets/img/factory.jpg", caption: "Our factory — Tay Ninh" },
      { image: "assets/img/production-floor.jpg", caption: "Production floor" },
      { image: "assets/img/quality-lab.jpg", caption: "In-house quality control" },
      { image: "assets/img/foam-ready-to-cut.jpg", caption: "Foam production ready for cutting" },
      { image: "assets/img/warehouse.jpg", caption: "Warehouse & inventory management" }
    ]
  },

  technology: {
    kicker: "02 — Technology & value process",
    title: "One integrated system: precision, speed, consistency",
    intro: "At the heart of Wintec Foam's advantage is our proprietary manufacturing process — two complementary foaming technologies working together, so we can deliver foam to the most demanding specifications, at any scale, with consistent quality.",
    systems: [
      {
        tag: "AMF",
        name: "Automatic Machine Foaming",
        text: "Built for continuous, high-volume production. Raw chemicals are precisely metered and fed through an automatic mixing system onto a moving conveyor, where the foam rises and cures into a continuous block ready to be cut to size. Optimised for speed and efficiency — ideal for large orders where throughput and consistency in a single grade come first."
      },
      {
        tag: "ABF",
        name: "Automatic Batch Foaming",
        text: "The highest precision achievable in foam making, for grades with exacting requirements. Each block is individually programmed and produced with advanced metering technology, removing human variability from formulation. Every chemical is measured and dispensed precisely, so each block meets its defined density, hardness and cell structure."
      }
    ],
    features: [
      {
        icon: "cut",
        title: "CNC cutting & advanced machining",
        text: "Horizontal, vertical, slant and carousel CNC cutters process virtually any shape or size — from standard slabs to complex 3D profiles — cutting your post-processing time."
      },
      {
        icon: "clock",
        title: "Lean manufacturing, on-time delivery",
        text: "Trim, agile work-in-progress and finished-goods stock lets us run just-in-time delivery, so you hold less buffer stock and free up working capital."
      },
      {
        icon: "tag",
        title: "Competitive pricing through efficiency",
        list: [
          "High-yield manufacturing reduces waste and cost",
          "Efficiency savings passed directly to customers",
          "Vietnam cost base with Singapore joint-venture quality standards",
          "Volume pricing for regular programme orders"
        ]
      }
    ],
    image: "assets/img/carousel-cutter.jpg",
    imageCaption: "CNC carousel cutting line"
  },

  products: {
    kicker: "03 — Products & solutions",
    title: "A whole family of foams, tuned to your brief",
    intro: "Polyurethane foam is not one material — it is a family of materials whose properties shift dramatically with formulation. Our portfolio spans ultra-light packaging grades to high-density load-bearing foam, temperature-sensitive memory foam to rapid-drain outdoor foam. Every grade can be colour-matched, density-adjusted and custom-cut.",
    densityMax: 80,
    items: [
      {
        id: "general",
        name: "General Foam",
        tagline: "The flexible all-rounder",
        image: "assets/img/general-foam.jpg",
        caption: "Available in 12–80 kg/m³ and a full colour range",
        density: [12, 80],
        text: "The most flexible starting point for furniture, bedding and packaging makers. Superb processing characteristics make it easy to cut, glue, laminate and fabricate. Density, hardness and colour are all configurable — the choice for OEMs who need consistent quality across high-volume runs.",
        bullets: [
          "Density range: 12 to 80 kg/m³",
          "Hardness: very soft to super hard",
          "Applications: furniture upholstery, bedding, cushions, footwear, protective packaging",
          "Custom colour available as standard"
        ]
      },
      {
        id: "ultra",
        name: "Ultra Foam",
        tagline: "High-resilience, long-life comfort",
        image: "assets/img/ultra-foam.jpg",
        caption: "Available in 30–50 kg/m³ and a full colour range",
        density: [30, 50],
        text: "Engineered for applications that demand durability and sustained comfort. Its more open, coarse cell structure gives a higher support factor, superior compression resistance and excellent load-bearing — so it keeps its shape and support for years longer than standard foam.",
        bullets: [
          "Density range: 30 to 50 kg/m³",
          "Support factor well above conventional foam at the same density",
          "Applications: premium sofa seating, high-spec mattress cores, transit and lounge seating"
        ]
      },
      {
        id: "memory",
        name: "Memory Foam",
        tagline: "Visco-elastic pressure relief",
        image: "assets/img/memory-foam.jpg",
        caption: "Conforms to body contours for superior pressure relief",
        density: [45, 70],
        text: "Temperature and pressure sensitive, our visco-elastic foam yields under the body's warmth and weight, conforming to its contours to remove pressure points at shoulders, hips and heels. When weight is removed it slowly returns to shape — a reliable sign of quality and formulation integrity.",
        bullets: [
          "Density range: 45 to 70 kg/m³",
          "Response time and firmness customisable by formulation",
          "Applications: health bedding, orthopaedic cushions, pillows, baby car seat inserts, medical support products"
        ]
      },
      {
        id: "fr",
        name: "Flame Retardant Foam",
        tagline: "Tested to international standards",
        image: "assets/img/flame-retardant.jpg",
        caption: "Formulated with fire-inhibiting chemistry from the ground up",
        density: [18, 60],
        text: "Shipping to the US without TB117-2013, or to the UK without BS5852 Crib 5, risks recalls, delisting and penalties. Our FR range is not simply treated foam — it is formulated with fire-inhibiting chemistry from the start, then independently tested by accredited labs. All Wintec FR foams comply with US rules restricting PBDEs, TRIS, TDCPP, TCEP and TCPP, and we supply the full documentation for customs, retailer audits and registrations.",
        bullets: [
          "US California TB117-2013 (Section 3) & AB2998-2019 — chemical FR-free compliant",
          "UK BS5852 Crib 5 — the most demanding European FR furniture standard",
          "US Mattress Standard TB1633",
          "California Proposition 65 — toxic substance free",
          "Density: 18–60 kg/m³ (US CAL TB117); 26–50 kg/m³ (UK BS5852)",
          "Applications: upholstered furniture, bedding, acoustic panels"
        ]
      },
      {
        id: "rdf",
        name: "Rapid Dry Foam (RDF)",
        tagline: "Outdoor & marine performance",
        image: "assets/img/rapid-dry-foam.jpg",
        caption: "Large interconnected pores let water drain fast",
        density: null,
        text: "Outdoor and marine environments place exceptional demands on cushions. Rapid Dry Foam's large, interconnected open-pore structure lets water drain quickly and air flow continuously — something standard foam simply cannot match.",
        bullets: [
          "Drains water significantly faster than conventional foam",
          "Resists mould, mildew and long-term water retention",
          "Stronger and more supportive; keeps its shape outdoors",
          "Applications: outdoor furniture, poolside and sun-lounger cushions, hotels and resorts, marine seating"
        ]
      },
      {
        id: "natural",
        name: "Natural & Eco Foam",
        tagline: "Same performance, lower footprint",
        image: "assets/img/natural-foam.jpg",
        caption: "Bio-based foam made with palm-oil derived natural polyols",
        density: null,
        text: "For brands with sustainability commitments — ESG-driven, retailer-mandated or consumer-facing. Our bio-based PU foam uses natural polyols from sustainably sourced palm oil and matches conventional grades on density, hardness and processing. The difference is the feedstock and the footprint: a visible, measurable, cost-effective step towards lower scope 3 emissions.",
        bullets: [
          "Natural polyols from responsibly sourced palm oil",
          "Equivalent physical performance to conventional PU across all grades",
          "Measurably lower carbon footprint than petroleum-based equivalents",
          "Available across density and hardness ranges on request"
        ]
      }
    ]
  },

  certifications: {
    kicker: "04 — Certifications & compliance",
    title: "Evidence, not assertion",
    intro: "Every production batch is tested in our on-site laboratory, and samples go to internationally recognised independent labs every year for third-party verification. The result: a documentation chain that is always current and audit-ready.",
    items: [
      { badge: "USA", title: "California TB117-2013 (Section 3) & AB2998-2019", points: ["Chemical flame-retardant standard for upholstered furniture", "Compliant without restricted chemicals (PBDEs, TRIS, TDCPP etc.)", "Full test reports for retailer compliance submissions"] },
      { badge: "UK", title: "BS5852 Crib 5", points: ["The most demanding flammability test for UK furniture foam", "Required by major UK retailers and contract manufacturers", "Independently tested by SATRA Technology Centre"] },
      { badge: "USA", title: "California Proposition 65", points: ["Compliant with ozone-depleting and toxic substance restrictions", "Full chemical screening documentation available"] },
      { badge: "EU", title: "EN1021-1:2014", points: ["European non-FR foam standard for upholstered furniture", "Supports EU market entry without restricted chemistry"] },
      { badge: "USA", title: "Mattress Standard TB1633", points: ["Full-scale open-flame test for mattress sets", "For bedding makers supplying US retailers"] },
      { badge: "LAB", title: "In-house & annual independent testing", points: ["Every batch tested in our on-site QC laboratory", "Annual third-party verification at accredited labs", "Documentation chain kept for every grade"] }
    ],
    note: "All certification documents are available on request and reviewed continuously against evolving regulations."
  },

  services: {
    kicker: "05 — Additional processing",
    title: "From raw block to ready-to-use part",
    intro: "Vertical, horizontal and circular splitters let us handle almost any downstream fabrication. With foam supply and processing under one roof, your supply chain gets simpler and lead times get shorter.",
    items: [
      { image: "assets/img/profiling-cutting.jpg", title: "Profiling cutting", text: "Wave and egg-crate profiles for acoustic panels, mattress toppers, medical overlays and convoluted packaging." },
      { image: "assets/img/contour-shapes.jpg", title: "Contour cutting", text: "CNC-guided 3D shapes for automotive parts, medical products and custom furniture forms — any shape, any quantity." },
      { image: "assets/img/cushion-processing.jpg", title: "Cushion processing", text: "Complete cushion assembly — foam insert plus inner casing, delivered ready for upholstery to cut your assembly labour." },
      { image: "assets/img/dispatch-inventory.jpg", title: "Shrink packing", text: "Volume-efficient polyethylene shrink wrapping for space-optimised container loading and protection in transit." },
      { image: "assets/img/open-cell-foam.jpg", title: "Mixed foam chips", text: "Offcut foam granules as rebond raw material — for rebonded foam, carpet underlay and composite filler." }
    ]
  },

  markets: {
    kicker: "06 — Markets & applications",
    title: "Built for the industries that depend on foam",
    intro: "Polyurethane foam is one of the most pervasive materials in modern manufacturing. Our grades and processing are built to serve the industries that rely on it most.",
    items: [
      { icon: "sofa", title: "Furniture & upholstery", points: ["Sofa & dining chair cushions", "Office & task seating", "Hospitality & contract furniture", "Custom upholstery components"] },
      { icon: "bed", title: "Bedding & sleep", points: ["Mattress cores & toppers", "Memory foam pillows", "Baby & infant products", "Orthopaedic support inserts"] },
      { icon: "wave", title: "Outdoor & marine", points: ["Poolside & garden furniture", "Hotel resort seating", "Marine & boat cushions", "Stadium and event seating"] },
      { icon: "car", title: "Automotive & transport", points: ["Car & van seat inserts", "Headrest & armrest components", "NVH insulation foam", "Bus & rail transit seating"] },
      { icon: "medical", title: "Medical & healthcare", points: ["Therapeutic overlay mattresses", "Wheelchair & mobility cushions", "Prosthetic padding & liners", "Hospital trolley and bed surfaces"] },
      { icon: "box", title: "Packaging & industrial", points: ["Protective packaging inserts", "Tool case & instrument foam", "Anti-vibration pads", "Acoustic & sound insulation panels"] }
    ]
  },

  why: {
    kicker: "07 — Why partner with Wintec",
    title: "A supply partner that grows with you",
    intro: "Choosing a foam supplier is about more than specifications. It is about reliability, responsiveness and confidence. Here is why manufacturers across Asia, Europe and North America work with us.",
    items: [
      { title: "300+ proprietary grades", points: ["One of the widest foam portfolios in Southeast Asia", "Every major foam category under one roof", "No multi-supplier complexity or lead-time swings"] },
      { title: "Custom formulation on request", points: ["Our technical team develops grades to your spec", "Density, hardness, cell structure, colour — all configurable", "Prototype batches before full production"] },
      { title: "Multi-market compliance ready", points: ["US, UK, EU and AU-relevant certification on file", "Full test documents with every compliant grade", "Less compliance burden at import and retail audit"] },
      { title: "Just-in-time delivery", points: ["Lean manufacturing keeps schedules tight and predictable", "Low finished-goods inventory at your facility", "Responsive to order changes and urgent needs"] },
      { title: "One-stop fabrication", points: ["Foam plus cutting, cushion assembly and packing", "Finished components, not raw blocks", "Less handling, damage and supplier coordination"] },
      { title: "Vietnam's manufacturing advantage", points: ["Competitive cost base, uncompromised quality", "Export relationships across Asia, Europe & North America", "Strategic location for regional and global supply"] }
    ],
    images: [
      { image: "assets/img/warehouse.jpg", caption: "Foam inventory ready for dispatch" },
      { image: "assets/img/dispatch-inventory.jpg", caption: "Large-scale production capacity" }
    ]
  },

  contact: {
    kicker: "08 — Get in touch",
    title: "Let's build the right foam for your product",
    intro: "Developing a new product, replacing a supplier or looking for a value-added processing partner? Our technical and commercial team is ready to respond quickly.",
    company: "WINTEC FOAM ENTERPRISE LIMITED",
    entity: "Vinh Duc Co., Ltd.",
    address: "Moi 1 Hamlet, My Hanh Nam Commune, Tay Ninh Province, Vietnam",
    mapQuery: "My Hanh Nam, Tay Ninh, Vietnam",
    phones: ["(+84) 272 2496286", "(+84) 72 3751602 – 3"],
    email: "sales.wintec@gmail.com",
    website: "www.wintecfoam.com",
    labels: { address: "Address", phone: "Phone", email: "Email", web: "Website" }
  },

  footer: {
    tagline: "Precision foam. Proven compliance. Reliable supply."
  }
};
