import React from "react";
import dynamic from "next/dynamic";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import PageBanner from "@/src/app/_components/PageBanner";
import ExperienceEightSection from "@/src/app/_components/sections/ExperienceEight";
import AboutUsTwoSection from "@/src/app/_components/sections/AboutUsTwo";
import ServicesFourSection from "@/src/app/_components/sections/ServicesFour";
import CallToActionSection from "@/src/app/_components/sections/CallToAction";
import TeamSection from "@/src/app/_components/sections/Team";
import CallToActionThreeSection from "@/src/app/_components/sections/CallToActionThree";
import { getAboutUsPage } from "@/core/repository";

const TestimonialSlider = dynamic(
  () => import("@/src/app/_components/sliders/Testimonial"),
  { ssr: true }
);

export const metadata = {
  title: {
    default: "About",
  },
  description: AppData.settings.siteDescription,
};

async function AboutPage() {
  const aboutUs = await getAboutUsPage();
  // console.log(aboutUs.data);

  return (
    <OkaiLayout>
      <PageBanner
        pageTitle={"About us"}
        breadTitle={"About us"}
        bgImage={`http://137.184.197.76:1337${aboutUs.data.aboutUsHeader.coverImage.url}`}
      />
      <ExperienceEightSection data={aboutUs.data.aboutUsHeader} />
      <AboutUsTwoSection data={aboutUs.data.mission} />
      <ServicesFourSection
        paddingTop={120}
        paddingBottom={30}
        data={aboutUs.data.vision}
      />
      <TestimonialSlider
        data={aboutUs.data.Testimonials[0]}
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
      <CallToActionSection data={aboutUs.data.divider} />

      <CallToActionThreeSection data={aboutUs.data.divider2} />
    </OkaiLayout>
  );
}
export default AboutPage;
