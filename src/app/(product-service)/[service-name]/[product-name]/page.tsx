"use client";

import BasicTopBanner from "@/components/BasicTopBanner";
import { notFound, useParams } from "next/navigation";
import React from "react";
import FirstSection from "../components/FirstSection";

type validSlugs = "crf" | "foundry" | "fabrication" | "services";
function page() {
  const params = useParams();
  let productname = params["product-name"];
  let serviceName = params["service-name"];

  if (!productname) {
    notFound(); // 🚨 This triggers the built-in 404 page
  }

  // console.log(productname);

  return (
    <>
      <BasicTopBanner title={"Product & Services"} />
      {/* <FirstSection serviceName={serviceName} productname /> */}
    </>
  );
}

export default page;
