'use client'
import Image from 'next/image'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion, animate } from 'framer-motion'

export default function Hero () {
  const [text, count] = useTypewriter({
    words: [
      'things that can help people',
      'collaborative skills by working in teams',
      'creative solutions with my team members.',
      'my curiosity by asking questions and seeking feedback'],
    delaySpeed: 2000,
    loop: true
  })
  return (
    <motion.div
    initial={{
      opacity: 0,
      y: -100
    }}
    animate={{
      opacity: 1,
      y: 0
    }}
    className='mb-40 mt-4'
    >
        <div className='flex justify-center items-center pt-5 '>
          <Image src='/me.png' width={200} height={200} className='rounded-full'></Image>
        </div>
        <div className='flex justify-center items-center '>
        </div>
        <div className='flex justify-center items-center px-3'>
            <div className='text-4xl md:text-7xl lg:text-7xl max-w-3xl m-4 sm:m-8 font-bold text-center'>
              <p className='font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-950 to-purple-600'>I love to develop</p>
              <span>{text}</span>
              <Cursor></Cursor>
            </div>
        </div>
        <div className='flex justify-center items-center lg:text-4xl p-3 '>
          <p className='text-center max-w-3xl mb-4 text-xl font-medium text-black/40'>
          My name is Erasmo and my passion is web and app development using React and Flutter. I’m a junior developer who has worked on various projects that showcase my skills and creativity.
          </p>
        </div>
        <div className='flex justify-center'>
        </div>
        <div className='flex justify-center items-center my-3'>
          <a href='https://github.com/ErasmoAlvarado'>
            <button className='p-3 bg-purple-600 text-white rounded-xl mx-3 transition-colors hover:bg-purple-800 duration-300'>Github</button>
          </a>
          <a href='/erasmoAlvarado.pdf'>
           <button className='p-3 bg-purple-600 text-white rounded-xl mx-3 transition-colors hover:bg-purple-800 duration-300'>Get my Cv</button>
          </a>
          <a href='https://www.linkedin.com/in/erasmo-alvarado-49800a241/?locale=en_US'>
            <button className='p-3 bg-purple-600 text-white rounded-xl mx-3 transition-colors hover:bg-purple-800 duration-300'>Linkedin</button>
          </a>
        </div>
    </motion.div>
  )
}
