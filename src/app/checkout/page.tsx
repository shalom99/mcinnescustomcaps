import { FC } from "react";
import OrderWidget from "./components/OrderWidget";
import { AiOutlineRollback } from "react-icons/ai";
import Link from "next/link";

type pageProps = {};

const Checkout: FC<pageProps> = ({}) => {
  return (
    <div className=" bg-gray-600 flex justify-center py-10 lg:py-32">
      <div id="container" className="w-full lg:w-[1200px] text-white px-2 flex flex-col mt-10">
        
        <div className="w-full flex items-center justify-between border-b pb-4 mb-10 ">
        <h2 className="text-4xl font-bold text-activeOrange">Checkout</h2>
        <Link href="/cart" className="bg-primaryGreen rounded-full py-2 px-4 flex items-center gap-x-2 font-bold">Back to Cart
        <AiOutlineRollback size={20} />
        </Link>
        </div>

        <div id="container2" className="flex flex-col lg:flex-row items-start gap-x-10 ">

        <div id="billingDetails" className="w-full lg:w-[60%]">
            <form action="" className="grid grid-cols-2 gap-x-5 gap-y-3 ">

                <div className="flex flex-col">
                    <label htmlFor="" className="font-bold text-sm mb-2">First Name
                    <span className="text-red-600">*</span>
                    </label>
                    <input type="text" className="text-lg text-black p-1"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor=""  className="font-bold text-sm mb-2">Last Name
                    <span className="text-red-600">*</span>
                    </label>
                    <input type="text" className="text-lg text-black p-1" />
                </div>
                <div className="col-span-2 flex flex-col">
                    <label htmlFor=""  className="font-bold text-sm mb-2">Company Name (optional)</label>
                    <input type="text" className="text-lg text-black p-1" />
                </div>
                <div className="col-span-2">
                    <label htmlFor=""  className="font-bold text-sm mb-2">Country / Region <span className="text-red-600">*</span></label>
                    <p  className="font-bold ">Australia</p>
                </div>
                <div className="col-span-2 flex flex-col">
                    <label htmlFor=""  className="font-bold text-sm mb-2">Street address <span className="text-red-600">*</span></label>
                    <input type="text" className="mb-3 text-lg text-black p-1" placeholder="House number and street name" />
                    <input type="text" placeholder="Apartment, suite, unit, etc. (optional)"  className="text-lg text-black p-1"/>
                </div>

                <div className="col-span-2 flex flex-col">
                    <label htmlFor=""  className="font-bold text-sm mb-2">Suburb <span className="text-red-600">*</span></label>
                    <input type="text"  className="text-lg text-black p-1" />
                </div>

                <div className="col-span-2 flex flex-col">
                    <label htmlFor=""  className="font-bold text-sm mb-2">State <span className="text-red-600">*</span></label>
                    <select name="" id=""  className="text-lg text-black p-1" >
                    <option value="" disabled selected className="text-gray-300">Select an option...</option>
                        <option value="1">Australian Capital Territory</option>
                        <option value="2">New South Wales</option>
                        <option value="3">Northern Territory</option>
                        <option value="4">Queensland</option>
                        <option value="5">South Australia</option>
                        <option value="6">Tasmania</option>
                        <option value="7">Victoria</option>
                        <option value="8">Western Australia</option>
                    </select>
                </div>

                <div className="col-span-2 flex flex-col">
                    <label htmlFor=""  className="font-bold text-sm mb-2">Postcode <span className="text-red-600">*</span></label>
                    <input type="text"   className="text-lg text-black p-1"/>
                </div>

                <div className="col-span-2 flex flex-col">
                    <label htmlFor=""  className="font-bold text-sm mb-2">Phone <span className="text-red-600">*</span></label>
                    <input type="text" className="text-lg text-black p-1" />
                </div>
                <div className="col-span-2 flex flex-col">
                    <label htmlFor=""  className="font-bold text-sm mb-2">Email address <span className="text-red-600">*</span></label>
                    <input type="email" className="text-lg text-black p-1"/>
                </div>


                <div>
                    <input type="checkbox" />
                    <label htmlFor="" className="ml-2 text-activeOrange font-bold">SHIP TO A DIFFERENT ADDRESS?</label>
                </div>
                
                <div className="col-span-2 flex flex-col">
                    <label htmlFor="">Order notes (optional)</label>
                    <textarea />
                </div> 
            </form>
        </div>

    <OrderWidget />

        </div>
      </div>
    </div>
  );
};

export default Checkout;
