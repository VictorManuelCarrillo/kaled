// MUI components invoycing ____________________ //
import {
  SpeedDial,
  SpeedDialAction
  } from '@mui/material'
//MUI Icon invoycing ____________________ //
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined'
import PhoneIcon from '@mui/icons-material/Phone'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'

// SpeedDial actions array ____________________ //
const actions = [

  {
    icon: <AddLocationAltIcon />,
    name: 'Maps',
    color: '#DB4437',
    hover: '#b32c20',
  }, {
    icon: <PhoneIcon />,
    name: 'Teléfono',
    color: '#F4B400',
    hover: '#dba202',
  }, {
    icon: <FacebookOutlinedIcon />,
    name: 'Facebook',
    color: '#4267B2',
    hover: '#2e5094',
  }, {
    icon: <WhatsAppIcon />,
    name: 'WhatsApp',
    color: '#25D366',
    hover: '#16b551'
  }
]


const SpeedDialBtn = () => {

  return (

    <SpeedDial
      ariaLabel='speed dial'
      icon={ <SpeedDialIcon />}
      sx={{
        position: 'fixed',
        bottom: '2em',
        right: '2em',
      }}
      FabProps={{
        sx: {
          bgcolor: 'secondary.main',
          '&:hover': {
            bgcolor: 'secondary.dark'
          }
        }
      }}>

      { actions.map( ( action) => (

        <SpeedDialAction
          key={ action.name}
          icon={ action.icon}
          tooltipTitle={ action.name}
          sx={{
            color: 'white',
            background: action.color,
            '&:hover': {
              background: action.hover
            }}}/>
      )) }
    </SpeedDial>
  )
}

export default SpeedDialBtn