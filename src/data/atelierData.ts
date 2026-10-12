export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  code: string;
  description: string;
  specs: string[];
  duration: string;
  warranty: string;
  startingPriceAED: number;
}

export interface CaseStudy {
  id: string;
  vehicle: string;
  color: string;
  year: string;
  clientArea: string;
  scope: string;
  specs: {
    paintDepthBefore: string;
    paintDepthAfter: string;
    glossLevel: string;
    filmThickness: string;
    curingCycle: string;
  };
  priceAED: number;
  image: string;
}

export interface PackageTier {
  id: string;
  name: string;
  subtitle: string;
  badge?: string;
  sportsCarAED: number;
  supercarAED: number;
  hypercarAED: number;
  suvAED: number;
  turnaround: string;
  features: string[];
  warranty: string;
}

export const ATELIER_INFO = {
  name: "APEX DUBAI",
  tagline: "Hypercar Surface Engineering & PPF Atelier",
  location: "Street 18, Warehouse 4B, Al Quoz Industrial Area 3, Dubai, UAE",
  coordinates: "25.1372° N, 55.2341° E",
  phoneDisplay: "+971 4 399 2140",
  phoneRaw: "+97143992140",
  whatsappRaw: "971508924410",
  email: "concierge@apexdetailing.ae",
  hours: "MON - SUN: 09:00 - 21:00 GST",
  vatTRN: "100482910400003",
  tradeLicense: "DED-948210",
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "ppf-full",
    tag: "SURFACE ARMOUR",
    title: "10-Mil Self-Healing PPF",
    code: "ISO-PPF-10M",
    description: "Full-body optical polyurethane engineered specifically for GCC harsh conditions. Self-heals swirl marks instantly under ambient Dubai heat. Disassembly-free precision pattern application via digital CAD database.",
    specs: [
      "XPEL Ultimate Plus 10-Mil Thickness",
      "Digital DAP pattern cutting (Zero razor-to-paint contact)",
      "Full panel edge wrap for invisible seam alignment",
      "Optical clarity refractive index matched to factory clearcoat"
    ],
    duration: "4 - 5 Days",
    warranty: "10-Year Manufacturer Transferable",
    startingPriceAED: 18500
  },
  {
    id: "paint-correction",
    tag: "OPTICAL CLARITY",
    title: "Multi-Stage Nanotech Paint Correction",
    code: "ISO-CORR-MS",
    description: "Surgical removal of micro-scratches, buffer trails, and sand pitting. Paint thickness continuously verified with DeFelsko PosiTector ultrasonic gauges to preserve maximum clearcoat depth.",
    specs: [
      "3 to 4 stage compound & micro-fine jeweling polish",
      "DeFelsko multi-point ultrasonic paint depth profiling",
      "Restoration to 98.5+ GU (Gloss Units) optical depth",
      "5000K CRI-98 calibrated cleanroom lighting inspection"
    ],
    duration: "2 - 3 Days",
    warranty: "Lifetime Swirl-Free Handover Certificate",
    startingPriceAED: 4800
  },
  {
    id: "ceramic-matrix",
    tag: "MOLECULAR BOND",
    title: "10H Diamond Matrix Ceramic",
    code: "ISO-CER-10H",
    description: "Cross-linking siloxane matrix delivering extreme hydrophobic properties (115° contact angle). Short-wave infrared lamp baked at 70°C for impervious resistance against desert fallout, industrial soot, and bird droppings.",
    specs: [
      "True 10H pencil hardness diamond matrix",
      "1200°C thermal flashpoint tolerance (Exhaust & Caliper safe)",
      "99.8% UV-A and UV-B solar radiation reflection",
      "Oleophobic slickness repelling Dubai road grime & saline mist"
    ],
    duration: "2 Days",
    warranty: "5-Year Guarantee with Annual Telemetry Check",
    startingPriceAED: 6500
  },
  {
    id: "cryo-detailing",
    tag: "CRYOGENIC DECONTAMINATION",
    title: "Sub-Zero Dry-Ice Detailing",
    code: "ISO-CRYO-78",
    description: "Non-abrasive blast cleaning utilizing solid CO2 pellets at -78.5°C. Sublimates on contact, removing baked road grease, cosmoline, and sand sediment from underbody, suspension linkages, and engine bay with zero moisture.",
    specs: [
      "Pure recycled food-grade solid CO2 cryogenic pellets",
      "100% moisture-free: zero short-circuit risk for hybrid systems",
      "Restores raw magnesium, aluminum, and titanium castings",
      "Non-conductive, zero solvent runoff, environmentally certified"
    ],
    duration: "1 - 2 Days",
    warranty: "Cleanroom Handover Spec",
    startingPriceAED: 4200
  },
  {
    id: "heat-tint",
    tag: "SOLAR BARRIER",
    title: "RTA-Spec Nano-Ceramic Window Tint",
    code: "ISO-TINT-IR",
    description: "Multi-layer nano-ceramic film rejecting 99.8% infrared heat without signal interference. Fully compliant with Dubai RTA road safety regulations (30% to 50% VLT).",
    specs: [
      "Up to 98% Total Solar Energy Rejection (TSER)",
      "Zero metallic particles: 100% GPS/Keyless/5G pass-through",
      "Reduces supercar cabin cockpit temperature by up to 18°C",
      "Official RTA compliance certificate provided"
    ],
    duration: "4 Hours",
    warranty: "Lifetime Delamination & Bubble Warranty",
    startingPriceAED: 2600
  },
  {
    id: "interior-barrier",
    tag: "CABIN PRESERVATION",
    title: "Bespoke Leather & Alcantara Barrier",
    code: "ISO-INT-FEP",
    description: "Breathable fluoropolymer sealant protecting aniline leathers and Alcantara against perspiration, dye transfer from denim, and desert dryness without altering natural matte texture or tactile grip.",
    specs: [
      "Nano-breathable membrane: preserves leather breathing",
      "Tested on Connolly, Semi-Aniline, and Nappa hides",
      "Zero artificial shine: factory OEM matte finish preserved",
      "Antimicrobial & anti-UV hardening"
    ],
    duration: "1 Day",
    warranty: "2-Year Cabin Surface Protection",
    startingPriceAED: 3400
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "sf90",
    vehicle: "Ferrari SF90 Stradale Assetto Fiorano",
    color: "Giallo Montecarlo (Triple Layer Pearl)",
    year: "2024",
    clientArea: "Downtown Dubai / Al Barari",
    scope: "Full-Body 10-Mil Self-Healing PPF + Dry-Ice Engine Bay Detailing + 50% IR Ceramic Glass",
    specs: {
      paintDepthBefore: "118 µm (OEM clear)",
      paintDepthAfter: "115 µm (Corrected) + 250 µm PPF",
      glossLevel: "99.2 GU",
      filmThickness: "10.0 Mil (254 µm)",
      curingCycle: "36 hrs IR Chamber"
    },
    priceAED: 24500,
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=85"
  },
  {
    id: "gt3rs",
    vehicle: "Porsche 911 GT3 RS (992)",
    color: "Guards Red with Pyro Red Magnesium Wheels",
    year: "2024",
    clientArea: "Dubai Hills Estate",
    scope: "Track Armor PPF + Carbon Aerokit Wrap + 1200°C Caliper & Rim Ceramic + Sub-Zero Underbody",
    specs: {
      paintDepthBefore: "124 µm (OEM)",
      paintDepthAfter: "122 µm + Track PPF",
      glossLevel: "98.7 GU",
      filmThickness: "10.0 Mil Impact",
      curingCycle: "24 hrs Cleanroom"
    },
    priceAED: 19800,
    image: "/images/porsche-gt3rs-dubai.jpg"
  },
  {
    id: "spectre",
    vehicle: "Rolls-Royce Spectre",
    color: "Black Diamond / English White Coachline",
    year: "2025",
    clientArea: "Palm Jumeirah",
    scope: "Satin Stealth Matte PPF Conversion + White Leather Fluoropolymer Matrix + Silent Cabin Glass",
    specs: {
      paintDepthBefore: "145 µm",
      paintDepthAfter: "144 µm + Stealth PPF",
      glossLevel: "Satin 28 GU",
      filmThickness: "10.0 Mil Satin",
      curingCycle: "48 hrs Controlled"
    },
    priceAED: 31000,
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=85"
  }
];

