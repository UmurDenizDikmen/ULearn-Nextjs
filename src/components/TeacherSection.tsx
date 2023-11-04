interface TeacherSectionProps {
  imageUrl: string;
  name: string;
  description: string;
  star: number;
}

const teachers: TeacherSectionProps[] = [
  {
    name: "Liam Mitchell",
    description:
      "Liam Mitchell is a software developer and instructor with five years of industry experience, having worked with various companies.",
    imageUrl: "/images/Liam.jpg",
    star: 4,
  },
  {
    name: "Olivia Anderson",
    description:
      "Olivia Anderson is a Business Instructor with five years of industry experience, having worked with various companies.",
    imageUrl: "/images/OliviaAnderson.jpg",
    star: 5,
  },
  {
    name: "Ethan Williams",
    description:
      "Ethan Williams is a Design Instructor with five years of industry experience, having worked with various companies.",
    imageUrl: "/images/EthanWilliams.jpg",
    star: 4,
  },
  {
    name: "Emma Davis",
    description:
      "Emma Davis is a Marketing Instructor with five years of industry experience, having worked with various companies.",
    imageUrl: "/images/EmmaDavis.jpg",
    star: 5,
  },
];

export default function TeacherSection() {
  return (
    <div className="flex l flex-col ml-16 mb-2  pb-1 mt-2 lg:pt-5 pt-2  md:mt-10 lg:p-32">
      <h1 className="text-left font-bold text-4xl mb-0">AWESOME</h1>
      <h1 className="text-left font-bold text-7xl">TEACHERS</h1>
      <p className="text-left font-bold text-1xl mt-4 w-1/2">
        Unlock a world of benefits with your membership. Enjoy unlimited access,
        4500+ video courses, expert teachers, valid certification, on-the-go
        learning, and 24x7 super support.
      </p>
      <div className="my-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white-100 mt-28">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-4 transition duration-300 transform hover:scale-105 mr-10 cursor-pointer"
          >
            <img
              src={teacher.imageUrl}
              alt={teacher.name}
              className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
            />
            <h2 className="text-xl font-bold mb-2">{teacher.name}</h2>
            <p className="text-gray-700">{teacher.description}</p>
            <div className="mt-2 text-[gold]">
              {Array.from({ length: teacher.star }, (_, index) => (
                <span key={index}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
