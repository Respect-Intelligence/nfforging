import { JSX, ReactElement, ReactNode } from "react";

// types.ts
export type ServiceName = "crf" | "foundry" | "fabrication" | "services";

export const isValidServiceName = (name: string): name is ServiceName => {
  return (
    name === "crf" ||
    name === "foundry" ||
    name == "services" ||
    name == "fabrication"
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
  details: {
    Icon: ReactElement;
    label: string;
    value: string;
  }[];
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
  sections?: servicePageSections[];
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
export interface servicePageSections {
  title: string;
  para?: string;
  content: {
    para?: string;
    list: servicePageSections_list[];
  };
}

export interface servicePageSections_list {
  Icon: ReactElement;
  title: string;
  para?: string;
  list?: {
    title: string;
    para?: string;
  }[];
}
export interface ServiceData {
  title: string;
  bannerImg: string;
  oneLiner: string;
  highlights?: HighlightItem[];
  overview1: string;
  overview2?: string;
  productsSectionHeading?: {
    heading: string;
    subHeading: string;
  };
  productsArr?: ProductItem[];
  keyPoints?: string[];
  sections?: servicePageSections[];
}
export interface GalleryItem {
  id?: number;
  src: string;
  alt?: string;
  title?: string;
  category: string;
  description?: string;
}
export type Blog = {
  id?: number;
  title?: string;
  slug?: string;
  category?: string;
  intro?: string;
  blog_image?: string;
  content?: string;
  meta_title?: string;
  meta_keywords?: string;
  meta_description?: string;
  meta_canonical?: string;
  tags?: string;
  published_date?: Date; // Use `Date` if you parse it
  published_by?: string;
  published_status?: number; // Or boolean if you convert it
  blog_image_alt?: string;
  modified_date?: string; // Use `Date` if parsed
};
export const blogImageBaseURL =
  "http://localhost/nf-forging/assets/images/blog/";
