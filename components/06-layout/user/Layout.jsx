// components
import NavBar from '../../04-surfaces/appbar/NavBar'
import SpeedDialBtn from '../../05-navigation/speed-dial/SpeedDialBtn'
import Footer from '../box/Footer'
// React components
import { Fragment } from 'react'

const Layout = ( { children}) => {

  return(

    <Fragment>

  {/* Navbar component __________ */}
      <NavBar />
      <br />
      <br />
      <br />
  {/* children layout component __________ */}
      { children}

  {/* SpeedDial component __________ */}
      <SpeedDialBtn />

  {/* Footer component __________ */}
      <Footer />
    </Fragment>
  )
}

export default Layout