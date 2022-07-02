// Layout component
import Layout from '../../components/06-layout/user/Layout'
// MUI components
import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography
  } from '@mui/material'
// components
import PrincipalTitle from '../../components/02-data-display/typography/PrincipalTitle'
import PrimaryTitle from '../../components/02-data-display/typography/PrimaryTitle'
import SecondaryTitle from '../../components/02-data-display/typography/SecondaryTitle'
import CardImg from '../../components/04-surfaces/card/CardImg'
import ModalImg from '../../components/07-utils/modal/ModalImg'

export default function Nosotros() {

  return(


    <Layout>

      <Box  component='section'>
      <PrincipalTitle
        title='nosotros'
        image='/images/1.jpg'/>
      </Box>

      <Box sx={{ py: 4 }}>

        <PrimaryTitle title='nuestro propósito'/>

        <SecondaryTitle title='calidad seguridad y experiencia'/>

        <Container maxWidth='lg'>

          <Grid container spacing={4} sx={{ py: 4 }}>

            <Grid item xs={12} sm={12} lg={7}>

              <Typography>
                Con toda la experiencia acumulada a lo largo del tiempo, instituto Kaled AC Coyula ayuda, abraza y mejora a las personas, ofreciéndoles un tratamiento profesional e innovador. En un ambiente de respeto y con dignidad a cada usuario.
                <br />
                <br />
                Somos una institución profesional especializada en tratar y curar addiciones, transtornos de personalidad entre otros padecimientos. Con el principal objetivo de que el usuario reestructure su su vida en las áreas fisica, mental, espiritual y familiar.
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} lg={5}>

              <CardImg image='/images/1.jpg'/>
            </Grid>
          </Grid>
        </Container>
      </Box>



  {/* CONOCE NUESTRAS INSTALACIONES SECTION ____________________ */}
      <Box component='section' sx={{ py: 4 }}>

        <PrimaryTitle title='nuestras instalaciones'/>

        <Container maxWidth='lg'>

          <ImageList sx={{ py: 4 }}>

            <ImageListItem cols={1} rows={1}>
              <ModalImg image='/images/1.jpg'/>
            </ImageListItem>
            <ImageListItem cols={1} rows={1}>
              <ModalImg image='/images/1.jpg'/>
            </ImageListItem>
            <ImageListItem cols={2} rows={3}>
              <ModalImg image='/images/1.jpg'/>
            </ImageListItem>
            <ImageListItem cols={2} rows={3}>
              <ModalImg image='/images/1.jpg'/>
            </ImageListItem>
            <ImageListItem cols={2} rows={3}>
              <ModalImg image='/images/1.jpg'/>
            </ImageListItem>
          </ImageList>
        </Container>
      </Box>
    </Layout>
  )
}