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

import dynamic from 'next/dynamic'
import { ThemeProvider, createTheme } from '@mui/material'

const Navbar = dynamic(() => import('../components/widgets/Navbar'), { ssr: false })
const Footer = dynamic(() => import('../components/widgets/Footer'), { ssr: false })

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
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
