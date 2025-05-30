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
export const jobs = [
  {
    type: "Full Time",
    location: "Kolkata",
    title: "Production Engineer",
    desc: "Responsible for overseeing manufacturing processes, ensuring quality standards, and optimizing production efficiency.",
  },
  {
    type: "Full Time",
    location: "Kolkata",
    title: "Quality Assurance Supervisor",
    desc: "Leads the QA team to maintain product standards, conducts inspections, and implements quality control procedures.",
  },
  {
    type: "Full Time",
    location: "Kolkata",
    title: "Design Engineer",
    desc: "Develops and designs components and systems, collaborates with cross-functional teams to meet project requirements.",
  },
  {
    type: "Full Time",
    location: "Kolkata",
    title: "Logistics Manager",
    desc: "Manages supply chain operations, coordinates with vendors, and ensures timely delivery of materials and products.",
  },
  {
    type: "Full Time",
    location: "Kolkata",
    title: "Assistant Store Manager",
    desc: "Assists in managing inventory, supervises store operations, and ensures compliance with company policies.",
  },
];
export const contactDetails = {
  phone: "+91 33 4600 9083",
  email: "info@nfforging.com",
  address:
    "3rd Floor, NFF Office, 1st Cross Road, Near Railway Station, Kolkata - 700099",
};
export const highlightsData = [
  {
    icon: "icon1", // or any icon you use
    value: "25+",
    title: "Years of Experience",
    description:
      "With over a quarter century of industry expertise, NF Forgings has continually set benchmarks in engineering excellence through consistent innovation and a dedicated team.",
    linkText: "Learn More",
  },
  {
    icon: "icon2",
    value: "68+",
    title: "Projects Per Year",
    description:
      "Handling more than 68 projects annually, we bring precision, efficiency, and commitment to every client, ensuring timely and high-quality delivery across all sectors.",
    linkText: "Learn More",
  },
  {
    icon: "icon3",
    value: "500+",
    title: "Happy Clients",
    description:
      "Our success is measured by our clients’ satisfaction. Over 500 businesses trust us for reliable, high-performance engineering solutions tailored to their needs.",
    linkText: "Learn More",
  },
];
export const serviceArray = [
  {
    title: "Sheet Piles",
    imgSrc: "images/ov-1.jpg",
    description:
      "Cold formed steel sheet piles are time-tested solution for all types of earth retention requirements.",
  },
  {
    title: "Solar Module Mounting Solutions",
    imgSrc: "images/ov-2.jpg",
    description:
      "N F FORGING'S Solar Module Mounting system includes everything you need for a simple and efficient PV installation.",
  },
  {
    title: "Wagon & Coaches",
    imgSrc: "images/ov-3.jpg",
    description:
      "Our quality manufacturing has enabled us to effectively meet the desired standards our customers.",
  },
  {
    title: "Pre Engineered Building",
    imgSrc: "images/ov-4.jpg",
    description:
      "Cold formed members can be efficient on a weight basis relative to mill rolled sections for secondary member applications.",
  },
  {
    title: "Crash Barriers",
    imgSrc: "images/ov-5.jpg",
    description:
      "Metal Crash Barriers are an effective road safety measure to protect a vehicle and its occupants in case of an accident.",
  },
  {
    title: "Products",
    imgSrc: "images/foundry-pro-img.jpg",
    description: "We offer various range of products to our prospective buyers",
  },
  {
    title: "Infrastructure",
    imgSrc: "images/infra-img.jpg",
    description:
      "An automated High Pressure Molding Line with multi-piston fast loop facility",
  },
  {
    title: "Quality Assurance",
    imgSrc: "images/quality-img.jpg",
    description:
      "We shall strive for a continual quality improvement and comply with",
  },
];
export const aboutHighlights = [
  {
    icon: "sparkles", // replace with actual icon name you're using
    title: "25+ YEARS OF EXPERIENCE",
    description:
      "Delivering excellence through 25 years of industry expertise.",
    IconSvg: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_21_154)">
          <path
            d="M38.8164 14.0318L30.8918 12.8803L27.3478 5.69948C25.9795 2.92655 22.0213 2.92552 20.6524 5.69939L17.1084 12.8803L9.18379 14.0318C6.12379 14.4763 4.89989 18.2403 7.11482 20.3995L12.8491 25.9891L11.4955 33.8815C10.9727 36.929 14.1739 39.2563 16.9122 37.8171L24.0001 34.0906L31.0882 37.8171C33.8297 39.2582 37.0264 36.9221 36.5046 33.8815L35.151 25.9891L40.8854 20.3995C43.0995 18.2411 41.8776 14.4766 38.8164 14.0318Z"
            fill="currentColor"
          />
          <path
            d="M12.631 4.4206L10.7175 1.78698C10.198 1.07223 9.1974 0.913704 8.48265 1.43317C7.76781 1.95255 7.60937 2.95314 8.12874 3.66798L10.0423 6.3016C10.562 7.01672 11.5627 7.17469 12.2771 6.65541C12.9919 6.13613 13.1504 5.13545 12.631 4.4206Z"
            fill="currentColor"
          />
          <path
            d="M6.28092 28.0226C6.00783 27.1823 5.1054 26.722 4.26483 26.9954L1.10594 28.0218C0.265562 28.2947 -0.194281 29.1974 0.0787184 30.0379C0.35228 30.8799 1.25659 31.3378 2.09481 31.0651L5.2538 30.0387C6.09418 29.7658 6.55402 28.863 6.28092 28.0226Z"
            fill="currentColor"
          />
          <path
            d="M39.5174 1.4332C38.8026 0.913731 37.802 1.07217 37.2825 1.78701L35.369 4.42063C34.8495 5.13547 35.0081 6.13616 35.7229 6.65544C36.438 7.175 37.4385 7.01619 37.9577 6.30163L39.8713 3.66801C40.3907 2.95316 40.2322 1.95257 39.5174 1.4332Z"
            fill="currentColor"
          />
          <path
            d="M46.8941 28.0219L43.7351 26.9954C42.8947 26.7219 41.9921 27.1823 41.719 28.0227C41.4459 28.863 41.9058 29.7656 42.7462 30.0387L45.9052 31.0652C46.7439 31.338 47.6479 30.8795 47.9213 30.038C48.1943 29.1976 47.7345 28.295 46.8941 28.0219Z"
            fill="currentColor"
          />
          <path
            d="M24 40.4255C23.1164 40.4255 22.4 41.1419 22.4 42.0255V45.2728C22.4 46.1564 23.1164 46.8727 24 46.8727C24.8836 46.8727 25.5999 46.1564 25.5999 45.2728V42.0255C25.6 41.1419 24.8836 40.4255 24 40.4255Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_21_154">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    icon: "file-text", // replace with your actual icon
    title: "68+ PROJECTS PER YEAR",
    description:
      "Consistently managing 60+ projects annually with precision and quality.",
    IconSvg: (
      <svg
        width="49"
        height="48"
        viewBox="0 0 49 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.1813 1.5H14.1813C10.0398 1.5 6.68127 4.8585 6.68127 9V34.5C6.68127 38.6415 10.0398 42 14.1813 42H30.6813V37.3335C28.8288 35.439 27.6813 32.8515 27.6813 30C27.6813 24.21 32.3928 19.5 38.1813 19.5C38.6913 19.5 39.1893 19.5495 39.6813 19.62V9C39.6813 4.8585 36.3228 1.5 32.1813 1.5ZM21.9513 34.5H14.1813C13.3518 34.5 12.6813 33.828 12.6813 33C12.6813 32.172 13.3518 31.5 14.1813 31.5H21.9513C22.7808 31.5 23.4513 32.172 23.4513 33C23.4513 33.828 22.7808 34.5 21.9513 34.5ZM22.3113 27H14.1813C13.3518 27 12.6813 26.328 12.6813 25.5C12.6813 24.672 13.3518 24 14.1813 24H22.3113C23.1408 24 23.8113 24.672 23.8113 25.5C23.8113 26.328 23.1408 27 22.3113 27ZM26.8563 19.5H14.1813C13.3518 19.5 12.6813 18.828 12.6813 18C12.6813 17.172 13.3518 16.5 14.1813 16.5H26.8563C27.6858 16.5 28.3563 17.172 28.3563 18C28.3563 18.828 27.6858 19.5 26.8563 19.5ZM32.1813 12H14.1813C13.3518 12 12.6813 11.328 12.6813 10.5C12.6813 9.672 13.3518 9 14.1813 9H32.1813C33.0108 9 33.6813 9.672 33.6813 10.5C33.6813 11.328 33.0108 12 32.1813 12Z"
          fill="currentColor"
        />
        <path
          d="M38.1813 40.5001C36.5688 40.5001 35.0463 40.1251 33.6813 39.4756V44.9971C33.6813 46.1956 35.0163 46.9096 36.0138 46.2451L38.1813 44.7991L40.3488 46.2451C41.3463 46.9096 42.6813 46.1956 42.6813 44.9971V39.4756C41.3163 40.1251 39.7938 40.5001 38.1813 40.5001Z"
          fill="currentColor"
        />
        <path
          d="M38.1813 37.5C42.3234 37.5 45.6813 34.1421 45.6813 30C45.6813 25.8579 42.3234 22.5 38.1813 22.5C34.0391 22.5 30.6813 25.8579 30.6813 30C30.6813 34.1421 34.0391 37.5 38.1813 37.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    icon: "box", // box or package icon
    title: "23K+ PRODUCTS PER MONTH",
    description: "Manufacturing over 23,000 high-quality products every month.",
    IconSvg: (
      <svg
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_21_195)">
          <path
            d="M20.6239 22.2619C21.2874 22.5396 21.9755 22.7541 22.6793 22.9025V48.3147C22.2477 48.2034 21.8276 48.0515 21.4247 47.8609L5.40865 40.7337C3.99451 40.1042 2.79312 39.0784 1.94985 37.7803C1.10659 36.4823 0.657603 34.9676 0.657227 33.4197V15.6419C0.659349 14.9289 0.758124 14.2196 0.950854 13.5331L20.6239 22.2619ZM32.2088 16.3093L10.4537 6.08567L5.40865 8.32792C4.49879 8.72786 3.67417 9.29875 2.97955 10.0096L22.2255 18.5782C22.9987 18.9214 23.8353 19.0987 24.6813 19.0987C25.5273 19.0987 26.3638 18.9214 27.1371 18.5782L32.2088 16.3093ZM46.383 10.0096C45.6884 9.29875 44.8638 8.72786 43.9539 8.32792L27.9379 1.20078C26.9143 0.73888 25.8042 0.5 24.6813 0.5C23.5583 0.5 22.4482 0.73888 21.4247 1.20078L15.3119 3.92351L37.067 14.1471L46.383 10.0096ZM48.4117 13.5331L39.0423 17.6973V24.2372C39.0423 24.7682 38.8314 25.2774 38.456 25.6528C38.0805 26.0283 37.5713 26.2392 37.0403 26.2392C36.5094 26.2392 36.0002 26.0283 35.6247 25.6528C35.2493 25.2774 35.0383 24.7682 35.0383 24.2372V19.4591L28.7387 22.2619C28.0709 22.5276 27.3838 22.7417 26.6833 22.9025V48.3147C27.1149 48.2034 27.535 48.0515 27.9379 47.8609L43.9539 40.7337C45.3681 40.1042 46.5695 39.0784 47.4127 37.7803C48.256 36.4823 48.705 34.9676 48.7054 33.4197V15.6419C48.7032 14.9289 48.6045 14.2196 48.4117 13.5331Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_21_195">
            <rect
              width="48"
              height="48"
              fill="currentColor"
              transform="translate(0.681274 0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    icon: "users", // user group icon
    title: "500+ SATISFIED CLIENTS",
    description: "Trusted by 500+ satisfied clients across various industries.",
    IconSvg: (
      <svg
        width="49"
        height="49"
        viewBox="0 0 49 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5113 31.64C15.1813 33.47 13.6813 36.31 13.6813 39.5V42.5H7.68127C6.02127 42.5 4.68127 41.16 4.68127 39.5V37.5C4.68127 33.63 7.81127 30.5 11.6813 30.5H13.6813C15.1013 30.5 16.4113 30.92 17.5113 31.64Z"
          fill="currentColor"
        />
        <path
          d="M36.6813 30.5C39.1666 30.5 41.1813 28.4853 41.1813 26C41.1813 23.5147 39.1666 21.5 36.6813 21.5C34.196 21.5 32.1813 23.5147 32.1813 26C32.1813 28.4853 34.196 30.5 36.6813 30.5Z"
          fill="currentColor"
        />
        <path
          d="M12.6813 30.5C15.1666 30.5 17.1813 28.4853 17.1813 26C17.1813 23.5147 15.1666 21.5 12.6813 21.5C10.196 21.5 8.18127 23.5147 8.18127 26C8.18127 28.4853 10.196 30.5 12.6813 30.5Z"
          fill="currentColor"
        />
        <path
          d="M44.6813 37.5V39.5C44.6813 41.16 43.3413 42.5 41.6813 42.5H35.6813V39.5C35.6813 36.31 34.1813 33.47 31.8513 31.64C32.9513 30.92 34.2613 30.5 35.6813 30.5H37.6813C41.5513 30.5 44.6813 33.63 44.6813 37.5Z"
          fill="currentColor"
        />
        <path
          d="M24.6813 31.5C27.7188 31.5 30.1813 29.0376 30.1813 26C30.1813 22.9624 27.7188 20.5 24.6813 20.5C21.6437 20.5 19.1813 22.9624 19.1813 26C19.1813 29.0376 21.6437 31.5 24.6813 31.5Z"
          fill="currentColor"
        />
        <path
          d="M25.6813 31.5H23.6813C19.2703 31.5 15.6813 35.089 15.6813 39.5V42.5C15.6813 44.154 17.0273 45.5 18.6813 45.5H30.6813C32.3353 45.5 33.6813 44.154 33.6813 42.5V39.5C33.6813 35.089 30.0923 31.5 25.6813 31.5Z"
          fill="currentColor"
        />
        <path
          d="M39.1813 17.184L36.7683 18.042C36.0833 18.285 35.3683 17.766 35.3883 17.039L35.4583 14.479L33.8963 12.449C33.4533 11.873 33.7263 11.032 34.4233 10.826L36.8803 10.102L38.3283 7.98904C38.7393 7.39004 39.6233 7.39004 40.0343 7.98904L41.4823 10.102L43.9393 10.826C44.6363 11.031 44.9093 11.873 44.4663 12.449L42.9043 14.479L42.9743 17.039C42.9943 17.765 42.2783 18.285 41.5943 18.042L39.1813 17.184Z"
          fill="currentColor"
        />
        <path
          d="M10.1813 17.184L7.76827 18.042C7.08327 18.285 6.36827 17.766 6.38827 17.039L6.45827 14.479L4.89627 12.449C4.45327 11.873 4.72627 11.032 5.42327 10.826L7.88027 10.102L9.32827 7.98904C9.73927 7.39004 10.6233 7.39004 11.0343 7.98904L12.4823 10.102L14.9393 10.826C15.6363 11.031 15.9093 11.873 15.4663 12.449L13.9043 14.479L13.9743 17.039C13.9943 17.765 13.2783 18.285 12.5943 18.042L10.1813 17.184Z"
          fill="currentColor"
        />
        <path
          d="M24.6813 14.934L21.8203 15.951C21.0083 16.24 20.1603 15.623 20.1843 14.762L20.2673 11.727L18.4153 9.32003C17.8903 8.63703 18.2143 7.64003 19.0403 7.39603L21.9533 6.53703L23.6703 4.03203C24.1573 3.32103 25.2063 3.32103 25.6933 4.03203L27.4103 6.53703L30.3233 7.39603C31.1493 7.64003 31.4733 8.63703 30.9483 9.32003L29.0963 11.727L29.1793 14.762C29.2033 15.623 28.3543 16.24 27.5433 15.951L24.6813 14.934Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];
