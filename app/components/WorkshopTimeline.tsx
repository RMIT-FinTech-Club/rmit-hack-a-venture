"use client";
import React, { FC, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const WorkshopTimeline = () => {
  return (
    <section className="w-full flex flex-col items-center md:px-12 max-md:px-10 max-md:mt-[40px] overflow-x:hidden">
      <div className="drop-shadow-container">
        <h1
          className={`max-md:text-4xl md:text-6xl text-center text-white font-semibold drop-shadow-text`}
        >
          Hack-A-Venture <span className="text-color-gradient">Timeline</span>
        </h1>
      </div>
      <RoundFormatTimeline />
      <TrainingWorkshopTimeline />
    </section>
  );
};

const RoundFormatTimeline = () => {
  return (
    <section className="w-full flex flex-col items-center bg-center bg-[url('/world.png')] bg-no-repeat bg-[length:70%_70%]">
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            background-image: none;
          }
        }
      `}</style>
      <RoundedTimelineHeader text="ROUND FORMAT" />
      <p className="text-white text-[24px] font-bold mt-[70px] mb-[10px] max-md:hidden">
        Round
      </p>
      <DetailTimeLine
        rounded={true}
        numberOfOrder={1}
        rightSideOfTextSection={true}
        timeRangeText="Nov 3 – Nov 16, 2025"
        dashLineColor="#000000 0%, #0EA2FF 47%, #000000 100%"
        headline="IDEA PROPOSAL"
        subHeadline="Empathize, define, ideate!"
        paragraph="Participants are to submit an idea proposal/whitepaper, outlining SDG-related problems they want to address in Vietnam that can leverage either AI, Blockchain, or Cybersecurity. SDGs & Whitepaper structure will be released to participants at start of Round 01."
      />

      <DetailTimeLine
        rounded={true}
        numberOfOrder={2}
        rightSideOfTextSection={false}
        timeRangeText="Dec 4 – Dec 17, 2025"
        headline="IDEA DOCUMENTATION"
        dashLineColor="#000000 0%, #10D8D8 47%, #000000 100%"
        subHeadline="Specify & materialize ideas!"
        paragraph="Teams are to provide a slide presentation, and video presentation containing a Business Documentation and Technology Documentation. These documents detail specifically how their idea work Business-wise and Technology-wise, using specific frameworks."
      />

      <DetailTimeLine
        rounded={true}
        numberOfOrder={3}
        rightSideOfTextSection={true}
        timeRangeText="Jan 21 – Jan 22, 2025"
        headline="HACKDAY & PITCHING"
        subHeadline="Prototype & Presentation"
        dashLineColor="#000000 0%, #22E29A 47%, #000000 100%"
        paragraph="Teams are to create a Prototype with their unique technical features. Teams have to also meet additional Technical Requirements and Business Requirements. Teams can consult with mentors online or on HackDay 01. On HackDay 02, teams pitch to determine the ultimate champion and runner-up prizes!"
      />
    </section>
  );
};

const TrainingWorkshopTimeline = () => {
  return (
    <section className="w-[100%] flex flex-col items-center md:mt-[60px]">
      <RoundedTimelineHeader text="TRAINING WORKSHOPS" />
      <p className=" hidden lg:inline-block text-xl font-medium mt-[30px] mb-[40px] text-[#91DAAE]">
        To support participants, Hack-A-Venture 2025 will provide a series of
        workshops
      </p>
      <p className="text-white text-[24px] font-bold mb-[10px] mt-[70px] lg:mt-0 max-md:hidden">
        Workshop
      </p>
      <DetailTimeLine
        rounded={false}
        numberOfOrder={1}
        rightSideOfTextSection={true}
        timeRangeText="Nov 04, 2025"
        dashLineColor="#000000 0%, #0EA2FF 47%, #000000 100%"
        headline="WORKSHOP 01"
        subHeadline="Technology in Business Innovation"
        paragraph="This workshop provides guidance on identifying the most appropriate technology stack, for example, AI, Blockchain, Cybersecurity, based on the problem statement or business challenge."
      />

      <DetailTimeLine
        rounded={false}
        numberOfOrder={2}
        rightSideOfTextSection={false}
        timeRangeText="Nov 10, 2025"
        dashLineColor="#000000 0%, #10D8D8 47%, #000000 100%"
        headline="WORKSHOP 02"
        subHeadline="Foundations of Sustainability Thinking"
        paragraph="This workshop will equip participants with the core principles of sustainability thinking, enabling them to apply sustainable frameworks to decision-making and problem-solving in diverse contexts."
      />

      <DetailTimeLine
        rounded={false}
        numberOfOrder={3}
        rightSideOfTextSection={true}
        timeRangeText="Dec 04, 2025"
        dashLineColor="#000000 0%, #22E29A 47%, #000000 100%"
        headline="WORKSHOP 03"
        subHeadline="Documentation Training"
        paragraph="This workshop will train participants on Business & Technical Frameworks that are required for Round 2 submission. These could include Business Model, SWOT Analysis, or Systems Architecture, etc."
      />
      <DetailTimeLine
        rounded={false}
        numberOfOrder={4}
        rightSideOfTextSection={false}
        timeRangeText="Jan 21, 2026"
        dashLineColor="#000000 0%, #22E29A 47%, #000000 100%"
        headline="WORKSHOP 04"
        subHeadline="Pitching Techniques"
        paragraph="Participants will be trained on pitching techniques and how to perform their live demostrations to impress judges and achieve the championship!"
      />
    </section>
  );
};

const RoundedTimelineHeader: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="text-white text-[20px] lg:text-[24px] font-semibold py-2 px-6 rounded-full text-2xl shadow-md max-md:mt-[24px] md:mt-[70px] bg-gradient-to-b from-[#F37D12] to-[#FDE309]">
      {text}
    </div>
  );
};

const DetailTimeLine: React.FC<{
  rounded: boolean;
  numberOfOrder: number;
  rightSideOfTextSection: boolean;
  timeRangeText: string;
  headline: string;
  subHeadline: string;
  dashLineColor: string;
  paragraph: string;
}> = ({
  rounded,
  numberOfOrder,
  rightSideOfTextSection,
  timeRangeText,
  headline,
  subHeadline,
  paragraph,
  dashLineColor,
}) => {
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

  const leftSlideVariants = {
    hidden: { opacity: 0, x: 1000 },
    visible: { opacity: 1, x: 0 },
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: -1000 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/*----------- laptop version ---------*/}
      <section className="relative w-[80%] lg:pb-[300px] lg:block hidden">
        {/*--------- milestone round number and timeline -------*/}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-[30px]">
          <MilestoneRound rounded={rounded} numberOfOrder={numberOfOrder} />
          <VerticalLine numberOfOrder={numberOfOrder} rounded={rounded} />
          <TimelineRange
            numberOfOrder={numberOfOrder}
            timeRangeText={timeRangeText}
          />
        </div>
        {/*---------- dashline and textSection ------*/}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={
            rightSideOfTextSection ? leftSlideVariants : rightSlideVariants
          }
          transition={{ duration: 1, delay: 0.25 * numberOfOrder }}
        >
          <div
            className={`absolute ${
              rightSideOfTextSection ? "-right-[85px]" : "-left-[85px]"
            } ${rounded ? "top-[40px]" : "top-[25px]"} flex ${
              !rightSideOfTextSection && "flex-row-reverse"
            } items-start w-[49%]`}
          >
            <DashLine rightSide={rightSideOfTextSection} />
            <TextSection
              textAlign={rightSideOfTextSection ? "right" : "left"}
              headLine={headline}
              subHeadline={subHeadline}
              paragraph={paragraph}
            />
          </div>
        </motion.div>
      </section>

      {/*----------- mobile version ---------*/}
      <section className="w-[90%] flex flex-col items-center gap-[15px] my-[30px] lg:hidden">
        <MilestoneRound rounded={rounded} numberOfOrder={numberOfOrder} />
        <TimelineRange
          numberOfOrder={numberOfOrder}
          timeRangeText={timeRangeText}
        />
        <div
          className="mx-auto w-[150px] h-[2.25px]"
          style={{
            background: `linear-gradient(to right, ${dashLineColor}, rgba(14, 162, 255, 0))`,
          }}
        ></div>
        <TextSection
          textAlign="center"
          headLine={headline}
          subHeadline={subHeadline}
          paragraph={paragraph}
        />{" "}
      </section>
    </>
  );
};

const MilestoneRound: React.FC<{ rounded: boolean; numberOfOrder: number }> = ({
  rounded,
  numberOfOrder,
}) => {
  return (
    <div
      className={`${
        rounded
          ? "rounded-full border-[12px] w-[92px] h-[92px]"
          : "rounded-lg border-[4px] w-[68px] h-[68px]"
      } border-[#F37D12] bg-[#FDE309] shadow-lg flex items-center justify-center text-[32px] font-bold`}
      style={{
        boxShadow: "0 0 5px 7px #291231", // Custom shadow
        // filter: "blur(5px)", // Blur for soft shadow effect
      }}
    >
      0{numberOfOrder}
    </div>
  );
};

