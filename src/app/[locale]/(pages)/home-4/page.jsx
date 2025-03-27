import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import { getSortedPostsData } from "@/src/app/_lib/posts";
import { getSortedProjectsData } from "@/src/app/_lib/projects";

import HeroSection from "@/src/app/_components/sections/Hero";
import AboutUsTwoSection from "@/src/app/_components/sections/AboutUsTwo";
import LatestPostsSection from "@/src/app/_components/sections/LatestPosts";
import CallToActionSection from "@/src/app/_components/sections/CallToAction";
import ExperienceThreeSection from "@/src/app/_components/sections/ExperienceThree";
import ExperienceTwoSection from "@/src/app/_components/sections/ExperienceTwo";

const PortfolioGridSection = dynamic(
  () => import("@/src/app/_components/sections/PortfolioGrid"),
  { ssr: true }
);
const TestimonialSlider = dynamic(
  () => import("@/src/app/_components/sliders/Testimonial"),
  { ssr: true }
);

export const metadata = {
  title: {
    default: "Home 4",
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home4() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <HeroSection
        image={{ url: "/img/banners/5.jpg", alt: "banner" }}
        title={"I love visual <br>Design"}
        button={{ label: "View portfolio", link: "/projects" }}
        imgLayout={"out-right"}
      />
      <ExperienceThreeSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioGridSection
          heading={{
            subtitle: "Our works",
            title: "Take a look <br>at all the projects",
          }}
          projects={projects}
          order={["project-5", "project-3", "project-7", "project-6"]}
          button={{ label: "Continue", link: "/projects-3" }}
        />
      </Suspense>
      <AboutUsTwoSection />
      <ExperienceTwoSection />
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
        paddingTop={0}
        paddingBottom={120}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CallToActionSection />
    </OkaiLayout>
  );
}
export default Home4;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
