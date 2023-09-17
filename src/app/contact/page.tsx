import Link from "next/link";
import { FC } from "react";
import { BsFillTelephoneFill, BsSend } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import MyMap from './components/myMap'

type pageProps = {};

const Contact: FC<pageProps> = ({}) => {
  return (
    <div className=" bg-gray-600 flex justify-center pt-32">
      <div id="container" className="w-full lg:w-[1200px] text-white px-2 py-10 flex">
        <div
          id="leftContact"
          className=" grow flex flex-col justify-center"
        >
          <h2 className="text-5xl">Get in touch with us</h2>
          <div className="flex flex-col gap-y-3 mt-10">
            <Link
              href="mailto:howdy@mcinnescustomcaps.com.au"
              className="flex items-center gap-x-3  "
            >
              <BsSend size={30} className="text-activeOrange" />
              <p className="text-sm hover:text-activeOrange duration-500">
                howdy@mcinnescustomcaps.com.au
              </p>
            </Link>
            <button className="flex items-center gap-x-4">
              <BsFillTelephoneFill size={25} className="text-activeOrange" />
              <p className="text-sm">0448 633 294</p>
            </button>

            <Link
              href="https://goo.gl/maps/ckhyyHfCaTgtsGca9"
              target="_blank"
              className="flex items-center gap-x-3"
            >
              <MdLocationOn size={30} className="text-activeOrange" />
              <p className="text-sm hover:text-activeOrange duration-500">
                13 Capital Terrace, Queanbeyan NSW
              </p>
            </Link>

            <MyMap />
          </div>
        </div>
        <div id="rightContact" className="w-[500px] ">
          <form
            action="post"
            className="grid grid-cols-2 gap-y-7 gap-x-3 bg-white text-black rounded-3xl p-10"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                className="border rounded-lg shadow-md s shadow-gray-200 pl-2 py-1 focus:outline-activeOrange"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Last Name
              </label>
              <input
                type="text" 
                className="focus:outline-activeOrange  rounded-lg shadow-md shadow-gray-200 pl-2 py-1 "
              />
            </div>

            <div className="col-span-2 flex flex-col">
              <label htmlFor="" className="text-sm">
                Email (privacy policy) <span>*</span>
              </label>
              <input
                type="text"
                className="border  rounded-lg shadow-md shadow-gray-200 py-1 pl-2 focus:outline-activeOrange"
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="" className="text-sm">
                Message
              </label>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="border  rounded-lg shadow-md shadow-gray-200 pl-2 py-1 focus:outline-activeOrange"
              ></textarea>
            </div>
            <div className="">
              <button className="bg-activeOrange rounded-2xl py-3 px-5 text-white text-sm">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
