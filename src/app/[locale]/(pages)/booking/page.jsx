import React from "react";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import PageBanner from "@/src/app/_components/PageBanner";
import ContactFormSection from "@/src/app/_components/sections/Contact";
import Calendly from "@/src/app/_components/calendly";
import { getBookingPage } from "@/core/repository";

export const metadata = {
  title: {
    default: "Contact",
  },
  description: AppData.settings.siteDescription,
};

const ContactPage = async () => {
  const data = await getBookingPage();

  return (
    <OkaiLayout>
      <PageBanner
        pageTitle={data.data.title}
        breadTitle={"booking"}
        bgImage={`http://137.184.197.76:1337${data.data.coverImage.url}`}
      />
      <ContactFormSection />
      <div className="center ">
        <h1
          style={{
            textAlign: "center",
            padding: "2rem 0" /* Adjust the values as needed */,
          }}
        >
          {data.data.description}
        </h1>
        <Calendly />
      </div>
    </OkaiLayout>
  );
};
export default ContactPage;
