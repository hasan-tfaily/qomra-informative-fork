"use client";

import Data from "@data/sliders/portfolio.json";
import Link from "next/link";
import Image from "next/image";

import { useEffect } from "react";
//import { ScrollAnimation } from "@common/scrollAnimation";

import { SliderProps } from "@/src/app/_common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const PortfolioSlider = ({
  projects,
  order,
  paddingTop = 0,
  title,
  description,
  subtitle,
}) => {
  let projectsKeys = {};
  let sliderItems = [];

  projects.forEach((item) => {
    projectsKeys[item.id] = item;
  });

  order.forEach((order_key) => {
    sliderItems.push(projectsKeys[order_key]);
  });

  useEffect(() => {
    //ScrollAnimation();
  }, []);
  return (
    <>
      {/* portfolio */}
      <div className={`mil-portfolio mil-p-${paddingTop}-120`}>
        <div className="container">
          <div className="row mil-jcc">
            <div className="col-12 mil-mb90">
              <span
                className="mil-suptitle mil-accent mil-mb15  mil-up"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <h2
                className="mil-fs42 mil-up"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
            <div className="col-lg-8">
              <Swiper
                {...SliderProps.milPortfolioSlider}
                className="swiper-conteiner mil-portfolio-slider mil-c-swipe"
                style={{ overflow: "visible" }}
              >
                {projects.map((item, key) => (
                  <SwiperSlide
                    className="swiper-slide"
                    key={`portfolio-slider-item-${key}`}
                  >
                    <div className="mil-project-card mil-mb30 mil-up">
                      <div className="mil-cover-frame mil-h">
                        <div className="mil-hover-frame">
                          <Image
                            src={`http://137.184.197.76:1337${item.url}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            alt={item.alternativeText ?? "image"}
                            className="mil-scale-img"
                            data-value-1="1"
                            data-value-2="1.25"
                          />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="row mil-jcc">
            <div className="col-4">
              <div className="mil-pagination"></div>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio end */}
    </>
  );
};

export default PortfolioSlider;
