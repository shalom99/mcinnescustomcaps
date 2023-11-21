import { FC } from "react";
import {
  BsFillTelephoneFill,
  BsSend,
  BsArrowRightCircle,
} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { GoPerson } from 'react-icons/go'
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import CartHeader from "./CartHeader";
import ProfileHeader from "./ProfileHeader";


type NavbarProps = {};

const Header: FC<NavbarProps> = ({}) => {
  return (
    <>
      <header className=" bg-primaryGreen text-white lg:flex flex-col items-center relative">
        <div
          id="nav-top"
          className="hidden py-3 lg:flex justify-between w-[1200px]"
        >
          <div id="left" className="flex gap-x-5">
            <button className="flex items-center gap-x-2">
              <BsFillTelephoneFill size={15} />
              <p className="text-xs">0448 633 294</p>
            </button>
            <Link
              href="mailto:howdy@mcinnescustomcaps.com.au"
              className="flex items-center gap-x-2 px-4 border-x-2 border-activeOrange "
            >
              <BsSend size={15} />
              <p className="text-xs hover:text-activeOrange duration-500">
                howdy@mcinnescustomcaps.com.au
              </p>
            </Link>

            <Link
              href="https://goo.gl/maps/ckhyyHfCaTgtsGca9"
              target="_blank"
              className="flex items-center gap-x-1"
            >
              <MdLocationOn size={15} />
              <p className="text-xs hover:text-activeOrange duration-500">
                13 Capital Terrace, Queanbeyan NSW
              </p>
            </Link>
          </div>
          <div id="right" className="flex items-center">
            <div className="flex items-center border-activeOrange border-r-2 pr-4">
              <BsArrowRightCircle size={20} />
              <p className="mx-2 text-xs">Follow Us:</p>
              <Link
                href="https://www.facebook.com/McInnesCustomCaps/"
                target="_blank"
              >
                <FaFacebookF
                  className="mr-2 hover:text-activeOrange duration-500"
                  size={20}
                />
              </Link>
              <Link
                href="https://www.instagram.com/mcinnescustomcaps/"
                target="_blank"
              >
                <FaInstagram
                  size={20}
                  className="hover:text-activeOrange duration-500"
                />
              </Link>
            </div>
              <ProfileHeader />
              <CartHeader />
          </div>
        </div>

        <div
          id="mobileHeader"
          className="lg:hidden w-full flex flex-col bg-activeOrange py-2 px-2"
        >
          <Link
            href="mailto:howdy@mcinnescustomcaps.com.au"
            className="flex items-center gap-x-2"
          >
            <BsSend size={20} />
            <p className="text-md">howdy@mcinnescustomcaps.com.au</p>
          </Link>
          <button className="flex items-center gap-x-2">
            <BsFillTelephoneFill size={20} />
            <p className="text-md">0448 633 294</p>
          </button>
          {/* <Link
            href="https://goo.gl/maps/ckhyyHfCaTgtsGca9"
            target="_blank"
            className="flex items-center gap-x-1"
          >
            <MdLocationOn size={15} />
            <p className="text-xs hover:text-activeOrange duration-500">
              13 Capital Terrace, Queanbeyan NSW
            </p>
          </Link> */}
        </div>
        <Navbar />
      </header>
    </>
  );
};

export default Header;
