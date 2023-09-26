'use client'

import { useCartStore } from '@/libs/store';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react'
import { ClipLoader } from 'react-spinners';

type AddToCartButtonProps = {
    id: string, 
    name: string, 
    quantity: number, 
    price: number 
}

const AddToCartButton: FC<AddToCartButtonProps> = ({id, name, quantity, price}) => {
    const addToCart = useCartStore(state => state.addToCart);
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);

    
    const addToCartHandler = () => {
        setIsLoading(prev => (!prev))
        addToCart({ id, name, quantity, price, subtotal: quantity * price }); // Include subtotal when adding to cart
        router.push('/cart')
      };

  return (
    <button
    onClick={addToCartHandler}
    className="bg-activeOrange rounded-full w-[170px] py-2 text-white flex items-center justify-center"
  >
    {isLoading ? (
      <ClipLoader
        color="white"
        loading={isLoading}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    ) : (
      "Add to Cart"
    )}
  </button>
)


}

export default AddToCartButton