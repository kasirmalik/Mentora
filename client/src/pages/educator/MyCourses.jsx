import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Loading from '../../components/students/Loading';

function MyCourses() {

  const {currency,allCourses} = useContext(AppContext)
  const [courses,setCourses] = useState(null);

  const fetchEducatorCourses = async ()=>{
    setCourses(allCourses)
  }
  useEffect(()=>{
    fetchEducatorCourses()
  },[])
  return courses ? (
    <div className='h-screen flex flex-col items-start justify-between md:p-8 md:pb-0 pt-8 pb-0'>
     <div className='w-full'>
      <h2 className="pb-4 text-lg font-medium">My Courses</h2>
        <div>
          <table>
            <thead className='text-gray-900 border-b border-gray-500/20 text-sm text-left'>
                <tr>
                  <th className="px-4 py-3 font-semibold truncate">All Courses</th>
                  <th className="px-4 py-3 font-semibold truncate">Earnings</th>
                  <th className="px-4 py-3 font-semibold truncate">Students</th>
                  <th className="px-4 py-3 font-semibold truncate">Published On</th>
                </tr>
            </thead>
          </table>
        </div>
     </div>
    </div>
  ):<Loading/>
}

export default MyCourses
