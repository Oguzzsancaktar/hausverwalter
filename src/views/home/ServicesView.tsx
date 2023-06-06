'use client'

import React from 'react'
import {
  MaterialWavedLine,
  ServiceAdministration,
  ServiceBroker,
  ServiceCommercialAdministration,
  ServiceConcierge,
  ServiceRentalManagement,
  ServiceSpecialPropertyManagement,
  colorPalette,
  text16Medium19,
  text18Medium,
  text20Bold,
  text50Bold,
} from '@/constants'
import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { map } from 'lodash'
import { loaderProp } from '@/utils'

const ServicesData = [
  {
    image: ServiceAdministration,
    title: 'WEG-Verwaltug',
    descriptiom: 'Abrechnung, Instandhaltungs­-betreuung und Verwaltung Ihrer Wohneigentums­gemeinschaft.',
  },
  {
    image: ServiceRentalManagement,
    title: 'Mietverwaltung',
    descriptiom: 'Mietbuchhaltung, technische, wirtschaftliche Betreuung und vieles mehr.',
  },
  {
    image: ServiceCommercialAdministration,
    title: 'Gewerbeverwaltung',
    descriptiom: 'Büros, Praxen, Ladenlokalen, große oder kleine Lagerhallen und Produktionsstätten',
  },
  {
    image: ServiceConcierge,
    title: 'Hausmeister-Service',
    descriptiom: 'Instandhaltung und Pflege, sowie Koordination von Handwerkern und Dienstleistern',
  },
  {
    image: ServiceBroker,
    title: 'Makler-Service',
    descriptiom: 'Vermittlung von Immobilien, Beratung bei An- und Verkauf sowie Wertermittlung.',
  },
  {
    image: ServiceSpecialPropertyManagement,
    title: 'Sondereigentums-verwaltung',
    descriptiom: 'Vermietung, Durchführung und Abwicklung von Mietverhältnissen einer Eigentumswohnung',
  },
]

const ServicesView = () => {
  return (
    <div className="min-h-screen min-w-screen bg-white1  bg-cover bg-center flex flex-row items-center justify-start">
      <Container maxWidth="lg" className="flex flex-col h-auto justify-between items-center relative" style={{ display: 'flex' }}>
        <Box className="flex flex-col h-auto w-auto justify-center items-center mx-auto py-[100px]">
          <Typography
            variant="h5"
            component={'h5'}
            noWrap
            sx={{
              ...text18Medium,
              flexGrow: 1,
              marginBottom: '20px',
              color: colorPalette.purple3,
              textDecoration: 'none',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}
          >
            INDIVIDUALLÖSUNGEN
          </Typography>

          <Typography
            variant="h3"
            component="p"
            sx={{
              ...text50Bold,
              flexGrow: 1,
              color: colorPalette.purple,
              textAlign: 'center',
            }}
            className="medium:text-3xl"
          >
            Dienstleistungen
          </Typography>
        </Box>
        <Image priority src={MaterialWavedLine} alt="Home Illustration" width={100} height={260} className="absolute right-[15px] top-[400px]" loader={loaderProp} />

        <Grid container gap={10} className="d-flex flex-row justify-center " width={'100%'}>
          {map(ServicesData, (item, index) => (
            <Grid item height={'350px'} className="relative group" key={index}>
              <Card
                className="z-20 p-0"
                sx={{
                  padding: 0,
                  position: 'relative',
                  maxWidth: 315,
                  height: '100%',
                  borderRadius: '35px',
                  backgroundColor: colorPalette.white,
                  boxShadow: '0px 52px 46px #00000012;',
                }}
              >
                <CardContent className="h-full d-flex items-center justify-between !p-0">
                  <Image src={item.image} alt={item.title} className="mx-auto " width={320} height={190} loader={loaderProp} />
                  <Box className="p-[20px]">
                    <Typography className="!mb-[10px]" gutterBottom variant="h5" color={colorPalette.blueDark} component="div" textAlign={'start'} style={text20Bold}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color={colorPalette.purple3} textAlign={'start'} style={text16Medium19}>
                      {item.descriptiom}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default ServicesView
