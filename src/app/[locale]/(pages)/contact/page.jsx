import React from "react";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import PageBanner from "@/src/app/_components/PageBanner";
import ContactFormSection from "@/src/app/_components/sections/Contact";
import dynamic from "next/dynamic";
import Calendly from "@/src/app/_components/calendly";
import Map from "@/src/app/_components/maps/map";
import { getCcontactUsPage } from "@/core/repository";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
};

async function ContactPage() {
  const data = await getCcontactUsPage();

  console.log(data);
  return (
    <OkaiLayout>
      <PageBanner
        pageTitle={"Contact us"}
        breadTitle={"Contact"}
        bgImage={`http://137.184.197.76:1337${data.data.coverImage.url}`}
      />
      <ContactFormSection />
      <Map address="Qomra Studios, Beirut, Lebanon" />
    </OkaiLayout>
  );
}
export default ContactPage;
