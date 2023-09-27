'use client'
import { CartItem } from '@/libs/types'
import { FC, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { BsFillCartXFill } from 'react-icons/bs'

type ItemComponentProps = {
  item: CartItem
  setRemoveItemModal: any
}

const ItemComponent: FC<ItemComponentProps> = ({item, setRemoveItemModal}) => {

const [quantity, setQuantity] = useState(25)

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
                      value={quantity}
                      className="border text-black w-[100px] text-center"
                      min={25}
                      onChange={e => setQuantity(Number(e.target.value))}
                      max={1000}
                    />
                  </div>
                  <div>
                    <p>${(item.price * quantity).toFixed(2)}</p>
                  </div>
                  </>
)
}

export default ItemComponent