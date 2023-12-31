import React from 'react'
import f1 from '../../assets/images/Gallery/featured (5).png'
import f2 from '../../assets/images/Gallery/featured (2).png'
import f3 from '../../assets/images/Gallery/featured (6).png'
import f4 from '../../assets/images/Gallery/featured (4).png'
import f5 from '../../assets/images/Gallery/featured (1).png'
import f6 from '../../assets/images/Gallery/featured (3).png'

import { Link } from 'react-router-dom'


function Carousel() {
  return (
    <div>
      {/* <section class="bg-hero1  bg-cover bg-center bg-no-repeat   m-4">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-headingColor">IBIZA POWER</h1>
            <p class="max-w-2xl mb-6 font-light text-headingColor2 lg:mb-8 md:text-lg lg:text-xl ">Ibiza power energy systems L.L.C, your number one source and one of the leading lithium battery and solar system street lights .</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-gray-700 hover:text-gray-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              Get started
              <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <Link to="/contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-bla border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700  dark:focus:ring-gray-800">
              Speak to Us
            </Link >
          </div>
          <div class="hidden w-full lg:mt-0 lg:col-span-5 lg:flex">
            <img src={Bimg} alt="mockup" />
          </div>
        </div>
      </section> */}
      
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
        
        <div class="-m-1 flex  flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={f2} />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={f6} />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={f1} />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={f4} />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={f3} />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src={f5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
