'use client'

import Image from 'next/image'
import React from 'react'
import PulsatingButton from './Button'
import { IoIosArrowRoundForward } from "react-icons/io"
import { motion } from 'framer-motion'

function Founder() {
  return (
    <section className='bg-slate-50 w-full py-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-center font-bold text-4xl text-gold-2'>About Shamyra Alice</h2>
        <div className='flex justify-center gap-0 mt-2'>
            <div className='w-6 h-1 bg-gold-1 opacity-50'></div>
            <div className='w-6 h-1 bg-gold-3'></div>
            <div className='w-6 h-1 bg-gold-1 opacity-50'></div>
        </div>
        <br />
        <div className='flex flex-col items-center mx-auto gap-4'>
            <motion.div className='relative h-[250px] md:h-[200px] lg:h-[300px] xl:h-[400px] w-[250px] md:w-[200px] lg:w-[300px] xl:w-[400px] overflow-hidden rounded-full border-8 border-gold-2 shadow'
            
            initial={{x: -100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1, type: 'spring', bounce: 0.5}}
            >
                <Image src='/img/shamyra.png'
                  fill
                  alt='Founder Image'
                  className='object-cover'
                />
            </motion.div>

            <div className='max-w-[80vw] md:max-w-[50vw] text-sm md:text-base text-gray-700 text-center tracking-wide leading-8'>
            <p>
                Shamyra Alice is a passionate floral designer with a love for creating stunning arrangements that tell a story. With years of experience in the industry, she has honed her skills to bring out the beauty in every bloom.
                Her unique approach combines artistry with a deep understanding of nature, resulting in breathtaking floral installations that leave a lasting impression.
            </p>
        </div>
        </div>
        <div className='flex justify-center mt-10'>
          <PulsatingButton className='bg-gold-2 text-sm font-medium rounded-full hover:bg-gold-3'>
          <div className='flex items-center gap-1 py-1 px-2 justify-center'>
            <p className='text-center'>Contact Me</p>
            <IoIosArrowRoundForward className='pt-1' size={20}/>
          </div>
          </PulsatingButton>
        </div>
      </div>
      <br />
      <br />
    </section>
  )
}

export default Founder