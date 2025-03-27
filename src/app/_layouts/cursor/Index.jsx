"use client";

import { useEffect } from "react";

import { cursorAnimation } from "@/src/app/_common/cursor";

const CursorModule = () => {
  useEffect(() => {
    cursorAnimation();
  }, []);

  return (
    <>
      {/* cursor */}
      <div className="mil-cursor-follower"></div>
      {/* cursor end */}
    </>
  );
};
export default CursorModule;
