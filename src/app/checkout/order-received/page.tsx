import { FC } from "react";

type pageProps = {};

const OrderReceived: FC<pageProps> = ({}) => {
  return (
    <div className="h-screen bg-gray-600 flex justify-center pt-32">
      <div id="container" className="w-full lg:w-[1200px] text-white px-2">
        Order Received
      </div>
    </div>
  );
};

export default OrderReceived;
