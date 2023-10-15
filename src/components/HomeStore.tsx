import { FC } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { HiComputerDesktop, HiMiniRectangleStack } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
type HomeStoreProps = {};

const HomeStore: FC<HomeStoreProps> = ({}) => {
  return (
    <div id="store" className="bg-gray-200 flex justify-center ">
      <div
        id="container"
        className="w-full lg:w-[1200px] px-2 lg:px-0 py-10 lg:py-20 flex flex-col lg:flex-row gap-y-10"
      >
        <div
          id="left"
          className="flex flex-col gap-y-10 items-between lg:gap-x-10"
        >
          <div className=" flex gap-x-10">
            <div className="w-[180px] h-[300px] lg:w-[270px] lg:h-[300px] bg-black text-white rounded-lg relative flex flex-col items-center justify-center px-5">
              <HiComputerDesktop size={50} />
              <h2 className="font-bold my-5 text-xl">Place Order</h2>

              <p className="text-center text-sm text-gray-300">
                Design your own custom hat using our online
                <span className="text-red-700 cursor-pointer"> designer</span> !
                Add colours, <br /> a logo/design and text to your needs.
              </p>
            </div>

            <div className="w-[180px] h-[300px] lg:w-[270px] lg:h-[300px] bg-black rounded-lg relative text-white flex flex-col items-center justify-center px-5">
              <HiMiniRectangleStack size={50} />
              <h2 className="font-bold my-5 text-xl">Minimum Order</h2>

              <p className="text-center text-sm text-gray-300">
                Minimum order is
                <span className="bg-activeOrange p-1 ">25</span> hats per
                design.
              </p>
            </div>
          </div>
          <div className=" flex gap-x-10">
            <div className="w-[180px] h-[300px] lg:w-[270px] lg:h-[300px] bg-black rounded-lg relative text-white flex flex-col items-center justify-center px-5">
              <RiCustomerService2Line size={50} />
              <h2 className="font-bold my-5 text-xl">Confirmation</h2>

              <p className="text-center text-sm text-gray-300">
                Our team will contact you to go over the finer details of your
                order
                {/* <span className='text-red-700 cursor-pointer'> designer</span> ! Add colours, <br/> a logo/design and text to your needs. */}
              </p>
            </div>

            <div className="w-[180px] h-[300px] lg:w-[270px] lg:h-[300px] bg-black rounded-lg relative text-white flex flex-col items-center justify-center px-5">
              <TbTruckDelivery size={50} />
              <h2 className="font-bold my-5 text-xl">Delivery</h2>

              <p className="text-center text-sm text-gray-300">
                Due to high demand, our caps are currently an 8-10 week
                wait(Trust me. they are worth the wait!)
              </p>
            </div>
          </div>

          <div className=" flex justify-center">
            <div className="w-[180px] h-[300px] lg:w-[270px] lg:h-[300px] bg-black rounded-lg relative text-white flex flex-col items-center justify-center px-5">
              <HiMiniRectangleStack size={50} />
              <h2 className="font-bold my-5 text-xl"> Enjoy</h2>

              <p className="text-center text-sm text-gray-300">
              Your custom cap order will be delivered to your door, enjoy! Tag us on instagram @mcinnescustomcaps with any photos of your caps in action, we love seeing where they end up!
              </p>
            </div>
          </div>
        </div>

        <div
          id="right"
          className="w-full h-auto flex items-center px-5 lg:pl-10"
        >
          <div className="flex flex-col gap-y-2">
            <h2 className="text-activeOrange font-semibold text-xl">Lorem</h2>
            <h3 className="text-2xl font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h3>
            <h4 className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
              dolores:
            </p>
            <ul className="flex flex-col gap-y-2">
              <li>* 24/7 online in-house team of designers</li>
              <li>
                * Custom made caps with quality and fit to your own
                specifications
              </li>
              <li>
                * Large range of colour options, customer printed mesh and
                under-brim.
              </li>
              <li>
                * Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
                nihil.
              </li>
            </ul>
            <div className="mt-4">
              <button className="bg-primaryGreen text-activeOrange px-5 py-2 font-bold">
                ALL SERVICES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStore;
