import React, { useState } from 'react'
import { Box, Button, TextField, Typography } from '@mui/material'
import { colorPalette } from '@/constants'

interface IProps {
  handleStepChange: (type: 'next' | 'prev') => void
  closeModal?: () => void
}

const EnterPostcode: React.FC<IProps> = ({ handleStepChange }) => {
  const [postcode, setPostcode] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setPostcode(value)
  }

  return (
    <Box className="h-full  flex flex-col items-center justify-between mx-auto">
      <Box>
        <Typography className="!text-purple" variant="h6" component="h2" sx={{ textAlign: 'center', color: colorPalette.purple, marginTop: '30px', marginBottom: '30px' }}>
          Um welche Dienstleistung handelt es sich?
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
                borderBottom: '2px solid ' + colorPalette.purple,
              },
            }}
            value={postcode}
            placeholder="Postleitzahl eingeben"
          />
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

export default EnterPostcode
