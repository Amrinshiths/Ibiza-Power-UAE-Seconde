import React from 'react'

import {Routes, Route} from 'react-router-dom'
import Products from '../pages/Products'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'


function Router() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={ <Products/> }/>
    <Route path='/about' element={ <About/> }/>
    <Route path='/contact' element={ <Contact/> }/>
    
    
   </Routes>
  )
}

export default Router