export const PACKAGES_DATA: PackageTier[] = [
  {
    id: "track-pack",
    name: "TRACK ARMOUR",
    subtitle: "High-Velocity Impact Zones",
    sportsCarAED: 7500,
    supercarAED: 8500,
    hypercarAED: 11000,
    suvAED: 9500,
    turnaround: "2 Days",
    features: [
      "Front Bumper & Lip Spoilers 100% Covered",
      "Full Hood & Extended Fender Protection",
      "Wing Mirrors & Rocker Panels Shield",
      "Luggage Area & Rear Arch Impact Flares",
      "Headlights & Carbon Intakes Protected",
      "Handover with XPEL Warranty Certificate"
    ],
    warranty: "10-Year Written Warranty"
  },
  {
    id: "full-body-armour",
    name: "FULL BODY ARMOUR",
    subtitle: "100% Panel Edge-Wrapped Coverage",
    badge: "MOST POPULAR IN DUBAI",
    sportsCarAED: 16500,
    supercarAED: 18500,
    hypercarAED: 24000,
    suvAED: 21000,
    turnaround: "4 - 5 Days",
    features: [
      "100% Painted Bodywork Wrapped & Tucked",
      "Exposed Carbon Fiber Components Armoured",
      "Zero Disassembly of Critical Sensors/Housings",
      "Digital DAP Cutting with Edge Extensions",
      "Self-Healing Activation Under UAE Sun",
      "10H Hydrophobic Top-Coat Infused",
      "Complimentary 30-Day Inspection & Wash"
    ],
    warranty: "10-Year Full Warranty"
  },
  {
    id: "ultimate-connoisseur",
    name: "APEX CONNOISSEUR",
    subtitle: "Uncompromising Bespoke Commission",
    badge: "COLLECTOR SPECIFICATION",
    sportsCarAED: 24000,
    supercarAED: 26000,
    hypercarAED: 35000,
    suvAED: 29500,
    turnaround: "6 Days",
    features: [
      "Everything in Full Body Armour Package",
      "Cryogenic Dry-Ice Sub-Zero Engine & Chassis Cleaning",
      "RTA-Legal 99.8% IR Nano-Ceramic Window Tinting",
      "1200°C Thermal Ceramic on Wheels & Brake Calipers",
      "Full Cabin Aniline Leather & Alcantara Barrier",
      "DeFelsko Ultrasonic Paint Telemetry Dossier",
      "Enclosed White-Glove Supercar Flatbed Transport"
    ],
    warranty: "10-Year PPF + 5-Year Ceramic Master Warranty"
  }
];

