import { BsLinkedin } from "react-icons/bs";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { FaTwitterSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-200 p-10 grid lg:grid-cols-3 grid-col-1  items-center mt-6 lg:gap-52 gap-10">
      <div className="flex flex-col gap-6 lg:ml-52 cursor-pointer font-bold text-2xl">
        <span>COMPANY</span>
        <a>ABOUT US</a>
        <a>CONTACT</a>
        <a>JOBS</a>
        <a>PRESS KIT</a>
      </div>
      <div className="flex flex-col gap-6  cursor-pointer font-bold text-2xl lg:mb-28">
        <span className="text-green-700">OFFICE</span>
        <a> 56 Tonbridge Rd / Cookley</a>
      </div>
      <div className="flex flex-row gap-4 cursor-pointer justify-center lg:mr-64 lg:mb-44">
        <a className="mt-2 icon-hover transform transition-transform hover:-translate-y-1">
          <BsLinkedin size={60} />
        </a>
        <a className="mb-1 icon-hover transform transition-transform hover:-translate-y-1">
          <BiLogoFacebookSquare size={78} />
        </a>
        <a className="mt-1 icon-hover transform transition-transform hover:-translate-y-1">
          <FaTwitterSquare size={70} />
        </a>
      </div>
    </footer>
  );
}
