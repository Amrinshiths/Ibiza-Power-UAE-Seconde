import React from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import ibiza from '../../assets/Brand/IBIZA_POWER_LOGO-removebg-preview.png'
import kh from '../../assets/Brand/KH_POWER_LOGO-removebg-preview.png'
import ocean from '../../assets/Brand/OCEAN_POWER_LOGO-removebg-preview.png'
import mars from '../../assets/Brand/MARS_POWER_LOGO-removebg-preview.png'
import {HiStar} from 'react-icons/hi'

function Terminational() {
  return (
    <div className='md:mt-[30px] px-32'>
        <Swiper
        modules={{Pagination}}
        spaceBetween={30} 
        slidesPerView={1} 
        pagination={{clickable : true}}
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }}
        >
            <SwiperSlide>
                <div className="w-32 px-14">
                    <div className="flex items-center w-32">
                        <img src={ibiza} alt="" />       
                    </div>

                </div>
                
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-32 px-14">
                    <div className="flex items-center w-32">
                        <img src={kh} alt="" />       
                    </div>

                </div>
                
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-32 px-14">
                    <div className="flex items-center w-32">
                        <img src={ocean} alt="" />       
                    </div>

                </div>
                
            </SwiperSlide>
            <SwiperSlide>
                <div className="w-32 px-14">
                    <div className="flex items-center w-32">
                        <img src={mars} alt="" />       
                    </div>

                </div>
                
            </SwiperSlide>
            
            
             
        </Swiper>
      
    </div>
  )
}

export default Terminational
