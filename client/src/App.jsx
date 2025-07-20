import React, { Suspense } from 'react'
import { Routes,Route, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList';
import CourseDetails from './pages/student/CourseDetails';
import MyEnrollments from './pages/student/MyEnrollments';
import Player from './pages/student/Player';
import Loading from './components/students/Loading';
const Educator = React.lazy(()=> import('./pages/educator/Educator'))
const Dashboard = React.lazy(()=> import('./pages/educator/Dashboard'))
const AddCourse = React.lazy(()=> import('./pages/educator/AddCourse'))
const MyCourses = React.lazy(()=> import('./pages/educator/MyCourses'))
const StudentsEnrolled = React.lazy(()=> import('./pages/educator/StudentsEnrolled'))
import Navbar from './components/students/Navbar';
import "quill/dist/quill.snow.css";

function App() {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className='text-default min-h-screen bg-white' >
      {!isEducatorRoute && <Navbar/> }
      <Suspense fallback={<div>Loading...</div>}>
       <Routes>
        {/* route for student */}
        <Route path='/' element={<Home/>}/>
        <Route path='/course-list' element={<CoursesList/>}/>
        <Route path='/course-list/:input' element={<CoursesList/>}/>

        <Route path='/course/:id' element={<CourseDetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/my-enrollments' element={<MyEnrollments/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>

        {/* route for educator */}
        <Route path='/educator' element={<Educator/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add-course' element={<AddCourse/>}/>
          <Route path='my-courses' element={<MyCourses/>}/>
          <Route path='students-enrolled' element={<StudentsEnrolled/>}/>
        </Route>
       </Routes>
      </Suspense>
    </div>
  )
}

export default App
