import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import { getSortedPostsData } from "@/src/app/_lib/posts";
import { getSortedProjectsData } from "@/src/app/_lib/projects";

import HeroSection from "@/src/app/_components/sections/Hero";
import ServicesSection from "@/src/app/_components/sections/Services";
import LatestPostsSection from "@/src/app/_components/sections/LatestPosts";
import CallToActionSection from "@/src/app/_components/sections/CallToAction";
import CallToActionTwoSection from "@/src/app/_components/sections/CallToActionTwo";
import PartnersTwoSection from "@/src/app/_components/sections/PartnersTwo";

const PortfolioGridTwoSection = dynamic(
  () => import("@/src/app/_components/sections/PortfolioGridTwo"),
  { ssr: true }
);
const TestimonialSlider = dynamic(
  () => import("@/src/app/_components/sliders/Testimonial"),
  { ssr: true }
);

export const metadata = {
  title: {
    default: "Home 7",
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home7() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroSection
        image={{ url: "/img/banners/7.jpg", alt: "banner" }}
        title={"I love visual <br>design"}
        button={{ label: "See Projects", link: "/projects-2" }}
        imgLayout={"out-left"}
        rowReverse={1}
      />
      <ServicesSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioGridTwoSection
          heading={{
            subtitle: "Our works",
            title: "Take a look at all <br>the projects",
          }}
          projects={projects}
          order={[
            "project-22",
            "project-8",
            "project-23",
            "project-24",
            "project-25",
            "project-26",
          ]}
          button={false}
        />
      </Suspense>
      <CallToActionSection />
      <TestimonialSlider
        items={[
          {
            name: "Lucas Wolfer",
            role: "SEO ocean",
            image: "/img/faces/3.jpg",
            text: "They have the best customer service. The project is also incredibly flexible and easy to use and explore. Glad to have met this team!",
          },
          {
            name: "Lucas Wolfer",
            role: "SEO ocean",
            image: "/img/faces/2.jpg",
            text: "They have the best customer service. The project is also incredibly flexible and easy to use and explore. Glad to have met this team!",
          },
          {
            name: "Lucas Wolfer",
            role: "SEO ocean",
            image: "/img/faces/1.jpg",
            text: "They have the best customer service. The project is also incredibly flexible and easy to use and explore. The user interface is intuitive and user-friendly. I am glad to have met this amazing team!",
          },
        ]}
        paddingTop={120}
        paddingBottom={120}
      />
      <PartnersTwoSection />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CallToActionTwoSection />
    </OkaiLayout>
  );
}
export default Home7;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
