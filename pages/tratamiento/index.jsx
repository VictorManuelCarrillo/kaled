// Layout comoponent
import Layout from '../../components/06-layout/user/Layout'
// MUI components
import {
  Box,
  Container,
  Typography
  } from '@mui/material'
// components
import PrincipalTitle from '../../components/02-data-display/typography/PrincipalTitle'
import PrimaryTitle from '../../components/02-data-display/typography/PrimaryTitle'
import SecondaryTitle from '../../components/02-data-display/typography/SecondaryTitle'

export default function Tratamiento() {

  return(

    <Layout>

      <PrincipalTitle
        title='tratamiento'
        image='/images/1.jpg'/>

      <Box component='section' sx={{ py: 4 }}>

        <PrimaryTitle title='nuestra filosofía'/>

        <Container maxWidth='lg'>

          <SecondaryTitle title='filosofía de la juventud'/>

          <Box component='article' sx={{ py: 4 }}>

            <Typography variant='h5' fontWeight='bold'>
              Hoy estoy dispuesto a cambiar, mi cambio siempre será constante
              <br />
              No existen obstáculos ni barreras que me detengan, con esfuerzo y dedicación
              <br />
              Me ayudo y ayudo a los demás, me es satisfactiorio encontrarme cada día más
              <br />
              Conmigo y con mi realidad, tan sólo con educación un hombre y una mujer pueden llegar a ser personas
              <br />
              Todos tenemos tiempo para todo, para nacer, para crecer, para fallar, para remediar y para volver a nacer
              <br />
              Como una persona positiva soy único y mi voluntad de cambio siempre será mas fuerte que las adicciones
              <br />
              <br />
              Vive, Vive, Vive
            </Typography>

            <Box component='div' sx={{ py: 4 }}>

              <Typography>
                Nuestras filosofías nos inspiran a salir adelante. Como un símbolo de cambio, de lucha y de mejora, nuestra fé y nuestro ímpetud de curarnos de una adicción nos imponea sostenernos de nuestras filosofía como un estandarte del progreso que cada uno de nosotros realizamos al ingresar a esta institución.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box component='section' sx={{ py: 4 }}>

        <Container maxWidth='lg'>

          
        </Container>
      </Box>
    </Layout>
  )
}