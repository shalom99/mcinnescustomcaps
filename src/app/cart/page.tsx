'use client'
import { FC, useEffect, useState, } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import RemoveItem from "@/components/modals/RemoveItem";
import { useCartStore } from "@/libs/store";
import { calculateTotal } from "@/libs/config/helpers";
import { CartItem } from "@/libs/types";
import { BsFillCartXFill } from "react-icons/bs";
import { useRouter } from "next/navigation";


type pageProps = {};

const CartPage: FC<pageProps> = ({}) => {

  const {cartItems} = useCartStore()
  const [removeItemModal, setRemoveItemModal] = useState(false)
  const router = useRouter()


  // const [quantity, setQuantity] = useState(cartItems[0].quantity) 

  // const [subtotal, setSubtotal] = useState(calculateTotal(cartItems))

  // useEffect(()=> {
  //   setSubtotal(quantity * cartItems[0].price)
  // }, [quantity])


  if(cartItems.length === 0){
    return(
      <div className=" bg-gray-600 flex justify-center pt-10 lg:pt-32 pb-10">
      <div
        id="container"
        className="w-full lg:w-[1200px] text-white px-2 flex flex-col mt-10"
      >
        <h2 className="text-4xl font-bold border-b pb-4 mb-10 text-activeOrange">
          Shopping Cart
        </h2>

        <div
          id="cartTableContainer"
          className=" w-[1200px] h-[200px] border text-center bg-white text-black overflow-auto flex justify-center items-center"
        >
          <div className="flex items-center gap-x-5">
          <BsFillCartXFill className="text-activeOrange" size={50} />
          <p className="text-2xl font-bold">Cart is empty</p>
          </div>


        </div>
  
       
      </div>
     
    </div>
    )
  }else{

    return (
      <div className=" bg-gray-600 flex justify-center pt-10 lg:pt-32 pb-10">
        <div
          id="container"
          className="w-full lg:w-[1200px] text-white px-2 flex flex-col mt-10"
        >
          <h2 className="text-4xl font-bold border-b pb-4 mb-10 text-activeOrange">
            Shopping Cart
          </h2>
          <div className="w-full overflow-auto lg:overflow-hidden">
          <div
            id="cartTableContainer"
            className=" w-[1200px] border text-center bg-white text-black overflow-auto"
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
            <div id="tableBody" className="w-full max-h-[600px] grid grid-cols-6 auto-cols-max items-center gap-y-5 py-10 overflow-y-scroll">

              {
                 cartItems.map(function(item: CartItem){
                  return (
                    <>
                    <div className="col-span-3 flex">
                    <div id="left" className="w-[50%] flex items-center px-5 gap-x-5">
                      <AiFillCloseCircle onClick={() => {setRemoveItemModal(true)}} size={30} className="cursor-pointer" />
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
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="25"
                      className="border text-black w-[100px] text-center"
                      min={25}
                      value={item.quantity}
                      // onChange={(e) => {
                      //   setQuantity(e.target.valueAsNumber)
                      // }}
                      max={1000}
                    />
                  </div>
                  <div>
                    <p>${item.subtotal.toFixed(2)}</p>
                  </div>
                  </>
                  )
                 })
              }
       
            </div>



            <div id="tableFooter" className="border flex py-5 px-10 lg:justify-end">
              <button className="bg-activeOrange rounded-full px-5 py-2 text-white font-bold">
                Update Cart
              </button>
            </div>
          </div>
          </div>
  
          <div id="cartTotals" className="mt-10 w-full flex justify-end">
            <div className="w-full lg:w-[50%] border bg-white">
              <div id="carthHeader" className="bg-gray-300 py-5 px-5 border">
                  <h2 className="text-activeOrange font-bold text-3xl">CART TOTALS</h2>
              </div>
              <div id="cartBody" className="text-black py-5 px-3">
                  <div className="flex border-b py-2 px-3">
                      <h3 className="w-[40%] font-bold">Subtotal</h3>
                      <p className="w-[60%]">${calculateTotal(cartItems).toFixed(2)}</p>
                  </div>
                  <div className="flex border-b py-2 px-3">
                      <h3 className="w-[40%] font-bold">Shipping</h3>
                      <p className="w-[60%]">Calculate shipping</p>
                  </div>
                  <div className="flex border-b py-2 px-3">
                      <h3 className="w-[40%] font-bold">Total</h3>
                      <p className="w-[60%]">${calculateTotal(cartItems).toFixed(2)}</p>
                  </div>

              <button onClick={() => {
                router.push('/checkout')
              }} className="bg-activeOrange w-full my-5 py-2 rounded-full text-white font-bold">Proceed to checkout</button>
              
              </div>
            </div>
          </div>


          <p className="mt-5 text-gray-300">*If you’re a local, you are more than welcome to visit us. After the purchase, we will get in touch with you and tell you what are your next steps and where you can collect your items.</p>
        </div>
        {removeItemModal ?      <RemoveItem cartItem={cartItems[0]} setRemoveItemModal={setRemoveItemModal} /> : ''
        }
      </div>
    );

  }


  
};

export default CartPage;