const TimelineRange: React.FC<{
  numberOfOrder: number;
  timeRangeText: string;
}> = ({ numberOfOrder, timeRangeText }) => {
  return (
    <h3
      className={` flex-shrink-0 w-fit p-2 rounded-lg bg-gradient-to-b from-[#01985C] to-[#2DC6D2] text-center text-[16px] lg:text-[18px] font-semibold text-[#000000]`}
    >
      {timeRangeText}
    </h3>
  );
};
const VerticalLine: React.FC<{ numberOfOrder: number; rounded: boolean }> = ({
  numberOfOrder,
  rounded,
}) => {
  return (
    <div
      className={`absolute ${rounded ? "top-[98px]" : "top-[68px]"} w-0.5 ${
        rounded ? "h-[290px]" : "h-[350px]"
      } mx-auto -z-10`}
      style={{
        background: `linear-gradient(to bottom, ${
          numberOfOrder == 1
            ? "#01985C"
            : numberOfOrder == 2
            ? "#93BC4A"
            : numberOfOrder == 3
            ? "#C1CF3E"
            : numberOfOrder == 4 && "#84B74F"
        }, transparent`,
      }}
    />
  );
};
const DashLine: React.FC<{ rightSide: boolean }> = ({ rightSide }) => {
  return (
    <div
      className={`flex-shrink-0 w-[86px] flex items-center ${
        !rightSide
          ? "ml-[50px] mr-[0px] flex-row-reverse"
          : "ml-[0px] mr-[50px]"
      } `}
    >
      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#F37D12] to-[#FDE309]" />
      <div
        className={`${
          !rightSide ? "right-[15px]" : "left-[10px]"
        } h-1 w-[70px] -z-10`}
        style={{
          background: `linear-gradient(to ${
            !rightSide ? "left" : "right"
          }, #F37D12, transparent)`,
        }}
      />
    </div>
  );
};

const TextSection: React.FC<{
  textAlign: string;
  headLine: string;
  subHeadline: string;
  paragraph: string;
}> = ({ textAlign, headLine, subHeadline, paragraph }) => {
  return (
    <div
      className={`flex flex-col gap-[10px] lg:relative lg:-top-[10px] ${
        textAlign == "right"
          ? "items-start text-start"
          : textAlign == "center"
          ? "items-center text-center"
          : textAlign == "left" && "items-end text-end"
      }`}
    >
      <h1
        className={`text-color-gradient text-2xl font-bold ${
          headLine == "" && "hidden"
        }`}
      >
        {headLine}
      </h1>
      <h2
        className={`text-green-color-gradient text-xl font-semibold ${
          subHeadline == "" && "hidden"
        }`}
      >
        {subHeadline}
      </h2>
      <p
        className={`text-white text-lg font-medium ${
          paragraph == "" && "hidden"
        }`}
      >
        {paragraph}
      </p>
    </div>
  );
};
