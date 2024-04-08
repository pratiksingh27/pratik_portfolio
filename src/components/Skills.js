import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light dark:bg-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:text-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration:1.5} }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:circularDarkLg md:bg-circularLightMd md:dark:circularDarkMd sm:bg-circularLightSm sm:dark:circularDarkSm">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light dark:text-dark text-light p-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS3" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="12vw" />
        <Skill name="TailwindCSS" x="-20vw" y="-15vw" />
        <Skill name="SASS" x="15vw" y="-12vw" />
        <Skill name="Figma" x="32vw" y="-5vw" />
        <Skill name="Web design" x="0vw" y="-20vw" />
        <Skill name="Firebase" x="-25vw" y="18vw" />
        {/* <Skill name="Firebase" x="18vw" y="18vw" /> */}
      </div>
    </>
  );
};

export default Skills;
