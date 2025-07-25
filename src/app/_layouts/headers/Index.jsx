"use client";

import { useState, useEffect } from "react";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
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

const HeaderModule = ({ layout }) => {
  const [toggle, setToggle] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const asPath = usePathname();

  const isPathActive = (path) => {
    return asPath.indexOf(path) !== -1 && asPath === path;
  };

  const handleSubMenuClick = (index, e) => {
    e.preventDefault();
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  useEffect(() => {
    // close mobile menu
    setToggle(false);
  }, [asPath]);

  const menuOpen = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {/* top panel */}
      <div
        className={
          layout == "transparent"
            ? "mil-top-panel mil-transparent"
            : "mil-top-panel"
        }
      >
        <div className="container">
          <div className="row mil-aic">
            <div className="col-6">
              <Link href="/" className="mil-logo mil-c-gone">
                <Image src={whitelogo.src} width={110} height={25} alt="logo" />
              </Link>
            </div>
            <div className="col-6 mil-jce mil-aic">
              <div className="mil-phone mil-group-text mil-fs14">
                <span className="mil-soft">{AppData.header.contact.label}</span>
                <span className="mil-light">
                  {AppData.header.contact.value}
                </span>
              </div>
              <div className="mil-buttons-frame">
                <div
                  className={`mil-menu-btn mil-c-gone ${
                    toggle ? "mil-active" : ""
                  }`}
                  onClick={() => menuOpen()}
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top panel end */}

      {/* menu */}
      <div className={`mil-menu-window ${toggle ? "mil-active" : ""}`}>
        <div className="container">
          <ul className="mil-main-menu mil-c-gone">
            {AppData.header.menu.map((item, index) => (
              <li
                className={`menu-item ${
                  item.children && item.children.length > 0
                    ? "menu-item-has-children"
                    : ""
                } ${isPathActive(item.link) ? "current-menu-item" : ""}`}
                key={`header-menu-item-${index}`}
              >
                <Link
                  href={item.link}
                  onClick={
                    item.children && item.children.length > 0
                      ? (e) => handleSubMenuClick(index, e)
                      : null
                  }
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <ul
                    className={
                      activeSubMenu === index
                        ? "sub-menu mil-active"
                        : "sub-menu"
                    }
                  >
                    {item.children.map((subitem, subIndex) => (
                      <li
                        key={`header-submenu-item-${subIndex}`}
                        className={
                          isPathActive(subitem.link)
                            ? "menu-item current-menu-item"
                            : "menu-item"
                        }
                      >
                        <Link href={subitem.link}>{subitem.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <ul className="mil-social mil-center">
            {AppData.social.map((item, key) => (
              <li key={`header-social-item-${key}`}>
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
      </div>
      {/* menu end */}
    </>
  );
};
export default HeaderModule;
