import { jobs } from "@/assets/static/data";
import BasicTopBanner from "@/components/BasicTopBanner";
import JobDetailsSection from "@/components/JobDetailsSection";
import { notFound } from "next/navigation";
import React, { use } from "react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
function page({ params }: PageProps) {
  const { slug } = use(params);
  const decodedSlug = decodeURIComponent(slug.toString());

  const job = jobs.find((item) => item.slug == decodedSlug);
  if (!job) notFound();
  console.log(job);

  return (
    <>
      <BasicTopBanner
        bannerImgSrc="/images/careers/job-desc.webp"
        title={job?.jobTitle}
      />
      <JobDetailsSection {...job} />
    </>
  );
}

export default page;
