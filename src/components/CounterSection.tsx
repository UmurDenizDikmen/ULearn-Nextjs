"use client";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import CountUp from "react-countup";
import { useEffect, useState } from "react";

interface CounterSectionProps {
  logo: React.ReactNode;
  number: number;
  description: string;
}

const counter: CounterSectionProps[] = [
  {
    logo: <BsFillEmojiSmileFill />,
    number: 4500,
    description: "Videos Courses",
  },
  {
    logo: <BsFillEmojiSmileFill />,
    number: 27903,
    description: "Happy Student",
  },
  {
    logo: <BsFillEmojiSmileFill />,
    number: 200,
    description: "Teachers",
  },
  {
    logo: <BsFillEmojiSmileFill />,
    number: 900,
    description: "Certification",
  },
];

const TOP_OFFSET = 66;

export default function CounterSection() {
  const [counterOn, setCounterOn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        return setCounterOn(true);
      } else {
        setCounterOn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-green-500 mb-3 p-5 h-56 w-screen">
      <div className="flex flex-row mt-10 lg:gap-x-8 gap-x-4 md:gap-x-2 md:ml-8 md:mr-6 justify-between">
        {counter.map((counter, index) => (
          <div className="flex flex-row gap-2" key={index}>
            <h2 className="lg:text-6xl text-xl font-bold mb-2">
              {counter.logo}
            </h2>
            <div className="flex flex-col">
              <p className="text-white font-bold  lg:text-3xl text-sm md:text-3xl">
                {" "}
                +{" "}
                {counterOn ? (
                  <CountUp
                    start={counter.number}
                    end={counter.number + 400}
                    delay={0}
                    duration={4}
                  />
                ) : (
                  counter.number
                )}
              </p>
              <p className="text-white font-bold lg:text-3xl text-sm md:text-3xl">
                {counter.description.toUpperCase()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
