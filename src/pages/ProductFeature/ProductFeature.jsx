import React from 'react'
import ftur1 from '../../assets/Banner2.png'
import ftur2 from '../../assets/oil.jpg'
import ftur3 from '../../assets/f-3.jpeg'
import ftur4 from '../../assets/BATTERY.jpg'
import ftur5 from '../../assets/f-2.png'
import ftur6 from '../../assets/battery.png'






function ProductFeature() {
  return (
    <div >
      {/* <!-- section_2 -->  */}
<div class="max-w-screen-2xl mx-auto px-24   py-20 lg:py-16 relative bg-bgColor">
    <div class="flex flex-col md:flex-row gap-2">
        <div class="flex flex-1 flex-col">
            <div class="flex flex-1 flex-col ">
                {/* <!-- img_01 -->  */}
                <img class="object-cover rounded-xl h-full" src={ftur1} alt=''/>
                <img class="object-cover rounded-3xl h-fit py-2" src={ftur5} alt=''/>
            </div>
        </div>
        <div class="flex flex-1">
            <div class="grid grid-cols-2  gap-2">
              <div>
                {/* <!-- img_02 --> */}
                <img class="object-cover rounded-3xl h-full" src={ftur2} alt=''/>
              </div>
              <div>
                {/* <!-- img_03 --> */}
                <img class="object-cover rounded-3xl md:h-full h-full" src={ftur6} alt=''/>
              </div>
              <div>
                {/* <!-- img_04 --> */}
                <img class="object-cover rounded-3xl h-fit" src={ftur3} alt=''/>
              </div>
              <div>
                {/* <!-- img_04 --> */}
                <img class="object-cover rounded-3xl h-48" src={ftur4} alt=''/>
              </div>
              
            </div>
        </div>
    </div>
</div>
      
      
    </div>
  )
}

export default ProductFeature
