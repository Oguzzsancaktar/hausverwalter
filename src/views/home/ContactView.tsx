'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { Box, Button, Container, FormControl, Grid, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import { colorPalette, svgIcons, text16Medium, text17Medium, text33SemiBold50 } from '@/constants'
import Image from 'next/image'
import { loaderProp } from '@/utils'
import axiosInstance from '@/config/axios.instance'
import Swal from 'sweetalert2'

const ContactView = () => {
  const [contactData, setContactData] = useState({
    fullname: '',
    subject: '',
    email: '',
  })

  const [validationErrors, setValidationErrors] = useState({
    fullname: false,
    subject: false,
    email: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContactData((prev) => ({ ...prev, [name]: value }))
  }

  const isButtonDisabled = useMemo(() => {
    return validationErrors.fullname || validationErrors.subject || validationErrors.email
  }, [validationErrors])

  const validateFields = () => {
    if (contactData.fullname === '') {
      setValidationErrors((prev) => ({
        ...prev,
        fullname: true,
      }))
      return false
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        fullname: false,
      }))
    }

    if (contactData.subject === '') {
      setValidationErrors((prev) => ({
        ...prev,
        subject: true,
      }))
      return false
    } else {
      setValidationErrors((prev) => ({
        ...prev,
        subject: false,
      }))
    }

    if (contactData.email === '') {
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

  const handleSubmit = async () => {
    const result = validateFields()

    setContactData({
      fullname: '',
      subject: '',
      email: '',
    })

    if (result) {
      const dto = {
        fullname: contactData.fullname,
        subject: contactData.subject,
        email: contactData.email,
      }

      // create html body with dto
      const htmlBody = `<div style="display:flex;flex-direction:column">
      <p>Vorname, Nachname: ${dto.fullname}</p>
      <p>Email: ${dto.email}</p>
      <p>Subject: ${dto.subject}</p>
      <br/>
      </div>`

      const options = {
        url: 'https://func-mail-sender-dev.azurewebsites.net/api/send/mail?code=zMLgfSXYJimbhg8I2SVh5Dqal3nxcwpUDTg5RGkOWA5AAzFuFeFScA==',
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
        },
        data: {
          body: htmlBody,
          subject: `Anfrage für Zusammenarbeit von: ${dto.fullname} `,
        },
      }

      try {
        axiosInstance(options).then((res) => {
          Swal.fire('Ihre Anfrage wurde erfolgreich bearbeitet', 'Wir werden uns so schnell wie möglich mit Ihnen in Verbindung setzen', 'success')

        })
      } catch (error) {
        console.error('E-posta gönderilirken hata oluştuuu:', error)
      }
    }
  }

  useEffect(() => {
    validateFields()
  }, [contactData])
  return (
    <div id="partner-werden" className="py-10 px-10 min-w-screen bg-white1 flex-row items-center justify-center pb-20">
      <Container
        maxWidth="lg"
        className="py-[50px] px-[150px] medium:p-5 flex flex-col h-auto justify-between items-center relative bg-blueLight  rounded-tl-[100px] rounded-br-[40px] "
        style={{ display: 'flex' }}
      >
        <Box className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" width={70} height={70}>
          <Image priority src={svgIcons.send} alt="Send Icon" loader={loaderProp} />
        </Box>
        <Box className="pt-[30px] ">
          <Typography
            variant="h3"
            component="p"
            className="small:!text-lg"
            sx={{
              ...text33SemiBold50,
              maxWidth: '850px',
              flexGrow: 1,
              color: colorPalette.purple,
              textAlign: 'center',
            }}
          >
            Interesse an einer
            <span style={{ color: colorPalette.blue }}> Zusammenarbeit </span>
            als Hausverwalter? Kontaktieren Sie uns noch heute
          </Typography>

          <Typography
            variant="h3"
            component="p"
            className="my-5"
            sx={{
              ...text16Medium,
              maxWidth: '850px',
              flexGrow: 1,
              color: colorPalette.purple3,
              textAlign: 'center',
            }}
          >
            Füllen Sie das Formular aus und wir melden uns bei Ihnen innerhalb von 1-2 Werktagen.
          </Typography>
        </Box>

        <Box className="w-full max-w-[630px]">
          <Grid className="w-full block small:!flex small:!flex-col">
            <FormControl variant="standard" className="mr-5 w-[calc((100%-1.25rem)/2)] small:!w-full small:mb-5">
              <OutlinedInput
                className="bg-white h-[60px] px-[20px] rounded-[10px]w-full "
                style={{ outline: 'none' }}
                placeholder="Name, Nachname"
                classes={{ notchedOutline: '!border-none !outline-none' }}
                name="fullname"
                value={contactData.fullname}
                onChange={handleInputChange}
                startAdornment={
                  <InputAdornment position="start">
                    <Image priority src={svgIcons.user} alt="User Icon" loader={loaderProp} />
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard" className="w-[calc((100%-1.25rem)/2)] small:!w-full">
              <OutlinedInput
                className="bg-white h-[60px]  rounded-[10px] w-full"
                style={{ outline: 'none' }}
                placeholder="Betreff"
                name="subject"
                value={contactData.subject}
                onChange={handleInputChange}
                classes={{ notchedOutline: '!border-none !outline-none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <Image priority src={svgIcons.document} alt="User Icon" loader={loaderProp} />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid className="w-full mt-5  small:!flex small:!flex-col">
            <FormControl variant="standard" className=" w-[calc(100%-180px-1.25rem)] small:!w-full mr-5 small:mb-5">
              <OutlinedInput
                className="bg-white h-[60px] px-[20px] rounded-[10px] w-full "
                style={{ outline: 'none' }}
                placeholder="E-Mail-Adresse"
                value={contactData.email}
                classes={{ notchedOutline: '!border-none !outline-none' }}
                name="email"
                onChange={handleInputChange}
                startAdornment={
                  <InputAdornment position="start">
                    <Image priority src={svgIcons.mail} alt="User Icon" loader={loaderProp} />
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button
              className="small:!w-full"
              color="inherit"
              style={{ backgroundColor: colorPalette.olive, color: isButtonDisabled ? colorPalette.purple : colorPalette.white, height: 60, width: 180 }}
              onClick={handleSubmit}
              disabled={isButtonDisabled}
            >
              Absenden
            </Button>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default ContactView
