import { Input } from 'postcss'
import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'motion/react'

const Contact = () => {


  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "84f2b9e7-cef3-44a4-a67b-c27dcc9e991d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };
    
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-none bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none' >
        <motion.h4 
        
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{ delay: 0.3, duration: 0.5}}
        className='text-center mb-2 text-lg font-Ovo'>
        Lets Connect!
      </motion.h4>
      <motion.h2 
      
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{ delay: 0.5, duration: 0.5}}
      className='text-center text-5xl font-Ovo'>Get in touch </motion.h2>
      <motion.p 
        
          initial={{y: -20, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{ delay: 0.7, duration: 0.5}}
          className='mb-12 mt-5 font-Ovo max-w-2xl mx-auto text-center'>
          I'd love to hear from you! If you have questions, comments, or feedback,<br/> kindly use the form below.
        </motion.p>

        <motion.form 
          
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ delay: 0.9, duration: 0.5}}
          onSubmit={onSubmit} className='max-w-2xl mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'> 
              <motion.input 
                
                initial={{x: -50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{ delay: 1, duration: 0.3}}
                type='text' placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:text-black dark:border-white/90' name='name'/>
                  
              <motion.input 
              
                initial={{x: 50, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{ delay: 1.2, duration: 0.3}}
              type='email' placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:text-black dark:border-white/90'name='email'/>
              
          </div>
          
          <motion.textarea 
          
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{ delay: 1.1, duration: 0.4}}
            rows='6' placeholder='Enter your message' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:text-black dark:border-white/90' name='message'>
              
          </motion.textarea>

          <motion.button 
            
            whileHover={{scale:1.05}}
            transition={{duration: 0.2}}
            type='submit 'className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:border-[0.5px] dark:hover:bg-white/50 '>Submit now <Image src= {assets.right_arrow_white} alt=''/>
          </motion.button>

          <p className='mt-4'>{result}</p>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact
