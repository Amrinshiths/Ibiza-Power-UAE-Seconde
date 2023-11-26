import React from 'react'
import { products } from '../assets/Data/product'
import CuroselSwiper from './Carousel/Curosel-Swiper'
function Products() {
  return (
    <div>
      <div class="text-center p-5">
        <h1 class="font-bold text-headingColor text-4xl mb-4"> Products </h1>
      </div>
      {/* <div class="container text-center mx-auto">
  <h3 class="text-xl text-gray-700 mb-2 font-bold">Outline</h3>
  <div class="flex justify-center rounded-lg text-lg" role="group">
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-r-0 border-blue-500 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">First</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-blue-500  px-4 py-2 mx-0 outline-none focus:shadow-outline">Second</button>
    <button class="bg-white text-blue-500 hover:bg-blue-500 hover:text-white border border-l-0 border-blue-500 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline">Third</button>
  </div>
</div> */}
      

      {/* !-- ✅ Grid Section - Starts Here 👇 --> */}
      <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-4 mt-10 mb-5">

        {products.map((product) => (
          <div key={product.id} class="w-65 bg-white shadow-md  rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
            <a href={product.href} >
              <img className='w-44 h-48'
                src={product.imageSrc}
                alt={product.imageAlt}
              />
              <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">{product.brand}</span>
                <p class="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                <div class="flex items-center bg-black text-white">
                  <p className="text"></p>

                  {/* <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div> */}
                </div>
              </div>
              <div>
                <div class="p-6">

                  <p class="mb-1 text-sm  text-headingColor2">
                    {/* {product.description} */}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}

      </section>

      <section>

      </section>



    </div>
  )
}

export default Products
