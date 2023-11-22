import React, { useRef, useEffect } from "react";
import logoImg from '../../assets/LOGO.png'
import { NavLink, Link } from 'react-router-dom'
import {BiMenu} from 'react-icons/bi'



const navLinks = [
    {
        path: "/",
        display: "Home"
    },
    {
        path: "/product",
        display: "Product"
    },
    {
        path: "/about",
        display: "About"
    },
    {
        path: "/contact",
        display: "Contact"
    }

]

function Header() {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
  
    const handelStickyHeader = () =>{
      window.addEventListener('scroll', ()=>{
        if(document.body.scrollTop<80 || document.documentElement.scroll>80){
          headerRef.current.classList.add('sticky_header')
        }
        else{
          headerRef.current.classList.remove('sticky_header')
        }
      })
    }
    useEffect(()=>{
      handelStickyHeader()
  
      return ()=> window.removeEventListener('scroll', handelStickyHeader)
    })
    const toggleMenu =()=> menuRef.current.classList.toggle('show__menu')
   
    return (
        <header className='header items-center ' ref={headerRef}>
        <div className="container">
          <div className="flex items-center justify-between gap-6">
            {/* ==============logo============= */}
            <div className="w-80 h-full px-10">
              <img src= {logoImg} alt="" />
            </div>
  
            {/* ===============menu============ */}
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu flex items-center gap-[2.7rem]">
                {
                  navLinks.map((link,index)=>(
                    <li key={index}>
                      <NavLink to={link.path} className={navClass =>
                      navClass.isActive
                      ? "text-primaryColor text-[16px] leading-7 font-[600]"
                      : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                      }>
                        {link.display}
                      </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
  
  
            {/* ==============Nav-Right============== */}
            <div className="flex items-center gap-6">
              <div className='hidden'>
                <Link to= '/'>
                  <figure className='w-[35px] h-[35px] rounded-full'>
                    {/* <img src= {userimg} className='w-full rounded-full' alt="" /> */}
                  </figure>
                </Link>
              </div>
              <Link to ="/login">
                <button className='bg-violet-900 py-2 pb-4 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>
                  Login
                </button>
              </Link>
              <span className="md:hidden" onClick={toggleMenu}>
                <BiMenu className="w-6 h-6 cursor-pointer"/>
              </span>
  
            </div>
  
          </div>
  
        </div>
  
      </header>
    )
}

export default Header
