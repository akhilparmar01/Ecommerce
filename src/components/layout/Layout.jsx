import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <div>
    {/* A basic layout structure with a navbar, content, and footer */}
        <Navbar/>
        <div className="content">
            {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout