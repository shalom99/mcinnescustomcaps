'use client'
import Image from 'next/image'
import { FC, useState, useEffect } from 'react'


type DesignerProps = {
      selectedColor1: any
      selectedColor2: any
      selectedColor3: any
      selectedColor4: any
      selectedColor5: any
      selectedColor6: any
}

const DesignerContainer: FC<DesignerProps> = ({
      selectedColor1,
      selectedColor2,
      selectedColor3,
      selectedColor4,
      selectedColor5,
      selectedColor6

}) => {
  const [side, setSide] = useState(0)
  const [filter1, setFilter1] = useState('')

  useEffect(() => {
      hexToCSSFilters(selectedColor2)
      
  }, selectedColor2)

  function hexToCSSFilters(hexColor:any) {
      // Convert hex color to RGB values
      const r = parseInt(hexColor.slice(1, 3), 16);
      const g = parseInt(hexColor.slice(3, 5), 16);
      const b = parseInt(hexColor.slice(5, 7), 16);
    
      // Calculate filter values based on RGB values
      const brightness = (r + g + b) / 3 / 255;
      const contrast = brightness > 0.5 ? 1 - brightness : brightness;
      const saturation = (Math.max(r, g, b) - Math.min(r, g, b)) / 255;
      const sepia = (r * 0.272 + g * 0.534 + b * 0.131) / 255;
    
      // Create CSS filter value string
      const cssFilters = `brightness(${brightness}) contrast(${contrast}) saturate(${saturation}) sepia(${sepia})`;
      console.log(cssFilters)
      setFilter1(cssFilters);

    }


  return (
     <div className='relative w-[500px] h-[500px] p-5'>
      {side === 0 && <>
      <img  src="/cap/1.png" className='absolute inset-0 z-5' alt="" />
      <img  src="/cap/4.png" className='absolute inset-0' alt="" />
      <img  src="/cap/5.png" className='absolute inset-0' alt="" />
      <img  src="/cap/6.png" className='absolute inset-0'  alt="" />

           
      <img  src="/cap/7.png" className='absolute inset-0 z-10' style={{filter: filter1 }}  />
      </> 
      } 

{side === 1 && <>
      <img  src="/cap/11.png" className='absolute inset-0 z-10' alt="" />
      <img  src="/cap/12.png" className='absolute inset-0' alt="" />
      <img  src="/cap/13.png" className='absolute inset-0' alt="" />
      <img  src="/cap/14.png" className='absolute inset-0' alt="" />
      <img  src="/cap/15.png" className='absolute inset-0' alt="" />
      <img  src="/cap/16.png" className='absolute inset-0' alt="" />
      </> 
      } 


{side === 2 && <>
      <img  src="/cap/21.png" className='absolute inset-0 z-10' alt="" />
      <img  src="/cap/22.png" className='absolute inset-0' alt="" />
      <img  src="/cap/23.png" className='absolute inset-0' alt="" />
      <img  src="/cap/24.png" className='absolute inset-0' alt="" />

      <img  src="/cap/26.png" className='absolute inset-0' alt="" />
      <img  src="/cap/27.png" className='absolute inset-0' alt="" style={{filter: filter1 }} />
      </> 
      } 


{side === 3 && <>
      <img  src="/cap/31.png" className='absolute inset-0 z-10' alt="" />
      <img  src="/cap/32.png" className='absolute inset-0' alt="" />
      <img  src="/cap/33.png" className='absolute inset-0' alt="" />
      <img  src="/cap/34.png" className='absolute inset-0' alt="" />
      <img  src="/cap/35.png" className='absolute inset-0' alt="" />
      <img  src="/cap/36.png" className='absolute inset-0' alt="" style={{filter: filter1 }} />
      </> 
      } 



    
    
      <div className='absolute left-0 right-0 bottom-0 flex justify-center gap-x-5 z-20'>
        <button onClick={() => setSide(0)} className='px-2 py-1 rounded-xl bg-green-700'>Front</button>
        <button onClick={() => setSide(1)} className='px-2 py-1 rounded-xl bg-blue-700'>Back</button>
        <button onClick={() => setSide(2)} className='px-2 py-1 rounded-xl bg-red-700'>Left</button>
        <button onClick={() => setSide(3)} className='px-2 py-1 rounded-xl bg-yellow-700'>Right</button>
      </div>
     </div>
)
}

export default DesignerContainer