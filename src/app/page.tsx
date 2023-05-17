'use client'

import * as React from 'react'
import { ContactView, TestimonialsView, WizzardView } from '@/views'
import { Modal } from '@mui/material'
import dynamic from 'next/dynamic'
import { SearchModal } from '@/modals'

const WelcomeView = dynamic(() => import('../views/home/WelcomeView'), { ssr: false })
const FeaturesView = dynamic(() => import('../views/home/FeaturesView'), { ssr: false })
const ServicesView = dynamic(() => import('../views/home/ServicesView'), { ssr: false })

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const handleModalOpen = () => setIsModalOpen(true)
  const handleModalClose = () => setIsModalOpen(false)

  return (
    <main>
      <WelcomeView openModal={handleModalOpen} />
      <FeaturesView openModal={handleModalOpen} />
      <ServicesView />
      <WizzardView openModal={handleModalOpen} />
      <TestimonialsView />
      <ContactView />

      <Modal open={isModalOpen} onClose={handleModalClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <SearchModal closeModal={handleModalClose} />
      </Modal>
    </main>
  )
}
