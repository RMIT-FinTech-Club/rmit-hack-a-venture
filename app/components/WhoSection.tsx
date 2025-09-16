"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const WhoSection = () => {
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

  const swipeVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="md:px-[10vw] md:mt-[50px] max-md:mt-[20px]" ref={ref}>
      <div className="max-md:text-4xl md:text-6xl text-center text-white font-semibold md:px-[40px] max-md:mt-[40px] drop-shadow-text">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={slideVariants}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="text-color-gradient inline-block leading-[6rem]"
        >
          Who can join&nbsp;
        </motion.div>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={swipeVariants}
          transition={{ duration: 1.3, delay: 0.5 }}
          className="inline-block"
        >
          Hack-A-Venture?
        </motion.div>
      </div>

      <div className="grid md:grid-cols-5 max-md:grid-cols-2 max-md:grid-flow-row md:gap-10 max-md:gap-4 md:mt-[48px] max-md:mt-[24px] max-md:px-[16px] max-md:mx-auto justify-items-center">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`${
              index === 4 ? "max-md:col-span-2 max-md:px-[93px]" : ""
            }`}
          >
            <motion.div
              initial="hidden"
              animate={controls}
              variants={swipeVariants}
              transition={{ duration: 1.3, delay: 0.5 + index * 0.2 }}
              className="p-1 border-[0.25rem] border-dashed border-white rounded-3xl"
            >
              <Image
                src={`/whoSection${index + 1}.png`}
                alt="who"
                width={5000}
                height={5000}
                className="rounded-lg w-full h-auto"
              />
            </motion.div>
          </div>
        ))}
      </div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={swipeVariants}
        transition={{ duration: 1.3, delay: 1.8 }}
      >
        <p className="text-lg items-center justify-center text-center text-white md:px-[100px] md:mt-[48px] max-md:mt-[32px] max-md:hidden">
          Our competition is open for{" "}
          <span className="text-color-gradient font-semibold">
            all inspiring students
          </span>{" "}
          who want to experiment building social impact products using
          Technology. Anyone can join, but our core target student group are the
          above.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={swipeVariants}
        transition={{ duration: 1.3, delay: 0 }}
      >
        <p className="text-lg items-center justify-center text-center text-white md:px-[100px] md:mt-[48px] max-md:mt-[32px] md:hidden">
          Our competition is open for{" "}
          <span className="text-color-gradient font-semibold">
            all inspiring students
          </span>{" "}
          who want to experiment building social impact products using
          Technology. Anyone can join, but our core target student group are the
          above.
        </p>
      </motion.div>
    </div>
  );
};
