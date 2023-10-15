import { FC } from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'

type HomeStoreProps = {
  
}

const HomeStore: FC<HomeStoreProps> = ({}) => {
  return (
    <div id="store" className="bg-gray-200 flex justify-center ">
    <div id="container" className="w-full lg:w-[1200px] px-2 lg:px-0 py-10 lg:py-20 flex flex-col lg:flex-row gap-y-10">
      <div id="left" className="flex gap-x-1 items-between lg:gap-x-10">
        <div className="w-[50%] flex flex-col gap-y-10">
          <div className="w-[180px] h-[300px] lg:w-[270px] lg:h-[390px] bg-center bg-cover rounded-lg relative">
            <div id="overlay" className="absolute inset-0 bg-black opacity-25"></div>
       
          </div>
          <div className="w-[180px] h-[300px] lg:w-[270px] lg:h-[390px] bg-home2 bg-center bg-cover rounded-lg relative">
            <div id="overlay" className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <button className="flex items-center font-bold gap-x-2 text-white">FIND OUT MORE <MdOutlineArrowForwardIos /></button>
              </div>
          </div>
        </div>
        <div className="pt-20 flex flex-col gap-y-10">
        <div className="w-[180px] h-[300px] lg:w-[270px] lg:h-[390px] bg-home3 bg-center bg-cover rounded-lg relative">
            <div id="overlay" className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <button className="flex items-center font-bold text-white gap-x-2">FIND OUT MORE <MdOutlineArrowForwardIos /></button>
              </div>
          </div>
          <div className="w-[190px] h-[300px] lg:w-[270px] lg:h-[390px] bg-home4 bg-center bg-cover rounded-lg relative">
            <div id="overlay" className="absolute inset-0 bg-black opacity-25"></div>
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <button className="flex items-center font-bold gap-x-2 text-white">FIND OUT MORE <MdOutlineArrowForwardIos /></button>
              </div>
          </div>
        </div>
      </div>
      <div id="right" className="w-full h-auto flex items-center px-5 lg:pl-10">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-activeOrange font-semibold text-xl">Lorem</h2>
          <h3 className="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <h4 className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            dolores:
          </p>
          <ul className="flex flex-col gap-y-2">
            <li>
              * 24/7 online in-house team of designers
            </li>
            <li>
              * Custom made caps with quality and fit to your own specifications 
            </li>
            <li>
              * Large range of colour options, customer printed mesh and under-brim.
            </li>
            <li>
              * Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              nihil.
            </li>
          </ul>
          <div className="mt-4">
          <button className="bg-primaryGreen text-activeOrange px-5 py-2 font-bold">ALL SERVICES</button>
          </div>
     
        </div>
        
      </div>
    </div>
  </div>
)
}

export default HomeStore