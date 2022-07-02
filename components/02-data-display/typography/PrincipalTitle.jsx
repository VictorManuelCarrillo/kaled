// MUI components
import {
  Box,
  Typography
  } from '@mui/material'

const PrincipalHeading = ( props) => {

  return (

    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      px: 4,
      color: 'white',
      minHeight: '30vh',
      backgroundSize: 'cover',
      backgrounPosition: 'center',
      backgroundImage: `url(${ props.image})`
    }}>

      <Typography
        variant='h2'
        textAlign='center'
        fontWeight='bold'
        textTransform='uppercase'>

      { props.title}
    </Typography>
    </Box>
  )
}

export default PrincipalHeading

// Component props values

// title = 'string'
// image = 'string'