import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = ({isDarkmode}) => {
  return (
    <motion.div 

     initial={{opacity: 0}}
     whileInView={{opacity: 1}}
     transition={{ duration: 1}}

    id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
      <motion.h4 

      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.5, delay:0.3}}

      className='text-center mb-2 text-lg font-Ovo'>
        What I Offer
      </motion.h4>
      <motion.h2 

      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 0.5, delay:0.3}}

      className='text-center text-5xl font-Ovo'>My Sevices</motion.h2>
      <motion.p 

        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 0.5, delay:0.7}}

      className='mb-12 mt-5 font-Ovo max-w-2xl mx-auto text-center'>I offer fullstack development services which including creative web design, API creation, database management, authentication, server-side logic, deployment, real-time features, and performance optimization.</motion.p>

      <motion.div 

        initial={{opacity: 0}}        
        whileInView={{opacity: 1}}
        transition={{ duration: 0.6, delay:0.9}}

      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10 justify-center ">
       {serviceData.map(({icon, title, description, link},index)=>(
        <motion.div 
        
        whileHover={{scale:1.05}}

        key={index} className='border boader-gray-300 rounded-lg px-8 py-12 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition  duration-500 hover:shadow-lg dark:border-white  dark:hover:shadow-white dark:hover:bg-white/5'>
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4  text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'> 
                Read more<Image src={isDarkmode ? assets.left_arrow : assets.right_arrow} alt='' className='w-5'/> 
            
            </a>

        </motion.div>
       ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
