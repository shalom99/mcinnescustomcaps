import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import {
  BsFillTelephoneFill,
  BsSend,
  BsCart3,
  BsArrowRightCircle,
} from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="bg-primaryGreen text-white flex items-center justify-center">
      <div id="container" className="w-[1200px] ">
        <div id="top" className="flex py-10 gap-x-16">
          <div id="one" className="w-[300px] flex flex-col items-center">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
            <p className="mt-5 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              facilis natus molestiae magni cupiditate mollitia laboriosam
              nesciunt doloremque quasi, consequuntur
            </p>
          </div>

          <div className="grow flex justify-between">

          <div id="two">
            <h2 className="font-semibold text-2xl">Contact</h2>

            <div className="flex flex-col mt-5 gap-y-5">
              <button className="flex items-center gap-x-2">
                <BsFillTelephoneFill size={20} />
                <p className="text-sm">0448 633 294</p>
              </button>
              <Link href="mailto:howdy@mcinnescustomcaps.com.au" className="flex items-center gap-x-2">
                <BsSend size={20} />
                <p className="text-sm">howdy@mcinnescustomcaps.com.au</p>
              </Link>

              <button className="flex items-center gap-x-1">
                <MdLocationOn size={20} />
                <p className="text-sm">13 Capital Terrace, Queanbeyan NSW</p>
              </button>
            </div>
          </div>
          <div id="three">
            <h2 className="font-semibold text-2xl">Useful Links</h2>
            <ul className="flex flex-col mt-5 gap-y-1">
              <Link href="/"> Home</Link>
              <Link href="/"> How To Order</Link>
              <Link href="/"> Design Your Own</Link>
              <Link href="/"> Store</Link>
              <Link href="/"> Portfolio</Link>
              <Link href="/"> Contact Us</Link>
            </ul>
          </div>
          <div id="four">
            <h2 className="font-semibold text-2xl">More Info</h2>
            <ul className="flex flex-col mt-5 gap-y-1">
              <Link href="/"> Sizing</Link>
              <Link href="/"> FAQs</Link>
              <Link href="/"> Refunds & Cancellation</Link>
              <Link href="/"> Sponsorship & Donations</Link>
            </ul>
          </div>
          </div>
        </div>

        <div id="bottom" className="flex justify-between border-t border-activeOrange py-3 ">
          <div id="left" className="flex items-center">
            <p className="text-sm">
              &copy; 2023 McInnes Custom Caps. All Rights Reserved.
            </p>
            <div className="text-sm mx-2">
              <Link href="/" className="border-l-2 px-2">
                Terms of Use
              </Link>
              <Link href="/" className="border-l-2 px-2">
                Accessibility
              </Link>
              <Link href="/" className="border-l-2 px-2">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div id="right" className="flex gap-x-5">
            <Link href="https://www.facebook.com/McInnesCustomCaps/"
            target="_blank"> <FaFacebookF size={30} /></Link>
            <Link href="https://www.instagram.com/mcinnescustomcaps/"
            target="_blank"> <FaInstagram size={30} /></Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
