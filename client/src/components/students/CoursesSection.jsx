import React from 'react'
import { Link } from 'react-router-dom'

function CoursesSection() {
  return (
    <div className='py-16 md:px40 px-8'>
      <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-500 mt-3'>Explore a wide range of courses, from programming to design, and take the first step towards your dream career.</p>

      <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
      className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
      >Show All Courses</Link>
    </div>
  )
}

export default CoursesSection
