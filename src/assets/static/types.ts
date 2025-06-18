import { JSX, ReactElement, ReactNode } from "react";

// types.ts
export type ServiceName = "crf" | "foundry";

export const isValidServiceName = (name: string): name is ServiceName => {
  return (
    name === "crf" || name === "foundry"
    // name == "services" ||
    // name == "fabrication"
  );
};
// export const isValidProductName = ({
//   serviceName,
//   productname,
// }: {
//   serviceName: string;
//   productname: string;
// }): productname is ServiceName => {
//   return true;
// };
export interface Milestone {
  year: string;
  title: string;
  description: string;
  isLeft: boolean;
}
// export interface ProductPageData {
//   title: string;
//   oneLiner: string;
//   image: string;
//   para: string;
//   para2: string;
//   highlights?: {
//     Icon: JSX.Element;
//     title: string;
//     para: string;
//   }[];
//   section: {
//     title: string;
//     points: string[] | { title: string; para: string }[];
//   };
// }

interface HighlightItem {
  Icon: ReactElement;
  title: string;
  para: string;
}

interface SectionData {
  title: string;
  points: string[] | { title: string; para: string }[];
}

interface TypesOfProductHeading {
  heading: string;
  subHeading: string;
}

interface TypesOfProductItem {
  title: string;
  image: string;
  para: string;
}
interface CounterItem {
  count: string;
  label: string;
}

interface CounterSection {
  title: string;
  para: string;
  counter: CounterItem[];
}
export interface ProductPageData {
  title: string;
  oneLiner: string;
  image: string;
  para: string;
  para2: string;
  highlights?: HighlightItem[];
  section: SectionData;
  typesOfProductHeading?: TypesOfProductHeading;
  typesOfProduct?: TypesOfProductItem[];
  counterSection?: CounterSection;
}

interface ProductItem {
  title: string;
  categories: string[];
  image: string;
  desc: string;
  link: string;
}

export interface ServiceData {
  title: string;
  oneLiner: string;
  highlights?: HighlightItem[];
  overview1: string;
  overview2: string;
  productsArr: ProductItem[];
  keyPoints: string[];
}
