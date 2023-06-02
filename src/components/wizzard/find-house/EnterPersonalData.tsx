import React, { useEffect, useMemo, useState } from 'react'
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material'
import { EAdministrationTypes, EBuildingTypes, EServices, colorPalette, text11Medium17 } from '@/constants'
import { ISubmitRentalState, useSubmitRentalApiContext, useSubmitRentalStateContext } from '@/context'
import axiosInstance from '@/config/axios.instance'

interface IProps {
  handleStepChange: (type: 'next' | 'prev') => void
  closeModal?: () => void
}

const EnterPersonalData: React.FC<IProps> = ({ closeModal, handleStepChange }) => {
  const { personalData, administrationTime, buildingType, features, postCode, serviceType } = useSubmitRentalStateContext()
  const { setPersonalData, reset } = useSubmitRentalApiContext()

  const [validationErrors, setValidationErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    checkbox: true,
  })

  const isButtonDisabled = useMemo(() => {
    return validationErrors.firstName || validationErrors.lastName || validationErrors.email || validationErrors.checkbox
  }, [validationErrors])

  const validateFields = () => {
    if (personalData.firstName === '') {
      setValidationErrors((prev) => ({
        ...prev,
        firstName: true,
      }))
      return false
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        firstName: false,
      }))
    }

    if (personalData.lastName === '') {
      setValidationErrors((prev) => ({
        ...prev,
        lastName: true,
      }))
      return false
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        lastName: false,
      }))
    }

    if (personalData.email === '') {
      setValidationErrors((prev) => ({
        ...prev,
        email: true,
      }))
      return false
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        email: false,
      }))
    }

    return true
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const temp = { ...personalData }
    setPersonalData({ ...temp, [name]: value })
  }

  const handleSubmit = async () => {
    const result = validateFields()

    if (closeModal && result) {
      const dto: Omit<ISubmitRentalState, 'isModalOpen'> = {
        serviceType,
        buildingType,
        features,
        administrationTime,
        postCode,
        personalData,
      }

      // create html body with dto
      const htmlBody = `<div style="display:flex;flex-direction:column">
      <p>Vorname: ${personalData.firstName}</p>
      <p>Nachname: ${personalData.lastName}</p>
      <p>Email: ${personalData.email}</p>
      <p>Telefonnummer: ${personalData.phone}</p>
      <p>Postleitzahl: ${postCode}</p>
      <br/>
      <p>Dienstleistung: ${EServices[serviceType as number]}</p>
      <p>Gebäudetyp: ${EBuildingTypes[buildingType as number]}</p>
      <p>Anzahl der Wohneinheiten: ${features.roomCount}</p>
      <p>Wohnfläche in m²: ${features.minArea}m²</p>
      <p>Geplanter Zeitraum für die Ausführung: ${EAdministrationTypes[administrationTime as number]}</p>
      </div>`

      console.log('htmlBody', htmlBody)

      const options = {
        url: 'https://func-mail-sender-dev.azurewebsites.net/api/send/mail?code=zMLgfSXYJimbhg8I2SVh5Dqal3nxcwpUDTg5RGkOWA5AAzFuFeFScA==',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          body: htmlBody,
          subject: `Neuer Anfrage für ${EServices[serviceType as number]} von ${personalData.firstName} ${personalData.lastName} `,
        },
      }

      try {
        axiosInstance(options).then((res) => {
          reset()
        })
      } catch (error) {
        console.error('E-posta gönderilirken hata oluştuuu:', error)
      }
    }
  }

  useEffect(() => {
    validateFields()
  }, [personalData])

  return (
    <Box className="h-full  flex flex-col items-center justify-between mx-auto">
      <Box>
        <Typography className="!text-purple" variant="h6" component="h2" sx={{ textAlign: 'center', color: colorPalette.purple, marginTop: '30px', marginBottom: '30px' }}>
          Perfekt! Es stehen mehrere Dienstleister zur Auswahl.
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
                borderWidth: '2px',
                borderColor: validationErrors.firstName ? colorPalette.red : colorPalette.purple,
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
                borderWidth: '2px',
                borderColor: validationErrors.lastName ? colorPalette.red : colorPalette.purple,
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
                borderWidth: '2px',
                borderColor: validationErrors.email ? colorPalette.red : colorPalette.purple,
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
            onChange={(x) => setValidationErrors((prev) => ({ ...prev, checkbox: !x.target.checked }))}
            className="mr-[5px]"
            sx={{
              borderRadius: '50%',
              height: '20px',
              width: '20px',
            }}
            defaultChecked={false}
          />
          <Typography style={text11Medium17} className="!text-gray" variant="h6" component="h2" sx={{ textAlign: 'start', color: colorPalette.purple }}>
            Ich erkläre mich mit der Verarbeitung der gemachten Angaben zur Bearbeitung meiner Anfrage einverstanden und stimme dabei der Kontaktaufnahme per Telefon, E-Mail, SMS, oder Whatsapp zu.
          </Typography>
        </Box>
      </Box>

      <Box className="my-10">
        <Button disabled={isButtonDisabled} className="h-[40px] w-[130px] min-w-0 bg-olive capitalize rounded-[6px] border-2 border-olive border-solid text-white" onClick={handleSubmit}>
          Absenden
        </Button>
      </Box>
    </Box>
  )
}

export default EnterPersonalData
