'use client'

import * as React from 'react'
import { ContactView, TestimonialsView, WizzardView } from '@/views'

import dynamic from 'next/dynamic'

import { CacheProvider } from '@emotion/react'
import createEmotionCache from '@/utils/createEmotionCache'
import Head from 'next/head'

const clientSideEmotionCache = createEmotionCache()

const WelcomeView = dynamic(() => import('../views/home/WelcomeView'), { ssr: false })
const FeaturesView = dynamic(() => import('../views/home/FeaturesView'), { ssr: false })
const ServicesView = dynamic(() => import('../views/home/ServicesView'), { ssr: false })

interface IProps {}

export default function Home({ emotionCache = clientSideEmotionCache }: any) {
  React.useEffect(() => {
    document.title = 'Hausverwalter'
  }, [])
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>

      <main>
        <WelcomeView />
        <FeaturesView />
        <ServicesView />
        <WizzardView />
        <TestimonialsView />
        <ContactView />
      </main>
    </CacheProvider>
  )
}
