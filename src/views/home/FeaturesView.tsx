'use client'

import React from 'react'
import { MaterialPlus, colorPalette, svgIcons, text16Medium, text17Medium, text18Medium, text20Bold, text50Bold, text72Bold } from '@/constants'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, colors } from '@mui/material'
import Image from 'next/image'
import { map } from 'lodash'

const FeaturesData = [
  {
    icon: svgIcons.clockUp,
    title: 'Effizienzsteigerung',
    descriptiom: 'Finden Sie schnell und unkompliziert lokale Hausverwalter, ohne aufwendige Recherchen oder persönliche Treffen.',
  },
  {
    icon: svgIcons.documentCheck,
    title: 'Transparenz',
    descriptiom: 'Alle angebotenen Dienstleistungen und Preise werden transparent dargestellt, so dass Sie immer den Überblick behalten.',
  },
  {
    icon: svgIcons.peoples,
    title: 'Flexibilität',
    descriptiom: 'Bevor Sie eine Firma beauftragen, haben Sie die Möglichkeit, unsere Partner kennenzulernen. Finden Sie den passenden Experte für Ihren Job.',
  },
  {
    icon: svgIcons.verified,
    title: 'Qualitätssicherung',
    descriptiom: 'Wir arbeiten mit qualifizierten und zertifizierten Hausverwaltern zusammen, um Ihnen die bestmögliche Qualität zu garantieren.',
  },
]
interface IProps {
  openModal: () => void
}
const FeaturesView: React.FC<IProps> = ({ openModal }) => {
  return (
    <div className=" min-w-screen bg-white1  bg-cover bg-center flex flex-row items-center justify-start">
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
            SCHNELL & UNKOMPLIZIERT
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
          >
            Ihre <span style={{ color: colorPalette.blue }}> Vorteile </span> Im Überblick
          </Typography>
        </Box>
        <Image src={MaterialPlus} alt="Home Illustration" width={150} height={170} className="absolute right-0" />

        <Grid container className="d-flex flex-row justify-center items-center " width={'100%'} height={'auto'}>
          {map(FeaturesData, (item, index) => (
            <Grid key={index} item spacing={2} height={'100%'} className="relative group">
              <Card
                className="z-20"
                sx={{
                  position: 'relative',
                  maxWidth: 265,
                  height: '100%',
                  borderRadius: '35px',
                  backgroundColor: colorPalette.white1,
                  boxShadow: 'none',
                  ':hover': { backgroundColor: colorPalette.white, boxShadow: ' 0px 52px 46px #00000012' },
                }}
              >
                <CardContent className="h-full d-flex items-center justify-between py-[20px]">
                  <Image src={item.icon} alt={item.title} className="mx-auto py-[35px]" />
                  <Typography gutterBottom variant="h5" color={colorPalette.blueDark} component="div" textAlign={'center'} style={text20Bold}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color={colorPalette.purple3} textAlign={'center'} style={text16Medium}>
                    {item.descriptiom}
                  </Typography>
                </CardContent>
              </Card>

              <Box className="absolute w-[100px] h-[100px] bg-blue bottom-[0] left-[0] translate-y-1/2 -translate-x-1/2 z-10 rounded-tl-3xl rounded-br-3xl opacity-0 group-hover:opacity-100 transition-all duration-400" />
            </Grid>
          ))}
        </Grid>

        <Button onClick={openModal} color="inherit" style={{ backgroundColor: colorPalette.olive, height: 60, width: 350, marginTop: '100px' }}>
          <Typography
            variant="h3"
            noWrap
            component="p"
            sx={{
              ...text17Medium,
              marginX: 'auto',
              flexGrow: 1,
              color: colorPalette.white,
              textDecoration: 'none',
              textTransform: 'capitalize',
            }}
          >
            Jetzt Hausverwalter finden
          </Typography>
        </Button>
      </Container>
    </div>
  )
}

export default FeaturesView
