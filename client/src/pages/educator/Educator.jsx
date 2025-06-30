import React from 'react'
import { Outlet } from 'react-router-dom'

function Educator() {
  return (
    <div>
      Educator
      <div className='container'>
        {<Outlet/>}
        </div>
    </div>
  )
}

export default Educator
