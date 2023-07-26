import React from "react";
import { Link } from "react-scroll";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";

const Navbar = () => {
  return (
    <div className="w-full h-full mx-auto flex justify-between items-center font-titleFont">
      <div>
        <img width="60px" src={logo} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-yellow-600"
              key={_id}
            ><Link
            activeClass="active"
            to={link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {title}
          </Link>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
