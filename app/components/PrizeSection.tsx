"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const prizeData = [
  {
    title: "Champion Prize",
    src: "/First_Prize.png",
    alt: "1st Prize",
    desktopOrder: 2, // The middle item on desktop
    mobileOrder: 1,  // The first item on mobile
    isChampion: true,
    delay: 0.2,
  },
  {
    title: "1st Runner Up",
    src: "/Second_Prize.png",
    alt: "2nd Prize",
    desktopOrder: 1, // The first item on desktop
    mobileOrder: 2,  // The second item on mobile
    isChampion: false,
    delay: 0.8,
  },
  {
    title: "2nd Runner Up",
    src: "/Third_Prize.png",
    alt: "3rd Prize",
    desktopOrder: 3, // The last item on desktop
    mobileOrder: 3,  // The third item on mobile
    isChampion: false,
    delay: 1.4,
  },
];

export const PrizeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      ref={ref}
      className="text-white flex flex-col md:mt-[60px] max-md:px-10 max-md:mt-[20px] text-center"
    >
      {/* --- HEADING SECTION --- */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={variants}
        transition={{ duration: 1.3, delay: 0.2 }}
      >
        <span className="max-md:text-3xl md:text-6xl text-center text-white font-semibold md:px-[40px] drop-shadow-text">
          Hack-A-Venture <span className="text-color-gradient">Prizes</span>
        </span>
        {/* <p className="md:mt-[24px] text-lg md:text-xl font-medium font-sans text-white max-md:mt-[10px]">
          Prize components will include{" "}
          <span className="text-color-gradient">GotIt Vouchers</span>,{" "}
          <span className="text-color-gradient">Course Scholarships</span> and{" "}
          <span className="text-color-gradient">Medals</span>
        </p> */}
      </motion.div>

      {/* --- PRIZES CONTAINER --- */}
      <div className="flex flex-row md:gap-12 text-[#FBF6FD] justify-between items-center md:mt-[25px] md:px-20 max-md:mt-[24px] w-full">
        
        {prizeData
          .sort((a, b) => a.desktopOrder - b.desktopOrder) // Sort for desktop order
          .map((prize) => (
            <motion.div
              key={prize.title}
              animate={controls}
              initial="hidden"
              variants={variants}
              transition={{ duration: 1.3, delay: prize.delay }}
              className={`text-center order-${prize.desktopOrder} max-md:order-${prize.mobileOrder}`}
            >
              <Image
                src={prize.src}
                alt={prize.alt}
                className={`${
                  prize.isChampion
                    ? "md:w-[230px] w-[110px]"
                    : "md:w-[160px] w-[80px]"
                } h-auto rounded-xl mb-4 object-cover mx-auto`}
                width={270}
                height={270}
              />
              <div className="drop-shadow-container">
                <h3
                  className={`${
                    prize.isChampion
                      ? "md:text-3xl text-2xl"
                      : "md:text-3xl text-xl" 
                  } font-semibold mb-2 drop-shadow-text`}
                >
                  {prize.title}
                </h3>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  );
};