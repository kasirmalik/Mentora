import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/students/Loading';

function CourseDetails() {
  const {id} = useParams();

  // Fetch course details using the id
  const [courseData, setCourseData] = useState(null);
  const {allcourses} = useContext(AppContext);

  const fetchCourseDeta = async() => {
    const findCourse =  allcourses.find(course => course._id === id) 
    setCourseData(findCourse);
  }
  useEffect(() => {
    fetchCourseDeta();
  }, []);

  return courseData ? (
    <>
    <div className='flex md:flex-row  md:gap-0 items-start justify-between
    md:pt-30  md:px-36 px-8 pt-20 text-left gap-10 relative flex-col-reverse'>

      <div className="absolute top-0 left-0 w-full h-section-height -z-1 bg-gradient-to-b from bg-cyan-100/70"></div>
      {/* left colum */}
      <div>
        <h1>{courseData.courseTitle}</h1>
        <p>{courseData.courseDescription}</p>
      </div>
      {/* Right colum */}
    </div>
    </>
  ):<Loading/>
}

export default CourseDetails
