'use client'
import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import React, {useState} from 'react'
import Link from 'next/link'
import { motion, scale } from 'motion/react'

const Work = ({isDarkmode}) => {
  const [showAll, setShowAll] = useState(false)

  //determine how many projects to innitally show
  const initialProjects = 4
  const visibleProjects = showAll ? workData : workData.slice(0, initialProjects)
  const MotionLink = motion(Link);


  return (
    <motion.div 
    
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ duration: 1}}

    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 

        initial={{y: 1, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 0.5, delay:0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        My Porfolio
      </motion.h4>
      <motion.h2 
      
        initial={{y: 1, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ duration: 0.5, delay:0.5}}
      className='text-center text-5xl font-Ovo'>My Latest Work</motion.h2>
      <motion.p 
      
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ delay: 0.7, duration: 0.5}}
      className='mb-12 mt-5 font-Ovo max-w-2xl mx-auto text-center'>Welcome to my web development portfolio, explore a collection of projects showcasing my expertise not just in backend development but web development as a whole.</motion.p>

      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{ delay: 0.9, duration: 0.6}} 
      className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-6 justify-center dark:text-black'>
        {visibleProjects.map((project, index)=>(
            <MotionLink 

            whileHover={{scale: 1.05}}
            transition={{ duration:0.3 }}
            key={index} 
            href={project.link || 'https://github.com/weirdTDD/subscription-tracker-api'}
            target= {project.link ? "_blank" : "_self"}
            rel='noopener noreferrer' 
            className={`aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group ${!project.link? 'pointer-events-none' : ''}`}
            style={{backgroundImage:`url(${project.bgImage})` }}>

              <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 '>
                <div>
                    <h2 className='font-semibold'>{project.title}</h2>
                    <p className='text-sm text-gray-700'>{project.description}</p>
                </div>
                  
                <div className={`border rounded-full border-black w-9 aspect-square flex items-center justify-center cursor-pointer shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ${!project.link ? 'opacity-50' : ''}`}>
                    <Image src={assets.send_icon} alt='send icon' className='w-5 h-5'/>
                </div> 
              </div>
                 

            </MotionLink>

             
        ))}

        
      </motion.div>

        {workData.length >initialProjects &&(
      <div className='flex justify-center'>
          <motion.button 
          
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ delay: 1, duration: 0.5}}
          className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px]
           border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover hover:-translate-y-1  duration-500 dark:text-white dark:border-white dark:hover:shadow-white dark:hover:shadow-lg'
              onClick={(e) => { 
                e.preventDefault()
                 setShowAll(!showAll)
              }}
              >{showAll ? 'Show Less': 'Show More'}
              <Image 
              src={isDarkmode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
              alt='Right arrow' 
              width={16}
              height={16}
              className={`transition-transform ${showAll ? 'rotate-90' : ''}`}/>
                
          </motion.button>
      </div>
        )}

    </motion.div>
  )
}

export default Work
