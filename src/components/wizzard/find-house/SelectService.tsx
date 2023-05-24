import React from 'react'
import { colorPalette, text16Bold25, text16Medium, text17Medium } from '@/constants'
import { Box, Button, Typography } from '@mui/material'
import { useSubmitRentalApiContext, useSubmitRentalStateContext } from '@/context'
import { map } from 'lodash'
import { EServices } from '@/constants'

interface IProps {
  children?: React.ReactNode
  handleStepChange: (type: 'next' | 'prev') => void
  closeModal?: () => void
}

const SelectService: React.FC<IProps> = ({ handleStepChange }) => {
  const { setServiceType } = useSubmitRentalApiContext()
  const { serviceType } = useSubmitRentalStateContext()

  const handleServiceSelect = (serviceType: number) => {
    setServiceType(serviceType)
    handleStepChange('next')
  }
  return (
    <Box className="flex flex-col items-center justify-center mx-auto">
      <Typography className="!text-purple" variant="h6" component="h2" sx={{ textAlign: 'center', color: colorPalette.purple, marginTop: '30px', marginBottom: '30px' }}>
        Um welche Dienstleistung handelt es sich?
      </Typography>

      <Box className="flex flex-col items-center justify-center mx-auto max-w-[300px]">
        {map(
          EServices,
          (service, index) =>
            isNaN(service) && (
              <Button
                key={index}
                onClick={() => handleServiceSelect(+EServices[service])}
                color="inherit"
                style={{
                  backgroundColor: serviceType === +EServices[service] ? colorPalette.blue : 'transparent',
                  borderColor: serviceType === +EServices[service] ? colorPalette.blue : colorPalette.purple,
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
                    color: serviceType === +EServices[service] ? colorPalette.white : colorPalette.purple,
                    flexGrow: 1,
                    textDecoration: 'none',
                    textTransform: 'capitalize',
                  }}
                >
                  {service}
                </Typography>
              </Button>
            )
        )}
      </Box>
    </Box>
  )
}

export default SelectService
