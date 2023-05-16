'use client'

import React from 'react'
import { Box, Button, Container, FormControl, Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { colorPalette, svgIcons, text16Medium, text17Medium, text33SemiBold50 } from '@/constants'
import Image from 'next/image'

const ContactView = () => {
  return (
    <div className="py-10 min-w-screen bg-white1 flex-row items-center justify-center pb-20">
      <Container
        maxWidth="lg"
        className="py-[50px] px-[150px] flex flex-col h-auto justify-between items-center relative bg-blueLight  rounded-tl-[100px] rounded-br-[40px] "
        style={{ display: 'flex' }}
      >
        <Box className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" width={70} height={70}>
          <Image src={svgIcons.send} alt="Send Icon" />
        </Box>
        <Box className="pt-[30px] ">
          <Typography
            variant="h3"
            component="p"
            sx={{
              ...text33SemiBold50,
              maxWidth: '850px',
              flexGrow: 1,
              color: colorPalette.purple,
              textAlign: 'center',
            }}
          >
            Interesse an einer
            <span style={{ color: colorPalette.blue }}> Zusammenarbeit </span>
            als Hausverwalter? Kontaktieren Sie uns noch heute
          </Typography>

          <Typography
            variant="h3"
            component="p"
            className="my-5"
            sx={{
              ...text16Medium,
              maxWidth: '850px',
              flexGrow: 1,
              color: colorPalette.purple3,
              textAlign: 'center',
            }}
          >
            Füllen Sie das Formular aus und wir melden uns bei Ihnen innerhalb von 1-2 Werktagen.
          </Typography>
        </Box>

        <Box className="w-full max-w-[630px]">
          <Grid gap={10} spacing={10}>
            <FormControl variant="standard">
              <OutlinedInput
                className="bg-white h-[60px] px-[20px] rounded-[10px] w-[300px] mr-5"
                style={{ outline: 'none' }}
                placeholder="Name, Nachname"
                classes={{ notchedOutline: '!border-none !outline-none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <Image src={svgIcons.user} alt="User Icon" />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard">
              <OutlinedInput
                className="bg-white h-[60px] px-[20px] rounded-[10px] w-[300px]"
                style={{ outline: 'none' }}
                placeholder="Betreff"
                classes={{ notchedOutline: '!border-none !outline-none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <Image src={svgIcons.document} alt="User Icon" />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid className="w-full mt-5">
            <FormControl variant="standard" className=" w-[calc(100%-180px-60px)] mr-5">
              <OutlinedInput
                className="bg-white h-[60px] px-[20px] rounded-[10px] w-full "
                style={{ outline: 'none' }}
                placeholder="E-Mail-Adresse"
                classes={{ notchedOutline: '!border-none !outline-none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <Image src={svgIcons.mail} alt="User Icon" />
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button color="inherit" style={{ backgroundColor: colorPalette.olive, height: 60, width: 180 }}>
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
                Absenden
              </Typography>
            </Button>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default ContactView
