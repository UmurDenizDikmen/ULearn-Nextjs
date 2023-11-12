"use client";
import { BsUnlockFill } from "react-icons/bs";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { BsFillMicFill } from "react-icons/bs";
import { GrCertificate } from "react-icons/gr";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SlSupport } from "react-icons/sl";

interface MemberInfoSectionProps {
  name: string;
  description: string;
  logo: React.ReactNode;
}

const projects: MemberInfoSectionProps[] = [
  {
    name: "UnLimited access",
    description:
      "Experience the freedom of boundless possibilities. Our service is tailored to your unique needs, ensuring you have unrestricted access to everything you require.",
    logo: <BsUnlockFill />,
  },
  {
    name: "4500 video courses",
    description:
      "Unlock a treasure trove of knowledge with our extensive library of 4500 video courses. We curate content to help turn your ideas into thriving businesses.",
    logo: <BsFillCameraVideoFill />,
  },
  {
    name: "Expert teachers",
    description:
      "Learn from the best in the field with our team of seasoned experts. We're dedicated to turning your ideas into successful projects using the Agile software development method.",
    logo: <BsFillMicFill />,
  },
  {
    name: "Valid Certification",
    description:
      "We ensure that your achievements are recognized with industry-standard certifications. Transform your ideas into certified success stories with our Agile software development approach.",
    logo: <GrCertificate />,
  },
  {
    name: "On-the-go learning",
    description:
      "Seize every moment for learning with our accessible, on-the-go platform. We utilize Agile software development to turn your ideas into portable knowledge.",
    logo: <MdOutlinePhoneIphone />,
  },
  {
    name: "24x7 Super Support",
    description:
      "Experience unparalleled support around the clock. Our dedicated team is always available to provide you with exceptional assistance, 24 hours a day, 7 days a week.",
    logo: <SlSupport />,
  },
];
export default function MemberInfoSection() {
  return (
    <div
      className="flex lg:flex-col flex-col ml-16 mb-2  pb-1 mt-96 pt-96 lg:pt-5   lg:mt-10 md:mt-44 lg:p-32 
      "
    >
      <h1 className="text-left font-bold text-4xl mb-0">MEMBERSHIP</h1>
      <h1 className="text-left font-bold text-7xl">INCLUDE</h1>
      <p className="text-left font-bold text-1xl mt-4 lg:w-1/2">
        Unlock a world of benefits with your membership. Enjoy unlimited access,
        4500+ video courses, expert teachers, valid certification, on-the-go
        learning, and 24x7 super support.
      </p>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-white-100 mt-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <div className="mt-12  flex flex-col flex-wrap">
              <div className="flex flex-row gap-1">
                <h1 className="text-2xl flex items-center justify-center bg-green-500 rounded-full h-10">
                  <div className=" p-2 rounded-full">{project.logo}</div>
                </h1>
                <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
              </div>
              <p className="mb-4 font-extralight">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
