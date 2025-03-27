"use client";

import { useEffect } from "react";

import Footer from "@/src/app/_layouts/footers/Index";
import Header from "@/src/app/_layouts/headers/Index";
import Cursor from "@/src/app/_layouts/cursor/Index";
import ScrollProgress from "@/src/app/_layouts/scroll-progress/Index";

import { ScrollAnimation } from "@/src/app/_common/scrollAnimation";

const OkaiLayout = ({ children, header = "", footer = "" }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      ScrollAnimation();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Cursor />

      <ScrollProgress />

      <Header layout={header} />

      {/* content */}
      <div id="smooth-content" className="mil-content">
        {children}

        {footer !== "none" && <Footer layout={footer} />}
      </div>
      {/* content end */}
    </>
  );
};
export default OkaiLayout;
