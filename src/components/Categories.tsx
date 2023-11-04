import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

interface CategoriesPros {
  name: string;
}

const categories: CategoriesPros[] = [
  {
    name: "Software Development",
  },
  {
    name: "Business",
  },
  {
    name: "Design",
  },
  {
    name: "Marketing",
  },
];

export default function Categories() {
  return (
    <nav
      style={{ width: "250px", height: "250px" }}
      className=" border-gray-400 border-solid border-2 bg-gray-300  absolute mt-6 z-10 h-44 rounded-md font-bold"
    >
      <ul>
        {categories.map((category, index) => (
          <li
            className="pt-8 pl-4 text-black hover:text-white flex flex-row gap-2"
            key={index}
          >
            {category.name}

            <AiOutlineArrowRight className="mt-1" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
