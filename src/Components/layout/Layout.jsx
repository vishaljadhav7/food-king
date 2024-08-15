import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Main from '../main/Main'

const Layout = () => {
  return (
   <>
    <Navbar/>      
     <Main/>  {/*here goes outlet*/}
    <Footer/>
   </>
  )
}

export default Layout