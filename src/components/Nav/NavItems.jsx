import { NavLink } from "react-router-dom";
import './Nav.css'
export default function NavItems({ navClass })
{
  return (
    <>
      <ul className={navClass}>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/packages"}>Packages</NavLink>
        </li>
        <li>
          <a href={"/"}>
            Services
          </a>
        </li>
      </ul>
      <button>Get in Touch</button>
    </>
  );
}
