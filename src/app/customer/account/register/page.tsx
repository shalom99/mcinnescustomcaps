import Link from "next/link";
import { FC } from "react";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" bg-gray-600 flex justify-center py-32">
      <div
        id="container"
        className="w-full lg:w-[1200px] px-2 flex justify-center"
      >
        <div className="flex flex-col items-center bg-white w-[500px]">
          <div
            id="registerHeader"
            className="flex justify-between w-full"
          >
            <div className="w-[50%] border-b-2 border-activeOrange font-semibold text-center py-5">
              New Customer
            </div>
            <Link
              href="/customer/account/login"
              className="w-[50%] border-b text-gray-500 text-center py-5"
            >
              Returning Customer
            </Link>
          </div>
          <div id="registerBody" className="w-[350px] py-10">
            <h2 className="text-center text-2xl mb-5">Create an account</h2>
            <p className="text-center text-md text-gray-500">
              We will never post on your behalf or share any information without
              your permission.
            </p>

            <form action="" className="w-full mt-5">
              <div className="flex flex-col items mb-5">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email Address *
                </label>
                <input type="email" className="border h-10" />
              </div>
              <div className="flex flex-col items">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password *
                </label>
                <input type="password" className="border h-10" />
              </div>
              <div className="flex flex-col items mt-5">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  First name
                </label>
                <input type="input" className="border h-10" />
              </div>

              <button className="w-full bg-activeOrange text-white h-10 mt-5 mb-3">
                CONFIRM AND CONTINUE
              </button>
              <p className="text-xs text-center text-gray-500">
                By creating your account or signing in, you agree to our Terms
                and Conditions & Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
