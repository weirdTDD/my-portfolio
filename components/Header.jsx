import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
        <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        >
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </motion.div>

        <motion.h3 
        initial={{ y: -30, opacity: 0 }}
        whileInView={{y:0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className= 'flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Edward Morhe <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>
        <motion.h1 
        initial={{ y: -40, opacity: 0 }}
        whileInView={{y:0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            A FullStack Web Developer based in Accra-Ghana.
        </motion.h1>
        <motion.p 
        initial={{opacity: 0 }}
        whileInView={{opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'>
            I'm a FullStack Developer from Spintex, Accra-Ghana, with solid interest in building secure, scalable and well optimised Backend Systems. I have more than a year of experience in this field and I'm willing to learn more and contribute to open source projects while collaborating with other devlopers. 
        </motion.p>
        
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a 
            initial={{ y: 30, opacity: 0 }}
        whileInView={{y:0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
            href="#contact" 
            className='px-10 py-3 border border-white rounded-full bg-black text-white
             flex items-center gap-2 dark:hover:bg-white/10 hover:-translate-y-1 transition dark:bg-transparent'>contact me<Image src={assets.right_arrow_white} alt='' 
             className='w-4'/></motion.a>

            <motion.a 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{y:0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }} 
            href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray500 
            flex items-center gap-2 bg-white hover:-translate-y-2 hover:bg-white/80 transition dark:text-black '>my resume <Image src={assets.download_icon} alt='' 
            className='w-4'/></motion.a>
        </div>

    </div>
  )
}

export default Header
