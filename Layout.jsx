import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
        <Header /> 
        <div style={{minHeight:'90vh'}} className="container">
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default Layout