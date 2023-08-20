import Image from "next/image";
import { FC } from "react";
import {FaUserCircle} from 'react-icons/fa'
type TestimonialBrandsProps = {};

const TestimonialBrands: FC<TestimonialBrandsProps> = ({}) => {
  return (

    <div className="w-full flex justify-center">
      <div id="container" className="w-[1200px] py-14 gap-y-10 flex flex-col">
        
      
      <h2 className="text-4xl font-semibold text-center">Brands We&apos;ve Worked With</h2>
      <div className="flex gap-x-10 py-5">
      <Image
        src="/brands/client-img-1.png"
        width={150}
        height={100}
        alt="client 1"
      />
         <Image
        src="/brands/client-img-2.png"
        width={150}
        height={100}
        alt="client 2"
      />
         <Image
        src="/brands/client-img-3.png"
        width={150}
        height={100}
        alt="client 4"
      />
         <Image
        src="/brands/client-img-4.png"
        width={150}
        height={100}
        alt="client 4"
      />
          <Image
        src="/brands/client-img-1.png"
        width={150}
        height={100}
        alt="client 1"
      />
         <Image
        src="/brands/client-img-2.png"
        width={150}
        height={100}
        alt="client 2"
      />
      </div>

      <h2 className="text-4xl font-semibold text-center ">Customer Feedback</h2>

      <div className="flex justify-evenly">
        <div id="card1" className="w-[300px] bg-primaryGreen px-5 py-5 text-white flex flex-col gap-y-5 items-center">
          <FaUserCircle size={70}/>
          <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, numquam. Dolor nostrum vitae eveniet, autem labore placeat ab. Pariatur possimus quasi eos voluptatum? Doloremque, cum fuga quis eos sapiente numquam.</p>
          <p className="text-activeOrange font-bold">John Doe</p>
        </div>
        <div id="card1" className="w-[300px] bg-primaryGreen px-5 py-5 text-white flex flex-col gap-y-5 items-center">
          <FaUserCircle size={70}/>
          <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, numquam. Dolor nostrum vitae eveniet, autem labore placeat ab. Pariatur possimus quasi eos voluptatum? Doloremque, cum fuga quis eos sapiente numquam.</p>
          <p className="text-activeOrange font-bold">John Doe</p>
        </div>
        <div id="card1" className="w-[300px] bg-primaryGreen px-5 py-5 text-white flex flex-col gap-y-5 items-center">
          <FaUserCircle size={70}/>
          <p className="text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, numquam. Dolor nostrum vitae eveniet, autem labore placeat ab. Pariatur possimus quasi eos voluptatum? Doloremque, cum fuga quis eos sapiente numquam.</p>
          <p className="text-activeOrange font-bold">John Doe</p>
        </div>
   
      </div>
      </div>
    </div>
  );
};

export default TestimonialBrands;