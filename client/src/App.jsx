import './App.css'
import CourseDetails from './Pages/Student/CourseDetails'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Student/Home'
import CoursesList from './Pages/Student/CoursesList'
import MyEnrollments from './Pages/Student/MyEnrollments'
import Player from './Pages/Student/Player'
import Loading from './Components/Student/Loading'
import Educator from './Pages/Educator/Educator'
import Dashboard from './Pages/Educator/Dashboard'
import AddCourse from './Pages/Educator/AddCourse'
import MyCourses from './Pages/Educator/MyCourses'
import StudentEnrolled from './Pages/Educator/StudentEnrolled'

function App() {

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/course-list' element={<CoursesList />} />
          <Route path='/course/:id' element={<CourseDetails />} />
          <Route path='/my-enrollments' element={<MyEnrollments />} />
          <Route path='/course-list/:input' element={<CoursesList />} />
          <Route path='/player/:courseId' element={<Player />} />
          <Route path='/loading/:path' element={<Loading />} />

          <Route path='/educator' element={<Educator />} >
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='add-course' element={<AddCourse />} />
            <Route path='my-courses' element={<MyCourses />} />
            <Route path='student-enrolled' element={<StudentEnrolled />} />

          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
