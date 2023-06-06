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
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { ThemeProvider, createTheme, Modal } from '@mui/material'

// Modals.
import { SubmitRentalModal } from '@/modals'
import { SubmitRentalContextProvider, useSubmitRentalApiContext, useSubmitRentalStateContext } from '@/context'
import Head from 'next/head'
import { Metadata } from 'next'
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
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://embed.tawk.to/647720a674285f0ec46eb197/1h1olf2se'
    script.async = true
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <html lang="en">
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>

      <body suppressHydrationWarning={true}>
        <ThemeProvider theme={theme}>
          <SubmitRentalContextProvider>{children}</SubmitRentalContextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
