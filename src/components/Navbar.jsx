import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="border-1 fixed top-10 left-[20%] right-[20%] z-50 rounded-4xl">
      <div className="w-full backdrop-blur-2xl rounded-4xl">
        <div className="mx-auto px-4 py-2 md:px-6 md:py-4 flex justify-evenly items-center w-full">
          <div className="flex gap-3 md:gap-6 text-sm md:text-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-500 font-semibold  pb-1"
                  : "text-gray-600 dark:text-gray-300 hover:text-sky-500 transition"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-500 font-semibold pb-1"
                  : "text-gray-600 dark:text-gray-300 hover:text-sky-500 transition"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-sky-500 font-semibold pb-1"
                  : "text-gray-600 dark:text-gray-300 hover:text-sky-500 transition"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
