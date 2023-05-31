'use client'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import '@fontsource/poppins'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'
import '@fontsource/poppins/900.css'

import '@/styles/globals.css'

// Libs.
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider, createTheme, Modal } from '@mui/material'
// Modals.
import { SubmitRentalModal } from '@/modals'
import { SubmitRentalContextProvider, useSubmitRentalApiContext, useSubmitRentalStateContext } from '@/context'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: ['Poppins', 'sans-serif'].join(','),
  },
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeProvider theme={theme}>
          <SubmitRentalContextProvider>{children}</SubmitRentalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
