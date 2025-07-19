import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2" />

        <div className='w-max flex items-center gap-2 mx-auto mb-4'>
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
        edwardmorhe777@gmail.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 py-6 mx-[10%] mt-12'>
        <p className='text-center text-sm text-gray-600 mb-4 dark:text-white/80'>© 2025 Edward Morhe. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center sm:mt-0 mt-4'>
            <li><a target='_blank' href="https://www.linkedin.com/in/edward-morhe-0bab1224b">LinkedIn</a></li>
            <li><a target='_blank' href="https://github.com/weirdTDD">Github</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer


//https://github.com/weirdTDD
