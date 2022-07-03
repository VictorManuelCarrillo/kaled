// MUI components
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useTheme,
  useMediaQuery
  } from '@mui/material'
// Next component
import Link from 'next/link'
// React component
import { Fragment } from 'react'
// components
import DrawerNav from '../../05-navigation/drawer/DrawerNav'
import PrimaryBtn from '../../01-inputs/button/PrimaryBtn'

const NavBar = () => {

  // links array __________ //
  const links = [
    {
      name: 'inicio',
      href: '/'
    }, {
      name: 'nosotros',
      href: '/nosotros'
    }, {
      name: 'tratamiento',
      href: '/tratamiento'
    }
  ]

  // MUI useTheme __________ //
  const theme = useTheme()
  // MUI MediaQuery __________ //
  const isMatch = useMediaQuery( theme.breakpoints.down( 'md'))

  return(

    <AppBar>

      <Toolbar>

        { isMatch ? (

          <Fragment>

            <Typography>KALED</Typography>

            <DrawerNav />
          </Fragment>
        ) : (

          <Fragment>

            <Typography sx={{ mr: 'auto' }}>
              KALED
            </Typography>

            { links.map( ( link, idx) => (

              <Link key={ idx} href={ link.href}>
                <Button color='inherit'>
                    { link.name}
                  </Button>
              </Link>
            ))}
            <PrimaryBtn text='contáctanos'/>
          </Fragment>
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar