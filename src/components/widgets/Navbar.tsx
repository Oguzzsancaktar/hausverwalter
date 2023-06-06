'use client'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import Image from 'next/image'
import { LogoHausverwalter, colorPalette, svgIcons, text17Medium } from '@/constants'
import { useSubmitRentalApiContext } from '@/context'
import { loaderProp } from '@/utils'

interface IProps {}

const Navbar: React.FC<IProps> = () => {
  const { setShowModal } = useSubmitRentalApiContext()
  const [navbarBgShow, setNavbarBgShow] = React.useState(false)

  const pages = ['Startseite', 'Ratgeber', 'Partner', 'Über uns']
  const settings = ['EN', 'TR', 'FR', 'ES']

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 0) {
        setNavbarBgShow(true)
      } else {
        setNavbarBgShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AppBar
      className={!navbarBgShow ? 'transition-all duration-300' : 'transition-all duration-300 bg-white1'}
      position="fixed"
      style={{ paddingTop: 40, paddingBottom: 40, boxShadow: 'none' }}
      color="transparent"
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Image priority width={203} height={56} src={LogoHausverwalter} alt="Hausverwalter Logo" loader={loaderProp} />

          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ mr: '20px', color: colorPalette.black2, display: 'block' }}>
                  <Typography
                    variant="h3"
                    noWrap
                    component="a"
                    href=""
                    sx={{
                      ...text17Medium,
                      marginX: 'auto',
                      flexGrow: 1,
                      color: colorPalette.black2,
                      textDecoration: 'none',
                      textTransform: 'capitalize',
                    }}
                  >
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>

            <Button className="medium:hidden" color="inherit" style={{ backgroundColor: colorPalette.blue, height: 40, width: 180 }} onClick={() => setShowModal(true)}>
              <Typography
                variant="h3"
                noWrap
                component="h2"
                sx={{
                  ...text17Medium,
                  marginX: 'auto',
                  flexGrow: 1,
                  color: colorPalette.white,
                  textDecoration: 'none',
                  textTransform: 'capitalize',
                }}
              >
                Angebot einholen
              </Typography>
            </Button>

            <Box sx={{ width: 'auto', display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}

              {/* <MenuItem>
                <Tooltip title="Open settings">
                  <IconButton className="ml-2" style={text17Medium} onClick={handleOpenUserMenu} sx={{ p: 0, color: colorPalette.black2 }}>
                    DE
                    <Image priority className="ml-[3px]" src={svgIcons.chevronDown} alt="chevron down" width={10} height={10} loader={loaderProp} />
                  </IconButton>
                </Tooltip>
              </MenuItem> */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
