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
      <div id="container" className="w-full lg:w-[1200px] ">

        <div
          id="top"
          className="flex flex-col lg:flex-row justify-between py-10 gap-x-16"
        >
          <div id="one" className="w-full lg:w-[50%] flex flex-col items-center lg:items-start">
            <Image src="/logo.png" width={100} height={100} alt="logo" />
            <p className="mt-5 px-10 lg:px-0 text-center lg:text-start text-gray-300">
              MCC caps are custom made to our own specifications with quality
              and fit <br/>
               at the forefront of our design. Being completely custom
              made, our hats can <br/>
               be made in a large range of colour options.
              Want something different? <br/> 
              We also offer customer printed mesh and
              under-brim! <br/> 
              The opportunities are endless - get in touch with the
              team at <br/> 
              howdy@mcinnescustomcaps.com.au to bring your design to
              life!
            </p>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col lg:flex-row px-10 lg:px-0 justify-between lg:items-end ">

            <div id="three" className="mb-10 lg:mb-0">
              <ul className="flex flex-col mt-3 lg:mt-5 gap-y-1 lg:gap-y-1 text-gray-300">
                <Link href="/"> Home</Link>
                <Link href="/"> How To Order</Link>
                <Link href="/designer"> Design Your Own</Link>
                <Link href="/"> Store</Link>
                <Link href="/"> Portfolio</Link>
                <Link href="/"> Contact Us</Link>
              </ul>
            </div>

            <div id="two" className="w-[300px] mb-10 lg:mb-0">
              <div className="flex flex-col mt-3 lg:mt-5 gap-y-3 lg:gap-y-4 text-gray-300">
                <button className="flex items-center gap-x-2">
                  <BsFillTelephoneFill
                    size={20}
                    className="text-activeOrange"
                  />
                  <p className="text-sm">0448 633 294</p>
                </button>
                <Link
                  href="mailto:howdy@mcinnescustomcaps.com.au"
                  className="flex items-center gap-x-2"
                >
                  <BsSend size={20} className="text-activeOrange" />
                  <p className="text-sm">howdy@mcinnescustomcaps.com.au</p>
                </Link>

                <button className="flex items-center gap-x-1">
                  <MdLocationOn size={20} className="text-activeOrange" />
                  <p className="text-sm">13 Capital Terrace, Queanbeyan NSW</p>
                </button>
              </div>
            </div>
            {/* <div id="four">
            <h2 className="font-semibold text-2xl">More Info</h2>
            <ul className="flex flex-col mt-3 lg:mt-5 gap-y-1 lg:gap-y-3 text-gray-300">
              <Link href="/"> Sizing</Link>
              <Link href="/"> FAQs</Link>
              <Link href="/"> Refunds & Cancellation</Link>
              <Link href="/"> Sponsorship & Donations</Link>
            </ul>
          </div> */}
          </div>
        </div>

        <div
          id="bottom"
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between border-t border-activeOrange py-3 "
        >
          <div id="left" className="flex flex-col lg:flex-row items-center">
            <p className="text-sm">
              &copy; 2023 McInnes Custom Caps. All Rights Reserved.
            </p>
            <div className="text-sm mx-2 my-5 lg:my-0">
              <Link href="/" className="lg:border-l-2 border-activeOrange px-2">
                Terms of Use
              </Link>
              <Link href="/" className="border-l-2 border-activeOrange px-2">
                Accessibility
              </Link>
              <Link href="/privacy-policy" target="_blank" className="border-l-2 border-activeOrange px-2">
                Privacy Policy
              </Link>
            </div>
          </div>

          <div id="right" className="flex gap-x-5">
            <Link
              href="https://www.facebook.com/McInnesCustomCaps/"
              target="_blank"
            >
              {" "}
              <FaFacebookF size={30} />
            </Link>
            <Link
              href="https://www.instagram.com/mcinnescustomcaps/"
              target="_blank"
            >
              {" "}
              <FaInstagram size={30} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
