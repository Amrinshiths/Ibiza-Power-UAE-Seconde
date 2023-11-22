import React from 'react'
import aboutImg from '../assets/about.jpeg'
import aboutImg2 from '../assets/about-2.jpeg'

function About() {
  return (
    <div>
      <section>
        <div class="bg py-6 md:py-12">
          <div class="container px-4 mx-auto">

            <div class="text-center max-w-2xl mx-auto">
              <h1 class="text-3xl md:text-4xl font-medium mb-2">IBIZA POWER ENERGY SYSTEM</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="px-2 py-10 bg-white md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline">Welcome to </span>
                  <span class="block text-indigo-600 xl:inline">Ibiza power energy systems .</span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Welcome to Ibiza power energy systems L.L.C, your number one source and one of the leading lithium battery and solar system street lights suppliers in UAE</p>
                <div class="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a href="#_" class="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-indigo-600 rounded-md sm:mb-0 hover:bg-indigo-700 sm:w-auto">
                    Try It Free
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                  <a href="#_" class="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600">
                    Learn More
                  </a>
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
      <section class="bg-gray-100">
        <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div class="mt-12 md:mt-0">
              <img src={aboutImg2} alt="About Us Image" class="object-cover rounded-lg shadow-md" />
            </div>
            <div class="max-w-lg">
              <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">What we do?</h2>
              <p class="mt-4 text-gray-600 text-lg">We're dedicated to providing you with the very best items. our batteries are mainly used for Alarm System, Emergency Lighting System, Firefighting Equipment, Standby Power Supply and Telephone Switching System, Uninterrupted Power Supply, Telecommunication System, Computer Standby Power Supply System, Electric Bikes, Electric Scooters, electric cars.</p>
              <div class="mt-8">
                <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                  <span class="ml-2">&#8594;</span></a>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section>

      </section>
    </div>
  )
}

export default About
