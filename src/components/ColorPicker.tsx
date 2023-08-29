import cn from '@/libs/cn'
import { useCapItemStore } from '@/store'
import { FC } from 'react'

type ColorPickerProps = {
  title: string
  capItemId: any

}

const ColorPicker: FC<ColorPickerProps> = ({title, capItemId}) =>
 {
  const capParts = useCapItemStore()

  function handleChangeColor(id: number, color: string, colorFilter: string){
    capParts.setCapItemColor(id, color, colorFilter)
    capParts.setShowPicker(id)
  }

  
  return (
     <div className='text-black w-full flex flex-col gap-y-5 py-5 select-none'>
      <h2 className='font-bold text-sm px-2'>{title}</h2>
          <div className='w-full flex gap-x-1 justify-evenly'>
            <div className='flex flex-col items-center text-xs text-gray-600'>
         
              <button onClick={() => handleChangeColor(capItemId, '#FF6E00', 'invert(49%) sepia(23%) saturate(7488%) hue-rotate(0deg) brightness(102%) contrast(104%)')}  className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#FF6E00"}} />
              <label htmlFor="">Color #1</label>
            </div>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button  onClick={() => handleChangeColor(capItemId, '#FF9C00', 'invert(83%) sepia(25%) saturate(4801%) hue-rotate(358deg) brightness(400%) contrast(108%)')}  className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#FF9C00"}} />
              <label htmlFor="">Color #2</label>
            </div>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button  onClick={() => handleChangeColor(capItemId, '#64B592', 'invert(84%) sepia(9%) saturate(1586%) hue-rotate(102deg) brightness(400%) contrast(87%)')} className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#64B592"}} />
              <label htmlFor="">Color #3</label>
            </div>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button onClick={() => handleChangeColor(capItemId, '#00AE36', 'invert(60%) sepia(88%) saturate(2170%) hue-rotate(115deg) brightness(96%) contrast(101%)')}  className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#00AE36"}} />
              <label htmlFor="">Color #4</label>
            </div>
          </div>
          

          <div className='flex gap-x-1 justify-evenly'>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button  onClick={() => handleChangeColor(capItemId, '#E96537', 'invert(20%) sepia(70%) saturate(5887%) hue-rotate(335deg) brightness(92%) contrast(99%)')} className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#E96537"}} />
              <label htmlFor="">Color #5</label>
            </div>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button onClick={() => handleChangeColor(capItemId, '#A75D6F', 'invert(60%) sepia(14%) saturate(1188%) hue-rotate(295deg) brightness(105%) contrast(103%')}  className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#A75D6F"}} />
              <label htmlFor="">Color #6</label>
            </div>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button onClick={() => handleChangeColor(capItemId, '#FEA0D1', 'invert(12%) sepia(91%) saturate(6465%) hue-rotate(280deg) brightness(92%) contrast(118%)')}   className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#FEA0D1"}} />
              <label htmlFor="">Color #7</label>
            </div>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button onClick={() => handleChangeColor(capItemId, '#8BDE7C', 'invert(21%) sepia(22%) saturate(800%) hue-rotate(63deg) brightness(98%) contrast(89%)')}  className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#8BDE7C"}} />
              <label htmlFor="">Color #8</label>
            </div>
          </div>

          <div className='flex gap-x-1 justify-evenly'>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button onClick={() => handleChangeColor(capItemId, '#1E1312', 'invert(91%) sepia(5%) saturate(2166%) hue-rotate(319deg) brightness(110%) contrast(104%)')}  className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#1E1312"}} />
              <label htmlFor="">Color #9</label>
            </div>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button onClick={() => handleChangeColor(capItemId, '#FF4474', 'invert(59%) sepia(27%) saturate(5404%) hue-rotate(321deg) brightness(104%) contrast(102%)')}  className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#FF4474"}} />
              <label htmlFor="">Color #10</label>
            </div>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button onClick={() => handleChangeColor(capItemId, '#FFC825', 'invert(20%) sepia(73%) saturate(1745%) hue-rotate(335deg) brightness(108%) contrast(108%)')}  className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#FFC825"}} />
              <label htmlFor="">Color #11</label>
            </div>
            <div className='flex flex-col items-center text-xs text-gray-600'>
              <button onClick={() => handleChangeColor(capItemId, '#F79EF7', 'invert(9%) sepia(24%) saturate(5148%) hue-rotate(216deg) brightness(99%) contrast(96%)')}  className={cn("w-[40px] h-[40px]  rounded-full")} style={{backgroundColor: "#F79EF7"}} />
              <label htmlFor="">Color #12</label>
            </div>
          </div>


     </div>
)

}

export default ColorPicker