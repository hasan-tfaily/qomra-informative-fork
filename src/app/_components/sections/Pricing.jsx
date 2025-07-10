"use client";

import { useEffect } from "react";
import { PricingPlans } from "@/src/app/_common/utilits";

import Data from "@data/sections/pricing.json";
import Link from "next/link";

const PricingSection = ({ subtitle = "", title = "", data }) => {
  useEffect(() => {
    PricingPlans();
  }, []);
  return (
    <>
      {/* prices */}
      <div className="mil-blog-list mil-p-120-90">
        <div className="container">
          {title != "" && (
            <div className="mil-tac mil-mb90">
              <span
                className="mil-suptitle mil-accent mil-mb30 mil-up"
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
              <h2
                className="mil-fs42 mil-up"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </div>
          )}
          <div className="mil-jcc">
            <div className="mil-switcher mil-mb90 mil-up">
              <span className="mil-active" id="month">
                Monthly
              </span>
              <span className="" id="year">
                Yearly
              </span>
            </div>
          </div>
          <div className="row">
            {data[0].prices.map((item, key) => (
              <div className="col-md-4 col-sm-6" key={`pricing-item-${key}`}>
                <div
                  className={
                    !item.popular
                      ? "mil-price-card mil-up mil-mb30"
                      : "mil-price-card mil-up mil-mb30 mil-featured"
                  }
                >
                  <h4 className="mil-fs20 mil-mb60 mil-up">{item.title}</h4>
                  <div className="mil-light mil-mb60 mil-accent mil-up">
                    {item.price.before}{" "}
                    <span
                      className="mil-pricing-table-price pricingSpecial"
                      data-year-price={item.price}
                      data-month-price={item.price}
                      style={{ wordBreak: "break-word", lineHeight: "1.2" }}
                    >
                      {item.price}
                    </span>
                    {/* <span className="mil-sup-text">{item.price.after}</span> */}
                  </div>
                  <ul className="mil-price-list mil-mb60">
                    <p style={{ whiteSpace: "pre-line" }}>
                      {item.ServicesProvided}
                    </p>
                  </ul>
                  {/* <div className="mil-up">
                    <Link
                      href={"#"}
                      className={
                        !item.popular
                          ? "mil-btn mil-btn-border mil-c-gone"
                          : "mil-btn mil-c-gone"
                      }
                    ></Link>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* prices end  */}
    </>
  );
};

export default PricingSection;
