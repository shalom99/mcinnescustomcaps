import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";

type CartModalProps = {};

const CartModal: FC<CartModalProps> = ({}) => {
  return (
    <>
      <div
        id="emptyCartModal"
        className="hidden group-hover:block absolute top-[32px] right-0 w-[200px] py-2 bg-gray-500 z-50 text-white"
      >
        <p className="">Your cart is empty</p>
      </div>
    </>
  );
};

export default CartModal;
