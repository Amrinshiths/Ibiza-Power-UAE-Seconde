import React from 'react'

import Router from '../routers/Router'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

function Layout() {
  return (
    <>
    
      <Header/>
      <main>
        <Router/>
      </main>
      <Footer/>
    </>
  )
}

export default Layout
