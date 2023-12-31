import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import Terminational from './Brand/Brand'
import aboutImg from '../assets/about.jpeg'
import MapContact from './Contact/MapContact'
import ProductFeature from './ProductFeature/ProductFeature'
import CuroselSwiper from './Carousel/Curosel-Swiper'
import Carousel from './Carousel/Carousel'

function Home() {

  return (
    <div>
      <CuroselSwiper />



      {/* ===============Hero Section End======== */}
      <>
        <section>
          <div className="cotainer">


            {/* <div className="flex flex-wrap item-center justify-between flex-col md:flex-row gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"> */}
            <div className="grid grid-cols-1 md:pt-4 md:grid-cols-2 px-4 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">

              <div className="py-[10px] px-8">
                <div className="flex items-center justify-center">
                  {/* <img src={imgIcon1} alt="" /> */}
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">CLICK & COLLECT</h2>
                  <p className="text-[16px] leading-7 text-textColor text-center font-[400]">
                    Click & Collect available for any in stock item.
                  </p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid bordet-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />

                  </Link>
                </div>

              </div>
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  {/* <img src={imgIcon2} alt="" /> */}
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">OUR PRICE PROMISE</h2>
                  <p className="text-[16px] leading-7 text-textColor text-center font-[400]">
                    Fast Delivery and shipping, reliable customer service
                  </p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid bordet-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />

                  </Link>
                </div>

              </div>
              <div className="py-[30px] px-8">
                <div className="flex items-center justify-center">
                  {/* <img src={imgIcon3} alt="" /> */}
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-textColor font-[700] text-center">GOT A QUESTION?</h2>
                  <p className="text-[16px] leading-7 text-textColor text-center font-[400]">
                    Get in touch if you have any questions, we would be happy to help.
                  </p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid bordet-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />

                  </Link>
                </div>

              </div>



            </div>

            {/* </div> */}
          </div>
        </section>
      </>
      <section className='items-center '>

        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-center md:text-5xl lg:text-6xl text-headingColor2">Featured Products</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 text-center lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">We're dedicated to providing you with the very best items..</p>


        <Carousel />
      </section>
      <section class="px-2 py-10 bg-white md:px-0">

        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline">Welcome to </span>
                  <span class="block text-headingColor xl:inline">Ibiza power energy systems .</span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">We're dedicated to providing you with the very best items. our batteries are mainly used for Alarm System, Emergency Lighting System, Firefighting Equipment, Standby Power Supply and Telephone Switching System, Uninterrupted Power Supply, Telecommunication System, Computer Standby Power Supply System, Electric Bikes, Electric Scooters, electric cars</p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <Link to="/about" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-headingColor rounded-md sm:mb-0 hover:bg-blue-900 sm:w-auto">
                    Explore me
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </Link>

                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2">
              <div class="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src={aboutImg} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <MapContact />
      <section>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 text-center md:text-5xl lg:text-6xl text-headingColor2">Our Brand</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 text-center lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Our Own Brand is More explored .....</p>
      </section>
      <Terminational />




    </div>
  )
}

export default Home
