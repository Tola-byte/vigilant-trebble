import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { navbarLinks } from "../../../../data/navbar";

type MobileNavbarProps = {
  isOpen: boolean;
  toggleNav(): void;
};

export function MobileNavbar({ isOpen, toggleNav }: MobileNavbarProps) {
  return (
    <div
      className={`
				fixed inset-0 w-full h-[100vh] bg-[#00000040] ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }  transition-all duration-[.5s] z-[100]  md:hidden
				`}
      onClick={toggleNav}
    >
      <div
        className={`
					 w-[70%]  p-8  bg-white  overflow-y-auto h-full  transition-all duration-[.5s]
                  ${isOpen ? "translate-x-0" : "translate-x-[-100%] shadow"} `}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-8">
          <div className="">
            <button
              className="h-8 w-8 rounded-full border flex justify-center items-center border-gray-400 border-opacity-40 outline-none"
              onClick={toggleNav}
            >
              <IoMdClose
                size={15}
                className="text-gray-800 hover:text-red-600"
              />
            </button>
          </div>
        </div>
        <ul className="flex flex-col  gap-y-10">
          {navbarLinks.map((item) => (
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
                onClick={toggleNav}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
