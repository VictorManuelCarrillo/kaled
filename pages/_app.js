import '../styles/globals.css'

// MUI Theme components ____________________ //
import { createTheme, ThemeProvider } from '@mui/material/styles'
// MUI Color invoycing ____________________ //
import {
  amber,
  blue,
  lightBlue,
  green,
  grey,
  blueGrey
  }from '@mui/material/colors'

const kaledTheme = createTheme( {
  palette: {

    primary: {
      light: blue[100],
      main: blue[400],
      dark: blue[800],
    },

    secondary: {
      light: green[400],
      main: green[600],
      dark: green[800]
    },

    button: {

      primary: {
        light: amber[300],
        main: amber[500],
        dark: amber[700]
      },

      secondary: {
        light: lightBlue[300],
        main: lightBlue[500],
        dark: lightBlue[700]
      },

      text: {
        light: blueGrey['A200'],
        main: blueGrey[100],
        dark: blueGrey['A700'],
      }
    },

    speedDial:{

      main: 'red',
      whatsApp: 'linear-gradient(160deg, rgba(52,183,241,1) 0%, rgba(37,211,102,1) 60%)',
      faceboob: 'blue',
      phone: 'grey',
      maps: 'purple',
    },

    card: {

      text: 'white',
      header: lightBlue[700],
      content: grey[800]
    },

    text: {
      primary: grey[900],
      secondary: grey[700]
    },
  },
})

function MyApp({ Component, pageProps }) {
  return(

    <ThemeProvider theme={ kaledTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )

}

export default MyApp
