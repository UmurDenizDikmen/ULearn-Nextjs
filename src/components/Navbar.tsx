"use client";
import { useCallback, useState } from "react";
import Categories from "./Categories";

export default function Navbar() {
  const [selected, setSelected] = useState(false);

  const handleCourseHover = useCallback(() => {
    setSelected(true);
  }, []);

  const handleCourseLeave = useCallback(() => {
    setSelected(false);
  }, []);
  return (
    <nav
      onMouseLeave={handleCourseLeave}
      className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 w-screen "
    >
      <div className="max-w-screen-xl gap-3 p-3 pl-1 ml-0">
        <div className="flex lg:flex-row flex-col md:flex-col gap-6 lg:items-center cursor-pointer lg:ml-10 ml-2mx-auto items-start shrink-0">
          <img src="/images/main.png" className="h-10" alt="Ulearn" />
          <div className="ml-6 flex flex-col">
            <p
              onMouseEnter={handleCourseHover}
              className="text-xl font-bold text-white"
            >
              Categories
            </p>
            <div className="hidden lg:flex ">{selected && <Categories />}</div>
          </div>

          <form className="shrink-0">
            <input
              name="searchQuery"
              type="text"
              placeholder="Search"
              className="mr-2.5 p-1.5 rounded-lg border-solid border-stone-300 shrink md:w-32"
              style={{ width: "1250px" }}
            />
          </form>
          <div>
            <svg
              xmlns="https://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 25 25"
              stroke="green"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Login
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Register
          </button>
        </div>

        <div className="hidden w-full" id="navbar-hamburger">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <a className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600">
                Home
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                Pricing
              </a>
            </li>
            <li>
              <a className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
