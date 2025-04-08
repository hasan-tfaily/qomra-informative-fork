"use client";

import { useState, useEffect } from "react";
import AppData from "@data/app.json";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import whitelogo from "../../../../public/img/logo/qomrawhitelogo.png";
import LanguageSwitcher from "../../_components/languageSwitcher";

const HeaderModule = ({ layout }) => {
  const [toggle, setToggle] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const asPath = usePathname();

  const isPathActive = (path) => {
    return asPath === path;
  };

  const handleSubMenuClick = (index, e) => {
    e.preventDefault();
    setActiveSubMenu(activeSubMenu === index ? null : index);
  };

  useEffect(() => {
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
                  className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
                  onClick={menuOpen}
                >
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* menu */}
      <div className={`mil-menu-window ${toggle ? "mil-active" : ""}`}>
        <div className="container">
          <ul className="mil-main-menu">
            {AppData.header.menu.map((item, index) => (
              <li
                key={`header-menu-item-${index}`}
                className={item.children?.length ? "mil-has-children" : ""}
              >
                {item.children?.length ? (
                  <>
                    <a
                      href={item.link}
                      onClick={(e) => handleSubMenuClick(index, e)}
                      className={isPathActive(item.link) ? "mil-active" : ""}
                    >
                      {item.label}
                    </a>
                    <ul
                      className={`mil-submenu ${
                        activeSubMenu === index ? "mil-active" : ""
                      }`}
                    >
                      {item.children.map((subitem, subIndex) => (
                        <li key={`submenu-item-${subIndex}`}>
                          <Link
                            href={subitem.link}
                            className={
                              isPathActive(subitem.link) ? "mil-active" : ""
                            }
                          >
                            {subitem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.link}
                    className={isPathActive(item.link) ? "mil-active" : ""}
                  >
                    {item.label}
                  </Link>
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
                  rel="noopener noreferrer"
                  title={item.title}
                >
                  <i className={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default HeaderModule;
