'use client'

import * as React from 'react'
import { ContactView, TestimonialsView, WizzardView } from '@/views'

import dynamic from 'next/dynamic'
import { useSubmitRentalApiContext } from '@/context'

const WelcomeView = dynamic(() => import('../views/home/WelcomeView'), { ssr: false })
const FeaturesView = dynamic(() => import('../views/home/FeaturesView'), { ssr: false })
const ServicesView = dynamic(() => import('../views/home/ServicesView'), { ssr: false })

interface IProps {}

export default function Home({}: IProps) {
  return (
    <main>
      <WelcomeView />
      <FeaturesView />
      <ServicesView />
      <WizzardView />
      <TestimonialsView />
      <ContactView />
    </main>
  )
}
