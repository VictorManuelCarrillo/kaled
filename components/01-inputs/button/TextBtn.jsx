// MUI components
import Button from '@mui/material/Button'

const TextBtn = ( props) => {

  return (

    <Button
      variant='text' 
      href={ props.href}
      size={ props.size}
      startIcon={ props.startIcon}
      endIcon={ props.endIcon}
      sx={{
        px: 1,
        mx: 0.2,
        fontWeight: 'bold',
        color: 'button.text.main',
        transition: 'all 0.5s',
        '&:hover': {
          color: 'button.text.light',
          bgcolor: 'none'
        }
      }}>

      { props.text}
    </Button>
  )
}

export default TextBtn

// Component props values

// text = 'string'
// href = 'string'
// size= 'string' -> small/medium(default)/large
// startIcon = <object>
// endIcon = <object>