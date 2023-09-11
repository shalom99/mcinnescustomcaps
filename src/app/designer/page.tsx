
import DesignerCanvas from '@/components/DesignerCanvas'
import { FC } from 'react'

type pageProps = {
  
}

const Designer: FC<pageProps> = ({}) => {
  return (
     <div className=' bg-gray-500 flex justify-center py-10 lg:py-32'>
        <div id="container" className='w-full lg:w-[1200px] lg:h-[650px] '>

          {/* <div id="topNav" className='bg-primaryGreen py-2'>
          <h1 className='text-center text-2xl text-activeOrange'>Design Your Own</h1>
          </div> */}
          <h1 className='lg:hidden text-center text-white mb-5 font-semibold text-2xl'>DESIGN YOUR OWN</h1>
        <DesignerCanvas />

        </div>
   
     </div>
)
}

export default Designer