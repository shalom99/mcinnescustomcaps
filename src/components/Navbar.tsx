'use client'
import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import cn from "@/libs/cn";

import { usePathname } from 'next/navigation'

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {

  const pathname = usePathname()
  return (
    <>
    
      <nav className="absolute top-10 flex justify-center items-center pt-6 z-10 text-black">
        <div className="w-[1200px] flex justify-between items-center">
            <Image src="/logo.png"  width={100} height={100} alt="logo"/>
 
            <div className="text-white">
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
