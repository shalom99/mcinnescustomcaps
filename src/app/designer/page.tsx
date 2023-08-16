'use client'
import DesignerCanvas from '@/components/DesignerCanvas'
import DesignerContainer from '@/components/DesignerContainer'
import TestimonialBrands from '@/components/TestimonialBrands'
import Toolbar from '@/components/Toolbar'
import Image from 'next/image'
import { FC } from 'react'
import { TwitterPicker } from 'react-color'

type pageProps = {
  
}

const Designer: FC<pageProps> = ({}) => {
  return (
     <div className=' bg-gray-500 flex justify-center pt-32 pb-32'>
        <div id="container" className='w-[1200px] h-full'>

          <div id="topNav" className='bg-primaryGreen py-2'>
          <h1 className='text-center text-2xl text-activeOrange'>Designer</h1>
          </div>
          
        <DesignerCanvas />

        </div>
   
     </div>
)
}

export default Designer