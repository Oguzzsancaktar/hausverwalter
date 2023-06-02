import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { colorPalette } from '@/constants'
import { useSubmitRentalApiContext, useSubmitRentalStateContext } from '@/context'

interface IProps {
  handleStepChange: (type: 'next' | 'prev') => void
  closeModal?: () => void
}

const EnterPostcode: React.FC<IProps> = ({ handleStepChange }) => {
  const { postCode } = useSubmitRentalStateContext()
  const { setPostCode } = useSubmitRentalApiContext()

  const [validationError, setValidationError] = useState<boolean>(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPostCode(value)
  }

  useEffect(() => {
    if (postCode && postCode.toString().length > 0) {
      setValidationError(false)
    } else {
      setValidationError(true)
    }
  }, [postCode])

  return (
    <Box className="h-full  flex flex-col items-center justify-between mx-auto">
      <Box>
        <Typography className="!text-purple" variant="h6" component="h2" sx={{ textAlign: 'center', color: colorPalette.purple, marginTop: '30px', marginBottom: '30px' }}>
          Wo befindet sich Ihre Immobilie?
        </Typography>
        <Box className="flex justify-center">
          <TextField
            onChange={handleInputChange}
            name="roomCount"
            type="text"
            style={{ height: '20px', padding: '0 15px' }}
            size="small"
            sx={{
              height: '20px',
              padding: '0 15px',
              width: '300px',
              '& .MuiInputBase-root': {
                height: '40px',
                border: 'none',
              },
              '& .MuiInputBase-input': {
                textAlign: 'center',
                border: 'none',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                textAlign: 'center',
                borderTop: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderRadius: '0',
                borderColor: validationError ? colorPalette.red : colorPalette.purple,
              },
            }}
            value={postCode || ''}
            placeholder="Postleitzahl eingeben"
          />
        </Box>
      </Box>

      <Box className="my-10">
        <Button
          disabled={validationError}
          className="h-[40px] w-[130px] min-w-0 bg-blue capitalize rounded-[6px] border-2 border-blue border-solid text-white"
          onClick={() => handleStepChange('next')}
        >
          Weiter
        </Button>
      </Box>
    </Box>
  )
}

export default EnterPostcode
