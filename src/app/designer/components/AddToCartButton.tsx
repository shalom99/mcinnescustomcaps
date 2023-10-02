'use client'

import { useBrandingStore, useCapItemStore, useCartStore, useLabelStore } from '@/libs/store';
import { useRouter } from 'next/navigation';
import { FC, useState } from 'react'
import { ClipLoader } from 'react-spinners';

type AddToCartButtonProps = {
    id: number, 
    name: string, 
    quantity: number, 
    price: number, 
    type: number
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ id,name, quantity, price, type}) => {

    const {capItems, setResetCap} = useCapItemStore();
    const {labels, setResetLabels} = useLabelStore();
    const { brandings, setResetBrandings} = useBrandingStore()
    const addToCart = useCartStore(state => state.addToCart);
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false);
    const configuration = {
      capParts: capItems,
      labels,
      brandings
    }

    const [sampleImg, setSampleImg] = useState('')

    
    const addToCartHandler = () => {
        setIsLoading(prev => (!prev))
        addToCart({  name, quantity, mockQuantity: quantity, price, subtotal: quantity * price, type, configuration, sampleImg }); // Include subtotal when adding to cart
        setResetCap();
        setResetLabels();
        setResetBrandings();
        router.push('/cart')
      };

  return (
    <button
    onClick={addToCartHandler}
    className="bg-activeOrange rounded-full w-[170px] py-2 text-white flex items-center justify-center select-none"
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