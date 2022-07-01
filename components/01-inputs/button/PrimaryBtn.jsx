// MUI components
import Button from '@mui/material/Button'

const PrimaryBtn = ( props) => {

  return (

    <Button
      variant='contained' 
      size={ props.size}
      href={ props.href}
      startIcon={ props.startIcon}
      endIcon={ props.endIcon}
      sx={{
        px: 3,
        mx: 1,
        my: 1,
        borderRadius: 5,
        color: 'text.primary',
        bgcolor: 'button.primary.main',
        transition: 'all 0.5s',
        '&:hover': {
          bgcolor: 'button.primary.dark'
        }}}>

      { props.text}
    </Button>
  )
}

export default PrimaryBtn

// component props values

// text = 'string'
// href = 'string'
// size = 'string' -> small/medium(default)/large
// startIcon = <object>
// endtIcon = <object>