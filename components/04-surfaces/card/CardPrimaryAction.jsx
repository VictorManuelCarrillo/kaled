// MUI components invoycing ____________________ //
import{
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
  } from '@mui/material'


const CardPrimaryAction = ( props) => {

  return (

    <Card sx={{
      color: 'card.text',
      minWidth: 350, maxWidth: 450 }}>

      <CardActionArea>

        <CardMedia
          component='img'
          image={ props.image}
          alt={ props.alt}
          sx={{ maxHeight: '25vh' }}/>

          <CardContent sx={{ bgcolor: 'card.content' }}>

            <Typography variant='h5' component='div'>
              { props.title}
            </Typography>

            <Typography variant='body2'>
              { props.text}
            </Typography>
          </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardPrimaryAction

// component props values

// image = 'string'
// alt= 'string'
// title = 'text'
// text = 'text'