"use client";
import { workData, assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { motion, scale } from "motion/react";

const Work = ({ isDarkmode }) => {
  const [showAll, setShowAll] = useState(false);

  //determine how many projects to innitally show
  const initialProjects = 3;
  const visibleProjects = showAll
    ? workData
    : workData.slice(0, initialProjects);
  const MotionLink = motion(Link);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: 1, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Porfolio
      </motion.h4>
      <motion.h2
        initial={{ y: 1, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="mb-12 mt-5 font-Ovo max-w-2xl mx-auto text-center"
      >
        Welcome to my web development portfolio, where you can explore a
        collection of projects showcasing my expertise not just in front-end
        development but in Full-Stack Web Development as a whole.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6 justify-center dark:text-black"
      >
        {visibleProjects.map((project) => (
          <MotionLink
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={project.id} // use unique id instead of index
            href={project.link || "#"} // use "#" when no link (or conditionally render a div)
            target={project.link ? "_blank" : "_self"}
            rel={project.link ? "noopener noreferrer" : undefined}
            className={`aspect-square bg-no-repeat bg-cover bg-center bg-white/10 rounded-xl relative border border-gray-200 shadow-2xl cursor-pointer group ${
              !project.link ? "pointer-events-none" : ""
            }`}
            // Remove the broken backgroundImage – it's not needed
          >
            <div className="relative w-full h-full">
              {/* Image Card – fills most of the square */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-11/12 h-[55%] xl:h-[65%] rounded-lg bg-white overflow-hidden shadow-md">
                <Image
                  src={project.bgImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 33vw, 25vw"
                />
              </div>

              {/* Desc Card */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11/12 xl:h-[25%] h-[30%] bg-white rounded-lg py-3 px-4 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-md">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="md:text-sm text-xs text-gray-700 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* This div is decorative – the whole card is clickable anyway */}
                <div
                  className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
                  aria-hidden="true" // hide from screen readers because it's not interactive
                >
                  <Image
                    src={assets.send_icon}
                    alt=""
                    width={20}
                    height={20}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </MotionLink>
        ))}
      </motion.div>

      {/*Show more button*/}

      {workData.length > initialProjects && (
        <div className="flex justify-center">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
           border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover hover:-translate-y-1  duration-500 dark:text-white dark:border-white dark:hover:shadow-white dark:hover:shadow-lg"
            onClick={(e) => {
              e.preventDefault();
              setShowAll(!showAll);
            }}
          >
            {showAll ? "Show Less" : "Show More"}
            <Image
              src={
                isDarkmode
                  ? assets.right_arrow_bold_dark
                  : assets.right_arrow_bold
              }
              alt="Right arrow"
              width={16}
              height={16}
              className={`transition-transform ${showAll ? "rotate-90" : ""}`}
            />
          </motion.button>
        </div>
      )}
    </motion.div>
  );
};

export default Work;
