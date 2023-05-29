import React, { useState } from 'react'
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material'
import { colorPalette, text11Medium17 } from '@/constants'
import { IPersonalData } from '@/context'

interface IProps {
  handleStepChange: (type: 'next' | 'prev') => void
  closeModal?: () => void
}

const EnterPersonalData: React.FC<IProps> = ({ closeModal, handleStepChange }) => {
  const [personalData, setPostcode] = useState<IPersonalData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPostcode((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <Box className="h-full  flex flex-col items-center justify-between mx-auto">
      <Box>
        <Typography className="!text-purple" variant="h6" component="h2" sx={{ textAlign: 'center', color: colorPalette.purple, marginTop: '30px', marginBottom: '30px' }}>
          Um welche Dienstleistung handelt es sich?
        </Typography>
        <Box className="flex justify-center  max-w-[400px] mx-auto">
          <TextField
            onChange={handleInputChange}
            name="firstName"
            type="text"
            size="small"
            sx={{
              width: '400px',
              '& .MuiInputBase-root': {
                height: '40px',
                border: 'none',
              },
              '& .MuiInputBase-input': {
                border: 'none',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: '2px solid ' + colorPalette.purple,
              },
            }}
            value={personalData.firstName}
            placeholder="Vorname"
          />
        </Box>

        <Box className="flex justify-center max-w-[400px] mx-auto">
          <TextField
            onChange={handleInputChange}
            name="lastName"
            type="text"
            size="small"
            sx={{
              marginTop: '15px',
              width: '400px',
              '& .MuiInputBase-root': {
                height: '40px',
                border: 'none',
              },
              '& .MuiInputBase-input': {
                border: 'none',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: '2px solid ' + colorPalette.purple,
              },
            }}
            value={personalData.lastName}
            placeholder="Nachname"
          />
        </Box>

        <Box className="flex justify-center max-w-[400px] mx-auto">
          <TextField
            onChange={handleInputChange}
            name="email"
            type="text"
            size="small"
            sx={{
              marginTop: '15px',
              width: '400px',
              '& .MuiInputBase-root': {
                height: '40px',
                border: 'none',
              },
              '& .MuiInputBase-input': {
                border: 'none',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: '2px solid ' + colorPalette.purple,
              },
            }}
            value={personalData.email}
            placeholder="E-Mail-Adresse"
          />
        </Box>

        <Box className="flex justify-center max-w-[400px] mx-auto">
          <TextField
            onChange={handleInputChange}
            name="phone"
            type="text"
            size="small"
            sx={{
              marginTop: '15px',
              width: '400px',
              '& .MuiInputBase-root': {
                height: '40px',
                border: 'none',
              },
              '& .MuiInputBase-input': {
                border: 'none',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                border: '2px solid ' + colorPalette.purple,
              },
            }}
            value={personalData.phone}
            placeholder="Telefonnummer (optional)"
          />
        </Box>

        <Box className="mt-[15px] m-0 mx-auto max-w-[400px] flex flex-row h-auto">
          <Checkbox
            className="mr-[5px]"
            sx={{
              borderRadius: '50%',
              height: '20px',
              width: '20px',
            }}
            defaultChecked
          />
          <Typography style={text11Medium17} className="!text-gray" variant="h6" component="h2" sx={{ textAlign: 'start', color: colorPalette.purple }}>
            Ich erkläre mich mit der Verarbeitung der gemachten Angaben zur Bearbeitung meiner Anfrage einverstanden und stimme dabei der Kontaktaufnahme per Telefon, E-Mail, SMS, oder Whatsapp zu.
          </Typography>
        </Box>
      </Box>

      <Box className="my-10">
        <Button className="h-[40px] w-[130px] min-w-0 bg-olive capitalize rounded-[6px] border-2 border-olive border-solid text-white" onClick={() => closeModal && closeModal()}>
          Absenden
        </Button>
      </Box>
    </Box>
  )
}

export default EnterPersonalData
