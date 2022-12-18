
import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./navItem";
import Image from "next/image"


const MENU_LIST = [
  { text: "START BUSINESS", href: "/components/start_business" },
  { text: "PROTECT BUSINESS", href: "/components/project_business" },
  { text: "MANAGE BUSINESS", href: "/components/manage_business" },
  { text: "GROW BUSINES", href: "/components/grow_business" },
  { text: "CONTACTS", href: "/components/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
           <Image src="/logo-1.png" width="100%" height="100%" /> 
           
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
             
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;



