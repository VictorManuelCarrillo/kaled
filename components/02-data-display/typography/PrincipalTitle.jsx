// MUI components
import {
  Box,
  Typography
  } from '@mui/material'

const PrincipalHeading = ( props) => {

  return (

    <Box sx={{
      px: 4,
      minHeight: '20vh',
      backgroundImage: `url(${ props.image})`
    }}>

      <Typography
        varaint='h2'
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