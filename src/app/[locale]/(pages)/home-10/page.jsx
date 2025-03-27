import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import { getSortedPostsData } from "@/src/app/_lib/posts";
import { getSortedProjectsData } from "@/src/app/_lib/projects";

import HeroThreeSection from "@/src/app/_components/sections/HeroThree";
import AboutUsSection from "@/src/app/_components/sections/AboutUs";
import PartnersTwoSection from "@/src/app/_components/sections/PartnersTwo";
import ExperienceSixSection from "@/src/app/_components/sections/ExperienceSix";
import ServicesFiveSection from "@/src/app/_components/sections/ServicesFive";
import CallToActionTwoSection from "@/src/app/_components/sections/CallToActionTwo";
import LatestPostsSection from "@/src/app/_components/sections/LatestPosts";

const PortfolioGridThreeSection = dynamic(
  () => import("@/src/app/_components/sections/PortfolioGridThree"),
  { ssr: true }
);

export const metadata = {
  title: {
    default: "Home 10",
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home10() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroThreeSection
        image={{ url: "/img/banners/10.jpg", alt: "banner" }}
        title={"I love visual design"}
        button={{ label: "See Projects", link: "/projects-2" }}
        button2={{ label: "How we work", link: "/about" }}
        imgLayout={"out-right"}
      />
      <ExperienceSixSection />
      <ServicesFiveSection />
      <AboutUsSection
        subtitle={"About us"}
        title={"My name is Janez A. I am a designer"}
        description={
          "My first business card designed 7 years ago gave us the motivation and drive to be today offering a different and personalized service."
        }
        button={{ label: "Continue", link: "/about" }}
        image={"/img/about/9.jpg"}
        paddingTop={30}
        paddingBottom={120}
        lightText={1}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioGridThreeSection
          heading={{
            subtitle: "Our works",
            title: "Take a look <br>at all the projects",
          }}
          projects={projects}
          order={["project-8", "project-24", "project-15", "project-26"]}
        />
      </Suspense>
      <PartnersTwoSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CallToActionTwoSection darkUI={true} />
    </OkaiLayout>
  );
}
export default Home10;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
