"use client";

import AppData from "@data/app.json";
import Link from "next/link";

import { BackToTop } from "@/src/app/_common/utilits";

import { useEffect } from "react";
import whitelogo from "@/public/img/white-logo.png";
import Image from "next/image";

// Custom TikTok icon component
const TikTokIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const DefaultFooter = () => {
  useEffect(() => {
    BackToTop();
  }, []);
  const footer = `With expert equipment and
versatile spaces, we empower
creators, clients, and teams to
bring their boldest ideas to life.`;
  return (
    <>
      {/* footer */}
      <footer>
        <div className="container mil-p-120-0">
          <div className="row mil-jcb">
            <div className="col-8 col-lg-4 mil-mb90">
              <Link href="/" className="mil-logo mil-mb60 mil-up mil-c-gone">
                <Image src={whitelogo.src} width={110} height={25} alt="logo" />
              </Link>
              <p
                className="mil-text mil-fs16 mil-mb60 mil-up"
                dangerouslySetInnerHTML={{ __html: footer }}
              />
              <ul className="mil-social mil-up">
                {AppData.social.map((item, key) => (
                  <li key={`footer-social-item-${key}`}>
                    <a
                      href={item.link}
                      target="_blank"
                      title={item.title}
                      className="mil-c-gone"
                    >
                      {item.icon === "fab fa-tiktok" ? (
                        <TikTokIcon />
                      ) : (
                        <i className={item.icon}></i>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-2 mil-mb90">
              <h5 className="mil-fs15 mil-mb30 mil-up">
                {AppData.footer.menuTitle}
              </h5>
              <ul className="mil-footer-menu">
                {AppData.footer.menu.map((item, key) => (
                  <li key={`footer-menu-item-${key}`} className="mil-up">
                    <Link href={item.link} className="mil-c-gone">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4 mil-mb90">
              <h5 className="mil-fs16 mil-mb30 mil-up">
                {AppData.footer.contactTitle}
              </h5>
              <ul className="mil-footer-list">
                {AppData.footer.contact.map((item, key) => (
                  <li
                    key={`footer-contact-item-${key}`}
                    className="mil-text mil-up"
                  >
                    {item.label}
                    {": "}
                    <span dangerouslySetInnerHTML={{ __html: item.value }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mil-footer-bottom mil-up">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mil-mb30">
                <p
                  className="mil-fs14 mil-soft"
                  dangerouslySetInnerHTML={{ __html: AppData.footer.copy }}
                />
              </div>
              <div className="col-lg-6 mil-jce mil-992-jcs mil-mb30">
                <a
                  href="#."
                  className="mil-group-text mil-accent mil-c-gone"
                  id="mil-btt"
                >
                  <i className="fas fa-chevron-up"></i>{" "}
                  <span>{AppData.footer.backLabel}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
