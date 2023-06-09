import React from 'react'

interface IProps {
  size: number
  activeIndex: number
  onDotClick: (index: number) => void
}
const CarouselDots: React.FC<IProps> = ({ activeIndex, onDotClick, size }) => {
  return (
    <div className="flex flex-row items-center justify-start medium:justify-center">
      {Array.from(Array(size).keys()).map((index) => (
        <div
          key={index}
          className={`w-[12px] h-[12px] rounded-full mr-[25px] cursor-pointer duration-300 ${activeIndex === index ? 'bg-purple3' : 'bg-white3'}`}
          onClick={() => onDotClick(index)}
        ></div>
      ))}
    </div>
  )
}

export default CarouselDots
