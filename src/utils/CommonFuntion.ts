import {
  crashBarriers_data,
  foundryProducts_data,
  foundryQuality_data,
  preEngineeredBuildings_data,
  railwayWagonCoaches_data,
  sheetPiles_data,
  solarMounting_data,
} from "@/assets/static/data";

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

  return null;
};
