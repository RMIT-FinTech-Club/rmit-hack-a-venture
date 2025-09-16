"use client";
import Image from "next/image";
import React from "react";
import "../css/HeroSection.css";
import { motion } from "framer-motion";
import Button from "./Button";

const DURATION = 0.15;
const STAGGER = 0.015;

export const HeroSection = () => {
  return (
    <>
      <div className="max-md:hidden grid grid-cols-2 items-center md:px-[10vw]">
        <div className="justify-center mx-auto md:w-full">
          <div className="mx-auto">
            <div className="text-[3.5rem] mb-[16px] drop-shadow-container">
              <motion.h1
                initial="initial"
                whileHover="hovered"
                className="overflow-hidden relative w-fit text-white font-bold drop-shadow-text"
                style={{
                  lineHeight: "0.9",
                }}
                transition={{
                  staggerChildren: 0.01,
                }}
              >
                <FlipText>RMIT 2025</FlipText>
              </motion.h1>

              <motion.h1
                initial="initial"
                whileHover="hovered"
                className="overflow-hidden relative w-fit"
                style={{
                  lineHeight: "0.9",
                }}
                transition={{
                  staggerChildren: 0.01,
                }}
              >
                <div className="text-[#FDE309] font-bold drop-shadow-text">
                  <FlipText>Hack-A-Venture</FlipText>
                </div>
              </motion.h1>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="w-[420px] lg:w-[490px] text-white font-normal font-sans text-justify">
                Organized by RMIT Vietnam FinTech Club, Hack-A-Venture is a
                hackathon-style innovation competition for{" "}
                <span className="font-bold text-color-gradient inline-block">
                  Business
                </span>{" "}
                and{" "}
                <span className="font-bold text-color-gradient inline-block">
                  Technology
                </span>{" "}
                students nationwide, encouraging them to leverage technologies
                to solve Vietnam's pressing social challenge!
              </div>
            </motion.h1>

            <div className="mt-[40px] flex justify-start gap-4">
              <button className="w-[15vw] h-[48px] bg-gradient-to-b from-[#F37D12] to-[#FDE309] rounded-[12px] justify-items-center flex justify-center items-center text-bold text-white font-semibold font-poppins">
                <a href="" target="_blank" className="no-underline">
                  See Public Handbook
                </a>
              </button>

              <button className="w-[15vw] h-[48px] bg-gradient-to-b from-[#F37D12] to-[#FDE309] rounded-[12px] justify-items-center flex justify-center items-center text-bold text-white font-semibold font-poppins">
                {/* <Button /> */}
                <a href="" target="_blank">
                  Join Now
                </a>
                <Image
                  src={"/Vector.png"}
                  alt="arrow"
                  width={1000}
                  height={1000}
                  className="ml-[10px] w-[13.5px] h-[13.5px]"
                />
              </button>
            </div>
          </div>
        </div>
        <div
          className="items-center mx-auto w-full bg-center md:pt-[100px] md:pb-[100px] bg-contain relative"
          style={{
            backgroundImage: `url(${"hackaventure-road.png"})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right -20px top 20px",
          }}
        >
          <Image
            src={"/hackaventure-logo.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto h-[250px] top-[8rem] left-[-4.5rem] absolute -rotate-3"
          />
          <Image
            src={"/hackaventure-mountain.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto h-[300px] top-[1rem] left-[0.5rem] absolute"
          />
          <Image
            src={"/hackaventure-mountain.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto h-[250px] top-[2rem] left-[6rem] absolute"
          />
          <Image
            src={"/hackaventure-turbin.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto h-[250px] top-[4rem] right-[5.75rem] absolute -rotate-3"
          />
          <Image
            src={"/hackaventure-turbin.png"}
            alt="hero"
            width={1000}
            height={1000}
            className="w-auto h-[150px] top-[5rem] left-[-3.25rem] absolute -rotate-3"
          />
          <Image
            src={"/mascot.png"}
            alt="hero"
            width={1000}
            height={1000}
            className=" my-7 w-auto h-[278px] mx-64"
          />
        </div>
      </div>



















      <div className="md:hidden">
        <div className="mb-[16px] text-5xl text-gradient justify-center mx-auto text-center">
          <h1 className="text-gradient font-sans font-bold mt-[40px]">
            RMIT 2025
          </h1>
          <h1 className="text-gradient font-sans font-bold">Hack-A-Venture</h1>
        </div>

        <div className="text-white my-[16px] font-sans font-normal text-center mx-[16px] mt-[24px]">
          Organized by RMIT Vietnam FinTech Club, Hack-A-Venture is a
          hackathon-style innovation competition for{" "}
          <span className="font-bold text-[#C93FDD]">Business</span> and{" "}
          <span className="font-bold text-[#C93FDD]">Technology</span> students
          nationwide, encouraging them to leverage technologies to solve
          Vietnam's pressing social challenge!
        </div>

        <div className="flex flex-col w-full gap-5 justify-center items-center px-[16px]">
          <button className="text-[#C93FDD] font-semibold text-md hover:underline hover:text-white">
            See Public Handbook
          </button>

          <button className="w-full h-[48px] bg-[#C93FDD] rounded-[12px] justify-items-center flex justify-center items-center hover:text-xl text-bold text-white ease-in transition-all duration-200 font-semibold font-poppins">
            Join Now
            <Image
              src={"/Vector.png"}
              alt="arrow"
              width={1000}
              height={1000}
              className="ml-[10px] w-[13.5px] h-[13.5px]"
            />
          </button>
        </div>

        <div
          className="items-center mx-auto w-full bg-center bg-contain"
          style={{
            backgroundImage: `url(${"hackaventure-road.png"})`,
            backgroundRepeat: "no-repeat",
          }}
        >
          <Image
            src={"/mascot.png"}
            alt="hero"
            width={1000}
            height={1000}
            className=" my-7 w-[300px] h-auto mx-auto"
          />
        </div>
      </div>
    </>
  );
};

const FlipText = ({ children }: { children: string }) => {
  const characters = children
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char));
  return (
    <>
      <div>
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: index * STAGGER,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {characters.map((char, index) => (
          <motion.span
            key={index}
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: index * STAGGER,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </>
  );
};
