import React from "react";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import PageBanner from "@/src/app/_components/PageBanner";
import ContactFormSection from "@/src/app/_components/sections/Contact";
import dynamic from "next/dynamic";
import Calendly from "@/src/app/_components/calendly";
import Map from "@/src/app/_components/maps/map";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
};

const ContactPage = () => {
  return (
    <OkaiLayout>
      <PageBanner
        pageTitle={"Contact us"}
        breadTitle={"Contact"}
        bgImage={"/img/banners/17.jpg"}
      />
      <Map address="Qomra Studios, Beirut, Lebanon" />
      <ContactFormSection />
      <div>
        <h1>Schedule a Meeting</h1>
        <Calendly />
      </div>
    </OkaiLayout>
  );
};
export default ContactPage;
