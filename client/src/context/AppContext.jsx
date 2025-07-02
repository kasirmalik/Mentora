import { createContext, useEffect, useState } from 'react'
import { dummyCourses } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export const AppContext = createContext();


export const AppContextProvider = (props)=>{

    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    const [allCourses,setAllCourses]=useState([])
    const [isEducator,setIsEducator]=useState(true)

    // fetch all courses
    const fetchAllCourses = async ()=>{
        setAllCourses(dummyCourses)
    }
    // functions to calculate average rating of courses
    const calculateRating = (course) => {
        if(!course.courseRating || !Array.isArray(course.courseRating) || course.courseRating.length === 0) {
            return 0;
        }
        let totalRating = 0;
        course.courseRating.forEach((rating) => {
            totalRating += rating.rating;
        });
        return (totalRating / course.courseRating.length).toFixed(1);
    }
    useEffect(() => {
       fetchAllCourses()
    }, []);
    const value = {
       currency,
       allCourses,
       navigate,
         calculateRating,
         isEducator,
         setIsEducator
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
