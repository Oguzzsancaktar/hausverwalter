'use client'
import React, { useState } from 'react'
import { LogoHausverwalter, colorPalette, svgIcons, text17Medium } from '@/constants'
import { HighlightOff } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import { SubmitRentalWizzard } from '@/components'

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 900,
  height: 780,
  bgcolor: colorPalette.white1,
  borderRadius: '10px',
  p: 4,
}

interface IProps {
  closeModal: () => void
}
const SubmitRentalModal: React.FC<IProps> = ({ closeModal }) => {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Box sx={modalStyle}>
      {activeStep !== 0 && (
        <Box position={'absolute'} left={20} top={20}>
          <Button
            onClick={() => setActiveStep((prev) => prev - 1)}
            sx={{ width: 120, height: 30, padding: 0, minWidth: 'none', color: colorPalette.purple }}
            className="!min-w-0 text-purple"
            style={{ minWidth: 'none' }}
          >
            <Image src={svgIcons.arrowLeft} alt="Arrow Left" width={15} height={15} />
            <Typography className="!text-purple ml-[10px]" variant="h6" component="h2" sx={{ textAlign: 'center', color: colorPalette.purple, marginLeft: '10px', fontSize: text17Medium }}>
              Zurück
            </Typography>
          </Button>
        </Box>
      )}

      <Box position={'absolute'} right={20} top={20}>
        <Button onClick={closeModal} sx={{ width: 30, height: 30, padding: 0, minWidth: 'none', color: colorPalette.purple }} className="!min-w-0 text-purple" style={{ minWidth: 'none' }}>
          <HighlightOff width={30} />
        </Button>
      </Box>

      <Image src={LogoHausverwalter} alt="Hausverwalter Logo" className="mx-auto mb-52" />

      <Box sx={{ height: 'calc(100% - 56px)' }}>
        <SubmitRentalWizzard activeStep={activeStep} setActiveStep={setActiveStep} closeModal={closeModal} />
      </Box>
    </Box>
  )
}

export default SubmitRentalModal
