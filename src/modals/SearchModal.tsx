'use client'
import { LogoHausverwalter, colorPalette } from '@/constants'
import { HighlightOff } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  height: 600,
  bgcolor: colorPalette.white1,
  borderRadius: '10px',
  p: 4,
}

interface IProps {
  closeModal: () => void
}
const SearchModal: React.FC<IProps> = ({ closeModal }) => {
  return (
    <Box sx={modalStyle}>
      <Box position={'absolute'} right={20} top={20}>
        <Button onClick={closeModal} sx={{ width: 30, height: 30, padding: 0, minWidth: 'none', color: colorPalette.purple }} className="!min-w-0 text-purple" style={{ minWidth: 'none' }}>
          <HighlightOff width={30} />
        </Button>
      </Box>

      <Image src={LogoHausverwalter} alt="Hausverwalter Logo" className="mx-auto" />

      <Typography className="!my-[30px] !text-purple" id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', color: colorPalette.purple }}>
        Um welche Dienstleistung handelt es sich?
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  )
}

export default SearchModal
