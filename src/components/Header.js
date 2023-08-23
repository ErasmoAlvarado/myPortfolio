'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

function Header () {
  return (
    <motion.header
    initial={{
      x: -50,
      y: -15,
      opacity: 0
    }}
    animate={{
      x: 0,
      y: 0,
      opacity: 1
    }}

    className='font-mono sticky top-0'>
      <div className='flex flex-wrap items-center justify-around py-3 border border-black/10 bg-white/80 backdrop-blur-sm '>
        <Link href='/'>
          <div>
            <span className='text-black font-bold text-2xl'>Erasmo_Alvarado</span>
            <span className='text-purple-600 font-bold text-3xl'>()</span>
          </div>
        </Link>
        <div>
          <Link href='/contact'>
            <p className='text-xl hover:text-purple-600 duration-200 w-40'>contact me</p>
          </Link>
        </div>

      </div>
    </motion.header>
  )
}

export default Header
