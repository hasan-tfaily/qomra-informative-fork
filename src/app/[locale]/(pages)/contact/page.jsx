import React from "react";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import PageBanner from "@/src/app/_components/PageBanner";
import ContactFormSection from "@/src/app/_components/sections/Contact";

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
      <ContactFormSection />
    </OkaiLayout>
  );
};
export default ContactPage;
