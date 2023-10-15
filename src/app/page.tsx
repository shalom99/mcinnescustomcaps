import localFont from 'next/font/local'
import TestimonialBrands from "@/components/TestimonialBrands";
import Link from "next/link";
import HomeStore from "@/components/HomeStore";

const myFont = localFont({
  src: '../fonts/DINAlternateMedium.otf',
  display: 'swap',
})

export default function Home() {
  return (
    <>
      <main className="bg-main bg-cover bg-no-repeat bg-center h-screen relative flex flex-col justify-end items-center">
        <div
          id="overlay"
          className="absolute inset-0 bg-black opacity-25 "
        ></div>
        <div className="w-full lg:w-[1200px] text-white z-10 px-5 pb-10 lg:pb-0 lg:px-0">
          <h2 className={`text-6xl font-regular mb-5 `+ myFont.className}>MCINNES CUSTOM CAPS</h2>
          <h3 className={`text-2xl `+ myFont.className}>
            The Custom Trucker Cap Specialists!
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

      <HomeStore />

      {/* <TestimonialBrands /> */}
      {/* <div id="store2" className="h-screen bg-gray-200"></div> */}
    </>
  );
}
