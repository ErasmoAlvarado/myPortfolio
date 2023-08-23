import Image from 'next/image'
import React from 'react'

export default function Card (props) {
  return (
    <li className='bg-purple-600 text-white rounded-2xl pt-6 px-6 w-96 hover:scale-105 my-4 transition-all duration-300 '>
        <div className='flex justify-center '>
         <Image src={props.image} width={350} height={350} className='rounded-2xl bg-gray-400'></Image>
        </div>
        <div className='mt-4'>
          <h4 className='mt-1 text-2xl font-bold flex justify-center'>{props.title}</h4>
          <p className='text-center flex justify-center'>{props.description}</p>
          <ol className='font-bold flex justify-center mt-2 mb-4'>
            <li>
              <a className='p-2 text-base'>projects</a>
            </li>
            <li>
              <a className='p-2 text-base'>github</a>
            </li>
          </ol>
        </div>
    </li>
  )
}
