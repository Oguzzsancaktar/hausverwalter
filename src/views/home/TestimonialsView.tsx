'use client'
import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { colorPalette, text18Medium, text50Bold } from '@/constants'
import { CarouselDots, TestimonialsCarousel } from '@/components'








const TestimonialsData = [
  {
    description: 'Der Prozess war einfach und unkompliziert. Innerhalb kürzester Zeit wurde mir ein erfahrener Hausverwalter vermittelt, der sich um alle Belange meiner Immobilie kümmert. Ich bin äußerst zufrieden mit dem Service. ',
    name: '- Julian B.',
    position: 'Immobilieninvestor',
  },
  {
    description: 'Die Kommunikation war freundlich und professionell. Das Team hat meine Anforderungen genau verstanden und mir einen passenden Hausverwalter vermittelt. Jetzt kann ich mich entspannt zurücklehnen, denn mein Haus ist in guten Händen. Vielen Dank!',
    name: '- Granit A.',
    position: 'Business Owner',
  },
  {
    description: 'Ich bin sehr zufrieden mit dem Hausmeister, den das Team von DieHausverwalter24 mir vermittelt haben. Er hat sich als äußerst zuverlässig erwiesen und kümmert sich hervorragend um die Instandhaltung meiner Immobilie.',
    name: '- Alina S.',
    position: 'Musician',
  },
]

interface IProps { }

const TestimonialsView: React.FC<IProps> = ({ }) => {
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
            className='medium:text-center'
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
            className="my-5 small:!text-xl medium:text-center"
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
