import React from 'react'

function CourseCard({ course }) {
  return (
    <div className="flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden border border-gray-100">

      {/* Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={course.courseThumbnail}
          alt="Thumbnail"
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">

        <p className="text-gray-800 font-semibold text-lg leading-snug line-clamp-2">
          {course.courseTitle}
        </p>

        {/* Price Section */}
        <div className="flex items-center justify-between mt-auto pt-4">

          <div className="flex items-center gap-3">
           

            <p className="text-gray-400 line-through text-sm">
              ₹ {course.coursePrice}
            </p>
             <p className="text-gray-800 text-sm">₹ {course.discount}</p>
          </div>

        </div>

      </div>

    </div>
  )
}

export default CourseCard
