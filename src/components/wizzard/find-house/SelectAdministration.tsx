import React from 'react'
import { EAdministrationTypes, colorPalette, text16Bold25 } from '@/constants'
import { Box, Button, Typography } from '@mui/material'
import { useSubmitRentalApiContext, useSubmitRentalStateContext } from '@/context'
import { map } from 'lodash'

interface IProps {
  children?: React.ReactNode
  handleStepChange: (type: 'next' | 'prev') => void
  closeModal?: () => void
}

const SelectAdministration: React.FC<IProps> = ({ handleStepChange }) => {
  const { setAdministrationTime } = useSubmitRentalApiContext()
  const { administrationTime } = useSubmitRentalStateContext()

  const handleServiceSelect = (serviceType: number) => {
    setAdministrationTime(serviceType)
    handleStepChange('next')
  }
  return (
    <Box className="flex flex-col items-center justify-center mx-auto">
      <Typography className="!text-purple" variant="h6" component="h2" sx={{ textAlign: 'center', color: colorPalette.purple, marginTop: '30px', marginBottom: '30px' }}>
        Ab wann planen Sie eine Verwaltung?
      </Typography>

      <Box className="flex flex-col items-center justify-center mx-auto max-w-[300px]">
        {map(
          EAdministrationTypes,
          (administaration, index) =>
            isNaN(administaration) && (
              <Button
                key={index}
                onClick={() => handleServiceSelect(+EAdministrationTypes[administaration])}
                color="inherit"
                style={{
                  backgroundColor: administrationTime === +EAdministrationTypes[administaration] ? colorPalette.blue : 'transparent',
                  borderColor: administrationTime === +EAdministrationTypes[administaration] ? colorPalette.blue : colorPalette.purple,
                  borderWidth: '2px',
                  borderStyle: 'solid',
                  height: 40,
                  width: '100%',
                  marginBottom: '15px',
                }}
              >
                <Typography
                  variant="h3"
                  noWrap
                  component="p"
                  sx={{
                    ...text16Bold25,
                    marginX: 'auto',
                    color: administrationTime === +EAdministrationTypes[administaration] ? colorPalette.white : colorPalette.purple,
                    flexGrow: 1,
                    textDecoration: 'none',
                    textTransform: 'capitalize',
                  }}
                >
                  {administaration}
                </Typography>
              </Button>
            )
        )}
      </Box>
    </Box>
  )
}

export default SelectAdministration
