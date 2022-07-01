// MUI components invoycing ____________________ //
import IconButton from '@mui/material'

const IconBtn = ( props) => {

  return (

    <IconButton
      aria-label={ props.ariaLabel}
      size={ props.size}>

        { props.icon}
    </IconButton>
  )
}

export default IconBtn


// Component props values
// ariaLabel = 'string'
// size = 'string' -> small/medium(default)/large
// color = 'string || <object>'
// icon = <object>