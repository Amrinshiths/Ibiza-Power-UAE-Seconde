import React from 'react'
import aboutImg from '../assets/about.jpeg'
import aboutImg2 from '../assets/about-2.jpeg'

function About() {
  return (
    <div>
      <section className='bg-bgColor m-4'>
        <div class="bg py-6 md:py-12">
          <div class="container  mx-auto">

            <div class="text-center max-w-2xl mx-auto">
              <h1 class="font-bold text-4xl mb-4 text-headingColor">IBIZA POWER ENERGY SYSTEM</h1>
            </div>
          </div>
        </div>
      </section>
      <section class="px-2 py-10  md:px-0">
        <div class="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div class="flex flex-wrap items-center sm:-mx-3">
            <div class="w-full md:w-1/2 md:px-3">
              <div class="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 class="text-4xl font-extrabold tracking-tight text-headingColor2 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span class="block xl:inline">Welcome to </span>
                  <span class="block text-headingColor xl:inline">Ibiza power energy systems .</span>
                </h1>
                <p class="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">Welcome to Ibiza power energy systems L.L.C, your number one source and one of the leading lithium battery and solar system street lights suppliers in UAE.
                <ul>
                  <li>Electric Motorcycles, Electric Tricycles, golf cars
Battery-powered wheelchairs, traction, mowers
Electric Tools, electric sweeper, electric cooler/heater,
Other electric devices require a DC power supply
Green energy like solar power, UPS and storage power Etc...</li>
                </ul>
                </p>
                
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
              <p class="mt-4 text-gray-600 text-lg">Founded in [2013] by [moj], Ibiza power energy systems had come a long way from its beginnings in [2013] When [moj] first started, [his] passion for energy sources and solar-based systems [ibiza power - e.g. "battery supplying products "] drove him to start his own business.</p>
              {/* <div class="mt-8">
                <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">Learn more about us
                  <span class="ml-2">&#8594;</span></a>
              </div> */}
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
