import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import { getSortedPostsData } from "@/src/app/_lib/posts";
import { getSortedProjectsData } from "@/src/app/_lib/projects";

import HeroThreeSection from "@/src/app/_components/sections/HeroThree";
import AboutUsSection from "@/src/app/_components/sections/AboutUs";
import PartnersTwoSection from "@/src/app/_components/sections/PartnersTwo";
import ExperienceFiveSection from "@/src/app/_components/sections/ExperienceFive";
import ServicesFourSection from "@/src/app/_components/sections/ServicesFour";
import CallToActionTwoSection from "@/src/app/_components/sections/CallToActionTwo";
import LatestPostsSection from "@/src/app/_components/sections/LatestPosts";
import { getServicesPage } from "@/core/repository";

const PortfolioSlider = dynamic(
  () => import("@/src/app/_components/sliders/Portfolio"),
  { ssr: true }
);

export const metadata = {
  title: {
    default: "Home 9",
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home9() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();
  const services = await getServicesPage();

  return (
    <OkaiLayout>
      <HeroThreeSection
        image={{
          url: `http://137.184.197.76:1337${services.data.servicesHeaderSection.image.url}`,
          alt: "banner",
        }}
        title={services.data.servicesHeaderSection.title}
        subtitle={services.data.servicesHeaderSection.headline}
        button={{ label: "View portfolio", link: "/projects-3" }}
        button2={{ label: "Contact me", link: "/contact" }}
      />
      <ExperienceFiveSection data={services.data.servicesHeaderSection} />
      <AboutUsSection
        subtitle={services.data.QomraCreation.title}
        title={services.data.QomraCreation.subtitle}
        description={""}
        button={{ label: "Continue", link: "/about" }}
        image={`http://137.184.197.76:1337${services.data.QomraCreation.image.url}`}
        paddingTop={30}
        paddingBottom={120}
      />
      <ServicesFourSection data={services.data.services} />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioSlider
          projects={services.data.Equipment.image}
          order={["project-30", "project-31", "project-32", "project-20"]}
          paddingTop={0}
          title={services.data.Equipment.title}
          description={services.data.Equipment.description}
        />
      </Suspense>
      <PartnersTwoSection images={services.data.Equipment.image} />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
    </OkaiLayout>
  );
}
export default Home9;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
