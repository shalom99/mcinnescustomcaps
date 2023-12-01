
import { FC } from 'react'
import IgPosts from './components/IgPosts'


const Portfolio: FC = async ({}) => {

  return (
     <div className=' bg-gray-600 flex justify-center pt-32'>
      <div id="container" className='w-full lg:w-[1200px] text-white px-2 flex flex-col items-center'>
        <p className='text-center text-2xl font-semibold'>Portfolio</p>
     <IgPosts />

        
      </div>
     </div>
)



}

export default Portfolio


