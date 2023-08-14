'use client'
import Image from 'next/image'
import { FC, useState, useEffect } from 'react'

type DesignerProps = {
  
}

const DesignerContainer: FC<DesignerProps> = ({}) => {
  const [side, setSide] = useState(0)



  return (
     <div className='relative w-[500px] h-[500px] p-5'>
      {side === 0 && <>
      <img  src="/cap/1.png" className='absolute inset-0 z-10' alt="" />
      <img  src="/cap/4.png" className='absolute inset-0' alt="" />
      <img  src="/cap/5.png" className='absolute inset-0' alt="" />
      <img  src="/cap/6.png" className='absolute inset-0' alt="" />
      <img  src="/cap/7.png" className='absolute inset-0' alt="" />
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
      <img  src="/cap/27.png" className='absolute inset-0' alt="" />
      </> 
      } 


{side === 3 && <>
      <img  src="/cap/31.png" className='absolute inset-0 z-10' alt="" />
      <img  src="/cap/32.png" className='absolute inset-0' alt="" />
      <img  src="/cap/33.png" className='absolute inset-0' alt="" />
      <img  src="/cap/34.png" className='absolute inset-0' alt="" />
      <img  src="/cap/35.png" className='absolute inset-0' alt="" />
      <img  src="/cap/36.png" className='absolute inset-0' alt="" />
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