import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import TestimonialBrands from "@/components/TestimonialBrands";
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="bg-main bg-cover bg-no-repeat bg-center h-screen relative flex flex-col justify-end items-center">
        <div
          id="overlay"
          className="absolute inset-0 bg-black opacity-25 "
        ></div>
        <div className="w-[1200px] text-white z-10">
          <h2 className="text-6xl mb-5">Lorem ipsum dolor sit amet.</h2>
          <h3 className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="flex gap-x-5 mb-20 mt-10">
            <button className="bg-black rounded-lg px-6 py-1 text-xl border-white border-2">
              Shop
            </button>
            <Link href="/designer" className="bg-black rounded-lg px-6 py-1 text-xl border-white border-2">
              Design Your Own
            </Link>
          </div>
        </div>
      </main>

      <div id="store" className="bg-gray-200 flex justify-center">
        <div id="container" className="w-[1200px] py-20 flex">
          <div id="left" className=" flex gap-x-10">
            <div className="flex flex-col gap-y-10">
              <div className="w-[270px] h-[390px] bg-home1 bg-center bg-cover rounded-lg relative">
                <div id="overlay" className="absolute inset-0 bg-black opacity-25"></div>
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                    <button className="flex items-center font-bold gap-x-2 text-white">FIND OUT MORE <MdOutlineArrowForwardIos /></button>
                  </div>
              </div>
              <div className="w-[270px] h-[390px] bg-home2 bg-center bg-cover rounded-lg relative">
                <div id="overlay" className="absolute inset-0 bg-black opacity-25"></div>
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                    <button className="flex items-center font-bold gap-x-2 text-white">FIND OUT MORE <MdOutlineArrowForwardIos /></button>
                  </div>
              </div>
            </div>
            <div className="pt-20 flex flex-col gap-y-10">
            <div className="w-[270px] h-[390px] bg-home3 bg-center bg-cover rounded-lg relative">
                <div id="overlay" className="absolute inset-0 bg-black opacity-25"></div>
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                    <button className="flex items-center font-bold text-white gap-x-2">FIND OUT MORE <MdOutlineArrowForwardIos /></button>
                  </div>
              </div>
              <div className="w-[270px] h-[390px] bg-home4 bg-center bg-cover rounded-lg relative">
                <div id="overlay" className="absolute inset-0 bg-black opacity-25"></div>
                  <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                    <button className="flex items-center font-bold gap-x-2 text-white">FIND OUT MORE <MdOutlineArrowForwardIos /></button>
                  </div>
              </div>
            </div>
          </div>
          <div id="right" className="w-full h-auto flex items-center pl-10">
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

      <TestimonialBrands />
      <div id="store2" className="h-screen bg-gray-200"></div>
    </>
  );
}
