import React from 'react'
import { Routes, Route } from 'react-router'
import Layout from '../Layout'
import LandingPage from '../pages/LandingPage'
import About from '../pages/About'
import Contact from '../pages/Contact'
import { ContactUs } from '../components/Forms'

function AllRoutes() {
  return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='/' element={<LandingPage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
        </Routes>
  )
}

export default AllRoutes