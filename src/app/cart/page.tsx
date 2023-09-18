import { FC } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

type pageProps = {};

const page: FC<pageProps> = ({}) => {
  return (
    <div className=" bg-gray-600 flex justify-center pt-32 pb-10">
      <div
        id="container"
        className="w-full lg:w-[1200px] text-white px-2 flex flex-col mt-10"
      >
        <h2 className="text-4xl font-bold border-b pb-4 mb-10 text-activeOrange">
          Shopping Cart
        </h2>

        <div
          id="cartTableContainer"
          className=" w-full border text-center bg-white text-black "
        >
          <div
            id="tableHeader"
            className="grid grid-cols-6 bg-gray-300 py-2 font-bold border"
          >
            <p className="col-span-3">Product</p>
            <p className="">Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div id="tableBody" className="grid grid-cols-6 items-center py-10">
            <div className="col-span-3 flex">
              <div id="left" className="w-[50%] flex items-center px-5 gap-x-5">
                <AiFillCloseCircle size={30} />
                <img src="./cap/1.png" alt="" width={150} />
              </div>
              <div id="right" className="w-[50%]">
                <p className="text-activeOrange font-bold text-lg">
                  Custom Hat Design - Request A Quote
                </p>
                <ul className="text-start list-disc list-inside font-bold">
                  <li>Front Panel: </li>
                  <li>Peak: </li>
                  <li>Under Brim: </li>
                  <li>Upper Stripe: </li>
                  <li>Lower Stripe: </li>
                  <li>Back Mesh: </li>
                  <li>Snap Back: </li>
                  <li>Front Branding:</li>
                  <li>Side Left Branding:</li>
                  <li>Side Right Branding:</li>
                  <li>Back Branding:</li>
                  <li>Under Brim Branding:</li>
                  <li>Hat Profile: </li>
                  <li>Cap Fabric Material: </li>
                  <li>Front Label: </li>
                  <li>Side Left Label: </li>
                  <li>Side Right Label: </li>
                </ul>
              </div>
            </div>
            <div>
              <p>$0.00</p>
            </div>
            <div>
              <input
                type="number"
                placeholder="0"
                className="border text-black w-[100px] text-center"
                min={25}
                max={1000}
              />
            </div>
            <div>
              <p>$0.00</p>
            </div>
          </div>
          <div id="tableFooter" className="border flex py-5 px-10 justify-end">
            <button className="bg-activeOrange rounded-full px-5 py-2 text-white font-bold">
              Update Cart
            </button>
          </div>
        </div>

        <div id="cartTotals" className="mt-10 w-full flex justify-end">
          <div className="w-[50%] border bg-white">
            <div id="carthHeader" className="bg-gray-300 py-5 px-5 border">
                <h2 className="text-activeOrange font-bold text-3xl">CART TOTALS</h2>
            </div>
            <div id="cartBody" className="text-black py-5 px-3">
                <div className="flex border-b py-2 px-3">
                    <h3 className="w-[40%] font-bold">Subtotal</h3>
                    <p className="w-[60%]">$0.00</p>
                </div>
                <div className="flex border-b py-2 px-3">
                    <h3 className="w-[40%] font-bold">Shipping</h3>
                    <p className="w-[60%]">Calculate shipping</p>
                </div>
                <div className="flex border-b py-2 px-3">
                    <h3 className="w-[40%] font-bold">Total</h3>
                    <p className="w-[60%]">$0.00</p>
                </div>
            <button className="bg-activeOrange w-full my-5 py-2 rounded-full text-white font-bold">Proceed to checkout</button>
            </div>
          </div>
        </div>
        <p className="mt-5 text-gray-300">*If you’re a local, you are more than welcome to visit us. After the purchase, we will get in touch with you and tell you what are your next steps and where you can collect your items.</p>
      </div>
    </div>
  );
};

export default page;
