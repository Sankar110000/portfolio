import React from 'react'

function    Education() {
  return (
    <div className='border-s-4 border-white bg-gray-700 p-4 rounded-2xl'>
        <h1 className='text-3xl font-semibold text-blue-500'>Education Info</h1>
        <p className='border-b-2 border-blue-500'></p>
        <div className='ms-4 text-gray-300 text-lg'>
            <p>Higer Secondary: <span className='text-gray-400 '>Bidwan Residential College</span>{" ,"}<span className='text-green-200'>78%</span></p>
            <p>College: <span className='text-gray-400'>Gandhi Intstitue for education and technology</span>{" ,"}<span className='text-green-300'>8 cgpa</span></p>
            <p>Internship: <span  className='text-gray-400 '>Qlith Innovation Pvt Ltd</span></p>
        </div>
    </div>
  )
}

export default Education