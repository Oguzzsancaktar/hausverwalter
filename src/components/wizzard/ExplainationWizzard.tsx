'use client'

import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { map } from 'lodash'
import { colorPalette, text16Medium, text20Bold } from '@/constants'















const StepsData = [
  {
    title: '1. Ihre Kontaktaufnahme',
    description:
      'Kontaktieren Sie unser Team über unser Online-Formular oder telefonisch. Basierend auf den von Ihnen bereitgestellten Informationen können wir einschätzen, welcher unserer Partner-Hausverwalter für Ihre Anforderungen geeignet ist.',
  },
  {
    title: '2. Kostenloses Erstgespräch',
    description:
      'Nach einer eingehenden telefonischen Besprechung Ihrer Anforderungen und Erwartungen an die Hausverwaltung, vermitteln wir Ihnen einen passenden Hausverwalter aus unserem Netzwerk, der Kapazitäten für Ihr Objekt hat. Unser Ziel ist Ihre Zufriedenheit mit unserem Service.',
  },
  {
    title: '3. Kostenlose Beratung durch einen Hausverwalter',
    description:
      'Im Rahmen eines persönlichen Telefongesprächs oder Videocalls können Sie als Hauseigentümer unseren vorgeschlagenen Hausverwalter oder Experten kennenlernen. Nutzen Sie diese Möglichkeit, um sicherzustellen, dass Sie den passenden Fachmann an Ihrer Seite haben. Bei Bedarf ist auch ein persönliches Kennenlernen vor Ort möglich, um eine optimale Betreuung und Zusammenarbeit zu gewährleisten. Wir legen Wert auf Professionalität und eine persönliche Beziehung zu unseren Kunden, um eine effektive und transparente Verwaltung Ihrer Immobilie sicherzustellen.',
  },
  {
    title: '4. Individual-Angebot',
    description:
      'Sind Sie mit unserer und der Beratung unseres Partners zufrieden, stellen wir Ihnen ein maßgeschneidertes Angebot zusammen. Bei einer Angebotsbesprechung haben Sie die Möglichkeit, offene Fragen zu klären und weitere Einzelheiten zu besprechen.',
  },
  {
    title: '5. Beauftragung',
    description:
      'Wenn Sie mit dem Angebot zufrieden sind, können Sie unseren Dienstleistungspartner offiziell beauftragen. Dadurch sichern Sie sich verbindlich die Kapazitäten unseres Partnerunternehmens für eine professionelle Dienstleistung Ihrer Wahl.',
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
              disableRipple
              onClick={() => setSelectedStep(index)}
              sx={text20Bold}
              className={
                'flex items-center justify-center rounded-2xl cursor-pointer w-[50px] h-[50px] ' +
                (selectedStep === index ? '!bg-blue !text-white' : '!bg-white1 !text-purple3 !border-purple3 !border-2 !border-solid')
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
          className="my-5 max-w-[500px] medium:max-w-none"
          sx={{
            ...text16Medium,
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
          className="my-5 max-w-[500px] medium:max-w-none medium:text-center"
          sx={{
            ...text16Medium,
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
