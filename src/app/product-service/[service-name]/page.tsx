"use client";

import BasicTopBanner from "@/components/BasicTopBanner";
import { useParams } from "next/navigation";
import React from "react";

import Sidebar from "./components/Sidebar";
import ProjectsGrid from "./components/ProjectsGrid";
import Overview from "./components/Overview";
import Faq from "./components/Faq";
import VideoSection from "./components/VideoSection";

function page() {
  const params = useParams();
  const serviceName = params["service-name"];
  console.log(serviceName);

  return (
    <>
      <BasicTopBanner title={"fdsaf"} />(
      <section className="text-content-section pb-90">
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
      </section>
    </>
  );
}

export default page;
