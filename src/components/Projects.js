import React from 'react'
import Card from './Card'

export default function Projects () {
  return (
      <div className=''>
        <div className='mx-10'>
              <div className='flex justify-center items-center my-5'>
                <span className='font-extrabold text-5xl  '>Some Projects</span>
                <span className='font-extrabold text-purple-600 text-5xl '>:</span>
              </div>
              <ul className='flex flex-wrap justify-evenly items-center justify-center mt-14 '>
                <Card image='/background.jpeg'></Card>
                <Card image='/background.jpeg'></Card>
                <Card image='/background.jpeg'></Card>
                <Card image='/background.jpeg'></Card>
              </ul>
        </div>
        <hr className='shadow-2xl shadow-black/20 mt-20 mb-16'></hr>
      </div>
  )
}
