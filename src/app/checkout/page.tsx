"use client";
import { FC, useEffect } from "react";
import { calculateTotal } from "@/libs/config/helpers";
import { AiOutlineRollback } from "react-icons/ai";
import { useCartStore, useLoaderStore } from "@/libs/store";
import { useRouter } from "next/navigation";
import OrderWidget from "./components/OrderWidget";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export type CheckoutFormData = {
  firstName: string;
  lastName: string;
  companyName?: string;
  streetAddress1: string;
  streetAddress2?: string;
  suburb: string;
  state: string;
  postcode: number;
  phone: string;
  email: string;
  orderNotes?: string;
  cartItems: any;
  checkbox: any;
};

type pageProps = {};

const Checkout: FC<pageProps> = ({}) => {
  const router = useRouter();
  const { cartItems } = useCartStore();
  const { isLoading, setIsLoading} = useLoaderStore();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CheckoutFormData>();

   function onCheckoutSubmit(data: CheckoutFormData) {
    setIsLoading(true)
    sendOrder({ ...data, cartItems: cartItems });
    // setIsLoading(false)
  

  }

  function sendOrder(data: any) {
 
    const apiEndpoint = '/api/order';
  
    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => {
        // alert(response.message);
        toast.success('Order Sent!')
        setIsLoading(false)
   
      })
      .catch((err) => {
        // alert(err);
        toast.error('Order creation failed!')
      });


      // console.log(data);
  }

  useEffect(() => {
    if (cartItems.length === 0) {
      router.push("/cart");
    }
  }, [router]);

  return (
    <div className=" bg-gray-600 flex justify-center py-10 lg:py-32">
      <form
        onSubmit={handleSubmit(onCheckoutSubmit)}
        id="container"
        className="w-full lg:w-[1200px] text-white px-2 flex flex-col mt-10"
      >
        <div className="w-full flex items-center justify-between border-b pb-4 mb-10 ">
          <h2 className="text-4xl font-bold text-activeOrange">Checkout</h2>
          <button
            onClick={() => {
              setIsLoading(true)
              setTimeout(() => {
                router.push('/cart')
                setIsLoading(false)
              },1000)
            }}
            className="bg-primaryGreen rounded-full py-2 px-4 flex items-center gap-x-2 font-bold"
          >
            Back to Cart
            <AiOutlineRollback size={20} />
          </button>
        </div>

        <div
          id="container2"
          className="flex flex-col lg:flex-row items-start gap-x-10 "
        >
          <div id="billingDetails" className="w-full lg:w-[60%]">
            <div className="grid grid-cols-2 gap-x-5 gap-y-3 ">
              <div className="flex flex-col">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  First Name
                  <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  className="text-lg text-black p-1"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName?.type === "required" && (
                  <p className="text-red-700 font-bold text-sm mt-2">
                    * First name is required
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  Last Name
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="text-lg text-black p-1"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName?.type === "required" && (
                  <p className="text-red-700 font-bold text-sm mt-2">
                    * Last name is required
                  </p>
                )}
              </div>
              <div className="col-span-2 flex flex-col">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  className="text-lg text-black p-1"
                  {...register("companyName", { required: false })}
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  Country / Region <span className="text-red-600">*</span>
                </label>
                <p className="font-bold ">Australia</p>
              </div>
              <div className="col-span-2 flex flex-col">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  Street address <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="mb-3 text-lg text-black p-1"
                  placeholder="House number and street name"
                  {...register("streetAddress1", { required: true })}
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  className="text-lg text-black p-1"
                  {...register("streetAddress2", { required: false })}
                />
                {errors.streetAddress1?.type === "required" && (
                  <p className="text-red-700 font-bold text-sm mt-2">
                    * Address is required
                  </p>
                )}
              </div>

              <div className="col-span-2 flex flex-col">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  Suburb <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="text-lg text-black p-1"
                  {...register("suburb", { required: true })}
                />
                {errors.suburb?.type === "required" && (
                  <p className="text-red-700 font-bold text-sm mt-2">
                    * Suburb is required
                  </p>
                )}
              </div>

              <div className="col-span-2 flex flex-col">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  State <span className="text-red-600">*</span>
                </label>
                <select
                  defaultValue={0}
                  className="text-lg text-black p-1"
                  {...register("state", { required: true })}
                >
                  <option value={0} disabled className="text-gray-300">
                    Select an option...
                  </option>
                  <option value="ACT">Australian Capital Territory</option>
                  <option value="New South Wales">New South Wales</option>
                  <option value="Northern Territory">Northern Territory</option>
                  <option value="Queensland">Queensland</option>
                  <option value="South Australia">South Australia</option>
                  <option value="Tasmania">Tasmania</option>
                  <option value="Victoria">Victoria</option>
                  <option value="Western Australia">Western Australia</option>
                </select>
                {errors.state && (
                  <p className="text-red-700 font-bold text-sm mt-2">
                    Please select a state
                  </p>
                )}
              </div>

              <div className="col-span-2 flex flex-col">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  Postcode <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="text-lg text-black p-1"
                  {...register("postcode", { required: true })}
                />
                {errors.postcode?.type === "required" && (
                  <p className="text-red-700 font-bold text-sm mt-2">
                    * Postcode is required
                  </p>
                )}
              </div>

              <div className="col-span-2 flex flex-col">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="text-lg text-black p-1"
                  {...register("phone", { required: true })}
                />
                {errors.phone?.type === "required" && (
                  <p className="text-red-700 font-bold text-sm mt-2">
                    * Phone is required
                  </p>
                )}
              </div>
              <div className="col-span-2 flex flex-col">
                <label htmlFor="" className="font-bold text-sm mb-2">
                  Email address <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  className="text-lg text-black p-1"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-700 font-bold text-sm mt-2">
                    * Email address is required
                  </p>
                )}
              </div>

              <div>
                <input type="checkbox" />
                <label htmlFor="" className="ml-2 text-activeOrange font-bold">
                  SHIP TO A DIFFERENT ADDRESS?
                </label>
              </div>

              <div className="col-span-2 flex flex-col">
                <label htmlFor="">Order notes (optional)</label>
                <textarea
                  className="text-black p-1 text-lg"
                  {...register("orderNotes", { required: false })}
                />
              </div>
            </div>
          </div>

          <div
            id="orderDetails"
            className="w-full lg:w-[40%] grid grid-cols-3 border auto-rows-min py-5 px-5"
          >
            <h2 className="col-span-3 font-bold text-xl">YOUR ORDER</h2>
            <div className="col-span-3 pt-3 pb-2 flex justify-between border-b font-bold">
              <p>Product</p>
              <p>Subtotal</p>
            </div>

            <OrderWidget />

            <div className="col-span-3 flex justify-between border-y py-2">
              <p className="font-bold">Subtotal</p>
              <p>${calculateTotal(cartItems).toFixed(2)}</p>
            </div>
            <div className="col-span-3 flex justify-between border-b py-2">
              <p className="font-bold">Total</p>
              <p>${calculateTotal(cartItems).toFixed(2)}</p>
            </div>
            <div className="col-span-3 py-5">
              <p>
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <span className="text-activeOrange">privacy policy.</span>{" "}
              </p>
            </div>
            <div className="col-span-3 mb-4">
              <input
                type="checkbox"
                className=""
                {...register("checkbox", { required: true })}
              />

              <p className="ml-3 inline">
                I have read and agree to the website
                <span className="text-activeOrange">
                  {" "}
                  terms and conditions{" "}
                </span>{" "}
                <span> * </span>
              </p>
              {errors.checkbox?.type && (
                <p className="text-red-700 font-bold text-sm mt-2">
                  * Required
                </p>
              )}
            </div>
            <button className="col-span-3 rounded-full bg-activeOrange font-bold py-2">
              PLACE ORDER
            </button>
          </div>
        </div>
      </form>
    </div>
  );


};

export default Checkout;
