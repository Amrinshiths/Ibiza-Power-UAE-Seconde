import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Bimg from '../../assets/images/Banner/solar (1).jpg'
import Bimg1 from '../../assets/images/Banner/Tyer Banner (1).jpg'
import Bimg2 from '../../assets/images/Banner/battery2 -c.jpg'
import Bimg3 from '../../assets/images/Banner/sollar banner (1).png'
import Bimg4 from '../../assets/images/Banner/Ups.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination,Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



function CuroselSwiper() {
    return (
        <div>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}

                    navigation={true}
                    modules={[Autoplay,Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <section class="m-4">
                            <div class="grid max-w-screen-xl bg-[#FED403] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div class="mr-auto place-self-center lg:col-span-7">
                                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-headingColor">IBIZA POWER</h1>
                                    <h1 class="max-w-1xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-headingColor2">Green energy like solar power</h1>
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
                                    <img src={Bimg} alt="mockup"/>
                                </div>                
                            </div>
                        </section>
                    </SwiperSlide>
                        
                    
                    <SwiperSlide>
                    <section class="m-4">
                            <div class="grid max-w-screen-xl bg-[#CE7E02] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div class="mr-auto place-self-center lg:col-span-7">
                                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-headingColor">IBIZA POWER</h1>
                                    <h1 class="max-w-1xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-headingColor2">Powered wheelchairs, traction, mowers Electric Tools</h1>
                                    <p class="max-w-2xl mb-6 font-light text-headingColor2 lg:mb-8 md:text-lg lg:text-xl ">Ibiza power energy systems L.L.C, your number one source and one of the leading lithium battery and solar system street lights .</p>
                                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-gray-700 hover:text-gray-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                                        Get started
                                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </a>
                                    <Link to="/contact" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-bla border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-black dark:border-gray-700 dark:hover:bg-gray-700  dark:focus:ring-gray-800">
                                        Speak to Us
                                    </Link >
                                </div>
                                <div class="hidden w-full h-full lg:mt-0 lg:col-span-5 lg:flex">
                                    <img src={Bimg1} alt="mockup"/>
                                </div>                
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                    <section class="m-4">
                            <div class="grid max-w-screen-xl bg-[#FFB518] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div class="mr-auto place-self-center lg:col-span-7">
                                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-headingColor">IBIZA POWER</h1>
                                    <h1 class="max-w-1xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-headingColor2">Electric Motorcycles, Electric Tricycles, golf cars Battery</h1>
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
                                    <img src={Bimg2} alt="mockup"/>
                                </div>                
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                    <section class="m-4">
                            <div class="grid max-w-screen-xl bg-[#D6DCF2] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div class="mr-auto place-self-center lg:col-span-7">
                                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-headingColor">IBIZA POWER</h1>
                                    <h1 class="max-w-1xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-headingColor2">Green energy like solar power, UPS and storage power Etc...</h1>
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
                                    <img src={Bimg3} alt="mockup"/>
                                </div>                
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                    <section class="m-4">
                            <div class="grid max-w-screen-xl bg-[#FFDE91] px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                                <div class="mr-auto place-self-center lg:col-span-7">
                                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-headingColor">IBIZA POWER</h1>
                                    <h1 class="max-w-1xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-4xl text-headingColor2">DC power supply Green energy like solar power, UPS and storage power Etc...</h1>
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
                                    <img src={Bimg4} alt="mockup"/>
                                </div>                
                            </div>
                        </section>
                    </SwiperSlide>
                    
                </Swiper>
            </>


        </div>
    )
}

export default CuroselSwiper
