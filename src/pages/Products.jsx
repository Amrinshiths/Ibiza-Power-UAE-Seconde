import React from 'react'
import Carousels from './Carousel/Carousel'
import { products } from '../assets/Data/product'
function Products() {
  return (
    <div>
        <Carousels/>

      <div class="text-center p-10">
    <h1 class="font-bold text-4xl mb-4"> Products </h1>
    <h1 class="text-3xl">Tailwind CSS</h1>
</div>

    {/* !-- ✅ Grid Section - Starts Here 👇 --> */}
<section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-4 mt-10 mb-5">

{products.map((product) => (
  <div key={product.id} href={product.href} class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img 
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
      {product.description}
    </p>
    <button
      type="button"
      class="inline-block rounded bg-bgColor2 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      data-te-ripple-init
      data-te-ripple-color="light">
      Button
    </button>
  </div>
      </div>
    </a>
  </div>
  ))}

  </section>



    </div>
  )
}

export default Products
