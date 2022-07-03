// Layout comoponent
import Layout from '../../components/06-layout/user/Layout'
// MUI components
import {
  Box,
  Container,
  Divider,
  Grid,
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

        <PrimaryTitle title='etapas del tratamiento'/>

        <Grid container>

  {/* PRIMERA FASE __________ */}
          <Grid item xs={12} sm={12} md={6} lg={4} sx={{ py: 2, px: 4, color: 'white', background: 'linear-gradient(45deg, rgba(249,35,3,1) 0%, rgba(203,0,0,1) 100%)' }}>
            <Typography variant='h4' sx={{ pt: 4, pb: 2, textAlign: 'center', fontWeight: 'bold' }}>PRIMERA FASE</Typography>

            <Divider variant='middle' sx={{ border: '0.1em solid', borderColor: 'white', bgcolor: 'white' }}/>

            <Typography variant='subtitle1' fontWeight='bold' sx={{ my: 2 }}>ACOGIDA</Typography>

            <Typography variant='subtitle2' fontWeight='bold'>Objetibos por etapa:</Typography>

            <ul>

              <li> <Typography>Ritual de ingreso</Typography></li>
              <li> <Typography>Filosofía de la Juventud</Typography></li>
              <li> <Typography>Compromiso Existencial</Typography></li>
              <li> <Typography>Autocontrol</Typography></li>
            </ul>

            <Typography textAlign='justify' sx={{ pt: 2, px: 2 }}>
              el tiempo de duracion de la primera fase es de 30 dás, durante este tiempo el usuario se adapta al lugar, convive con los demás usuarios y empieza a participar en los círculos terapéuticos entre otras dinámicas.
              <br />
              Así mismo el usuario toma autocontrol sobre sus acciones y pensamientos para ser una persona más estable
            </Typography>
          </Grid>

  {/* PRIMERA FASE __________ */}
          <Grid item xs={12} sm={12} md={6} lg={4} sx={{ py: 2, px: 4, color: 'white', background: 'linear-gradient(45deg, rgba(248,249,3,1) 0%, rgba(231,158,0,1) 100%)' }}>
            <Typography variant='h4' sx={{ pt: 4, pb: 2, textAlign: 'center', fontWeight: 'bold' }}>SEGUNDA FASE</Typography>

            <Divider variant='middle' sx={{ border: '0.1em solid', borderColor: 'white', bgcolor: 'white' }}/>

            <Typography variant='subtitle1' fontWeight='bold' sx={{ my: 2 }}>ETAPA DE IDENTIFICACIÓN</Typography>

            <Typography variant='subtitle2' fontWeight='bold'>Objetibos por etapa:</Typography>

            <ul>

              <li> <Typography>Autobiografía</Typography></li>
              <li> <Typography>Plan de tratamiento</Typography></li>
              <li> <Typography>Participación en todos los círculos terapéuticos</Typography></li>
              <li> <Typography>asimilación de reglas y normas</Typography></li>
              <li> <Typography>asimilación de la enfermedad</Typography></li>
            </ul>

            <Typography variant='subtitle1' fontWeight='bold' sx={{ my: 2 }}>ETAPA DE ELABORACIÓN</Typography>

            <Typography variant='subtitle2' fontWeight='bold'>Objetibos por etapa:</Typography>

            <ul>

              <li> <Typography>Proyecto de vida</Typography></li>
              <li> <Typography>Factores de riesgo y protección</Typography></li>
              <li> <Typography>Participación en todos los círculos terapéuticos</Typography></li>
              <li> <Typography>asimilación de reglas y normas</Typography></li>
              <li> <Typography>asimilación de la enfermedad</Typography></li>
            </ul>

            <Typography textAlign='justify' sx={{ pt: 2, px: 2 }}>
              el tiempo de duracion de la primera fase es de 30 dás, durante este tiempo el usuario se adapta al lugar, convive con los demás usuarios y empieza a participar en los círculos terapéuticos entre otras dinámicas.
              <br />
              Así mismo el usuario toma autocontrol sobre sus acciones y pensamientos para ser una persona más estable
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}