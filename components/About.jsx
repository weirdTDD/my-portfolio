import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import WorkTimeline from "./Experiences";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[15%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center gap-20 my-20"
      >
        <div className="flex flex-col md:flex-row items-center justify-center gap-x-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="w-64 rounded-3xl max-w-none mb-4"
          >
            <Image
              src={assets.user_image}
              alt="user"
              className="w-full rounded-3xl"
            />
          </motion.div>

          <div className="flex items-center justify-center ">
            <p className="mb-4 max-w-lg font-Ovo px-10">
              I'm a motivated and detail-oriented Web-Developer with focus on
              backend development and hands-on experience building web
              applications with multiple Frameworks and Libraries.
              Skilled in developing secure, efficient, and scalable back-end
              systems with a focus on data handling, API integration, and
              server-side logic. I’m currently expanding backend expertise
              through Data Engineering. Skilled in designing RESTful APIs,
              handling JSON data, and building services that support AI-driven
              applications.
            </p>
          </div>
        </div>

        {/*--------- TOOL I USE -------*/}

        <div className="flex  flex-col items-center gap-6">
          <div className="my-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
              className="font-semibold text-gray-700 font-Ovo dark:text-white/80 text-center mb-4"
            >
              Tools I Use
            </motion.h4>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="flex items-center gap-4 sm:gap 6"
            >
              {toolsData.map((tool, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor pointer hover:-translate-y-1 duration-500"
                  key={index}
                >
                  <Image src={tool} alt="Tool" className="w-6 sm:w-7" />
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
            >
              {infoList.map(({ icon, iconDark, title, description }, index) => (
                <motion.li
                  whileHover={{ scale: 1.1 }}
                  className="border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover"
                  key={index}
                >
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={isDarkMode ? iconDark : icon}
                      alt={title}
                      className="w-7 "
                    />
                    <h3 className="my-3 text-sm font-semibold text-gray-700 dark:text-white">
                      {title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-xs dark:text-white/80">
                    {description}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </motion.div>
      <div className="px-0!">
        
      </div>
       
     
    </motion.div>
  );
};

export default About;
