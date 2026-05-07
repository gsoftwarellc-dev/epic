import type { Product } from "../types/product";

function placeholderImage(title: string, from: string, via: string, to: string) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="850" viewBox="0 0 1200 850">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${from}"/>
          <stop offset="52%" stop-color="${via}"/>
          <stop offset="100%" stop-color="${to}"/>
        </linearGradient>
        <pattern id="marks" width="64" height="64" patternUnits="userSpaceOnUse">
          <rect x="7" y="9" width="18" height="10" rx="3" fill="rgba(255,255,255,0.26)"/>
          <rect x="42" y="39" width="14" height="9" rx="3" fill="rgba(255,255,255,0.18)"/>
        </pattern>
      </defs>
      <rect width="1200" height="850" rx="52" fill="url(#bg)"/>
      <rect width="1200" height="850" fill="url(#marks)"/>
      <path d="M116 614 C238 438 351 394 480 534 C596 660 717 638 830 514 C936 398 1051 396 1120 532 L1120 735 L116 735 Z" fill="rgba(255,255,255,0.28)"/>
      <rect x="224" y="282" width="752" height="332" rx="64" fill="rgba(255,255,255,0.82)"/>
      <path d="M278 282 L600 116 L922 282 Z" fill="rgba(255,255,255,0.74)"/>
      <rect x="296" y="378" width="164" height="236" rx="34" fill="rgba(124,58,237,0.25)"/>
      <rect x="518" y="365" width="164" height="249" rx="34" fill="rgba(249,115,22,0.24)"/>
      <rect x="740" y="378" width="164" height="236" rx="34" fill="rgba(14,165,233,0.22)"/>
      <text x="600" y="706" fill="#221729" font-family="Arial, sans-serif" font-size="54" font-weight="800" text-anchor="middle">${title}</text>
    </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function bullImage() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="850" viewBox="0 0 1200 850">
      <defs>
        <linearGradient id="dust" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#170d0a"/>
          <stop offset="50%" stop-color="#3b2416"/>
          <stop offset="100%" stop-color="#8a1c1c"/>
        </linearGradient>
        <pattern id="grain" width="42" height="42" patternUnits="userSpaceOnUse">
          <rect width="42" height="42" fill="rgba(255,255,255,0.02)"/>
          <path d="M0 20 H42 M18 0 V42" stroke="rgba(255,255,255,0.06)" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="1200" height="850" fill="url(#dust)"/>
      <rect width="1200" height="850" fill="url(#grain)"/>
      <path d="M158 610 C260 490 356 478 458 584 C560 692 680 692 786 584 C892 474 1014 486 1080 610 L1080 760 L158 760 Z" fill="rgba(193,18,31,0.35)"/>
      <path d="M330 450 C398 320 528 284 646 350 C702 292 790 290 850 344 C790 346 744 374 724 424 C756 494 742 574 684 628 C590 716 430 658 386 526 C364 464 284 440 214 476 C240 424 282 396 330 450 Z" fill="rgba(255,255,255,0.9)"/>
      <path d="M724 424 C760 396 818 392 882 424 C834 448 804 492 792 552 C760 516 740 474 724 424 Z" fill="#170d0a"/>
      <text x="600" y="730" fill="#ffffff" font-family="Arial, sans-serif" font-size="58" font-weight="900" text-anchor="middle">The Terminator Mechanical Bull</text>
    </svg>`;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const productsMock: Product[] = [
  {
    id: 1,
    name: "Rainbow Castle Bounce House",
    slug: "rainbow-castle-bounce-house",
    brandType: "epic",
    shortDescription: "A bright castle bounce house that brings classic party energy.",
    description:
      "The Rainbow Castle is a crowd favorite for birthdays, school events, and backyard parties. It gives kids plenty of space to jump, laugh, and burn off energy while parents enjoy a smooth setup and take-down experience.",
    priceCents: 18900,
    depositCents: 5000,
    rentalType: "full_day",
    images: [
      placeholderImage("Rainbow Castle", "#7c3aed", "#ec4899", "#f97316"),
      placeholderImage("Jump Zone", "#0ea5e9", "#22c55e", "#f97316"),
    ],
    features: ["Classic castle layout", "Bright party colors", "Mesh safety sides", "Full-day rental"],
    specs: {
      size: "15 ft x 15 ft",
      ageRange: "3 to 10",
      wetDry: "Dry only",
      setupTime: "30 to 45 minutes",
      powerRequired: "1 standard outlet",
    },
    isActive: true,
  },
  {
    id: 2,
    name: "Tropical Splash Combo",
    slug: "tropical-splash-combo",
    brandType: "epic",
    shortDescription: "Bounce, climb, slide, and cool off with a tropical combo unit.",
    description:
      "The Tropical Splash Combo turns a warm day into a full backyard event with a bounce area, climbing lane, and slide. Use it wet for summer parties or dry when the weather is cooler.",
    priceCents: 25900,
    depositCents: 7500,
    rentalType: "full_day",
    images: [
      placeholderImage("Tropical Splash", "#22c55e", "#0ea5e9", "#f97316"),
      placeholderImage("Wet/Dry Combo", "#14b8a6", "#22c55e", "#7c3aed"),
    ],
    features: ["Bounce area", "Climbing lane", "Wet or dry slide", "Splash landing"],
    specs: {
      size: "28 ft x 15 ft",
      ageRange: "4 to 12",
      wetDry: "Wet or dry",
      setupTime: "45 to 60 minutes",
      powerRequired: "1 standard outlet and water access for wet use",
    },
    isActive: true,
  },
  {
    id: 3,
    name: "Princess Palace Bounce House",
    slug: "princess-palace-bounce-house",
    brandType: "epic",
    shortDescription: "A pink and purple palace made for magical birthday moments.",
    description:
      "The Princess Palace creates a bright centerpiece for birthdays, family gatherings, and neighborhood celebrations. It is roomy, cheerful, and easy to place in most yards.",
    priceCents: 19900,
    depositCents: 5000,
    rentalType: "full_day",
    images: [
      placeholderImage("Princess Palace", "#ec4899", "#a855f7", "#f9a8d4"),
      placeholderImage("Palace Bounce", "#f472b6", "#7c3aed", "#0ea5e9"),
    ],
    features: ["Palace theme", "Large jumping space", "Safety entrance ramp", "Great for birthdays"],
    specs: {
      size: "16 ft x 15 ft",
      ageRange: "3 to 9",
      wetDry: "Dry only",
      setupTime: "30 to 45 minutes",
      powerRequired: "1 standard outlet",
    },
    isActive: true,
  },
  {
    id: 4,
    name: "Super Slide Adventure",
    slug: "super-slide-adventure",
    brandType: "epic",
    shortDescription: "A tall slide rental built for big smiles and repeat rides.",
    description:
      "Super Slide Adventure gives parties a strong centerpiece with a big climb and a fast, smooth slide. It works well for school parties, church events, and larger family gatherings.",
    priceCents: 28900,
    depositCents: 8500,
    rentalType: "full_day",
    images: [
      placeholderImage("Super Slide", "#f97316", "#ef4444", "#7c3aed"),
      placeholderImage("Adventure Slide", "#0ea5e9", "#f97316", "#22c55e"),
    ],
    features: ["Tall slide", "Easy climb lane", "Wide landing", "High throughput for events"],
    specs: {
      size: "30 ft x 13 ft",
      ageRange: "5 to 14",
      wetDry: "Dry only",
      setupTime: "45 to 60 minutes",
      powerRequired: "1 standard outlet",
    },
    isActive: true,
  },
  {
    id: 5,
    name: "Pirate Cove Bounce House",
    slug: "pirate-cove-bounce-house",
    brandType: "epic",
    shortDescription: "A pirate-themed jumper for treasure hunts and party crews.",
    description:
      "Pirate Cove brings character and color to any event. Kids can jump, pretend, and make the bounce house part of the party theme without needing complicated planning.",
    priceCents: 20900,
    depositCents: 5000,
    rentalType: "full_day",
    images: [
      placeholderImage("Pirate Cove", "#0ea5e9", "#3b82f6", "#f97316"),
      placeholderImage("Treasure Jump", "#1d4ed8", "#f59e0b", "#22c55e"),
    ],
    features: ["Pirate theme", "Open jump floor", "Shaded entry", "Photo-friendly design"],
    specs: {
      size: "15 ft x 15 ft",
      ageRange: "3 to 10",
      wetDry: "Dry only",
      setupTime: "30 to 45 minutes",
      powerRequired: "1 standard outlet",
    },
    isActive: true,
  },
  {
    id: 6,
    name: "Jungle Jumper",
    slug: "jungle-jumper",
    brandType: "epic",
    shortDescription: "A green jungle-themed bounce house for wild party energy.",
    description:
      "Jungle Jumper is a playful rental with bold green colors and a simple layout that works for small yards, parks, and family parties. It is a dependable pick for younger kids.",
    priceCents: 18900,
    depositCents: 5000,
    rentalType: "full_day",
    images: [
      placeholderImage("Jungle Jumper", "#22c55e", "#84cc16", "#0ea5e9"),
      placeholderImage("Wild Bounce", "#16a34a", "#facc15", "#7c3aed"),
    ],
    features: ["Jungle colorway", "Compact footprint", "Mesh visibility", "Fast setup"],
    specs: {
      size: "14 ft x 14 ft",
      ageRange: "3 to 9",
      wetDry: "Dry only",
      setupTime: "30 minutes",
      powerRequired: "1 standard outlet",
    },
    isActive: true,
  },
  {
    id: 7,
    name: "Sports Arena Combo",
    slug: "sports-arena-combo",
    brandType: "epic",
    shortDescription: "A sporty combo rental with bouncing and game-day competition.",
    description:
      "Sports Arena Combo fits active kids and party groups that want more than jumping. It combines bounce space with sporty details and party-friendly flow.",
    priceCents: 24900,
    depositCents: 7500,
    rentalType: "fixed_slot",
    images: [
      placeholderImage("Sports Arena", "#0ea5e9", "#22c55e", "#ef4444"),
      placeholderImage("Game Day Combo", "#2563eb", "#16a34a", "#f97316"),
    ],
    features: ["Sports theme", "Bounce and activity zones", "Great for teams", "Morning or afternoon slots"],
    specs: {
      size: "24 ft x 16 ft",
      ageRange: "5 to 12",
      wetDry: "Dry only",
      setupTime: "45 minutes",
      powerRequired: "1 standard outlet",
    },
    isActive: true,
  },
  {
    id: 8,
    name: "Ocean Wave Wet/Dry Slide",
    slug: "ocean-wave-wet-dry-slide",
    brandType: "epic",
    shortDescription: "A water-ready slide that also works as a dry event rental.",
    description:
      "Ocean Wave Wet/Dry Slide keeps summer parties moving with a big slide and splash-ready setup. When water is not needed, it still works as a clean, fast dry slide.",
    priceCents: 30900,
    depositCents: 8500,
    rentalType: "full_day",
    images: [
      placeholderImage("Ocean Wave", "#0ea5e9", "#06b6d4", "#22c55e"),
      placeholderImage("Splash Slide", "#38bdf8", "#7c3aed", "#f97316"),
    ],
    features: ["Wet or dry use", "Large slide", "Splash landing", "Summer favorite"],
    specs: {
      size: "32 ft x 14 ft",
      ageRange: "5 to 14",
      wetDry: "Wet or dry",
      setupTime: "45 to 60 minutes",
      powerRequired: "1 standard outlet and water access for wet use",
    },
    isActive: true,
  },
  {
    id: 9,
    name: "The Terminator Mechanical Bull",
    slug: "the-terminator-mechanical-bull",
    brandType: "terminator",
    shortDescription: "A rugged mechanical bull rental for parties, weddings, and corporate events.",
    description:
      "The Terminator Mechanical Bull brings a bold western attraction to adult parties, weddings, reunions, and company events. It includes a controlled riding experience, inflatable safety arena, and event-ready setup.",
    priceCents: 49900,
    depositCents: 15000,
    rentalType: "hourly",
    images: [bullImage()],
    features: ["Mechanical bull", "Inflatable safety arena", "Operator-ready setup", "Great for adult events"],
    specs: {
      size: "20 ft x 20 ft arena",
      ageRange: "Recommended 12+",
      wetDry: "Dry only",
      setupTime: "60 to 75 minutes",
      powerRequired: "2 dedicated outlets",
    },
    isActive: true,
  },
];
