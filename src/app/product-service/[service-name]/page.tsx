"use client";

import BasicTopBanner from "@/components/BasicTopBanner";
import { useParams } from "next/navigation";
import React from "react";

import Sidebar from "./components/Sidebar";
import ProjectsGrid from "./components/ProjectsGrid";
import Overview from "./components/Overview";
import Faq from "./components/Faq";
import VideoSection from "./components/VideoSection";
import FirstSection from "./components/FirstSection";

function page() {
  const params = useParams();
  const serviceName = params["service-name"];
  console.log(serviceName);

  const fancyboxItems = [
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

  const galleryItems = [1, 2, 3, 4, 5, 6];

  const sliderImages = [1, 2, 3];

  const counters = [
    { count: "6,154", desc: "Projects Completed" },
    { count: "2,512", desc: "Qualified Workers" },
    { count: "1,784", desc: "Satisfied Clients" },
  ];

  const testimonialThumbs = [
    { img: "1.jpg", title: "John Peter", desc: "7oroof Inc" },
    { img: "2.jpg", title: "Sami Wade", desc: "Trustry" },
    { img: "3.jpg", title: "Sami Wade", desc: "Trustry" },
  ];

  const testimonialContents = [
    "They are the best and expertly trained team members who take the extra step and go the extra mile, all to fulfill our promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment",
    "All to fulfill our promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment. They are the best and expertly trained team members who take the extra step and go the extra mile.",
    "They are the best and expertly trained team members who take the extra step and go the extra mile, all to fulfill our promise to deliver innovative and dynamic solutions to our customers to fit the needs of a rapidly changing global environment.",
  ];

  const relatedProjects = [
    {
      img: "1.jpg",
      title: "The Fallingwater House",
      cats: ["Building", "Interior"],
    },
    {
      img: "2.jpg",
      title: "The Guggenheim Museum",
      cats: ["Construction", "Engineering"],
    },
    {
      img: "3.jpg",
      title: "Neue National Galerie",
      cats: ["Renovation", "Architecture"],
    },
  ];

  return (
    <>
      <BasicTopBanner title={"fdsaf"} />
      <FirstSection />

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
