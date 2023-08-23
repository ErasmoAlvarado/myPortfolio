import Image from 'next/image'
import React from 'react'

export default function Stack () {
  return (
        <div className=''>
            <div className='mx-10'>
                <div className='flex justify-center items-center my-5'>
                    <span className='font-extrabold text-5xl'>My Stack
                    </span>

                </div>
               <div className='flex justify-center'>
                   <div className='-translate-y-3 absolute bg-purple-600 w-fit text-5xl text-transparent h-2 rounded-full'>:My Stack:</div>
               </div>
                <div className='flex justify-center mt-6'>
                    <p className='flex justify-center text-center max-w-3xl mb-4 text-xl font-medium text-black/40'>As a developer, I always look for the best tools to build awesome things. I have a diverse and powerful stack that helps me achieve my goals. Here is what I use:</p>
                </div>
                <ul className='flex flex-wrap justify-evenly items-center justify-center my-20 md:mx-40 '>
                    <Image src='/nextjs.jpg' width={110} height={110} className='duration-500 transition hover:scale-110 hover:-translate-y-5 mx-3 mb-12'></Image>
                    <Image src='/js.jpg' width={110} height={110} className='duration-500 transition hover:scale-110 hover:-translate-y-5 mx-3 mb-12'></Image>
                    <Image src='/react.jpg' width={120} height={120} className='duration-500 transition hover:scale-110 hover:-translate-y-5 mx-3 mb-12'></Image>
                    <Image src='/flutter.jpg' width={95} height={95} className='duration-500 transition hover:scale-110 hover:-translate-y-5 mx-3 mb-12'></Image>
                    <Image src='/python.jpg' width={110} height={110} className='duration-500 transition hover:scale-110 hover:-translate-y-5 mx-3 mb-12'></Image>
                    <Image src='/tailwind.jpg' width={110} height={110} className='duration-500 transition hover:scale-110 hover:-translate-y-5 mx-3 mb-12'></Image>
                </ul>
                <div className='h-16'></div>
            </div>
        </div>
  )
}
