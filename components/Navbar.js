import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo2.png";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/home" },
  { text: "About Us", href: "/about" },
  { text: "Index", href: "/" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav1`}>
        <Link href={"/"}>
        <Image
          className="logo"
              src={ logo }
              alt="Site Logo" 
            />
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

{
  /* <ul>
<li>
  <Link href="/home">Home</Link>
</li>
<li>
  <Link href="/about">About</Link>
  </li>
  <li>
 
    <Link href="/">Index</Link>
 
</li>
</ul> */
}
