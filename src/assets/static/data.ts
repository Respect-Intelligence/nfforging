const validSlugs = ["crf", "foundry"] as const;
type ValidSlug = (typeof validSlugs)[number];

export const services_data: Record<ValidSlug, any> = {
  crf: {
    title: "Cold Rolled Formed",
    oneLiner:
      "The Cold Rolled Formed (CRF) section produces high-precision steel profiles using advanced roll forming technology. It serves key industries like railways, solar, and infrastructure with sections up to 12 mm thick.",
    overview1:
      "We are the leading manufacturer of Cold Rolled Formed Sections & Steel Structures to cater the need of the major industries mainly Indian Railways for Coaches and Wagons, Sheet Pilings and Solar Projects.",
    overview2:
      "Cold Rolled Forming is a progressive motion process of gradually forming a flat strip of metal sheet through pairs of rolls to the desired profile without changing the thickness, at ambient temperatures. Cold-Rolled Forming can produce different cold formed steel sections like Z, C, Channels, Angles, Hat sections etc. The plant can produce sections from 1.2 mm - 10 mm in Stainless Steel and up to 12 mm in Mild Steel.",

    productsArr: [
      {
        title: "Sheet Piles",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-1.jpg",
        desc: "Cold formed steel sheet piles are time-tested solution for all types of earth retention requirements.",
        link: "/crf/sheet-piles",
      },
      {
        title: "Solar Module Mounting Solutions",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-2.jpg",
        desc: "N F FORGING'S Solar Module Mounting system includes everything you need for a simple and efficient PV installation.",
        link: "solar-module.html",
      },
      {
        title: "Wagon & Coaches",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-3.jpg",
        desc: "Our quality manufacturing has enabled us to effectively meet the desired standards our customers.",
        link: "wagon-coaches.html",
      },
      {
        title: "Pre Engineered Building",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-4.jpg",
        desc: "Cold formed members can be efficient on a weight basis relative to mill rolled sections for secondary member applications.",
        link: "pre-engineered-building.html",
      },
      {
        title: "Crash Barriers",
        categories: ["metel", "container"],
        image: "https://nfforging.com/images/ov-5.jpg",
        desc: "Metal Crash Barriers are an effective road safety measure to protect a vehicle and its occupants in case of an accident.",
        link: "crash-barriers.html",
      },
    ],
    keyPoints: [
      "High-strength, precision-engineered steel sections.",
      "Produces Z, C, Channel, Angle, and Hat profiles.",
      "Supports 1.2–10 mm SS and up to 12 mm MS thickness.",
      "Used in railways, solar, piling, and infrastructure.",
      "Custom profiles for structural and industrial needs.",
    ],
  },
  foundry: {
    title: "Foundry",
    oneLiner:
      "Our state-of-the-art foundry produces high-quality castings with precision, supporting critical industrial applications through robust infrastructure and stringent quality control.",
    overview1:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group which has been active for the last six decades in the field of Steel, Forgings, Seamless Tubes & Pipes, FRP – Fiber Reinforced Plastic and Transmission Components.",
    overview2:
      "Our A-Class foundry is equipped with advanced technologies and a production capacity of 300 MTs/month. We deliver castings with exceptional dimensional accuracy and surface finish, and are approved by RDSO – Indian Railways, BHEL, BEML, NTPC, and other PSUs.",

    productsArr: [
      {
        title: "Products",
        categories: ["casting", "industrial"],
        image: "https://nfforging.com/images/foundry-pro-img.jpg",
        desc: "We offer varius range of products to our prospective buyers",
        link: "foundry-products.html",
      },
      {
        title: "Infrastructure",
        categories: ["infrastructure", "automation"],
        image: "https://nfforging.com/images/infra-img.jpg",
        desc: "An automated High Pressure Molding Line with multi-piston fast loop facility",
        link: "infrastructure.html",
      },
      {
        title: "Quality Assurance",
        categories: ["quality", "standards"],
        image: "https://nfforging.com/images/quality-img.jpg",
        desc: "We shall strive for a continual quality improvement and comply with",
        link: "foundry-quality.html",
      },
    ],
    keyPoints: [
      "300 MT/month casting capacity with A-Class certification.",
      "Approved by RDSO, BHEL, BEML, NTPC and other PSUs.",
      "Equipped with advanced high-pressure molding technology.",
      "Expert team including metallurgists and engineers.",
      "High dimensional accuracy and superior surface finish.",
    ],
  },
};
export const sheetPiles_data = {
  title: "Steel Sheet Piles",
  // Icon:,
  oneLiner:
    "High-strength cold-formed steel sheet piles for reliable earth retention and structural support. Ideal for retaining walls, marine structures, and deep foundations.",
  image: "https://nfforging.com/images/sheet-piles-banner.jpg",
  para: "At NF Forgings, we manufacture high-quality cold rolled steel sheet piles that offer strength, durability, and design flexibility for retaining walls, foundations, and marine structures. Produced with precision in our state-of-the-art CRF division, our sheet piles meet stringent performance and safety standards.",
  para2:
    "Cold formed steel sheet piles are a time-tested solution for all types of earth retention requirements. The installation is simple, fast, and cost-effective. Although vibratory hammers are the most preferred installation tools, impact hammers and hydraulic presses can also be used for difficult locations where heavy vibratory hammers cannot reach.",

  section: {
    title: "Why Choose NF Forgings Sheet Piles?",
    points: [
      "Constant thickness over the whole section.",
      "Unlimited choice of sheet thickness.",
      "Wide range of steel grades are available.",
      "Re-usable.",
      "For bigger projects, we can make customized products, as required by the project.",
      "Corner sections can be supplied with pre-bent sheet piles.",
      "Quicker delivery period.",
      "For projects in very highly-corrosive environment, we can supply sheet piles with customized surface treatment coating or hot dip galvanizing, as the case may be.",
      "Handling hole can be punched on every sheet pile as per customers' requirement.",
    ],
  },

  typesOfProduct: [
    {
      title: "'Z' Type Sheet Piles Type - A",
      image: "https://nfforging.com/images/type-a.jpg", // Add actual image if available
      para: "'Z' type Sheet Piles have higher modulus of section and therefore, most suitable for bad soil conditions. These sheets can be put to repeated use.",
    },
    {
      title: "'Z' Type Sheet Piles Type - B",
      image: "https://nfforging.com/images/type-b.jpg", // Add actual image if available
      para: "'Z' type Sheet Piles (Type - B) have a conventional design; with high modulus of section and therefore, most suitable for extremely",
    },
    {
      title: "'U' Type Sheet Piles",
      image: "https://nfforging.com/images/type-u.jpg", // Add actual image if available
      para: "Since 'U' type sheet pile has equal cross section, it is more convenient to pile. 'U' type sheet piles are suggested for support usage.",
    },
    {
      title: "Trench Sheets",
      image: "https://nfforging.com/images/trench-cheets.jpg", // Add actual image if available
      para: "Trench Sheets are useful for projects where temporary earth retention is involved and the wall heights are not too demanding. ",
    },
  ],
};
export const fancyboxItems = [
  {
    icon: "icon-welding",
    title: "Powerfull Product<br> Strategy",
    desc: "Our facilities meet high security requirements and are certified to the highest local standards.",
  },
  {
    icon: "icon-checklist",
    title: "Award Winning <br>Projects",
    desc: "The world of international supply chains involves of unknown risks and challenging regulations.",
  },
  {
    icon: "icon-wrench5",
    title: "100% Satisfaction <br> Guarantee",
    desc: "Building relationships and projects that last. Serving an impressive clients.",
  },
];
export const teamMembers = [
  {
    name: "Richard Muldoone",
    role: "Legal Officer",
    image: "/images/team/4.png",
  },
  {
    name: "Maria Andaloro",
    role: "HR Officer",
    image: "/images/team/3.png",
  },
  {
    name: "Marian Chris",
    role: "Global Sales",
    image: "/images/team/5.png",
  },
  {
    name: "Jack Mudson",
    role: "Manager",
    image: "/images/team/1.png",
  },
];
