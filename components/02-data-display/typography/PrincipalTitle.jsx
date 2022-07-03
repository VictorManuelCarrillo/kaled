// MUI components
import {
  Typography
  } from '@mui/material'
// Parallax component
import { ParallaxBanner } from 'react-scroll-parallax';


const PrincipalHeading = ( props) => {

  return (

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
        alignItems: 'center',
        color: 'white'}}>
          { props.title}
      </Typography>
    </ParallaxBanner>
  )
}

export default PrincipalHeading

// Component props values

// title = 'string'
// image = 'string'