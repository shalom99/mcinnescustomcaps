"use client";
import { FC, useState } from "react";
import RemoveItem from "@/components/modals/RemoveItem";
import { useCartStore, useLoaderStore } from "@/libs/store";
import { calculateTotal } from "@/libs/config/helpers";
import { CartItem } from "@/libs/types";
import { BsFillCartXFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
import ItemComponent from "./components/ItemComponent";
import PreviewItem from "@/components/modals/PreviewItem";

type pageProps = {};

const CartPage: FC<pageProps> = ({}) => {
  const { cartItems, setUpdateCart } = useCartStore();6
  const [removeItemModal, setRemoveItemModal] = useState(false);
  const [selectedRemoveItem, setSelectedRemoveItem] = useState<number | null>(null);
  const [showitemPreview, setShowItemPreview] = useState(false);
  const [previewItem, setPreviewItem] = useState({
    front: '',
    back: '',
    left: '',
    right:'',
    bottom:''
  });

  const { setIsLoading } = useLoaderStore();
  const router = useRouter();
  console.log(cartItems);

  if (cartItems.length === 0) {
    return (
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
    );
  } else {
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
              <div
                id="tableBody"
                className="w-full max-h-[600px] grid grid-cols-6 auto-cols-max items-center gap-y-5 py-10 overflow-y-scroll"
              >
                {cartItems.map(function (item: CartItem, i) {
                  return (
                    <ItemComponent
                      key={i}
                      setRemoveItemModal={setRemoveItemModal}
                      setSelectedRemoveItem={setSelectedRemoveItem}
                      setPreviewItem={setPreviewItem}
                      setShowItemPreview={setShowItemPreview}
                      item={item}
                      index={i}
                    />
                  );
                })}
              </div>

              <div
                id="tableFooter"
                className="border flex py-5 px-10 lg:justify-end"
              >
                <button
                  onClick={handleUpdateCart}
                  className="bg-activeOrange rounded-full px-5 py-2 text-white font-bold"
                >
                  Update Cart
                </button>
              </div>
            </div>
          </div>

          <div id="cartTotals" className="mt-10 w-full flex justify-end">
            <div className="w-full lg:w-[50%] border bg-white">
              <div id="carthHeader" className="bg-gray-300 py-5 px-5 border">
                <h2 className="text-activeOrange font-bold text-3xl">
                  CART TOTALS
                </h2>
              </div>
              <div id="cartBody" className="text-black py-5 px-3">
                <div className="flex border-b py-2 px-3">
                  <h3 className="w-[40%] font-bold">Subtotal</h3>
                  <p className="w-[60%]">
                    ${calculateTotal(cartItems).toFixed(2)}
                  </p>
                </div>
                <div className="flex border-b py-2 px-3">
                  <h3 className="w-[40%] font-bold">Shipping</h3>
                  <p className="w-[60%]">Calculate shipping</p>
                </div>
                <div className="flex border-b py-2 px-3">
                  <h3 className="w-[40%] font-bold">Total</h3>
                  <p className="w-[60%]">
                    ${calculateTotal(cartItems).toFixed(2)} + GST
                  </p>
                </div>

                <button
                  onClick={handleToCheckout}
                  className="bg-activeOrange w-full my-5 py-2 rounded-full text-white font-bold"
                >
                  Proceed to checkout
                </button>
                <p className="text-xs font-semibold">* Final pricing will be determined once design has been assessed by our customer service team as some intricate logos cost more.</p>
              </div>
            </div>
          </div>

          <p className="mt-5 text-gray-300">
            *If you’re a local, you are more than welcome to visit us. After the
            purchase, we will get in touch with you and tell you what are your
            next steps and where you can collect your items.
          </p>
        </div>
        {removeItemModal ? (
          <RemoveItem
            selectedRemoveItem={selectedRemoveItem}
            setRemoveItemModal={setRemoveItemModal}
            setSelectedRemoveItem={setSelectedRemoveItem}
          />
        ) : (
          ""
        )}

        {showitemPreview && (Object.keys(previewItem).length > 0) ? (
          <PreviewItem
          previewItem={previewItem}
          setShowItemPreview={setShowItemPreview}
          setPreviewItem={setPreviewItem}
          />
        ) : (
          ""
        )}
      </div>
    );
  }




  function handleToCheckout() {
    setIsLoading(true);
    setTimeout(() => {
      router.push("/checkout");
      setIsLoading(false);
    }, 2000);
  }

  function handleUpdateCart(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setUpdateCart();
      setIsLoading(false);
    }, 2000);
  }



};

export default CartPage;
