import BasicTopBanner from "@/components/BasicTopBanner";
import { notFound } from "next/navigation";
import React from "react";
import { services_data } from "@/assets/static/data";
import Overview from "./components/Overview";
import { isValidServiceName, ServiceName } from "@/assets/static/types";
interface PageProps {
  params: {
    "service-name": string;
  };
}

function page({ params }: PageProps) {
  const { "service-name": rawServiceName } = params;

  if (!isValidServiceName(rawServiceName)) {
    notFound();
  }

  const serviceName = rawServiceName as ServiceName;
  const data = services_data[serviceName];
  return (
    <>
      <BasicTopBanner title={data?.title} />
      <Overview serviceName={serviceName} />

      {/* <section className="text-content-section pb-90">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <Sidebar />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8">
              <ProjectsGrid />
              <Overview />
              <Faq />
              <VideoSection />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default page;
