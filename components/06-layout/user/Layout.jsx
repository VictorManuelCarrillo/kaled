// components
import NavBar from '../../04-surfaces/appbar/NavBar'
import SpeedDialBtn from '../../05-navigation/speed-dial/SpeedDialBtn'
import Footer from '../box/Footer'
// React components
import { Fragment } from 'react'

import Head from 'next/head'

const Layout = ( { title, children}) => {

  return(
    <Fragment>
      <Head>
        <title>Kaled | {title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name='author' content='Victor Manuel Carrillo Rojas'/>
        <meta name='keywords' content='centro de rehabilitación, centro de rehabilitación en gudalajara, centro de rehabilitacion guadalajara, anexo, anexo guadalajara, anexo en guadalajara, instituto, instituti guadalajara, instituto en adicciones, instituto en adicciones guadalajara, instituto en adicciones en guadalajara, instituto en adicciones en jalisco'/>
        <meta name='description' content='el insituto en adicciones Kaled AC Coyula es un centro innovador especializado en la desintoxicación, rehabilitación y control de adicciones y conductas nocivas para la salud. Conócenos y cambia la vida de los que más quieres'/>
      </Head>

  {/* Navbar component __________ */}
      <NavBar />
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