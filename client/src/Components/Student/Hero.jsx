import React from 'react'
import SearchBox from './SearchBox'

function Hero() {
  return (
    <div className="w-full bg-cyan-50 y-20 px-4 pt-45 text-center">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-black text-4xl md:text-5xl font-bold leading-tight">
          Empower your future with the <br />
          courses designed to{" "}
          <span className="text-yellow-300">fit your choice.</span>
        </h1>

        <p className="text-black-100 mt-6 text-lg max-w-2xl mx-auto">
          We bring together world-class instructors, interactive content, and a supportive
          community to help you achieve your personal and professional goals.
        </p>

        <div className="mt-10">
          <SearchBox />
        </div>

      </div>

    </div>
  )
}

export default Hero
