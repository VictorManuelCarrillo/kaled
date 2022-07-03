// MUI components
import {
  Typography
  } from '@mui/material'

import { ParallaxBanner } from 'react-scroll-parallax';


const PrincipalHeading = ( props) => {

  return (

    // <Box sx={{
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   px: 4,
    //   color: 'white',
    //   minHeight: '30vh',
    //   backgroundSize: 'cover',
    //   backgrounPosition: 'center',
    //   backgroundImage: `url(${ props.image})`
    // }}>

    //   <Typography
    //     variant='h2'
    //     textAlign='center'
    //     fontWeight='bold'
    //     textTransform='uppercase'>

    //   { props.title}
    // </Typography>
    // </Box>

    <ParallaxBanner
      layers={[ { image: props.image, speed: -10}]}
      style={{ aspectRatio: '2/0.5' }}>

      <Typography
        variant='h2'
        fontWeight='bold'
        textTransform='uppercase'
        sx={{
        position: 'absolute',
        inset: 0, display: 'flex',
        justifyContent: 'center',
        alignItems: 'center' }}>
          { props.title}
      </Typography>
    </ParallaxBanner>
  )
}

export default PrincipalHeading

// Component props values

// title = 'string'
// image = 'string'