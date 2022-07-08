// Layout component
import Layout from '../../components/06-layout/user/Layout'
// MUI components
import {
  Box,
  Container,
  Grid,
  Typography
  } from '@mui/material'
// MUI icons
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
// components
import PrincipalTitle from '../../components/02-data-display/typography/PrincipalTitle'
import PrimaryTitle from '../../components/02-data-display/typography/PrimaryTitle'
import SecondaryTitle from '../../components/02-data-display/typography/SecondaryTitle'
import PrimaryBtn from '../../components/01-inputs/button/PrimaryBtn'
import SecondaryBtn from '../../components/01-inputs/button/SecondaryBtn'
import CardImg from '../../components/04-surfaces/card/CardImg'

export default function Ansiedad() {

  return(

    <Layout title='Tratamiento "Ansiedad"'>

      <PrincipalTitle
        title='ansiedad'
        image='/images/tratamiento/ansiedad/title.png'/>

      <Box sx={{ py: 2 }}>

        <PrimaryTitle title='descripción general'/>

        <Container maxWidth='lg' sx={{ py:2 }}>

          <Grid container spacing={4}>

            <Grid item xs={12} md={12} lg={12}>

              <Typography>
                La ansiedad es una emoción normal que se experimenta en situaciones en las que el sujeto se siente amenazado por un peligro externo o interno.
                <br />
                <br />
                Habría que diferenciar entre miedo (el sujeto conoce el objeto externo y delimitado que le amenaza y se prepara para responder) y ansiedad (el sujeto desconoce el objeto, siendo la amenaza interna y existiendo una dificultad en la elaboración de la respuesta).
                <br />
                <br />
                A diferencia de la ansiedad relativamente leve y transitoria causada por un evento estresante, los trastornos de ansiedad duran por lo menos seis meses y pueden empeorar si no se tratan.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py:2 }}>

        <PrimaryTitle title='síintomas de la ansiedad'/>

        <Container maxWidth='lg' sx={{ py: 2 }}>

          <Grid container spacing={3}>

            <Grid item xs={12} md={6} lg={8}>

              <Typography>

                <ul>

                  <li>
                    Trastorno por crisis de angustia, en el que la ansiedad se presenta de forma episódica como palpitaciones, sensación de ahogo, inestabilidad, temblores o miedo a morirse.
                    <br />
                    <br />
                  </li>

                  <li>
                    Trastorno de ansiedad generalizada, con un estado permanente de angustia.
                    <br />
                    <br />
                  </li>

                  <li>
                    Trastorno fóbico, con miedos específicos o inespecíficos.
                    <br />
                    <br />
                  </li>

                  <li>
                    Trastorno obsesivo-compulsivo, con ideas intrusivas y desagradables que pueden acompañarse de actos rituales que disminuyen la angustia de la obsesión (lavarse muchas veces por miedo a contagiarse, comprobar las puertas o los enchufes, dudas continuas).
                    <br />
                    <br />
                  </li>

                  <li>
                    Reacciones de estrés agudo o postraumático.
                    <br />
                    <br />
                  </li>

                  <li>
                    Trastornos de adaptación a situaciones vitales adversas.
                    <br />
                    <br />
                  </li>

                </ul>
              </Typography>
            </Grid>

            <Grid item xs={12} md={12} lg={4}>

              <CardImg
                image='/images/tratamiento/ansiedad/1.jpg'
                alt='tratamiento contra ansiedad'/>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 2 }}>

        <PrimaryTitle title='las causas de la ansiedad'/>

        <Container maxWidth='lg'>

          <Box sx={{ py: 2 }}>

            <Typography>
              Las causas fundamentales son los factores genéticos, existiendo una predisposición al trastorno, aunque se desconoce su contribución exacta y el tipo de educación en la infancia y la personalidad, presentando mayor riesgo aquellas personas con dificultad para afrontar los acontecimientos estresantes.
              <br />
              <br />
              Entre los factores precipitantes de la enfermedad estarían los acontecimientos estresantes, en particular las dificultades en las relaciones interpersonales, las enfermedades físicas y los problemas laborales.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 4 }}>

        <SecondaryTitle title='la cura es posibe, nosotros podemos ayudarlo'/>

        <Container maxWidth='lg' sx={{ py: 2 }}>

          <Typography>
            La cura a esta adicción es posible. Con nosotros el rumbo de tu ser más querido está asegurado para un rumbo mucho mejor. Con nuestro equipo de médicos y psicólogos podemos ayudarlo a controlar su problema y solucionarlo para siempre.
            <br />
            Contáctanos y dale la ayuda que necesita.
          </Typography>

          <Box sx={{ mt: 8,}}>

            <PrimaryBtn text='llámanos' href='tel:3319147923' target='_blank' startIcon={ <PhoneIcon />}/>
            <SecondaryBtn text='contáctanos' href='https://wa.link/yupydt' target='_blank' startIcon={<WhatsAppIcon />}/>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}