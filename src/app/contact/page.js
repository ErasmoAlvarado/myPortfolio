'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Header from '@/components/Header'
import Image from 'next/image'
import { motion } from 'framer-motion'

function ContactMe (props) {
  const [isLoading, setisLoading] = useState(false)
  const formRef = useRef('')
  function sentForm (e) {
    setisLoading(true)
    e.preventDefault()
    emailjs.sendForm('service_awg2fhk', 'template_qjbcc0x', formRef.current, 'GNwL3JPacT5dhdL8E')
      .then((respose) => {
        alert('thank you for you message💜')
      })
      .catch((error) => {
        console.log('something goes wrong')
        console.error(error)
      }).finally(() => {
        setisLoading(false)
      })
  }
  return (
    <div className='w-full h-full'>
      <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      className='hover:bg-green-600 transition-colors duration-300 flex justify-center items-center rounded-full h-16 w-16  fixed bottom-7 shadow-xl shadow-black/20 right-7 bg-[#25D366]'>
          <Image src='/whatapp.svg' height={35} width={35}></Image>
      </motion.div>
      <Header></Header>
      <div className='flex justify-center mt-[12vh]'>
         <motion.div
         initial={{
           y: 25,
           opacity: 0,
           scale: 0.7
         }}
         animate={{
           y: 0,
           opacity: 1,
           scale: 1
         }}
         className='border p-5 w-11/12 lg:w-5/12 md:w-4/6 rounded-xl'>
            <div className='flex items-center  justify-center '>
                <h2 className=' pt-10 font-bold text-base  md:text-xl text-center font-mono'>erasmoalvaradosierra@gmail.com</h2>
            </div>
            <p className='flex justify-center mx-4  text-justify pt-4 max-w-3xl mb-4 text-xl font-medium text-black/40'>fill this form if you want to contact with me :)</p>
            <form ref={formRef}>
                <input name='user_name' type='text' placeholder='your name' className='border-2 my-2 outline-none focus:border-purple-900 focus:-translate-y-1 transition duration-500 rounded-xl p-2 w-full border-purple-600'></input>
                <input name='user_email' type='email' placeholder='your email' className='border-2 my-2 outline-none focus:border-purple-900 focus:-translate-y-1 transition duration-500 rounded-xl p-2 w-full border-purple-600'></input>
                <textarea name='message' type='text' placeholder='your message' className='h-24 border-2  my-2 outline-none focus:border-purple-900 focus:-translate-y-1 transition duration-500  rounded-xl p-2 w-full border-purple-600'></textarea>
                <div className='flex justify-center'>
                  <div onClick={sentForm} className='p-3 bg-purple-600 text-white rounded-xl mx-3 transition-colors hover:bg-purple-800 duration-300'>
                   {
                     isLoading === false
                       ? <p>send to me</p>
                       : <p className='animate-pulse'>loading...</p>
                   }
                  </div>
                </div>
            </form>
          </motion.div>
       </div>
    </div>
  )
}

export default ContactMe
