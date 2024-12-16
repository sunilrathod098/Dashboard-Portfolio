import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
return (
  <header className="shadow sticky z-50 top-0">
    <nav className="bg-black border-white px-4 lg:px-6 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Link to="/" className="flex items-center">
          <img
            src="/src/assets/images/profilelogo-file.jpg"
            className="mr-8 h-16"
            alt="Logo"
          />
        </Link>

        <div
          className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                to=""
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-700" : "text-white"
                  } border-b
                border-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-700" : "text-white"
                  } border-b
                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-700" : "text-white"
                  } border-b
                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-700" : "text-white"
                  } border-b
                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                }
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/github"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-700" : "text-white"
                  } border-b
                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                }
              >
                Github
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/technologies"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-700" : "text-white"
                  } border-b
                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                }
              >
                Technologies
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/certificates"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? "text-blue-700" : "text-white"
                  } border-b
                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                }
              >
                Certificates & Awards
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);
}
