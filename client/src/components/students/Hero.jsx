import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

function Hero() {
  return (
    <div className='flex flex-col items-center justify-cente px-7 wfull md:pt-36 pt-20 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>
      <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower your future with the course designed to
         <span className='text-blue-600 font-bold'>
           fit your choice.
        </span> <img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0' /></h1>
      <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>Explore a wide range of courses, from programming to design, and take the first step towards your dream career.</p>
      <p  className='md:hidden text-gray-500 max-w-sm mx-auto'>we bring together world class instructor to help you achieve your professsional goals</p>
      <SearchBar/>
    </div>
  )
}

export default Hero