export const CLIMATE_METRICS = [
  {
    metric: "+52°C",
    title: "Thermal Shock Barrier",
    detail: "Cross-linked elastomeric polyurethane maintains molecular stability without yellowing, bubbling, or edge-lifting under scorching UAE direct sunlight."
  },
  {
    metric: "10-MIL",
    title: "Desert Sand Protection",
    detail: "Heavy-duty 254-micron ballistic shield withstands severe sandstorm abrasive blasting on Sheikh Zayed Road at speeds over 250 km/h."
  },
  {
    metric: "99.8%",
    title: "Infrared Solar Rejection",
    detail: "Nano-ceramic crystal technology reflects infrared thermal radiation, preventing carbon fiber resin oxidation and clearcoat embrittlement."
  },
  {
    metric: "115°",
    title: "Contact Angle Hydrophobicity",
    detail: "Ultra-low surface energy repels acidic dew, coastal humidity from Dubai Marina, and airborne calcium minerals before drying."
  }
];

export const FAQ_DATA = [
  {
    q: "Does PPF installation void dealer warranties with Al Tayer (Ferrari), Habtoor (Bugatti/Bentley), or Al Nabooda (Porsche)?",
    a: "No. Our installations strictly preserve OEM warranties. We utilize factory CAD templates cut via digital DAP plotters, entirely avoiding razor cuts against paintwork and eliminating unnecessary disassembly of calibrated factory bumper clips, parking sensors, and radar arrays."
  },
  {
    q: "How does the self-healing film perform during Dubai summer heat?",
    a: "Remarkably. In ambient temperatures above 30°C, the elastomeric top-coat self-heals swirl marks and light abrasions in real time without requiring heat guns or hot water. Under direct Dubai sun, minor defects disappear within minutes."
  },
  {
    q: "Can you provide RTA-compliant window tinting and color registration support?",
    a: "Yes. Our nano-ceramic window films are 100% compliant with Dubai RTA regulations (available in 30% and 50% legal light transmission). For full Satin/Color PPF wraps, we provide all required technical documentation and invoices for immediate RTA system registration."
  },
  {
    q: "What makes cryogenic dry-ice detailing safer than steam or water pressure washing?",
    a: "Dry-ice pellets (-78.5°C) sublimate directly from solid to gas on contact. There is zero moisture, zero electrical short risk for 400V/800V hybrid powertrains (SF90, Revuelto, 296 GTB), and zero chemical corrosion on raw magnesium or aluminum components."
  },
  {
    q: "Do you offer enclosed flatbed vehicle transport across the Emirates?",
    a: "Yes. We operate our own hydraulic enclosed low-loader transporters equipped with soft-winch systems, specifically designed for ultra-low clearance hypercars across Dubai, Abu Dhabi, and Sharjah."
  }
];

export function buildWhatsAppLink(serviceName: string, vehicleModel = "", packageTier = ""): string {
  let message = `Hello APEX DUBAI,\nI would like to inquire about booking a slot for my vehicle.`;
  if (serviceName) message += `\nService: ${serviceName}`;
  if (packageTier) message += `\nPackage: ${packageTier}`;
  if (vehicleModel) message += `\nVehicle: ${vehicleModel}`;
  message += `\nPlease provide bay availability and confirmation.`;

  return `https://wa.me/${ATELIER_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
}
