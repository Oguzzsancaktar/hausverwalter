import React, { useEffect, useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { colorPalette, text18Medium } from '@/constants'
import { useSubmitRentalApiContext, useSubmitRentalStateContext } from '@/context'

interface IProps {
  handleStepChange: (type: 'next' | 'prev') => void
  closeModal?: () => void
}

const EnterFeatures: React.FC<IProps> = ({ handleStepChange }) => {
  const { features } = useSubmitRentalStateContext()
  const { setFeatures } = useSubmitRentalApiContext()

  const [validationErrors, setValidationErrors] = useState({
    roomCount: false,
    minArea: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const temp = { ...features }

    setFeatures({ ...temp, [name]: value })
  }

  const handleIncreaseDecrease = (type: 'increase' | 'decrease', field: 'roomCount' | 'minArea') => {
    const temp = { ...features }
    // Cant smaller than 0
    if (type === 'decrease' && temp[field] === 0) {
      return
    }

    setFeatures({ ...temp, [field]: type === 'increase' ? +temp[field] + 1 : +temp[field] - 1 })
  }

  const validateFields = () => {
    if (features.roomCount === 0) {
      setValidationErrors((prev) => ({
        ...prev,
        roomCount: true,
      }))
      return false
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        roomCount: false,
      }))
    }

    if (features.minArea === 0) {
      setValidationErrors((prev) => ({
        ...prev,
        minArea: true,
      }))
      return false
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        minArea: false,
      }))
    }

    return true
  }

  const handleNext = () => {
    const result = validateFields()
    if (result) {
      handleStepChange('next')
    }
  }

  useEffect(() => {
    validateFields()
  }, [features])

  return (
    <Box className="flex flex-col items-center justify-between mx-auto h-full ">
      <Box>
        <Box>
          <Typography
            variant="h2"
            component="p"
            className="my-5"
            sx={{
              ...text18Medium,
              maxWidth: '550px',
              flexGrow: 1,
              color: colorPalette.purple,
              textAlign: 'center',
              marginX: 'auto',
            }}
          >
            Anzahl der Wohneinheiten
          </Typography>
          <Box className="flex justify-center">
            <Button className="h-[40px] w-[40px] min-w-0  rounded-[6px] border-2 border-purple border-solid text-purple" onClick={() => handleIncreaseDecrease('decrease', 'roomCount')}>
              -
            </Button>
            <TextField
              onChange={handleInputChange}
              name="roomCount"
              type="number"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0, step: 'any' }}
              style={{ height: '20px', padding: '0 15px' }}
              size="small"
              sx={{
                height: '20px',
                padding: '0 15px',
                '& .MuiInputBase-root': {
                  height: '40px',
                },
                '& .MuiInputBase-input': {
                  textAlign: 'center',
                },
                '& .MuiOutlinedInput-notchedOutline ': {
                  borderWidth: '2px',
                  borderColor: validationErrors.roomCount ? colorPalette.red : colorPalette.purple,
                },
              }}
              value={features.roomCount}
            />
            <Button className="h-[40px] w-[40px] min-w-0  rounded-[6px] border-2 border-purple border-solid text-white bg-purple" onClick={() => handleIncreaseDecrease('increase', 'roomCount')}>
              +
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="h2"
            component="p"
            className="my-5"
            sx={{
              ...text18Medium,
              maxWidth: '550px',
              flexGrow: 1,
              color: colorPalette.purple,
              textAlign: 'center',
              marginX: 'auto',
            }}
          >
            Wohnfläche in m²
          </Typography>
          <Box className="flex justify-center">
            <Button className="h-[40px] w-[40px] min-w-0  rounded-[6px] border-2 border-purple border-solid text-purple" onClick={() => handleIncreaseDecrease('decrease', 'minArea')}>
              -
            </Button>
            <TextField
              onChange={handleInputChange}
              name="minArea"
              type="number"
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', min: 0 }}
              style={{ height: '20px', padding: '0 15px', textAlign: 'center' }}
              size="small"
              sx={{
                height: '20px',
                padding: '0 15px',
                textAlign: 'center',
                '& .MuiInputBase-root': {
                  height: '40px',
                  textAlign: 'center',
                },
                '& .MuiInputBase-input': {
                  textAlign: 'center',
                },
                '& .MuiOutlinedInput-notchedOutline ': {
                  borderWidth: '2px',
                  borderColor: validationErrors.minArea ? colorPalette.red : colorPalette.purple,
                },
              }}
              value={features.minArea}
            />
            <Button className="h-[40px] w-[40px] min-w-0  rounded-[6px] border-2 border-purple border-solid text-white bg-purple" onClick={() => handleIncreaseDecrease('increase', 'minArea')}>
              +
            </Button>
          </Box>
        </Box>
      </Box>

      <Box className="my-10">
        <Button
          className="h-[40px] w-[130px] min-w-0 bg-blue capitalize rounded-[6px] border-2 border-blue border-solid text-white"
          disabled={validationErrors.minArea || validationErrors.roomCount}
          onClick={handleNext}
        >
          Weiter
        </Button>
      </Box>
    </Box>
  )
}

export default EnterFeatures
