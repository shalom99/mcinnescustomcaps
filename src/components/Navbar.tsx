'use client'
import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "@/libs/cn";

import { usePathname } from 'next/navigation'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";


type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {

  const [openMobileNav, setOpenMobileNav] = useState(false)

  const pathname = usePathname()
  return (
    <>
    
      <nav className="lg:absolute lg:top-10 flex justify-center items-center px-2 py-2 lg:pt-6 z-10 text-black">
        <div className="w-full lg:w-[1200px] flex justify-between items-center">
          <div className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]">
            <Image src="/logo.png" width={100} height={100} alt="logo"/>
          </div>

          {/* START MOBILE NAV */}
          <div className="lg:hidden text-white flex items-center gap-x-3">
          <AiOutlineMenu onClick={() => {setOpenMobileNav(true)}} size={30} />
          <BsCart3 size={25} />
          </div>

          {openMobileNav ?         
            <div className="lg:hidden fixed top-0 bottom-0 left-0 right-0  bg-primaryGreen z-50 py-20 px-10 text-white">
              <ul className="w-full flex flex-col items-center justify-center gap-y-20 text-lg text-center">
                <Link href="/" onClick={()=> setOpenMobileNav(false)}
                  className={cn(pathname === "/" ? 'text-activeOrange border-b-2 border-activeOrange': '', 'w-full py-2 hover:text-activeOrange duration-500')}> Home</Link>
                <Link href="/designer" onClick={()=> setOpenMobileNav(false)} 
                    className={cn(pathname === "/designer"  ? 'text-activeOrange border-b-2 border-activeOrange': '', 'hover:text-activeOrange duration-500')}
                  > Design Your Own</Link>
                            
                <Link href="/store" onClick={()=> setOpenMobileNav(false)}
                    className={cn(pathname === "/store"  ? 'text-activeOrange border-b-2 border-activeOrange': '', 'hover:text-activeOrange duration-500')}
                  > Store</Link>
                <Link href="/portfolio" onClick={()=> setOpenMobileNav(false)} 
                    className={cn(pathname === "/portfolio"  ? 'text-activeOrange border-b-2 border-activeOrange': '', 'hover:text-activeOrange duration-500')}
                  > Portfolio</Link>
                <Link href="/contact" onClick={()=> setOpenMobileNav(false)} 
                    className={cn(pathname === "/contact"  ? 'text-activeOrange border-b-2 border-activeOrange': '', 'hover:text-activeOrange duration-500')}
                  > Contact</Link>


              </ul>
              <AiOutlineClose onClick={() => {setOpenMobileNav(false)}}  className="absolute top-5 right-5 text-white" size={30} />
            </div> : null}
           {/* END MOBILE NAV */}

          <div className="hidden lg:block text-white">
              <ul className="flex gap-x-4 text-lg">
                <Link href="/"
                  className={cn(pathname === "/" ? 'text-activeOrange border-b-2 border-activeOrange': '', 'hover:text-activeOrange duration-500')}> Home</Link>
                <Link href="/designer" 
                    className={cn(pathname === "/designer"  ? 'text-activeOrange border-b-2 border-activeOrange': '', 'hover:text-activeOrange duration-500')}
                  > Design Your Own</Link>
                            
                <Link href="/store" 
                    className={cn(pathname === "/store"  ? 'text-activeOrange border-b-2 border-activeOrange': '', 'hover:text-activeOrange duration-500')}
                  > Store</Link>
                <Link href="/portfolio" 
                    className={cn(pathname === "/portfolio"  ? 'text-activeOrange border-b-2 border-activeOrange': '', 'hover:text-activeOrange duration-500')}
                  > Portfolio</Link>
                <Link href="/contact" 
                    className={cn(pathname === "/contact"  ? 'text-activeOrange border-b-2 border-activeOrange': '', 'hover:text-activeOrange duration-500')}
                  > Contact</Link>


              </ul>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
