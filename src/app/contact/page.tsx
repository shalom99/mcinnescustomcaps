'use client'
import Link from "next/link";
import { FC } from "react";
import { BsFillTelephoneFill, BsSend } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import MyMap from './components/myMap'
import { sendContact } from "@/libs/config/helpers";
import { useForm } from 'react-hook-form';

type pageProps = {};

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};


const Contact: FC<pageProps> = ({}) => {

  const { register, handleSubmit } = useForm<ContactFormData>();

  function onSubmit(data: ContactFormData) {
    sendContact(data);
  }


  return (
    <div className=" bg-gray-600 flex justify-center lg:pt-32">
      <div id="container" className="w-full lg:w-[1200px] text-white px-2 py-10 flex flex-col lg:flex-row gap-y-10 gap-x-10">
        <div
          id="leftContact"
          className="grow flex flex-col justify-center"
        >
          <h2 className="text-4xl lg:text-5xl">Get in touch with us!</h2>
          <p className="text-gray-300 text-lg mt-5">Questions or feedback? We&apos;re here to help! <br/>Reach out to us using the information below:</p>
          <div className="flex flex-col gap-y-3 mt-10">
            <button
              className="flex items-center gap-x-3  "
            >
              <BsSend size={30} className="text-activeOrange" />
              <p className="text-sm hover:text-activeOrange duration-500">
                howdy@mcinnescustomcaps.com.au
              </p>
            </button>
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
            <div className="mt-5 w-full h-[300px] lg:w-[600px] lg:h-[400px]">
            <MyMap />
            </div>
          </div>
        </div>
        <div id="rightContact" className="w-full lg:w-[500px] ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-y-7 gap-x-3 bg-white text-black rounded-3xl p-6 lg:p-10"
          >
            <div className="col-span-2 lg:col-span-1 flex flex-col">
              <label htmlFor="" className="text-sm">
                First Name
              </label>
              <input
                type="text"
                className="border rounded-lg shadow-md s shadow-gray-200 pl-2 py-1 focus:outline-activeOrange"
                {...register('firstName', { required: true })}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col">
              <label htmlFor="" className="text-sm">
                Last Name
              </label>
              <input
                type="text" 
                className="focus:outline-activeOrange  rounded-lg shadow-md shadow-gray-200 pl-2 py-1 "
                {...register('lastName', { required: true })}
              />
            </div>

            <div className="col-span-2 flex flex-col">
              <label htmlFor="" className="text-sm">
                Email (privacy policy) <span>*</span>
              </label>
              <input
                type="text"
                className="border  rounded-lg shadow-md shadow-gray-200 py-1 pl-2 focus:outline-activeOrange"
                {...register('email', { required: true })}
              />
            </div>
            <div className="col-span-2 flex flex-col">
              <label htmlFor="" className="text-sm">
                Message
              </label>
              <textarea
               
                id=""
                cols={30}
                rows={10}
                placeholder="I'm interested in learning more about..."
                className="border rounded-lg shadow-md shadow-gray-200 pl-2 py-1 focus:outline-activeOrange"
                {...register('message', { required: true })}
              ></textarea>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <button className="bg-activeOrange rounded-2xl py-3 px-5 text-white text-sm w-full">
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
