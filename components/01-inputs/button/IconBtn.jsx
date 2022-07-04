// MUI components
import IconButton from '@mui/material'
// Next component
import Link from 'next/link';

const IconBtn = ( props) => {

  return (

    <Link href= { props.href}>

      <IconButton
        aria-label={ props.ariaLabel}
        size={ props.size}>

          { props.icon}
      </IconButton>
    </Link>
  )
}

export default IconBtn


// Component props values
// ariaLabel = 'string'
// size = 'string' -> small/medium(default)/large
// color = 'string || <object>'
// icon = <object>