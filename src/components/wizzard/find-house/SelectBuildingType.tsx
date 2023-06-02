import React from 'react'
import { EBuildingTypes, colorPalette, text16Bold25, text16Medium, text17Medium } from '@/constants'
import { Box, Button, Typography } from '@mui/material'
import { useSubmitRentalApiContext, useSubmitRentalStateContext } from '@/context'
import { map } from 'lodash'

interface IProps {
  children?: React.ReactNode
  handleStepChange: (type: 'next' | 'prev') => void
  closeModal?: () => void
}

const SelectBuildingType: React.FC<IProps> = ({ handleStepChange }) => {
  const { setBuildingType } = useSubmitRentalApiContext()
  const { buildingType } = useSubmitRentalStateContext()

  const handleServiceSelect = (serviceType: number) => {
    setBuildingType(serviceType)
    handleStepChange('next')
  }
  return (
    <Box className="flex flex-col items-center justify-center mx-auto">
      <Typography className="!text-purple" variant="h6" component="h2" sx={{ textAlign: 'center', color: colorPalette.purple, marginTop: '30px', marginBottom: '30px' }}>
        Um welches Gebäude handelt es sich?
      </Typography>

      <Box className="flex flex-col items-center justify-center mx-auto max-w-[300px]">
        {map(
          EBuildingTypes,
          (bt, index) =>
            isNaN(bt) && (
              <Button
                key={index}
                onClick={() => handleServiceSelect(+EBuildingTypes[bt])}
                color="inherit"
                style={{
                  backgroundColor: buildingType === +EBuildingTypes[bt] ? colorPalette.blue : 'transparent',
                  borderColor: buildingType === +EBuildingTypes[bt] ? colorPalette.blue : colorPalette.purple,
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
                    color: buildingType === +EBuildingTypes[bt] ? colorPalette.white : colorPalette.purple,
                    flexGrow: 1,
                    textDecoration: 'none',
                    textTransform: 'capitalize',
                  }}
                >
                  {bt}
                </Typography>
              </Button>
            )
        )}
      </Box>
    </Box>
  )
}

export default SelectBuildingType
