export const company = {
  name: "Klinflex Oil",
  phone: "08097890745",
  phoneHref: "tel:+2348097890745",
  email: "klinflex5@gmail.com",
  address: "#23 Bashorun Okusanya Street, Lekki Phase 1, Lagos",
};

export type Capability = {
  id: string;
  title: string;
  summary: string;
  groups: { heading: string; items: string[] }[];
};

export const capabilities: Capability[] = [
  {
    id: "marine",
    title: "Vessel chartering and marine services",
    summary:
      "Support vessels for exploration, development and production, with the mobilization, crewing and compliance work handled end to end.",
    groups: [
      {
        heading: "Vessels",
        items: [
          "Anchor handling tug supply (AHTS)",
          "Platform supply vessels (PSVs)",
          "Fast crew boats",
          "Utility vessels",
          "Barges and tugboats",
          "Seismic survey vessels",
          "Oil spill response vessels",
        ],
      },
      {
        heading: "Marine support",
        items: [
          "Chartering and mobilization management",
          "Crew management and logistics",
          "Vessel documentation and certification",
          "Port clearance and NIMASA compliance",
          "Pre-charter surveys and inspection",
        ],
      },
    ],
  },
  {
    id: "rov",
    title: "ROVs and mini ROVs",
    summary:
      "Subsea inspection, maintenance and repair without divers, from deepwater intervention to jetty and hull checks.",
    groups: [
      {
        heading: "Full-size ROVs",
        items: [
          "Pipeline inspection, repair and maintenance",
          "Wellhead and Christmas tree intervention",
          "Subsea structure survey and integrity assessment",
          "Umbilical, riser and flowline installation support",
          "Valve and actuator operation",
        ],
      },
      {
        heading: "Mini ROVs",
        items: [
          "Jetty, berth and hull inspections",
          "Shallow water pipeline and cable route surveys",
          "Port and harbor infrastructure inspections",
          "Tank and confined space inspections",
        ],
      },
      {
        heading: "Delivery",
        items: [
          "Certified pilots and technicians",
          "Real-time video and data to client teams",
          "Inspection reports for regulatory compliance",
        ],
      },
    ],
  },
  {
    id: "epci",
    title: "Engineering, procurement, construction and installation",
    summary:
      "Full EPCI delivery for onshore and offshore projects, with engineers and project managers across every phase.",
    groups: [
      {
        heading: "Engineering",
        items: [
          "FEED and detailed engineering",
          "Process engineering and flow assurance",
          "Structural and civil design",
          "Instrumentation and control systems",
        ],
      },
      {
        heading: "Procurement",
        items: [
          "Drilling equipment, BOP and tubulars",
          "Wellhead and production equipment",
          "Valves, flanges, pumps and compressors",
          "Material take-off and BOQ development",
          "Customs clearance, freight and delivery",
        ],
      },
      {
        heading: "Construction and installation",
        items: [
          "Structural fabrication and MEP works",
          "Tank farm and storage facilities",
          "Subsea pipeline installation and tie-ins",
          "Platform and jacket installation",
          "SURF installation, hook-up and commissioning",
        ],
      },
    ],
  },
  {
    id: "manpower",
    title: "Manpower and technical staffing",
    summary:
      "HSE-trained personnel for drilling rigs, platforms and construction sites, on short or long assignments.",
    groups: [
      {
        heading: "What we supply",
        items: [
          "Skilled and semi-skilled oilfield personnel",
          "Short-term and long-term deployment",
          "HSE-trained field teams ready to mobilize",
          "Technical staffing for rigs, platforms and sites",
        ],
      },
      {
        heading: "Licensed",
        items: ["Recruiters licence for manpower and staff supply"],
      },
    ],
  },
  {
    id: "tenders",
    title: "Tenders and bid packaging",
    summary:
      "Technical and commercial bids prepared and checked so they meet the IOC's requirements the first time.",
    groups: [
      {
        heading: "Bid support",
        items: [
          "Technical and commercial bid preparation",
          "Single and double-envelope submissions",
          "Pre-qualification questionnaires (PQQs)",
          "Invitation to tender (ITT) responses",
          "Document review and quality assurance",
        ],
      },
    ],
  },
  {
    id: "compliance",
    title: "Registration and compliance",
    summary:
      "The paperwork that decides whether you can bid: NipeX, NCDMB, IOC vendor portals and the statutory certificates behind them.",
    groups: [
      {
        heading: "Platforms and local content",
        items: [
          "NipeX registration, renewal and code selection",
          "NOGIC certificate of registration",
          "NCEC and Nigerian Content Rig Certificate",
          "Expatriate quota management",
        ],
      },
      {
        heading: "IOC vendor registration",
        items: [
          "Shell (SPDC)",
          "TotalEnergies EP Nigeria",
          "Chevron Nigeria",
          "ExxonMobil Nigeria",
          "Eni/Agip Nigeria",
          "NNPC and its subsidiaries",
        ],
      },
      {
        heading: "Statutory and standards",
        items: [
          "NSITF, ITF and PENCOM certificates",
          "CAC, FIRS tax clearance, BPP and SCUML",
          "ISO 9001, 14001, 45001, 22000, 27000, 50001",
          "DUNS registration",
          "NIMASA marine vessel certificate",
        ],
      },
    ],
  },
];

// Short labels for the home page teasers. Full detail lives on each service page.
export const tiles = [
  { id: "marine", name: "Vessel chartering", tagline: "Offshore support vessels, crewed and certified." },
  { id: "rov", name: "ROVs and mini ROVs", tagline: "Subsea inspection and repair without divers." },
  { id: "epci", name: "EPCI", tagline: "Engineering through installation, onshore and offshore." },
  { id: "manpower", name: "Manpower", tagline: "HSE-trained teams for rigs and sites." },
  { id: "tenders", name: "Tenders and bids", tagline: "Bid packages that meet the IOC's requirements." },
  { id: "compliance", name: "Registration", tagline: "NipeX, NCDMB and IOC vendor portals." },
];

export const registry = [
  "CAC",
  "FIRS",
  "BPP",
  "SCUML",
  "NCDMB",
  "NipeX",
  "NIMASA",
  "NSITF",
  "ITF",
  "PENCOM",
  "NIWA",
  "NOSDRA",
  "NPA",
  "SON",
  "NAFDAC",
  "NCAA",
  "NNRA",
  "OGTAN",
  "BOSET",
  "ISPON",
];

export const regions = [
  "North Central",
  "North East",
  "North West",
  "South East",
  "South South",
  "South West",
];

export const values = [
  {
    title: "Safety first",
    body: "Every project starts with an HSE plan. Everyone is trained, equipped and briefed before field activity, and violations are not tolerated.",
  },
  {
    title: "Integrity",
    body: "We say what we mean and do what we say, in line with global best practice and ethical standards.",
  },
  {
    title: "Operational excellence",
    body: "International standards are our baseline. Exceeding them is the goal.",
  },
  {
    title: "Client-first",
    body: "We sit on the same side as our clients and take ownership of their problems, whether or not the job is profitable.",
  },
];
