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

export default function Depresion() {

  return(

    <Layout title='Tratamiento "Depresión"'>

      <PrincipalTitle
        title='depresión'
        image='/images/tratamiento/depresion/title.jpg'/>

      <Box sx={{ py: 2 }}>

        <PrimaryTitle title='descripción general'/>

        <Container maxWidth='lg' sx={{ py:2 }}>

          <Grid container spacing={4}>

            <Grid item xs={12} md={6} lg={4}>

              <CardImg image='/images/tratamiento/depresion/1.jpg'/>
            </Grid>

            <Grid item xs={12} md={12} lg={8}>

              <Typography>
                La depresión es un trastorno mental caracterizado fundamentalmente por un bajo estado de ánimo y sentimientos de tristeza, asociados a alteraciones del comportamiento, del grado de actividad y del pensamiento.
                <br />
                <br />
                Supone una de las patologías más frecuentes en Atención Primaria y es la primera causa de atención psiquiátrica y de discapacidad derivada de problemas mentales.
                <br />
                <br />
                Aparece con más frecuencia en mujeres y en personas menores de 45 años.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py:2 }}>

        <PrimaryTitle title='síntomas'/>

        <Container maxWidth='lg' sx={{ py: 2 }}>

          <Grid container spacing={3}>

            <Grid item xs={12} md={12} lg={12}>

              <Typography>
                Los síntomas nucleares de la depresión son la tristeza patológica, la pérdida de interés y de la capacidad de disfrutar y una disminución de la vitalidad que limita el nivel de actividad y produce un cansancio exagerado, que aparece incluso después de realizar pequeños esfuerzos.
                <br />
                <br />
                Además, pueden aparecer otros síntomas, como los sentimientos de culpa o de incapacidad, la irritabilidad, el pesimismo ante el futuro, las ideas de muerte o de suicidio, la pérdida de confianza en uno mismo o en los demás, la disminución de la concentración y la memoria, la intranquilidad, los trastornos del sueño y la disminución del apetito y de la libido, entre otros.
                <br />
                <br />
              </Typography>

              <SecondaryTitle title='causas de la depresión'/>

              <Typography>
                Salvo algunos casos de depresión asociada a enfermedades orgánicas (enfermedad de Parkinson, tuberculosis, etc.), la depresión se produce generalmente por la interacción de unos determinados factores biológicos (cambios hormonales, alteraciones en los neurotransmisores cerebrales como la serotonina, la noradrenalina y la dopamina, componentes genéticos, etc.), con factores psicosociales (circunstancias estresantes en la vida afectiva, laboral o de relación) y de personalidad (especialmente, sus mecanismos de defensa psicológicos).
              </Typography>
            </Grid>

          
          </Grid>
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