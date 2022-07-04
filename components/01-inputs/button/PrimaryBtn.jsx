// MUI components
import Button from '@mui/material/Button'
// Next component
import Link from 'next/link'

const PrimaryBtn = ( props) => {

  return (
    <Link href={ props.href}>

      <Button
        variant='contained' 
        size={ props.size}
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
    </Link>
  )
}

export default PrimaryBtn

// component props values

// text = 'string'
// href = 'string'
// size = 'string' -> small/medium(default)/large
// startIcon = <object>
// endtIcon = <object>