'use client'

import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { map } from 'lodash'
import { colorPalette, text16Medium, text20Bold } from '@/constants'

const StepsData = [
  {
    title: '1. Ihre Kontakt Aufnahme',
    description:
      'Im Rahmen eines persönlichen Telefongesprächs oder Videocalls können Sie als Hauseigentümer unsere vorgeschlagenen Hausverwalter und Experten kennenlernen. Bei Bedarf ist auch ein persönliches Kennenlernen vor Ort möglich, um eine optimale Betreuung und Zusammenarbeit zu gewährleisten.',
  },
  {
    title: '2. Ihre Anfrage',
    description:
      'Sie erhalten nach einem Erstgespräch ein zeitnahes Angebot. Dieses Angebot beinhaltet die Leistungen, die Sie für Ihre Immobilie benötigen. Sie können sich dann in Ruhe entscheiden, ob Sie mit uns zusammenarbeiten möchten. Wir freuen uns auf Sie!',
  },
  {
    title: '3. Ihre Entscheidung',
    description:
      'Sie e erhalten nach einem Erstgespräch ein zeitnahes Angebot. Dieses Angebot beinhaltet die Leistungen, die Sie für Ihre Immobilie benötigen. Sie können sich dann in Ruhe entscheiden, ob Sie mit uns zusammenarbeiten möchten. Wir freuen uns auf Sie!',
  },
  {
    title: '4. Ihre Entscheidung',
    description:
      ' Dieses Angebot beinhaltet die Leistungen, die Sie für Ihre Immobilie benötigen. Sie können sich dann in Ruhe entscheiden, ob Sie mit uns zusammenarbeiten möchten. Wir freuen uns auf Sie!',
  },
  {
    title: '5. Ihre Entscheidung',
    description:
      'Sie erhalten nach einem Erstgespräch ein zeitnahes Angebot. Dieses Angebot beinhaltet die Leistungen, die Sie für Ihre Immobilie benötigen. Sie können sich dann in Ruhe entscheiden, ob Sie mit uns !',
  },
]
const ExplainationWizzard = () => {
  const [selectedStep, setSelectedStep] = React.useState(0)

  return (
    <Box>
      <Grid container width={'100%'} className="flex justify-between items-center">
        {map(StepsData, (item, index) => (
          <Grid item className="relative" key={index}>
            {index + 1 !== StepsData.length && <span className="w-[50px] h-[1px] border-dotted border-b-0 border-r-0 border-l-0 border-t-2  border-purple3 absolute top-1/2 right-[-60px]"></span>}

            <Button
              onClick={() => setSelectedStep(index)}
              sx={text20Bold}
              className={
                'flex items-center justify-center rounded-2xl cursor-pointer w-[50px] h-[50px] ' +
                (selectedStep === index ? 'bg-blue text-white' : 'bg-white1 text-purple3 border-purple3 border-2 border-solid')
              }
            >
              {index + 1}.
            </Button>
          </Grid>
        ))}
      </Grid>

      <Box className={'min-h-[250px] mt-10'}>
        <Typography
          variant="h2"
          component="p"
          className="my-5"
          sx={{
            ...text16Medium,
            maxWidth: '550px',
            flexGrow: 1,
            fontWeight: 700,
            color: colorPalette.purple3,
            textAlign: 'start',
          }}
        >
          {StepsData[selectedStep].title}
        </Typography>

        <Typography
          variant="h4"
          component="p"
          className="my-5"
          sx={{
            ...text16Medium,
            maxWidth: '550px',
            flexGrow: 1,
            color: colorPalette.purple3,
            textAlign: 'start',
          }}
        >
          {StepsData[selectedStep].description}
        </Typography>
      </Box>
    </Box>
  )
}

export default ExplainationWizzard
