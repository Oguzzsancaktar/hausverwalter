'use client'
import { svgIcons, text16Medium, text16Medium19, text18Medium22, text20Bold } from '@/constants'
import { getFirstGivenChars, loaderProp } from '@/utils'
import { Box, Button, Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface IProps {
  testimonial: any
  onChevronClick: (direction: 'up' | 'down') => void
}
const TestimonialsCarousel: React.FC<IProps> = ({ testimonial, onChevronClick }) => {
  return (
    <Box className="flex flex-row  items-center ml-auto medium:flex-col">
      <Card sx={{ height: 240, padding: '30px' }} className="rounded-2xl flex flex-col justify-between shadow-md w-[500px] medium:w-auto">
        <h1 className="text-purple3" style={text16Medium}>
          {getFirstGivenChars(testimonial.description, 160)}
        </h1>
        <div>
          <h1 className="text-purple3 !leading-[32px] small:!leading-5" style={text20Bold}>
            {testimonial.name}
          </h1>
          {/* <h1 className="text-purple3 !leading-[32px] small:!leading-5" style={text16Medium19}>
            {testimonial.position}
          </h1> */}
        </div>
      </Card>
      <Box className="flex flex-col ml-10 medium:ml-2 h-20 justify-between medium:flex-row">
        <Button onClick={() => onChevronClick('up')}>
          <Image priority src={svgIcons.chevronUp} alt="Chevron Up Icon" loader={loaderProp} />
        </Button>
        <Button onClick={() => onChevronClick('down')}>
          <Image priority src={svgIcons.chevronDown} alt="Chevron Down Icon" loader={loaderProp} />
        </Button>
      </Box>
    </Box>
  )
}

export default TestimonialsCarousel
