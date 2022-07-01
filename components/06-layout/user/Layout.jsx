// components
import NavBar from '../../04-surfaces/appbar/NavBar'
// React components
import { Fragment } from 'react'

const Layout = ( { children}) => {

  return(

    <Fragment>

  {/* Navbar component __________ */}
      <NavBar />

      { children}
    </Fragment>
  )
}

export default Layout