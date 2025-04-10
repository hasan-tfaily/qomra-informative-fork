"use client";

import Data from "@data/sections/services-4.json";

import { useEffect } from "react";
import { Accordion } from "@/src/app/_common/utilits";
import Image from "next/image";

const ServicesFourSection = ({
  paddingTop = 0,
  paddingBottom = 30,
  image = false,
  reverse = false,
  heading = true,
  data,
}) => {
  useEffect(() => {
    Accordion();
  }, []);
  return (
    <>
      {/* services */}
      <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
        <div className="container">
          <div
            className={
              reverse
                ? "row flex-sm-row-reverse mil-aic mil-jcb"
                : "row mil-aic mil-jcb"
            }
          >
            <div className="col-lg-5">
              {heading == 1 && (
                <h2 className="mil-fs42 mil-mb90 mil-up">{data.title}</h2>
              )}
              <div className="mil-accordion mil-mb90">
                <div
                  className="mil-accordion-group mil-up"
                  key={`services4-item-1`}
                >
                  <div className="mil-accordion-menu mil-closed mil-c-gone mil-fs20">
                    <span>{data.subtitle}</span>
                    <span className="mil-accordion-icon"></span>
                  </div>
                  <div className="mil-accordion-content">
                    <p className="mil-text">{data.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-just-image mil-s mil-mb90 mil-up">
                <Image
                  src={`http://137.184.197.76:1337${data.image.url}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt={Data.image.alt}
                  className="mil-scale-img"
                  data-value-1="1"
                  data-value-2="1.25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services end */}
    </>
  );
};
export default ServicesFourSection;
