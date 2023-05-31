'use client'

import React from 'react'
import { IllustrationHome, colorPalette, text17Medium, text18Medium, text20Bold, text72Bold } from '@/constants'
import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import { useSubmitRentalApiContext } from '@/context'

interface IProps {}
const WelcomeView: React.FC<IProps> = () => {
  const { setShowModal } = useSubmitRentalApiContext()

  return (
    <div className="min-h-screen min-w-screen  bg-welcome bg-cover bg-center flex flex-row items-center justify-start">
      <Container maxWidth="lg" className="flex flex-row h-auto justify-between items-center medium:flex-col medium:pt-40" style={{ display: 'flex' }}>
        <Box className="flex flex-col h-auto w-auto pr-10  medium:pb-20 medium:items-center">
          <Typography
            variant="h5"
            component={'h5'}
            className="medium:text-center"
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
            className="medium:text-5xl medium:text-center"
          >
            Wir verbinden Sie mit den Richtigen Hausverwaltern.
          </Typography>

          <Typography
            variant="h6"
            component="p"
            className="medium:text-center"
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

          <Button onClick={() => setShowModal(true)} color="inherit" style={{ backgroundColor: colorPalette.olive, height: 60, width: 350, marginTop: '50px' }}>
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
          <Image src={IllustrationHome} alt="Home Illustration" />
        </Box>
      </Container>
    </div>
  )
}

export default WelcomeView
