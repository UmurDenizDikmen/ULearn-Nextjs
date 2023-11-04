"use client";
import { useCallback, useState } from "react";
import Image from "next/image";

interface CoursesInfoProps {
  name: string;
  description: string;
  imageUrl: string;
}

const courses: CoursesInfoProps[] = [
  {
    name: "Software Development",
    description:
      "Are you eager to embark on a journey into the world of software development? Look no further! Our platform offers a comprehensive range of courses designed to equip you with the skills and knowledge needed to excel in this dynamic field.",
    imageUrl: "/images/SoftwareDevelopment.jpg",
  },
  {
    name: "Business",
    description:
      "Are you ready to enhance your business acumen and excel in the world of corporate strategy? Look no further! Our platform offers a diverse range of courses designed to equip you with the skills and knowledge needed to thrive in the competitive business landscape.",
    imageUrl: "/images/Business.jpg",
  },
  {
    name: "Design",
    description:
      "Are you passionate about design and eager to hone your creative skills? Look no further! Our platform offers a curated selection of courses designed to elevate your design expertise and help you craft visually stunning and impactful creations.",
    imageUrl: "/images/Design.jpg",
  },
  {
    name: "Marketing",
    description:
      " Are you ready to delve into the dynamic world of marketing and take your skills to the next level? Look no further! Our platform offers a comprehensive array of courses designed to equip you with the knowledge and strategies needed to thrive in the competitive landscape of marketing.",
    imageUrl: "/images/Marketing.jpg",
  },
];

export default function AvailableCourses() {
  const [selectedCourse, setSelectedCourse] = useState<CoursesInfoProps | null>(
    courses[0]
  );

  const handleCourseHover = useCallback(
    (course: CoursesInfoProps) => {
      setSelectedCourse(course);
    },
    [courses]
  );

  return (
    <div className="bg-gray-200 w-screen pb-2">
      <div
        className="flex lg:flex-col mt-2 flex-col ml-16 mb-2 lg:p-32  lg:pt-5 lg:mt-5 pt-12  
      "
      >
        <h1 className="text-left font-bold text-4xl mb-0">AVAILABLE</h1>
        <h1 className="text-left font-bold text-7xl">COURSES</h1>
        <p className="text-left font-bold text-1xl mt-4 w-1/2">
          This component showcases a curated selection of courses in various
          fields, including Software Development, Business, Design, and
          Marketing. Users can hover over each course to get a glimpse of its
          details, and click to view more information. Elevate your skills and
          knowledge with our comprehensive range of courses.
        </p>
        <div className="flex lg:flex-row flex-col lg:gap-x-40 gap-y-20 lg:mt-10 lg:p-10 items-center mt-10">
          <nav
            className="bg-neutral-800 text-white flex flex-col items-center"
            style={{ width: "800px", height: "350px" }}
          >
            <ul className="flex flex-col gap-y-3 p-4 divide-y-4 ">
              {courses.map((course, index) => (
                <li className=" flex flex-col" key={index}>
                  <a
                    className={`z-10 border-r-2  border-green-600 border-solid  text-white cursor-pointer transition-all font-bold duration-500 pt-4 pr-4 pb-3 mt-2 ${
                      selectedCourse === course && `bg-green-500 `
                    }`}
                    onClick={() => handleCourseHover(course)}
                  >
                    <span className="pl-2">{course.name.toUpperCase()}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {selectedCourse && (
            <div className="flex xl:flex-row lg:flex-col flex-col  lg:gap-6 lg:ml-6 mr-11 ">
              <Image
                width={500}
                height={500}
                src={selectedCourse.imageUrl}
                alt={selectedCourse.name}
                className="mb-2 rounded-sm object-cover"
              />
              <div className="flex flex-col gap-6">
                <h2 className="text-5xl font-bold lg:ml-1 pb-2 pl-3">
                  {selectedCourse.name}
                </h2>
                <p className="pb-2 pr-3 pl-3 mb-1 lg:mr-2">
                  {selectedCourse.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
