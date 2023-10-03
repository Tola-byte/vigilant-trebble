import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { Container } from "../container";
import { NavbarLinkType, navbarLinks } from "../../../data/navbar";
import { MobileNavbar } from "./mobile-navbar";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-white border-b border-[#d3d3d3] border-opacity-60 shadow-sm sticky top-0 left-0 w-full z-50">
        <Container>
          <div className="flex justify-between items-center py-7 ">
            <div className="">
              <Link to="/">
                <img
                  src="https://efishery.com/wp-content/uploads/2021/10/logo-retina-colored.png"
                  alt="LOGO"
                  className="h-8"
                />
              </Link>
            </div>
            {renderNav(navbarLinks)}
            <div className="md:hidden">
              <button className="" onClick={toggleNav}>
                <AiOutlineMenu size={20} className="text-gray-800" />
              </button>
            </div>
          </div>
        </Container>
      </header>
      <MobileNavbar isOpen={isOpen} toggleNav={toggleNav} />
    </>
  );
};

const renderNav = (navLinks: NavbarLinkType[]) => {
  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-x-10">
        {navLinks.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-semibold text-primary"
                    : "text-gray-500 hover:text-gray-700"
                }`
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
