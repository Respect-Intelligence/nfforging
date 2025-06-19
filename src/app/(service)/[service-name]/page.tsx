import BasicTopBanner from "@/components/BasicTopBanner";
import { notFound } from "next/navigation";
import React, { use } from "react";
import { services_data } from "@/assets/static/data";
import Overview from "./components/Overview";
import { isValidServiceName, ServiceName } from "@/assets/static/types";
interface PageProps {
  params: Promise<{
    "service-name": string;
  }>;
}

function page({ params }: PageProps) {
  const { "service-name": rawServiceName } = use(params);

  if (!isValidServiceName(rawServiceName)) {
    console.log("redirecting from service page 404");

    notFound();
  }

  const serviceName = rawServiceName as ServiceName;
  const data = services_data[serviceName];
  return (
    <>
      <BasicTopBanner bannerImgSrc={data?.bannerImg} title={data?.title} />
      <Overview serviceName={serviceName} />
    </>
  );
}

export default page;
