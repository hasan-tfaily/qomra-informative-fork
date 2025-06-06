import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import { getSortedProjectsData } from "@/src/app/_lib/projects";

import HeroSection from "@/src/app/_components/sections/Hero";
import ServicesSection from "@/src/app/_components/sections/Services";
import ExperienceTwoSection from "@/src/app/_components/sections/ExperienceTwo";
import ContactSection from "@/src/app/_components/sections/Contact";
import PartnersSection from "@/src/app/_components/sections/Partners";

const PortfolioSection = dynamic(
  () => import("@/src/app/_components/sections/Portfolio"),
  { ssr: true }
);
const TestimonialTwoSlider = dynamic(
  () => import("@/src/app/_components/sliders/TestimonialTwo"),
  { ssr: true }
);

export const metadata = {
  title: {
    default: "Home 2",
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home2() {
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroSection
        image={{ url: "/img/banners/4.jpg", alt: "banner" }}
        title={"Hi my Name’s <br>Oswald. I'm <br>a Designer"}
        button={{ label: "View portfolio", link: "/projects" }}
      />
      <ServicesSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioSection
          projects={projects}
          paddingTop={0}
          heading={{
            subtitle: "Our most recent work",
            title: "Made by us",
            description:
              "We offer the highest quality and creativity for each project we do for each of our clients, our goal is to make your sales grow to the next level.",
          }}
          order={["project-11", "project-12", "project-2", "project-13"]}
          btnBorder={false}
        />
      </Suspense>
      <TestimonialTwoSlider />
      <PartnersSection />
      <ExperienceTwoSection />
      <ContactSection title={"Leave me a Message"} />
    </OkaiLayout>
  );
}
export default Home2;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
