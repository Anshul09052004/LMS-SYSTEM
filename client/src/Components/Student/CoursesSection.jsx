import React, { useContext } from 'react'
import CourseCard from './CourseCard'
import { AppContext } from '../../Context/AppContextProvider'
import { Link } from 'react-router-dom'

function CoursesSection() {

  const { allCourses } = useContext(AppContext);

  return (
    <div className="w-full py-16 px-4 bg-gray-50">

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Learn from the best
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
        </p>

      </div>

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {allCourses?.slice(0, 4).map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <Link to="/course-list">
        <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg">
          Show All Courses
        </button>
        </Link>
      </div>

    </div>
  )
}

export default CoursesSection
