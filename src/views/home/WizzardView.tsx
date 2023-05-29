'use client'
import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { WizzardImage, colorPalette, text17Medium, text18Medium, text40SemiBold50 } from '@/constants'
import Image from 'next/image'
import { ExplainationWizzard } from '@/components'
interface IProps {
  openModal: () => void
}
const WizzardView: React.FC<IProps> = ({ openModal }) => {
  return (
    <div className="py-20 min-w-screen bg-white1  bg-cover bg-center flex flex-row items-center justify-start">
      <Container maxWidth="lg" className="flex flex-col h-auto relative " style={{ display: 'flex' }}>
        <Box className="pt-[30px] ">
          <Typography
            variant="h3"
            component="p"
            className="medium:text-center"
            sx={{
              ...text18Medium,
              maxWidth: '850px',
              flexGrow: 1,
              color: colorPalette.purple3,
              textAlign: 'start',
            }}
          >
            Erfahren Sie, was Sie Schritt für Schritt erwartet
          </Typography>

          <Typography
            variant="h3"
            component="p"
            className="my-5 medium:text-center medium:mx-auto"
            sx={{
              ...text40SemiBold50,
              maxWidth: '550px',
              flexGrow: 1,
              color: colorPalette.purple3,
              textAlign: 'start',
            }}
          >
            Sie erhalten nach einem Erstgespräch ein
            <span style={{ color: colorPalette.blue }}> zeitnahes Angebot. </span>
          </Typography>
        </Box>

        <Grid container className="flex flex-row items-center">
          <Grid item xs={12} md={6} lg={4} className="mr-[100px] medium:mx-auto medium:mb-20">
            <Box className="flex flex-col items-center justify-center p-5 bg-white rounded-3xl shadow-lg">
              <Image src={WizzardImage} alt="Wizzard Image" />
            </Box>
          </Grid>

          <Grid item xs={12} md={0} lg={6} className="medium:flex medium:flex-col medium:items-center">
            <ExplainationWizzard />

            <Button onClick={openModal} color="inherit" className="mx-auto" style={{ backgroundColor: colorPalette.olive, height: 60, width: 350, marginTop: '50px' }}>
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
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default WizzardView
