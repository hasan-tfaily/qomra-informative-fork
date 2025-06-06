import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import { getSortedProjectsData } from "@/src/app/_lib/projects";

import HeroSection from "@/src/app/_components/sections/Hero";
import AboutVideoSection from "@/src/app/_components/sections/AboutVideo";
import PartnersTwoSection from "@/src/app/_components/sections/PartnersTwo";
import ServicesFourSection from "@/src/app/_components/sections/ServicesFour";
import ContactSection from "@/src/app/_components/sections/Contact";

const PortfolioSection = dynamic(
  () => import("@/src/app/_components/sections/Portfolio"),
  { ssr: true }
);

export const metadata = {
  title: {
    default: "Home 11",
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home11() {
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroSection
        image={{ url: "/img/banners/11.jpg", alt: "banner" }}
        title={"Hi. I am <span class='mil-accent'>Rood</span> visual designer"}
        button={{ label: "See Projects", link: "/projects-2" }}
        imgLayout={"out-left"}
        rowReverse={1}
      />
      <AboutVideoSection />
      <ServicesFourSection paddingTop={120} image={"/img/about/11.jpg"} />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioSection
          paddingTop={0}
          paddingBottom={90}
          projects={projects}
          order={["project-33", "project-34", "project-35", "project-36"]}
        />
      </Suspense>
      <PartnersTwoSection />
      <ContactSection />
    </OkaiLayout>
  );
}
export default Home11;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
