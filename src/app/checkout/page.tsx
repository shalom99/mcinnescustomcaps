import { FC } from "react";

type pageProps = {};

const Checkout: FC<pageProps> = ({}) => {
  return (
    <div className=" bg-gray-600 flex justify-center py-32">
      <div id="container" className="w-full lg:w-[1200px] text-white px-2 flex flex-col mt-10">
        
        <h2 className="text-4xl font-bold border-b pb-4 mb-10 text-activeOrange">Checkout</h2>

        <div id="container2" className="flex items-start gap-x-10 ">

        <div id="billingDetails" className="w-[60%]">
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

        <div id="orderDetails" className=" w-[40%] grid grid-cols-3 border auto-rows-min py-5 px-5">
            <h2 className="col-span-3 font-bold text-xl">YOUR ORDER</h2>
            <div className="col-span-3 pt-3 pb-2 flex justify-between border-b font-bold">
                <p>Product</p>
                <p>Subtotal</p>
            </div>
            <div className="col-span-3 py-3 grid grid-cols-3 text-center items-center gap-x-5">
                <div className="">      <p>Custom Hat Design - Request A Quote</p></div>
          
                <ul className="text-start list-disc list-inside">
                    <li>Front Panel: </li>
                    <li>Peak: </li>
                    <li>Under Brim: </li>
                    <li>Upper Stripe: </li>
                    <li>Lower Stripe: </li>
                    <li>Back Mesh: </li>
                    <li>Snap Back: </li>
                </ul>
                <div className="flex justify-between">
                    <p>x1</p>
                <p className="">$0.00</p>
                </div>
              
            </div>
            <div className="col-span-3 flex justify-between border-y py-2">
                <p className="font-bold">Subtotal</p>
                <p>$0.00</p>
            </div>
            <div className="col-span-3 flex justify-between border-b py-2">
                <p className="font-bold">Total</p>
                <p>$0.00</p>
            </div>
            <div className="col-span-3 py-5">
                <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <span className="text-activeOrange">privacy policy.</span> </p>
            </div>
            <div className="col-span-3 mb-4">
                <input type="checkbox" className="" />
     
                <p className="ml-3 inline">I have read and agree to the website    
                <span className="text-activeOrange"> terms and conditions   </span>   <span> * </span> 
              </p>
            </div>
            <button className="col-span-3 rounded-full bg-activeOrange font-bold py-2">PLACE ORDER</button>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
