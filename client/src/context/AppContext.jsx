import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import { useAuth, useUser} from "@clerk/clerk-react"

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();
  const {getToken} = useAuth();
  const {user} = useUser();
  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setIsEducator] = useState(true);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // fetch all courses
  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };
  // functions to calculate average rating of courses
  const calculateRating = (course) => {
    if (
      !course.courseRating ||
      !Array.isArray(course.courseRating) ||
      course.courseRating.length === 0
    ) {
      return 0;
    }
    let totalRating = 0;
    course.courseRating.forEach((rating) => {
      totalRating += rating.rating;
    });
    return (totalRating / course.courseRating.length).toFixed(1);
  };
  /// Function to calculate Course Chapter Time
  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration));
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };
  // Function to calculate Course Duration
  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter) =>
      chapter.chapterContent.map((lecture) => (time += lecture.lectureDuration))
    );
    return humanizeDuration(time * 60 * 1000, { units: ["h", "m"] });
  };
  // Function to calculate  number of lectures in a course
  const calculateNumberOfLectures = (course) => {
    let totalLectures = 0;
    course.courseContent.forEach((chapter) => {
      if (Array.isArray(chapter.chapterContent)) {
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  };
  // useEffect to fetch all courses on component mount
  const fetchEnrolledCourses = async () => {
    // This function would typically fetch enrolled courses from an API
    // For now, we will use dummy data
    setEnrolledCourses(dummyCourses);
  };
  useEffect(() => {
    fetchAllCourses();
    fetchEnrolledCourses();
  }, []);
  const logToken = async ()=>{
    console.log( await getToken());
  }
  useEffect(()=>{
    if (user) {
      logToken()
    }
  },[user])
  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setIsEducator,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNumberOfLectures,
    enrolledCourses,
    fetchEnrolledCourses,
    
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
