//MUI components invoycing ____________________ //
import{
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  Typography
  } from '@mui/material'

const CardComplexAction = ( props) => {

  return (

    <Card>

      <CardActionArea>

        <CardHeader
          aria-label='recipe'
          title={ props.title}
          subheader={ props.subHeader}/>

        <CardMedia
          component='img'
          image={ props.image}
          alt={ props.alt}/>

        <CardContent>

          <Typography variant='body2'>
            { props.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardComplexAction