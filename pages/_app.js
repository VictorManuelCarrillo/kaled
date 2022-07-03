import '../styles/globals.css'

// MUI Theme components ____________________ //
import { createTheme, ThemeProvider } from '@mui/material/styles'
// MUI Color invoycing ____________________ //
import {
  amber,
  cyan,
  lightBlue,
  purple,
  grey
  }from '@mui/material/colors'

  import { ParallaxProvider } from 'react-scroll-parallax';



const kaledTheme = createTheme( {
  palette: {

    primary: {
      light: cyan[100],
      main: cyan[300],
      dark: cyan[500],
    },

    secondary: {
      light: purple[200],
      main: purple[400],
      dark: purple[700]
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
        light: grey['A100'],
        main: grey['A200'],
        dark: grey['A400'],
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
      <ParallaxProvider>

        <Component {...pageProps} />
      </ParallaxProvider>
    </ThemeProvider>
  )

}

export default MyApp
