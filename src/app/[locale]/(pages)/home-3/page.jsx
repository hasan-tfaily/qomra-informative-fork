import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import { getSortedPostsData } from "@/src/app/_lib/posts";
import { getSortedProjectsData } from "@/src/app/_lib/projects";

import HeroSection from "@/src/app/_components/sections/Hero";
import ServicesTwoSection from "@/src/app/_components/sections/ServicesTwo";
import AboutUsSection from "@/src/app/_components/sections/AboutUs";
import LatestPostsSection from "@/src/app/_components/sections/LatestPosts";
import CallToActionSection from "@/src/app/_components/sections/CallToAction";
import CallToActionTwoSection from "@/src/app/_components/sections/CallToActionTwo";
import { getEventsPage, getServicesPage } from "@/core/repository";

const PortfolioSlider = dynamic(
  () => import("@/src/app/_components/sliders/Portfolio"),
  {
    ssr: true,
  }
);
const TestimonialSlider = dynamic(
  () => import("@/src/app/_components/sliders/Testimonial"),
  { ssr: true }
);

export const metadata = {
  title: {
    default: "Home 3",
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
};

async function Home3() {
  const posts = await getAllPosts();
  const projects = await getAllProjects();
  const events = await getEventsPage();
  const services = await getServicesPage();

  return (
    <OkaiLayout>
      <HeroSection
        image={{ url: "/img/banners/2.jpg", alt: "banner" }}
        title={`${events.data.title} `}
        description={events.data.description}
        button={{ label: "View portfolio", link: "/projects-3" }}
        imgLayout={"out-right"}
      />

      <ServicesTwoSection />
      <AboutUsSection />
      <Suspense fallback={<div>Loading...</div>}>
        <PortfolioSlider
          projects={services.data.Equipment.image}
          order={["project-30", "project-31", "project-32", "project-20"]}
          paddingTop={0}
          title={services.data.Equipment.title}
          description={services.data.Equipment.description}
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
      />
      <Suspense fallback={<div>Loading...</div>}>
        <LatestPostsSection posts={posts} />
      </Suspense>
      <CallToActionTwoSection />
    </OkaiLayout>
  );
}
export default Home3;

async function getAllPosts() {
  const allPosts = getSortedPostsData();
  return allPosts;
}

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
