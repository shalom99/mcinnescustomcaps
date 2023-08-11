import TestimonialBrands from '@/components/TestimonialBrands'
import Image from 'next/image'
import { FC } from 'react'

type pageProps = {
  
}

const Designer: FC<pageProps> = ({}) => {
  return (
     <div className='h-screen bg-gray-500 flex justify-center pt-32 pb-32'>
        <div id="container" className='w-[1200px] h-full'>

          <div id="topNav" className='bg-primaryGreen py-2'>
          <h1 className='text-center text-2xl text-activeOrange'>Designer</h1>
          </div>
          
          <div id="mainDesigner" className='flex h-full'>
            <div id="toolbar" className='w-[250px] bg-white h-full px-2 py-1 flex flex-col gap-y-5'>
              <div>
                <h2 className='text-center mb-5 font-bold'>Toolbar </h2>
              <h3>Front Panel</h3>
              <p className='text-sm text-red-600'>Pick a Color</p>
              </div>
              <div>
              <h3>Peak</h3>
              <p className='text-sm text-red-600'>Pick a Color</p>
              </div>
              <div>
              <h3>Upper Stripe</h3>
              <p className='text-sm text-red-600'>Pick a Color</p>
              </div>
              <div>
              <h3>Lower Strip</h3>
              <p className='text-sm text-red-600'>Pick a Color</p>
              </div>
              <div>
              <h3>Back Mesh</h3>
              <p className='text-sm text-red-600'>Pick a Color</p>
              </div>
              <div>
              <h3>Snap Back</h3>
              <p className='text-sm text-red-600'>Pick a Color</p>
              </div>
              <div>
              <h3>Input Text</h3>
              <input type="text" className='w-full border' />
              <div className='flex items-center gap-x-2  mt-2'>
                <button className='border text-red-400  py-2 px-1 text-xs'>Pick Text Color</button>
                <button className='bg-black w-[30px] h-[30px]'></button>
                <button className='border text-xs py-2 px-1'>Add Text</button>
              </div>
              <div className='mt-2'><input type="file" className='text-sm' /></div>
              </div>
            </div>
            <div id="middle" className='grow bg-cap bg-no-repeat bg-contain bg-center'>
           
            </div>
            <div id="right" className='w-[200px] bg-white h-full'>
              <h2 className='text-center font-bold'>Order Information</h2>
              
            </div>
          </div>

        </div>
   
     </div>
)
}

export default Designer