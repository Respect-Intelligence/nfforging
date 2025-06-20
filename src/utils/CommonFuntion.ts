import {
  crashBarriers_data,
  foundryProducts_data,
  foundryQuality_data,
  infrastructure_data,
  preEngineeredBuildings_data,
  railwayWagonCoaches_data,
  sheetPiles_data,
  solarMounting_data,
} from "@/assets/static/data";
import { Blog } from "@/assets/static/types";
import { query } from "./db";
import { SwiperClass } from "swiper/react";

export const getStaticData = (productname: string) => {
  if (productname == "sheet-piles") {
    return sheetPiles_data;
  }
  if (productname == "solar-module") {
    return solarMounting_data;
  }
  if (productname == "pre-engineered-building") {
    return preEngineeredBuildings_data;
  }
  if (productname == "wagon-coaches") {
    return railwayWagonCoaches_data;
  }
  if (productname == "crash-barriers") {
    return crashBarriers_data;
  }
  if (productname == "products") {
    return foundryProducts_data;
  }
  if (productname == "foundry-quality") {
    return foundryQuality_data;
  }
  if (productname == "infrastructure") {
    return infrastructure_data;
  }

  return null;
};

export const getdateToStr = (date: string | undefined | Date) => {
  return date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      })
    : "No date";
};
export async function fetchRecentBlogs(): Promise<Blog[] | null> {
  try {
    const results = await query<Blog>(
      `SELECT * FROM blogs ORDER BY published_date DESC LIMIT 6`
    );
    console.log(results);
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export const adjustSlideHeights = (swiper: SwiperClass) => {
  if (!swiper?.slides?.length) return;

  let maxHeight = 0;

  swiper.slides.forEach((slideEl) => {
    const el = slideEl as HTMLElement;
    el.style.height = "auto"; // reset
    const height = el.offsetHeight;
    if (height > maxHeight) maxHeight = height;
  });

  swiper.slides.forEach((slideEl) => {
    const el = slideEl as HTMLElement;
    el.style.height = `${maxHeight}px`;
  });

  swiper.update();
};
