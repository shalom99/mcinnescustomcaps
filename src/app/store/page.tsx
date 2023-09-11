import Image from 'next/image'
import { FC } from 'react'

type pageProps = {
  
}

const Store: FC<pageProps> = ({}) => {
  return (
     <div className='h-auto bg-gray-500 flex justify-center lg:py-32'>
        <div className='w-full lg:w-[1200px] text-white flex flex-col pb-10 lg:pb-0 px-2'>
            
            <h1 className='text-center text-2xl lg:text-4xl my-10 font-semibold'>Products</h1>
            <div id="filterRow" className='flex justify-between'>
                <div id="filterLeft" className='flex flex-col lg:flex-row justify-center px-2 lg:px-0 gap-y-2 gap-x-3'>
                    <div className='flex items-center gap-x-2 '>
                <p className='text-sm'>FILTER BY:</p>
                <select name="filter" id="filter" value="All Products" className='text-black text-sm'>
                    <option value="1">All Products</option>
                    <option value="2">Caps</option>
                </select>
                </div>
                <div className='flex items-center gap-x-2 '>
                <p className='text-sm'>SORT BY:</p>
                <select name="filter" id="filter" value="Alphabetically, A-Z" className='text-black text-sm'>
                    <option value="1">Featured</option>
                    <option value="2">Alphabetically, A-Z</option>
                    <option value="2">Alphabetically, Z-A</option>
                    <option value="2">Price, low to high</option>
                    <option value="2">Price, high to low</option>

                </select>
                </div>
                </div>

                <div id="filterRight">
                    <i>10 products</i>
                </div>
            </div>
            
            <div id="products" className='pt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5'>

                <div className='flex flex-col'>
                    <div className='w-full aspect-square relative'>
                        <Image src="/thumbnails/featured1.jpg" fill style={{objectFit: 'cover'}}  alt='Image1' />
                    </div>
                    <p className='text-sm my-1'>FEATURED CAP 1</p>
                    <p className='text-sm'>$00.00</p>
                    <button className='bg-primaryGreen py-2 mt-2'>ADD TO CART</button>
                </div>
                <div className='flex flex-col'>
                    <div className='w-full aspect-square relative'>
                        <Image src="/thumbnails/featured2.jpg" fill style={{objectFit: 'cover'}}  alt='Image2' />
                    </div>
                    <p className='text-sm my-1'>FEATURED CAP 2</p>
                    <p className='text-sm'>$00.00</p>
                    <button className='bg-primaryGreen py-2 mt-2'>ADD TO CART</button>
                </div>
                <div className='flex flex-col'>
                    <div className='w-full aspect-square relative'>
                        <Image src="/thumbnails/featured3.jpg" fill style={{objectFit: 'cover'}}  alt='Image3' />
                    </div>
                    <p className='text-sm my-1'>FEATURED CAP 3</p>
                    <p className='text-sm'>$00.00</p>
                    <button className='bg-primaryGreen py-2 mt-2'>ADD TO CART</button>
                </div>
                <div className='flex flex-col'>
                <div className='w-full aspect-square relative as'>
                        <Image src="/thumbnails/featured4.jpg" fill style={{objectFit: 'cover'}}  alt='Image4' />
                    </div>
                    <p className='text-sm my-1'>FEATURED CAP 4</p>
                    <p className='text-sm'>$00.00</p>
                    <button className='bg-primaryGreen py-2 mt-2'>ADD TO CART</button>
                </div>

                <div className='flex flex-col'>
                    <div className='w-full aspect-square relative'>
                        <Image src="/thumbnails/featured5.jpg" fill style={{objectFit: 'cover'}}  alt='Image1' />
                    </div>
                    <p className='text-sm my-1'>FEATURED CAP 5</p>
                    <p className='text-sm'>$00.00</p>
                    <button className='bg-primaryGreen py-2 mt-2'>ADD TO CART</button>
                </div>
                <div className='flex flex-col '>
                    <div className='w-full aspect-square relative'>
                        <Image src="/thumbnails/featured6.jpg" fill style={{objectFit: 'cover'}}  alt='Image2' />
                    </div>
                    <p className='text-sm my-1'>FEATURED CAP 6</p>
                    <p className='text-sm'>$00.00</p>
                    <button className='bg-primaryGreen py-2 mt-2'>ADD TO CART</button>
                </div>
                <div className='flex flex-col '>
                    <div className='w-full aspect-square relative'>
                        <Image src="/thumbnails/featured7.jpg" fill style={{objectFit: 'cover'}}  alt='Image3' />
                    </div>
                    <p className='text-sm my-1'>FEATURED CAP 7</p>
                    <p className='text-sm'>$00.00</p>
                    <button className='bg-primaryGreen py-2 mt-2'>ADD TO CART</button>
                </div>
                <div className='flex flex-col '>
                <div className='w-full aspect-square relative'>
                        <Image src="/thumbnails/featured8.jpg" fill style={{objectFit: 'cover'}}  alt='Image4' />
                    </div>
                    <p className='text-sm my-1'>FEATURED CAP 8</p>
                    <p className='text-sm'>$00.00</p>
                    <button className='bg-primaryGreen py-2 mt-2'>ADD TO CART</button>
                </div>

            </div>

        </div>
     </div>
)
}

export default Store