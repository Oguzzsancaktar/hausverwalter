'use client'

import React, { useRef } from 'react'
// Store.
import { useSubmitRentalApiContext, useSubmitRentalStateContext } from '@/context'
// Modals.
import { SubmitRentalModal } from '@/modals'
// Libs.
import { Modal } from '@mui/material'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('../components/widgets/Navbar'), { ssr: false })
const Footer = dynamic(() => import('../components/widgets/Footer'), { ssr: false })

interface IProps {
  children: React.ReactNode
}
const Template: React.FC<IProps> = ({ children }) => {
  const { isModalOpen } = useSubmitRentalStateContext()
  const { setShowModal } = useSubmitRentalApiContext()

  return (
    <div className="bg-white1">
      <Navbar />
      {children}

      <Modal open={isModalOpen} onClose={() => setShowModal(false)}>
        <SubmitRentalModal closeModal={() => setShowModal(false)} />
      </Modal>
      <Footer />
    </div>
  )
}
export default Template
