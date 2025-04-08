import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import { getSortedPostsData } from "@/src/app/_lib/posts";
import { getSortedProjectsData } from "@/src/app/_lib/projects";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import HeroSection from "@/src/app/_components/sections/Hero";
import ExperienceSection from "@/src/app/_components/sections/Experience";
import CallToActionSection from "@/src/app/_components/sections/CallToAction";
import LatestPostsSection from "@/src/app/_components/sections/LatestPosts";
import CallToActionTwoSection from "@/src/app/_components/sections/CallToActionTwo";
import { getHomePage } from "@/core/repository";

const PortfolioSection = dynamic(
  () => import("@/src/app/_components/sections/Portfolio"),
  { ssr: true }
);
const TestimonialSlider = dynamic(
  () => import("@/src/app/_components/sliders/Testimonial"),
  { ssr: true }
);

export const metadata = {
  title: {
    default: "Home",
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home1() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();
  const HomePage = await getHomePage();

  // console.log(HomePage.data.testemonial);
  return (
    <OkaiLayout>
      <HeroSection
        image={{
          url: `http://137.184.197.76:1337${HomePage.data.coverImage.url}`,
          alt: HomePage.data.coverImage.alternativeText,
        }}
        title={HomePage.data.title}
        button={{ label: "See Projects", link: "/projects-2" }}
        imgLayout={"out-right"}
      />
      <ExperienceSection data={HomePage.data.featuredSection} />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioSection
          data={HomePage.data.portfolio}
          projects={projects}
          order={["project-1", "project-3", "project-2", "project-4"]}
        />
      </Suspense>
      <CallToActionSection data={HomePage.data.divider} />
      <TestimonialSlider
        data={HomePage.data.testemonial}
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
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CallToActionTwoSection />
    </OkaiLayout>
  );
}
export default Home1;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
