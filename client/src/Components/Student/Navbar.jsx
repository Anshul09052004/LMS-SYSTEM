import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import { useUser, UserButton, useClerk } from '@clerk/clerk-react'

function Navbar() {

  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  return (
    <nav className="w-full bg-cyan-100 shadow-sm border-b">

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-6 py-4">

        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-36 cursor-pointer" />
        </Link>

        <div className="flex items-center gap-8">

          {isSignedIn && (
            <>
              <button className="text-gray-700 hover:text-blue-600 font-medium transition">
                Become Educator
              </button>

              <Link
                to="/my-enrollments"
                className="text-gray-700 hover:text-blue-600 font-medium transition"
              >
                My Enrollments
              </Link>
            </>
          )}

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition shadow-sm"
            >
              Create Account
            </button>
          )}

        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">

        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-28" />
        </Link>

        <div className="flex items-center gap-4">

          {isSignedIn && (
            <>
              <button className="text-gray-700 text-sm ">
                Become Educator
              </button>

              <Link to="/my-enrollments" className="text-gray-700 text-sm">
                Enrollments
              </Link>
            </>
          )}


          {isSignedIn ? (
            <UserButton />
          ) : (
            <User className="w-6 h-6 text-gray-700 cursor-pointer" onClick={() => openSignIn()} />
          )}

        </div>

      </div>

    </nav>
  )
}

export default Navbar
