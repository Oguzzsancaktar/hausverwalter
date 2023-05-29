'use client'
import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { WizzardImage, colorPalette, text17Medium, text18Medium, text40SemiBold50, text50Bold } from '@/constants'
import Image from 'next/image'
import { CarouselDots, ExplainationWizzard, TestimonialsCarousel } from '@/components'

const TestimonialsData = [
  {
    description: '„Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.',
    name: 'Max Mustermann',
    position: 'Immobilieninvestor',
  },
  {
    description: 'There is beauty in simplicity. The best way to show someone how to do something is to do it for them.',
    name: 'Alex Smith',
    position: 'Business Owner',
  },
  {
    description: 'There is beauty in simplicity. The best way to show someone how to do something is to do it for them.',
    name: 'Bruno Mars',
    position: 'Musician',
  },
]

interface IProps {}

const TestimonialsView: React.FC<IProps> = ({}) => {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleStepChange = (index: number) => {
    setActiveStep(index)
  }

  const handleChevronClick = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      if (activeStep === 0) {
        setActiveStep(TestimonialsData.length - 1)
      } else {
        setActiveStep(activeStep - 1)
      }
    } else {
      if (activeStep === TestimonialsData.length - 1) {
        setActiveStep(0)
      } else {
        setActiveStep(activeStep + 1)
      }
    }
  }

  return (
    <div className="py-32 min-w-screen bg-white1  bg-cover bg-center flex flex-row items-center justify-start ">
      <Container maxWidth="lg" className="flex flex-row h-auto relative  justify-between medium:flex-col" style={{ display: 'flex' }}>
        <Box className="pt-[30px] medium:pb-6">
          <Typography
            variant="h3"
            component="p"
            sx={{
              ...text18Medium,
              maxWidth: '850px',
              flexGrow: 1,
              color: colorPalette.purple3,
              textAlign: 'start',
            }}
          >
            ERFAHRUNGSBERICHTE
          </Typography>

          <Typography
            variant="h3"
            component="p"
            className="my-5"
            sx={{
              ...text50Bold,
              maxWidth: '400px',
              flexGrow: 1,
              color: colorPalette.purple3,
              textAlign: 'start',
            }}
          >
            Das sagen unsere Kunden
          </Typography>

          <CarouselDots size={TestimonialsData.length} activeIndex={activeStep} onDotClick={handleStepChange} />
        </Box>

        <Box alignSelf={'end'} alignContent={'end'}>
          <TestimonialsCarousel testimonial={TestimonialsData[activeStep]} onChevronClick={handleChevronClick} />
        </Box>
      </Container>
    </div>
  )
}

export default TestimonialsView
