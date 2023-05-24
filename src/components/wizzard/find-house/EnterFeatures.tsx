import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { colorPalette, text18Medium } from '@/constants'

interface IProps {
  handleStepChange: (type: 'next' | 'prev') => void
  closeModal?: () => void
}

const EnterFeatures: React.FC<IProps> = ({ handleStepChange }) => {
  const [roomCount, setRoomCount] = useState(0)
  const [minArea, setMinArea] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'roomCount') {
      setRoomCount(Number(value))
    } else {
      setMinArea(Number(value))
    }
  }

  return (
    <Box className="flex flex-col items-center justify-center mx-auto">
      <Box>
        <Typography
          variant="h2"
          component="p"
          className="my-5"
          sx={{
            ...text18Medium,
            maxWidth: '550px',
            flexGrow: 1,
            color: colorPalette.purple3,
            textAlign: 'center',
            marginX: 'auto',
          }}
        >
          Anzahl der Wohneinheiten
        </Typography>
        <Box className="flex justify-center">
          <Button className="h-[40px] w-[40px] min-w-0  rounded-[6px] border-2 border-purple border-solid text-purple" onClick={() => setRoomCount((prev) => (prev - 1 >= 0 ? prev - 1 : 0))}>
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
                border: '2px solid ' + colorPalette.purple,
              },
              '& .MuiInputBase-input': {
                textAlign: 'center',
              },
            }}
            value={roomCount}
          />
          <Button className="h-[40px] w-[40px] min-w-0  rounded-[6px] border-2 border-purple border-solid text-white bg-purple" onClick={() => setRoomCount((prev) => prev + 1)}>
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
            color: colorPalette.purple3,
            textAlign: 'center',
            marginX: 'auto',
          }}
        >
          Wohnfläche in m²
        </Typography>
        <Box className="flex justify-center">
          <Button className="h-[40px] w-[40px] min-w-0  rounded-[6px] border-2 border-purple border-solid text-purple" onClick={() => setMinArea((prev) => (prev - 1 >= 0 ? prev - 1 : 0))}>
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
                border: '2px solid ' + colorPalette.purple,
                textAlign: 'center',
              },
              '& .MuiInputBase-input': {
                textAlign: 'center',
              },
            }}
            value={minArea}
          />
          <Button className="h-[40px] w-[40px] min-w-0  rounded-[6px] border-2 border-purple border-solid text-white bg-purple" onClick={() => setMinArea((prev) => prev + 1)}>
            +
          </Button>
        </Box>
      </Box>

      <Box className="my-10">
        <Button className="h-[40px] w-[130px] min-w-0 bg-blue capitalize rounded-[6px] border-2 border-blue border-solid text-white" onClick={() => handleStepChange('next')}>
          Weiter
        </Button>
      </Box>
    </Box>
  )
}

export default EnterFeatures
