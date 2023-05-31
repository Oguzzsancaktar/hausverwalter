import React, { createElement, useState } from 'react'
import { Box, LinearProgress, Typography } from '@mui/material'
import { colorPalette } from '@/constants'

import { countWithPrevNextUtil } from '@/utils'

import SelectService from './SelectService'
import SelectBuildingType from './SelectBuildingType'
import EnterFeatures from './EnterFeatures'
import SelectAdministration from './SelectAdministration'
import EnterPostcode from './EnterPostcode'
import EnterPersonalData from './EnterPersonalData'

const Sections = [SelectService, SelectBuildingType, EnterFeatures, SelectAdministration, EnterPostcode, EnterPersonalData]

interface IProps {
  activeStep: number
  setActiveStep: (index: number) => void
  closeModal: () => void
}
const SubmitRentalWizzard: React.FC<IProps> = ({ activeStep, setActiveStep, closeModal }) => {
  const handleStepChange = (type: 'next' | 'prev') => {
    const newActiveStepIndex = countWithPrevNextUtil(activeStep, Sections.length - 1, type)
    setActiveStep(newActiveStepIndex)
  }

  return (
    <Box height={'100%'}>
      <Box className="!h-[calc(100%-40px)]">{createElement(Sections[activeStep], { handleStepChange, closeModal })}</Box>

      <Box className="!h-[40px]">
        <Typography sx={{ mt: 2, color: colorPalette.blueSky }}>Schritt {activeStep + 1} von 6</Typography>
        <LinearProgress
          variant="determinate"
          value={((activeStep + 1) / 6) * 100}
          sx={{
            backgroundColor: colorPalette.blueLight,
            color: 'red',
            height: '5px',
            borderRadius: '10px',

            '& .MuiLinearProgress-bar': {
              borderRadius: '10px',
              height: 5,
              backgroundColor: colorPalette.blueSky,
            },
          }}
        />
      </Box>
    </Box>
  )
}

export default SubmitRentalWizzard
