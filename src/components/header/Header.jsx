import React, { useRef, useEffect } from "react";
import logoImg from '../../assets/LOGO.png'
import { NavLink, Link } from 'react-router-dom'
import { BiMenu } from 'react-icons/bi'
import { FaSearch } from "react-icons/fa";



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

  const handelStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop < 80 || document.documentElement.scroll > 80) {
        headerRef.current.classList.add('sticky_header')
      }
      else {
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect(() => {
    handelStickyHeader()

    return () => window.removeEventListener('scroll', handelStickyHeader)
  })
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  return (
    <header className='header items-center bg-bgColor' ref={headerRef}>
      <div className="container md:m-6">
        <div className="flex items-center justify-between gap-6">
          {/* ==============logo============= */}
          <div className="w-80 px-10 h-full md:px-10">
            <img src={logoImg} alt="" />
          </div>

          {/* ===============menu============ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {
                navLinks.map((link, index) => (
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
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full'>
                  {/* <img src= {userimg} className='w-full rounded-full' alt="" /> */}
                </figure>
              </Link>
            </div>
            <div class=" hidden md:block relative text-gray-600">
              <input type="search" name="serch" placeholder="Search" class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
              <button type="submit" class="absolute right-0 top-0 mt-8 mr-4">
                <svg class="h-4 w-4 " >  <FaSearch />  </svg>
              </button>
            </div>
            <span className="md:hidden block" onClick={toggleMenu}>
              <BiMenu className="w-20 h-20 pr-5 cursor-pointer" />
            </span>

          </div>

        </div>

      </div>

    </header>
  )
}

export default Header
