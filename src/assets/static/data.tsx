import {
  AtomIcon,
  Award,
  BadgeCheckIcon,
  BoxIcon,
  Building2,
  Check,
  ClockIcon,
  CogIcon,
  Construction,
  ConstructionIcon,
  EarthIcon,
  ExpandIcon,
  Factory,
  FactoryIcon,
  FanIcon,
  Flame,
  FlaskConical,
  FlaskConicalIcon,
  FolderLock,
  GaugeCircleIcon,
  Globe,
  Hammer,
  HammerIcon,
  HardDrive,
  LayersIcon,
  LocateFixed,
  Medal,
  Microscope,
  MicroscopeIcon,
  PackageCheck,
  PackageCheckIcon,
  Paintbrush2,
  Ruler,
  RulerDimensionLine,
  RulerIcon,
  SearchCheckIcon,
  Settings,
  Settings2,
  SettingsIcon,
  ShieldAlertIcon,
  ShieldCheck,
  ShieldCheckIcon,
  Ship,
  SparklesIcon,
  TrainFront,
  TrainFrontIcon,
  Truck,
  WeightIcon,
  Wrench,
  WrenchIcon,
} from "lucide-react";
import { Milestone, ServiceData, ServiceName } from "./types";
import { time } from "console";

const validSlugs = ["crf", "foundry", "fabrication"] as const;
type ValidSlug = (typeof validSlugs)[number];

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
    name: "Murari Lal Dhanuka",
    role: "Founder",
    image: "/images/team/Lalbaba-2.jpg",
  },
  {
    name: "Mahesh Dhanuka",
    role: "Director",
    image: "/images/team/Picture1.jpg",
  },
  {
    name: "Kishan Dhanuka",
    role: "Director",
    image: "/images/team/Picture2.png",
  },
  {
    name: "Narayan Dhanuka",
    role: "Director",
    image: "/images/team/Picture3.jpg",
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
        <g clipPath="url(#clip0_21_154)">
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
        <g clipPath="url(#clip0_21_195)">
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
export const CareForPeople_stand = [
  {
    iconSrc: "/images/careers/balance.png",
    title: "Human Rights Commitment",
    para: "We respect and protect human  rights both within and outside  the workplace through the  implementation of  relationship framework.",
  },
  {
    iconSrc: "/images/careers/labour.png",
    title: "Workplace Safety Training",
    para: "All workmen on the shop floor  are required to undergo  workplace safety training to  ensure prevention of unsafe acts.",
  },
];

export const opotunityList = [
  {
    iconSrc: "/images/careers/medal.png",
    para: "Performance based reward system is  implemented for incentivizing the  best performing employees",
  },

  {
    iconSrc: "/images/careers/adhd.png",
    para: "Imparted product training,  behavioural training, functional training and personality  training",
  },
  {
    iconSrc: "/images/careers/productivity.png",
    para: "Performance Improvement Plan helps  our employees reach desired  productivity levels through specific  project work and close guidance",
  },

  {
    iconSrc: "/images/careers/togetherness.png",
    para: "Celebrating days of national and  international importance like  Christmas, Diwali, Bengali New  Year, Women’s Day and  conducting events focussed on  team building and career  guidance",
  },
  {
    iconSrc: "/images/careers/compliant.png",
    para: "Employees Benefits and Policy",
  },
];
export const milestones: Milestone[] = [
  {
    year: "1964",
    title: "LALBABA INDUSTRIAL CORPORATION",
    description: "Commenced operations at Belur, West Bengal",
    isLeft: true,
  },
  {
    year: "1972",
    title: "Railway Market Entry",
    description:
      "Entered the Railways market as a supplier of rolling stock products",
    isLeft: false,
  },
  {
    year: "1982",
    title: "NF FORGINGS PVT LTD",
    description:
      "Set up a manufacturing unit for casting Cold Rolled Formed and Fabrications as NF FORGINGS PVT LTD, SANKRAIL (Unit 1)",
    isLeft: true,
  },
  {
    year: "1991",
    title: "Air Brake Components",
    description:
      "PEW Pvt. Ltd. commenced operations for supplying Air Brake components to Indian Railways",
    isLeft: false,
  },
  {
    year: "2002",
    title: "FRP & Paints Catering",
    description:
      "MACEDON VINIMAY PVT. LTD setup in SODEPUR first of its kind state-of-art of FRP & Paints Catering to power sector and Railway sector",
    isLeft: true,
  },
  {
    year: "2009",
    title: "Seamless Pipes Innovation",
    description:
      "LALBABA SEAMLESS TUBES PVT. LTD was set up in Haldia, West Bengal, a first of its kind state-of-art seamless pipes unit in Eastern India",
    isLeft: false,
  },
  {
    year: "2018",
    title: "Retro Fitment Services",
    description:
      "NF Forgings Pvt. Limited Started Retro fitment, refurbishment, epic, upgradation of rolling stock at Indian railway site",
    isLeft: true,
  },
  {
    year: "2021",
    title: "NAIHATI Expansion",
    description: "NF Forgings Pvt. Limited established unit 2 at NAIHATI",
    isLeft: false,
  },
  {
    year: "2023",
    title: "TULSIBERIA Growth",
    description: "NF Forgings Pvt. Limited established unit 3 at TULSIBERIA",
    isLeft: true,
  },
];
// service data
export const services_data: Record<ServiceName, ServiceData> = {
  crf: {
    title: "Cold Rolled Formed",
    bannerImg: "/images/crf-banner.jpg",
    highlights: [
      {
        Icon: <FactoryIcon />,
        title: "3000 metric tons per month",
        para: "Our factory’s CRF production capacity",
      },
      {
        Icon: <MicroscopeIcon />,
        title: "Lab facilities are NABH approved",
        para: "Our QA is compliant with standards and open to testing by required agencies",
      },
      {
        Icon: <SettingsIcon />,
        title: "9 CRF mills",
        para: "Our strength lies in the 9 facilitated Mills ready for all production demands",
      },
    ],
    oneLiner:
      "The Cold Rolled Formed (CRF) section produces high-precision steel profiles using advanced roll forming technology. It serves key industries like railways, solar, and infrastructure with sections up to 12 mm thick.",
    overview1:
      "We are a premier manufacturer of Cold Rolled Formed Sections and Steel Structures, dedicated to delivering high-precision components for critical industries including Indian Railways, infrastructure development, and solar energy projects.",
    overview2:
      "Our manufacturing process leverages advanced roll forming techniques to shape flat metal strips into complex profiles with consistent accuracy and structural integrity. With a focus on quality, efficiency, and customization, we offer solutions tailored to the evolving demands of modern engineering and construction.",
    productsSectionHeading: {
      heading: "Our CRF Division Products",
      subHeading:
        "Engineered steel solutions for railways, infrastructure, solar, and safety applications.",
    },
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
      "Over 60 years of industrial expertise since 1964.",
      "Multiple manufacturing facilities across West Bengal.",
      "Preferred supplier to Indian Railways and leading OEMs.",
      "Diverse product applications: Railways, Fertilizers, LNG, Infrastructure, and Renewable Energy.",
      "Executing EPC, refurbishment, and rolling stock upgrades on-site.",
    ],
  },
  foundry: {
    title: "Foundry",
    bannerImg: "/images/service/foundry-banner.jpg",
    oneLiner:
      "Our state-of-the-art foundry produces high-quality castings with precision, supporting critical industrial applications through robust infrastructure and stringent quality control.",
    highlights: [
      {
        Icon: <Flame />,
        title: "300 MT/Month Casting Capacity",
        para: "High-volume, precision casting production powered by automated high-pressure molding technology and expert metallurgical supervision.",
      },
      {
        Icon: <Award />,
        title: "RDSO & PSU Approved",
        para: "Recognized by top public sector units including BHEL, NTPC, BEML for exceptional casting standards and dimensional accuracy.",
      },
      {
        Icon: <Microscope />,
        title: "Advanced Foundry Infrastructure",
        para: "State-of-the-art facilities equipped with multi-piston fast loop molding lines and stringent in-house quality controls.",
      },
    ],

    overview1:
      "The foundry at N F Forgings is a recent addition to the Eastern India based Lalbaba group which has been active for the last six decades in the field of Steel, Forgings, Seamless Tubes & Pipes, FRP – Fiber Reinforced Plastic and Transmission Components.",
    overview2:
      "Our A-Class foundry is equipped with advanced technologies and a production capacity of 300 MTs/month. We deliver castings with exceptional dimensional accuracy and surface finish, and are approved by RDSO – Indian Railways, BHEL, BEML, NTPC, and other PSUs.",
    productsSectionHeading: {
      heading: "Our Foundry Division Products",
      subHeading:
        "High-quality castings engineered with precision and approved by top public sector units across India.",
    },
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
  fabrication: {
    title: "Fabrication",
    bannerImg: "/images/service/fabrication-banner.jpg",
    oneLiner:
      "Precision fabrication for large-scale infrastructure, container systems, and railway projects—powered by advanced CNC and QA-certified execution.",
    highlights: [
      {
        Icon: <TrainFront />,
        title: "500+ Wagons Fabricated Monthly",
        para: "High-volume, quality-driven manufacturing of railway wagons under Ministry of Railways contracts.",
      },
      {
        Icon: <Hammer />,
        title: "Advanced CNC & Automation",
        para: "Equipped with CNC presses, profile cutters, and automated welding for high-precision fabrication.",
      },
      {
        Icon: <Medal />,
        title: "Trusted by Global EPC Leaders",
        para: "Executed projects with Technip, MECON, TUV & IIT-Kanpur, maintaining global QA and certification standards.",
      },
    ],

    overview1:
      "Our Fabrication Division is equipped with a highly skilled workforce and advanced machinery, enabling us to undertake complex engineering fabrication projects. With a commitment to superior workmanship and precision, we have consistently delivered large-scale projects under stringent quality standards and reputed global certifications.",

    sections: [
      {
        title: "Key Projects Executed",
        content: {
          list: [
            {
              Icon: <Building2 />,
              title: "NRL Expansion at Numaligarh",
              para: "Executed over 10,000 MT of fabrication work under the strict supervision of Technip Energies, IR Class, and TUV.",
            },
            {
              Icon: <Ship />,
              title: "ISO Shipping Containers for DP World & Concor",
              para: "Delivered custom-designed ISO containers for efficient logistics handling and enhanced volumetric capacity.",
            },
            {
              Icon: <Hammer />,
              title: "Floating CNC Station for Ravidas Ghat, Varanasi",
              para: "Fabrication executed under the guidance of MECON and IIT Kanpur for advanced riverfront infrastructure.",
            },
            {
              Icon: <TrainFront />,
              title: "Wagon Manufacturing for Indian Railways",
              para: "Currently producing over 500 wagons monthly across multiple factories under Ministry of Railways contracts.",
            },
          ],
        },
      },
      {
        title: "Infrastructure & Capabilities",
        content: {
          list: [
            {
              Icon: <Ruler />,
              title: "Facility Area",
              list: [
                {
                  title: "Covered Area",
                  para: "4+ Lakh Sq. Ft.",
                },
                {
                  title: "Open Area",
                  para: "1+ Lakh Sq. Ft.",
                },
              ],
            },
            {
              Icon: <Settings />,
              title: "CNC Machines",
              list: [
                {
                  title: "CNC Profile Cutting Machines",
                  para: "3 units (Hypertherm / Lincoln Source)",
                },
                {
                  title: "CNC Press Brakes",
                  para: "2 units + 1 unit of 12Mtr",
                },
                {
                  title: "CNC Drill Machine",
                  para: "Up to 120mm, 2.5Mtr x 6Mtr Bed",
                },
              ],
            },
            {
              Icon: <HardDrive />,
              title: "Machinery & Equipment",
              list: [
                {
                  title: "Welding Equipment",
                  para: "Searing Machines, Pull Through Welding Machines",
                },
                {
                  title: "Beam & Surface Preparation",
                  para: "Beam Straightening Machine, Automated Shot Blasting Machines",
                },
                {
                  title: "Finishing Systems",
                  para: "Painting Booth, GMAW, SAW Systems",
                },
                {
                  title: "Material Processing",
                  para: "Plate Slitting cum Shearing Line",
                },
                {
                  title: "Material Handling",
                  para: "EOTs, Hydra, Farana",
                },
              ],
            },
          ],
        },
      },
    ],
    keyPoints: [
      "Over 500+ wagons produced monthly for Indian Railways.",
      "Successfully executed 10,000+ MT project for NRL.",
      "Expertise in ISO container fabrication with complete in-house design and FEM.",
      "Strong collaborations with reputed organizations like Technip, TUV, MECON, and IIT-Kanpur.",
      "State-of-the-art CNC machines and automated fabrication capabilities.",
      "5+ lakh sq. ft. of combined covered and open fabrication area.",
    ],
  },
  services: {
    title: "Our Services",
    bannerImg: "/images/service/ourservices.jpg",
    oneLiner:
      "Cutting-edge fabrication and engineering services for India's core infrastructure sectors.",
    highlights: [
      {
        Icon: <Factory />,
        title: "Robust Engineering Legacy",
        para: "Over 25 years of delivering foundry, forming, and fabrication solutions powered by precision and people.",
      },
      {
        Icon: <PackageCheck />,
        title: "Turnkey Solutions Across Sectors",
        para: "From design to commissioning, we provide comprehensive project execution in infrastructure, transportation, and renewable energy.",
      },
      {
        Icon: <ShieldCheck />,
        title: "Certified for Quality & Safety",
        para: "Endorsed by ISO, RDSO, and BIS, we meet the highest standards for industrial manufacturing and compliance.",
      },
    ],
    overview1:
      "At NF Forgings, we deliver cutting-edge fabrication and engineering services both within our advanced manufacturing facilities and directly at client locations. Our agile execution model enables faster, scalable, and high-precision delivery of large industrial components—reinforcing our role as a trusted partner to India’s core infrastructure sectors.",
    keyPoints: [
      "Heavy structural fabrication",
      "Precision machining of components",
      "Assembly and testing of industrial equipment",
      "Surface treatment, painting, and finishing",
    ],
    sections: [
      {
        title: "Core Capabilities",
        content: {
          list: [
            {
              Icon: <Construction />,
              title: "Heavy Structural Fabrication",
            },
            {
              Icon: <Wrench />,
              title: "Precision Machining of Components",
            },
            {
              Icon: <Settings2 />,
              title: "Assembly and Testing of Industrial Equipment",
            },
            {
              Icon: <Paintbrush2 />,
              title: "Surface Treatment, Painting, and Finishing",
            },
          ],
        },
      },
      {
        title: "On-Site Manufacturing & Assembly",
        content: {
          list: [
            {
              Icon: <PackageCheck />,
              title: "ISO Shipping Containers",
              list: [
                {
                  title: "Scope",
                  para: "Design, prototyping, and scaled production",
                },
                {
                  title: "Execution",
                  para: "Conducted directly at client’s premises",
                },
                {
                  title: "Benefits",
                  para: "Real-time quality checks, logistics optimization, and faster turnaround",
                },
              ],
            },
            {
              Icon: <Truck />,
              title: "Freight Wagon Fabrication",
              list: [
                {
                  title: "Scope",
                  para: "Development and assembly of complete freight wagons",
                },
                {
                  title: "Special Focus",
                  para: "New-age, high-speed freight car prototypes",
                },
                {
                  title: "Process",
                  para: "On-site fabrication, welding, testing, and quality certification",
                },
              ],
            },
          ],
        },
      },
      {
        title: "Strategic & Confidential Projects",
        content: {
          para: "We are engaged in large-scale, specialized engineering projects under strict non-disclosure agreements.",
          list: [
            {
              Icon: <FolderLock />,
              title: "Mission-Critical Infrastructure Prototypes",
            },
            {
              Icon: <LocateFixed />,
              title: "Mobile Manufacturing at Partner Sites",
            },
            {
              Icon: <FlaskConical />,
              title: "Advanced R&D Collaborations with Industry Leaders",
            },
          ],
        },
      },
      {
        title: "Committed to the Make in India Vision",
        content: {
          para: "NF Forgings proudly contributes to the Make in India initiative by driving local innovation, domestic production, and self-reliant manufacturing. We execute complex engineering projects within Indian borders and at client sites—helping reduce import dependence and enabling world-class infrastructure development.",
          list: [
            {
              Icon: <Globe />,
              title: "Make in India Aligned",
              para: "Focused on local innovation and reducing import dependency.",
            },
          ],
        },
      },
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
  highlights: [
    {
      Icon: <RulerIcon />,
      title: "1 to 10 mm",
      para: "Our steel sheet thickness rolling capacity",
    },
    {
      Icon: <ExpandIcon />,
      title: "1250 mm",
      para: "Maximum input steel width",
    },
    {
      Icon: <RulerDimensionLine />,
      title: "18 meters",
      para: "Maximum output length",
    },
  ],
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
  typesOfProductHeading: {
    heading: "Types of Steel Sheet Piles",
    subHeading:
      "Engineered for strength, reuse, and adaptability across diverse soil and structural conditions.",
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
export const manufacturingLocationsArr = [
  {
    companyName: "LALBABA METALLICS PVT. LTD.",
    products: ["Cold Roll Formation (CRF)"],
    location: "Naihati, West Bengal",
    establishedYear: 2022,
  },
  {
    companyName: "NF FORGINGS PVT. LTD.",
    products: ["Foundry fabrication Formation"],
    location: "Naihati, Dhulagarh, Tulsiberia, West Bengal",
    establishedYear: 1982,
  },
  {
    companyName: "LALBABA PROJECTS PVT. \n LTD.",
    products: ["Retrofitment", "EPC refurbishment of Rolling stock"],
    location: "Belur, West Bengal",
    establishedYear: 2017,
  },
  {
    companyName: "LALBABA SEAMLESS TUBES PVT. \n LTD.",
    products: ["Seamless tube", "MS & SS Pipes", "Boiler Pipe"],
    location: "Haldia, West Bengal",
    establishedYear: 2006,
  },

  {
    companyName: "MACEDON VINIMAY PVT. LTD.",
    products: ["Fiver inforce plastics", "Paints for power and railway sector"],
    location: "Sodpur, West Bengal",
    establishedYear: 2002,
  },

  {
    companyName: "RAILEX ENGINEERING PVT. LTD.",
    products: ["Triangular Cock", "Bush washer", "Other Railway component"],
    location: "Howrah, West Bengal",
    establishedYear: 2020,
  },
  {
    companyName: "PEW ENGINEERING PVT. LTD.",
    products: [
      "Air break pipe",
      "Hose coupling",
      "Cut off angel cocks",
      "Check valves",
      "Various railway brake equipment part",
    ],
    location: "Howrah, West Bengal",
    establishedYear: 1991,
  },
  {
    companyName: "LALBABA INDUSTRIAL CORPORATION PVT LTD",
    products: [
      "Closed Die Forgings",
      "Pole Rod Push Rod",
      "Equalizing Livers",
      "Bally Bridge Forge Component",
      "Heat resistance great bar",
      "Machining railway product",
    ],
    location: "Naihati, West Bengal",
    establishedYear: 1967,
  },
];
export const solarMounting_data = {
  title: "Solar Module Mounting Structure",
  // Icon:,
  oneLiner:
    "Pre-engineered, corrosion-resistant solar mounting systems tailored for fast, safe, and versatile PV installations.",
  image: "/images/service/solar-module-stucture.jpg", // Replace with actual image URL
  para: `NF’s Solar Module Mounting System offers a complete solution for streamlined and efficient photovoltaic (PV) installations. Designed specifically for flush-mount applications, every component of the system is engineered with the installer in mind. The system includes pre-assembled module clamps, precision-cut rails, and custom wire clips—ensuring a clean, reliable, and aesthetically appealing installation.`,
  para2: `Each system is tailored by N F FORGING’S in-house design team to meet the unique requirements of the job site. This customized approach ensures optimal system performance, accelerated installation times, and maximum return on investment while maintaining full compliance with safety and code standards.`,

  highlights: [
    {
      Icon: <ClockIcon />,
      title: "Time-Saving, Pre-Engineered System",
      para: "All key components are factory-assembled or preset, allowing for rapid, tool-minimal installation on-site.",
    },
    {
      Icon: <ShieldCheckIcon />,
      title: "Engineered for Extreme Durability",
      para: "Anodized aluminum and stainless steel construction ensures the system withstands corrosion, weather, and mechanical stress over time.",
    },
    {
      Icon: <LayersIcon />,
      title: "Multi-Roof Compatibility",
      para: "Designed to adapt across a wide variety of roof types without the need for structural changes.",
    },
  ],

  section: {
    title: "Why Choose NF Forgings Solar Mounting System?",
    points: [
      "Corrosion-Resistant Components",
      "Durable Stainless Steel Hardware",
      "Pre-Installed Components",
      "Color Customization: Black anodized finishes to match aesthetic preferences",
      "Optimized Rail Lengths",
      "Tool-Free Rail Setup",
      "Certified Grounding Compatibility from WEEB",
      "Integrated Wire Management System",
      "Industry-Certified Attachments",
    ],
  },
};
export const preEngineeredBuildings_data = {
  title: "Pre Engineered Buildings",
  // Icon:,
  oneLiner:
    "Engineered cold-formed purlins designed for strength, precision, and compatibility across industrial roofing systems.",
  image: "/images/service/pre-eng-building.jpg", // Replace with actual banner if available
  para: `In steel construction, Purlins are structural members that run parallel to the building eave and support roof decking or sheeting. These essential components, most commonly used in Metal Building Systems, are supported by rafters or walls and are critical for maintaining structural integrity.`,
  para2: `At NF Forgings, our purlins are cold-formed in Z, C, and U shapes to ensure flexural continuity, stability, and ease of construction. Designed with optimum profiles and cut to length with pre-punched holes, they offer faster installations and less on-site waste. Manufactured from high-strength steel and protected through galvanization or painting, our purlins offer long-lasting, low-maintenance performance.`,

  // highlights: [
  //   {
  //     Icon: <WeightIcon />,
  //     title: "Lightweight Yet High Strength",
  //     para: "Delivers excellent strength-to-weight ratio, reducing load on primary supports.",
  //   },
  //   {
  //     Icon: <ConstructionIcon />,
  //     title: "Cold-Formed for Enhanced Performance",
  //     para: "Yield strength and structural safety are maximized through cold-forming processes.",
  //   },
  //   {
  //     Icon: <WrenchIcon />,
  //     title: "Pre-Punched & Custom-Cut",
  //     para: "Ready-to-install sections reduce site work, rework, and installation time.",
  //   },
  // ],

  section: {
    title: "Why Choose NF Forgings PEB Structures?",
    points: [
      "Lightweight Yet High Strength: Delivers excellent strength-to-weight ratio, reducing load on primary supports.",
      "Cold-Formed for Enhanced Performance: Yield strength and structural safety are maximized through cold-forming processes.",
      "Low-Maintenance and Durable: Galvanized or painted finishes ensure resistance to corrosion with minimal upkeep.",
      "Pre-Punched & Custom-Cut: Ready-to-install sections reduce site work, rework, and installation time.",
      "Optimized Engineering: Designed to match exact specifications, ensuring structural precision and efficiency.",
      "Versatile Application Compatibility: Supports a wide range of roof types—composition, tile, S-tile, and standing seam systems.",
      "Wire Management Ready: Comes with stainless steel clips for organized and secure wire routing.",
      "PV System Ready: Compatible with Quick Mount PV-certified attachments for solar mounting integration.",
      "Trusted Across Industries: Widely used in Power, Cement, Steel, Metallurgy, Airports, Automobiles, and Textile sectors.",
    ],
  },
};
export const railwayWagonCoaches_data = {
  title: "Railway Wagon and Coaches",
  // Icon:,
  oneLiner:
    "Certified, high-precision components for railway wagons and coaches — meeting the standards of EMUs, Metros, and IFC stainless steel models.",
  image: "/images/service/railwy-couches.jpg", // Replace with actual banner if available
  para: `NF Forgings is a trusted manufacturer of high-precision components for both railway wagons and passenger coaches. With a strong emphasis on quality, compliance, and innovation, we continuously enhance our manufacturing capabilities to meet the evolving standards of the railway industry.`,
  para2: `Our certified facilities—approved by RDSO and RITES—support a wide range of components for wagon assemblies and coach applications, including EMUs, MUs, metro coaches, and the latest stainless steel IFC models. We serve major public and private sector undertakings like BEML and IFC, ensuring safe, reliable, and timely delivery of critical railway components.`,

  highlights: [
    {
      Icon: <TrainFrontIcon />,
      title: "Wagon & Coach Manufacturing",
      para: "Proven expertise in producing components for freight wagons and passenger coaches including EMU, MU, and Metro types.",
    },
    {
      Icon: <BadgeCheckIcon />,
      title: "RDSO & RITES Certified Facilities",
      para: "All production units are certified to meet stringent railway industry standards.",
    },
    {
      Icon: <ShieldCheckIcon />,
      title: "Stainless Steel IFC Supply",
      para: "Key supplier of stainless steel coach components under the IFC initiative, recognized for durability and safety.",
    },
  ],

  section: {
    title: "Why Choose NF Forgings for Railway Applications?",
    points: [
      {
        title: "Comprehensive Component Manufacturing:",
        para: "Proven expertise in producing individual and assembly components for both freight wagons and passenger coaches.",
      },
      {
        title: "RDSO & RITES Certified Facilities:",
        para: "All production units are certified to meet stringent railway industry standards.",
      },
      {
        title: "Stainless Steel Coach Supply for IFC:",
        para: "Leading supplier of stainless steel coach components under the IFC initiative—recognized for durability, safety, and performance.",
      },
      {
        title: "Metro & EMU Coach Capabilities:",
        para: "Specialized infrastructure for EMU, MU, and Metro coach production for IFC and PSUs like BEML.",
      },
      {
        title: "Material Range and Grades:",
        para: "Offers CR, HR, and galvanized steel in various finishes—bare, primer coated, pre-galvanized, and hot-dip galvanized.",
      },
    ],
  },

  counterSection: {
    title: "Product Details",
    para: "Available in BARE / RO Primer Coated / Pre-Galvanized / Hot-Dip Galvanized finishes to suit diverse applications.",
    counter: [
      { count: "1.5 – 8.0 mm", label: "Thickness" },
      { count: "Up to 10,000 mm", label: "Length" },
      { count: "240 – 350 MPa", label: "Yield Strength" },
    ],
  },
};

export const crashBarriers_data = {
  title: "Crash Barriers",
  oneLiner:
    "High-performance metal crash barriers engineered for road safety and impact resistance — tested to meet global standards.",
  image: "/images/service/crash-bariers.jpg", // Replace with actual banner if available
  para: `Crash barriers, also known as traffic barriers, are vital safety installations designed to protect vehicles and pedestrians from hazardous roadside conditions, such as steep slopes, deep water, obstacles, or opposing traffic lanes.`,
  para2: `NF Forgings specializes in the design and manufacturing of metal crash barriers that conform to both national and international safety standards, including MOST, AASHTO M 180, and EN 1317-1 AND 2. Our barriers undergo rigorous simulated and full-scale crash testing to ensure they perform reliably under various impact scenarios. With advanced manufacturing capabilities and end-to-end project execution, we serve both public and private infrastructure projects across India.`,

  highlights: [
    {
      Icon: <ShieldAlertIcon />,
      title: "Tested to Global Standards",
      para: "Conforms to MOST, AASHTO M 180, and EN 1317-1 & 2 for superior safety and performance.",
    },
    {
      Icon: <ConstructionIcon />,
      title: "Durable & Galvanized Build",
      para: "Hot-dip galvanized finish ensures long-term resistance to corrosion and extreme conditions.",
    },
    {
      Icon: <HammerIcon />,
      title: "Cost-Effective & Customizable",
      para: "Engineered for easy installation and tailored to suit specific project requirements.",
    },
  ],

  section: {
    title: "Why Choose NF Forgings Crash Barriers?",
    points: [
      {
        title: "Tested to International Standards",
        para: "Conforms to MOST, AASHTO M 180, EN 1317-1 & 2 for safety, performance, and reliability.",
      },
      {
        title: "Durable Hot-Dip Galvanized Build",
        para: "Ensures long-term resistance to corrosion, weather, and impact.",
      },
      {
        title: "Cost-Effective and Easy to Install",
        para: "Designed for hassle-free installation and minimal maintenance.",
      },
      {
        title: "Customizable to Project Needs",
        para: "Can be tailored to specific buyer requirements and site conditions.",
      },
      {
        title: "End-to-End Delivery",
        para: "Complete in-house solution from manufacturing to on-site installation.",
      },
      {
        title: "Trusted by Leading Infrastructure Firms",
        para: "Preferred choice for top private and government road projects across the country.",
      },
    ],
  },
  typesOfProductHeading: {
    heading: "Types of Metal Crash Barriers",
    subHeading:
      "Engineered for optimal roadside safety across varying traffic conditions and structural layouts.",
  },
  typesOfProduct: [
    {
      title: "Single Faced Single Barrier",
      image: "/images/service/s1f1.jpg", // Replace with actual image
      para: "Designed to protect traffic from hazards on one side of the road, ideal for edge-of-road installations with minimal space requirements.",
    },
    {
      title: "Single Faced Double Barrier",
      image: "/images/service/s2f1.jpg", // Replace with actual image
      para: "Provides double-layer protection on a single side, enhancing impact resistance while maintaining ease of installation.",
    },
    {
      title: "Double Faced Single Barrier",
      image: "/images/service/s1f2.jpg", // Replace with actual image
      para: "A center-mounted barrier with single-layer protection on both sides, typically used in medians to prevent cross-lane incidents.",
    },
    {
      title: "Double Faced Double Barrier",
      image: "/images/service/s2f2.png", // Replace with actual image
      para: "Heavy-duty dual-layer barrier offering reinforced protection on both sides. Ideal for high-risk zones and expressway medians.",
    },
  ],
};
export const foundryProducts_data = {
  title: "Foundry Products",
  oneLiner:
    "High-precision industrial castings from a CLASS ‘A’ certified foundry, engineered for excellence across marine, rail, and public sector applications.",
  image: "/images/service/foundry-banner.jpg", // Replace with actual banner path
  para: `NF Forgings' Foundry Division is a CLASS “A” certified facility, accredited by the Indian Registrar of Shipping (IRClass) for marine castings. Backed by robust infrastructure and quality assurance systems, the division delivers high-precision cast components for sectors including railways, public sector units, and industrial applications.`,
  para2: `With an installed monthly capacity of 2000 MT, the foundry specializes in large-scale and custom casting solutions, conforming to IS:12117 standards. The division is equipped with advanced electric arc and induction furnaces, automated moulding lines, and extensive heat treatment setups. Quality is ensured through a NABL-accredited lab with comprehensive non-destructive and destructive testing capabilities.`,

  highlights: [
    {
      Icon: <BadgeCheckIcon />,
      title: "Certified Excellence",
      para: "CLASS ‘A’ foundry, approved by IRClass, RDSO, BHEL, BEML, NTPC.",
    },
    {
      Icon: <GaugeCircleIcon />,
      title: "High Capacity",
      para: "2000 MT/month casting capacity, IS:12117 compliant.",
    },
    {
      Icon: <PackageCheckIcon />,
      title: "Core Products",
      para: "Wagon Bogies, Point Ends, Central Buffer Couplers.",
    },
  ],

  section: {
    title: "Why Choose NF Forgings Foundry Products?",
    points: [
      {
        title: "Advanced Furnaces",
        para: "3 electric arc (5.0 MT each) + 1 induction (3.5 MT).",
      },
      {
        title: "Automated Moulding",
        para: "Green sand line (1300×1100×350 mm) + no-bake plants (20 & 30 MT/hr).",
      },
      {
        title: "Heat Treatment",
        para: "7 PLC-controlled furnaces (5–15 MT) with quenching systems.",
      },
      {
        title: "In-House Testing",
        para: "NABL-certified lab with full NDT & destructive testing suite.",
      },
      {
        title: "Precision QA",
        para: "Microstructure analysis for material integrity and consistency.",
      },
    ],
  },
  typesOfProductHeading: {
    heading: "Types of Metal Crash Barriers",
    subHeading:
      "Engineered for optimal roadside safety across varying traffic conditions and structural layouts.",
  },
  typesOfProduct: [
    {
      title: "COUPLER BODY",
      image: "https://nfforging.com/images/COUPLER-BODY.jpg",
      para: "Main structural part connecting railcars with robust material strength.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "WD-70-BD-10, Gr. E",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "165 Kg",
        },
      ],
    },
    {
      title: "KNUCKLE",
      image: "https://nfforging.com/images/KNUCKLE.jpg",
      para: "Pivoting component of the coupling system enabling articulation.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "WD-70-BD-10, Gr. E",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "36 Kg",
        },
      ],
    },
    {
      title: "YOKE",
      image: "https://nfforging.com/images/YOKE.jpg",
      para: "Transfers draft and buff loads from the coupler to the wagon body.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "WD-70-BD-10, Gr. E",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "100 Kg",
        },
      ],
    },
    {
      title: "STRIKER",
      image: "https://nfforging.com/images/STRIKER.jpg",
      para: "Component that resists buffing loads during coupling impacts.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "WD-70-BD-10, Gr. B",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "75 Kg",
        },
      ],
    },
    {
      title: "YOKE PIN SUPPORT PLATE",
      image: "https://nfforging.com/images/YOKE-PIN-SUPPORT-PLATE.jpg",
      para: "Provides secure mounting base for yoke pin assembly.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "WD-70-BD-10, Gr. B",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "30 Kg",
        },
      ],
    },
    {
      title: "BACKSTOP",
      image: "https://nfforging.com/images/BACKSTOP.jpg",
      para: "Prevents rearward movement of coupler under impact.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "WD-70-BD-10, Gr. B",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "23.5 Kg",
        },
      ],
    },
    {
      title: "SPRING PLANK",
      image: "https://nfforging.com/images/SPRING-PLANK.jpg",
      para: "Load bearing member in bogie structure supporting springs.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "IS: 5986-2011, Gr. 235",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "157 Kg",
        },
      ],
    },
    {
      title: "SPHERICAL CENTRE PIVOT TOP & BOTTOM",
      image: "https://nfforging.com/images/SPHERICAL-CENTRE-PIVOT-1.jpg",
      para: "Ensures rotational movement of bogie under the wagon.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "AAR M201, Gr. C",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "53 Kg",
        },
      ],
    },
    {
      title: "SPHERICAL CENTRE PIVOT TOP & BOTTOM",
      image: "https://nfforging.com/images/SPHERICAL-CENTRE-PIVOT-2.jpg",
      para: "Ensures rotational movement of bogie under the wagon.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "AAR M201, Gr. C",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "55 Kg",
        },
      ],
    },
    {
      title: "HIGH CAPACITY DRAFT GEAR WITH FOLLOWER",
      image: "https://nfforging.com/images/HIGH-CAPACITY-DRAFT-1.jpg",
      para: "Absorbs impact energy during train operations and coupling.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "AAR M201, Gr. E",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "150 Kg",
        },
      ],
    },
    {
      title: "HIGH CAPACITY DRAFT GEAR WITH FOLLOWER",
      image: "https://nfforging.com/images/HIGH-CAPACITY-DRAFT-2.jpg",
      para: "Secondary draft gear variant with optimized impact control.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "AAR M201, Gr. E",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "30 Kg",
        },
      ],
    },
    {
      title: "H - TYPE HIGH TENSILE TIGHT LOCK COUPLER",
      image: "https://nfforging.com/images/H-TYPE-HIGH-TENSILE.jpg",
      para: "Provides high-strength coupling for demanding rail operations.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "AAR M201, Gr. E",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "300 Kg",
        },
      ],
    },
    {
      title: "COUPLER BODY ASSEMBLY",
      image: "https://nfforging.com/images/COUPLER-BODY-ASSEMBLY.jpg",
      para: "Complete coupling system assembly for railcars.",
      details: [],
    },
    {
      title: "CAST MANGANESE STEEL CROSSING",
      image: "https://nfforging.com/images/CAST-MANGANESE-STEEL-CROSSING.jpg",
      para: "Critical rail turnout part ensuring rail vehicle redirection.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "IRS T-29",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "900 Kg",
        },
      ],
    },
    {
      title: "YOKE PIN",
      image: "https://nfforging.com/images/YOKE-PIN.jpg",
      para: "Secures the yoke and allows pivotal movement.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "AAR M118 or IS:1875 Cl 5 & IS: 2004",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "15 Kg",
        },
      ],
    },
    {
      title: "KNUCKLE PIN",
      image: "https://nfforging.com/images/KNUCKLE-PIN.jpg",
      para: "Locks the knuckle into position during coupling.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "IS:5517 – 42 Gr. 4- Mo2 & IS:2062 Fe 410-WA",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "4 Kg",
        },
      ],
    },
    {
      title: "ALL TYPES OF LINERS",
      image: "https://nfforging.com/images/ALL-TYPES-OF-LINERS.jpg",
      para: "Metal liners used to ensure smooth rail wheel transition.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "IS:3885",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "Varies according to the drawing.",
        },
      ],
    },
    {
      title: "AXLE BOX",
      image: "https://nfforging.com/images/AXLE-BOX.jpg",
      para: "Houses and supports the wheelset bearings on a wagon.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "IS: 1030",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "73 Kg",
        },
      ],
    },
    {
      title: "MYANMAR COUPLER ASSEMBLY",
      image: "https://nfforging.com/images/MYANMAR-COUPLER-ASSEMBLY.jpg",
      para: "Customized coupler assembly for Myanmar rail systems.",
      details: [
        {
          Icon: <CogIcon />,
          label: "Specification",
          value: "AAR M201, Gr. E",
        },
        {
          Icon: <WeightIcon />,
          label: "Weight",
          value: "160 Kg",
        },
      ],
    },
  ],
};
export const foundryQuality_data = {
  title: "Foundry Quality",
  image: "/images/service/foundry-banner.jpg",
  oneLiner:
    "State-of-the-art quality assurance backed by NABL accreditation, simulation tools, and rigorous multi-stage testing.",
  // Replace with actual path
  para: `At the core of our Foundry Division lies an unwavering commitment to quality. Equipped with a NABL-accredited in-house laboratory, we follow stringent quality control protocols across every stage of production.`,
  para2: `From advanced chemical and microstructural analysis to radiographic, ultrasonic, magnetic particle, and dye penetrant testing, each casting undergoes rigorous inspection. Mechanical integrity is validated through tensile, impact, fatigue, and creep testing using state-of-the-art equipment. This robust quality framework ensures precision, consistency, and performance you can rely on—every time.`,

  highlights: [
    {
      Icon: <ShieldCheckIcon />,
      title: "Advanced Quality Systems",
      para: "Certified to ISO 9001:2008 & Class-A Foundry standards with in-house spectrometry, simulation, and UTM testing for assured casting excellence.",
    },
    {
      Icon: <SearchCheckIcon />,
      title: "Comprehensive Testing Infrastructure",
      para: "From radiography and ultrasonic NDT to tensile and impact testing, we ensure each casting meets global reliability benchmarks.",
    },
    {
      Icon: <AtomIcon />,
      title: "Precision Through Simulation",
      para: "Our casting solidification software eliminates errors at the source—delivering defect-free outputs from the first pour.",
    },
  ],
};
export const infrastructure_data = {
  title: "Infrastructure",
  image: "/images/service/infrastructure-banner.jpg",
  oneLiner:
    "State-of-the-art foundry infrastructure enabling high-precision, high-volume castings with advanced molding, melting, core making, and finishing systems.",
  // Replace with actual path
  para: `Our foundry is built for precision, scale, and consistency—powered by an advanced high-pressure molding system capable of handling large box sizes and producing multiple molds per hour. The setup ensures tight dimensional control and superior mold integrity.
We operate both arc and induction furnaces, enabling flexible melting operations for varied casting needs. A fully automated sand plant with PLC controls ensures uniform sand mix quality, supporting seamless no-bake operations.
Dedicated core making facilities enable production of complex components, while our finishing area is equipped with in-house shot blasting systems to deliver clean, ready-to-ship castings.
This end-to-end infrastructure ensures high throughput, repeatable quality, and the ability to execute both standard and customized projects efficiently.
`,

  sections: [
    {
      title: "High Pressure Moulding Line",
      para: "An automated High Pressure Molding Line with multi-piston fast loop facility has been installed by Rhino Machines.",
    },
    {
      title: "Standard Dimensions",
      content: {
        list: [
          {
            Icon: <BoxIcon />,
            title: "Box Size",
            para: "1300 X 1100 X 350 MM",
          },
          {
            Icon: <BoxIcon />,
            title: "Pallet Size",
            para: "1850 X 1300 MM / 8 MOULDS PER HOUR",
          },
        ],
      },
    },
    {
      title: "Advantages",
      content: {
        list: [
          {
            Icon: (
              <span className="checkIcon">
                <Check />
              </span>
            ),
            title: "Rigid and dense molds",
          },
          {
            Icon: (
              <span className="checkIcon">
                <Check />
              </span>
            ),
            title: "Reduces the dilution of molds",
          },
          {
            Icon: (
              <span className="checkIcon">
                <Check />
              </span>
            ),
            title: "Provides better surface finishing of the castings",
          },
          {
            Icon: (
              <span className="checkIcon">
                <Check />
              </span>
            ),
            title: "Ensures dimensional stability",
          },
          {
            Icon: (
              <span className="checkIcon">
                <Check />
              </span>
            ),
            title:
              "Pattern squeeze on the molds ensure High Pattern Surface Hardness and High Mold Hardness on Box Bond",
          },
          {
            Icon: (
              <span className="checkIcon">
                <Check />
              </span>
            ),
            title:
              "Multi-piston feature ensures deep cavity and self-core hard molds",
          },
          {
            Icon: (
              <span className="checkIcon">
                <Check />
              </span>
            ),
            title: "Ensures high productivity",
          },
        ],
      },
    },
    {
      title: "Melt Shop",
      para: "Our Melt Shop consists of the following set-up:",
      content: {
        list: [
          {
            Icon: <FlaskConicalIcon />,
            title: "Electric arc furnace",
            para: "5.0 MT CAPACITY / EASTERN METEC MAKE",
          },
          {
            Icon: <FlaskConicalIcon />,
            title: "Induction furnace",
            para: "3.5 MT CAPACITY / DUAL-TRACK INDUCTION MELTING / DOUBLE CRUCIBLE / INDUCTOTHERM MAKE",
          },
        ],
      },
    },
    {
      title: "Sand Plant",
      para: "Automated and eco-friendly plant having a capacity of 15 MT per hour and PLC-Controlled continuous mixes for no-bake sand preparations / Rhino Machines.",
      content: {
        list: [
          {
            Icon: <FanIcon />,
            title: "Sand Plant",
            para: "AUTOMATED AND ECO-FRIENDLY PLANT HAVING A CAPACITY OF 15 MT PER HOUR AND PLC-CONTROLLED CONTINUOUS MIXES FOR NO-BAKE SAND PREPARATIONS / RHINO MACHINES.",
          },
        ],
      },
    },
    {
      title: "Core Shop",
      para: "Our Core Boxes can produce critical no-bake cores for the manufacturing of CBC Bogie components and other job works.",
    },
    {
      title: "Fettling",
      content: {
        list: [
          {
            Icon: <HammerIcon />,
            title:
              "We have a 100% in-house finishing arrangements for the castings.",
          },
          {
            Icon: <SparklesIcon />,
            title:
              "Table-type Shot Blasting Machine is used for shot blasting.",
          },
        ],
      },
    },
  ],
};
