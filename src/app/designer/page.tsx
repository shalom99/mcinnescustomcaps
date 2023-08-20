
import DesignerCanvas from '@/components/DesignerCanvas'
import { FC } from 'react'

type pageProps = {
  
}

const Designer: FC<pageProps> = ({}) => {
  return (
     <div className=' bg-gray-500 flex justify-center pt-32 pb-32'>
        <div id="container" className='w-[1200px] h-[650px] '>

          <div id="topNav" className='bg-primaryGreen py-2'>
          <h1 className='text-center text-2xl text-activeOrange'>Design Your Own</h1>
          </div>
          
        <DesignerCanvas />

        </div>
   
     </div>
)
}

export default Designer