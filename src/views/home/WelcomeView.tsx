'use client'

import React from 'react'
import { HomeIllustration, colorPalette, text17Medium, text18Medium, text20Bold, text72Bold } from '@/constants'
import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'

const WelcomeView = () => {
  return (
    <div className="min-h-screen min-w-screen  bg-welcome bg-cover bg-center flex flex-row items-center justify-start">
      <Container maxWidth="lg" className="flex flex-row h-auto justify-between items-center" style={{ display: 'flex' }}>
        <Box className="flex flex-col h-auto w-auto">
          <Typography
            variant="h5"
            component={'h5'}
            noWrap
            sx={{
              ...text20Bold,
              flexGrow: 1,
              marginBottom: '20px',
              color: colorPalette.blue,
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            DIE BESTEN HAUSVERWALTER VEREINT
          </Typography>

          <Typography
            variant="h3"
            component="p"
            sx={{
              ...text72Bold,
              maxWidth: '654px',
              flexGrow: 1,
              color: colorPalette.purple,
            }}
          >
            Wir verbinden Sie mit den Richtigen Hausverwaltern.
          </Typography>

          <Typography
            variant="h6"
            component="p"
            sx={{
              ...text18Medium,
              maxWidth: '654px',
              marginTop: '20px',
              flexGrow: 1,
              color: colorPalette.purple3,
            }}
          >
            Optimale Bewirtschaftung Ihrer Immobilie mit erfahrenen Experten. Kostenbewusst, effektiv und transparent.
          </Typography>

          <Button color="inherit" style={{ backgroundColor: colorPalette.olive, height: 60, width: 350, marginTop: '50px' }}>
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
        </Box>

        <Box>
          <Image src={HomeIllustration} alt="Home Illustration" />
        </Box>
      </Container>
    </div>
  )
}

export default WelcomeView
