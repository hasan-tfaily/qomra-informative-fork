"use client";

import { useState, useEffect } from "react";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import whitelogo from "../../../../public/img/logo/whitelogo.png";
import LanguageSwitcher from "../../_components/languageSwitcher";

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
              <Link href={"/"}>
                <Image src={whitelogo.src} width={90} height={25} alt="logo" />
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
            {AppData.header.menu.flatMap((item, index) => {
              if (item.children.length > 0) {
                return item.children.map((subitem, subIndex) => (
                  <li
                    className={`menu-item ${
                      isPathActive(subitem.link) ? "current-menu-item" : ""
                    }`}
                    key={`header-menu-item-${index}-${subIndex}`}
                  >
                    <Link href={subitem.link}>{subitem.label}</Link>
                  </li>
                ));
              } else {
                return (
                  <li
                    className={`menu-item ${
                      isPathActive(item.link) ? "current-menu-item" : ""
                    }`}
                    key={`header-menu-item-${index}`}
                  >
                    <Link href={item.link}>{item.label}</Link>
                  </li>
                );
              }
            })}
            {/* <li>
              <LanguageSwitcher />
            </li> */}
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
                  <i className={item.icon}></i>
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
