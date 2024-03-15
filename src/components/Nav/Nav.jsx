import './Nav.css'
import logo from './../../assets/images/logo.png'
import menu_icon from './../../assets/images/menu-icon.svg'
import close_icon from "./../../assets/images/close-icon.svg";
import NavItems from "./NavItems";

import { useState } from 'react'

export default function Nav()
{
  // ===================== Hook ============================
  const [toggleNav, setToggleNav] = useState(false);

  // ===================== Handle Functions ================
  function handleToggleNav() {
    setToggleNav(!toggleNav);
  }


  return (
    <>
      <nav>
        <div className="container flex-bw">
          <div className="logo">
            <img src={logo} alt="" className="logo-img" />
          </div>
          <NavItems navClass={"nav-items flex-al-c"} />
          <img
            src={menu_icon}
            alt=""
            className="menu-icon"
            onClick={handleToggleNav}
          />
        </div>

        {toggleNav ? (
          <div className="nav-mobile flex-col">
            <img
              src={close_icon}
              alt=""
              className="close-icon"
              onClick={handleToggleNav}
            />
            <NavItems navClass={"nav-mobile-items flex-al-c flex-col"} />
          </div>
        ) : (
          <></>
        )}
      </nav>
    </>
  );
}
