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

export default function Farmacodependencia() {

  return(

    <Layout title='Tratamiento "Farmacodependencia"'>

      <PrincipalTitle
        title='farmacodependencia'
        image='/images/tratamiento/farmacodependencia/title.png'/>

      <Box sx={{ py: 2 }}>

        <PrimaryTitle title='descripción general'/>

        <Container maxWidth='lg' sx={{ py:2 }}>

          <Grid container spacing={4}>

            <Grid item xs={12} md={6} lg={6}>

              <CardImg image='/images/tratamiento/farmacodependencia/1.png'/>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>

              <Typography>
                La farmacodependencia es un conjunto de fenómenos conductuales, cognitivos y fisiológicos que <strong>pueden aparecer después del consumo repetido de medicamentos de prescripción médica</strong>. Estos fenómenos típicamente incluyen <strong>deseo intenso de consumir dichos medicamentos, dificultad para controlar el consumo, persistencia del consumo a pesar de las consecuencias perjudiciales, mayor prioridad al consumo frente a otras actividades</strong> y obligaciones, aumento de la tolerancia a los efectos y síndrome de abstinencia.
                <br />
                <br />
                Por medicamentos de prescripción médica consideramos aquellos que son recetados por un facultativo, alteran el estado del ánimo o la conciencia y producen tolerancia y/o dependencia.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py:2 }}>

        <PrimaryTitle title='los fármacos de abuso más utilizados'/>

        <Container maxWidth='lg' sx={{ py: 2 }}>

          <Grid container spacing={3}>

            <Grid item xs={12} md={6} lg={8}>

              <Box sx={{ pb: 3 }}>

                <Typography variant='h6' fontWeight='bold'>Opiáceos</Typography>

                <Typography>
                  Depresores del Sistema Nervioso Central, se encuentran en jarabes para la tos, medicamentos para el dolor y antidiarreicos. Pueden producir somnolencia, estreñimiento, depresión respiratoria y hasta la muerte. Pacientes con dolores crónicos son susceptibles de abuso de estos medicamentos. El abuso de analgésicos es tan alto en algunos países que «ha superado los niveles de abuso de drogas ilícitas.
                </Typography>
              </Box>

              <Box sx={{ pb: 3 }}>

                <Typography variant='h6' fontWeight='bold'>Benzodiacepinas</Typography>

                <Typography>
                  Son ansiolíticos indicados para inducir el sueño, para aliviar ataques de ansiedad y en coyunturas emocionales traumáticas El adicto las combina frecuentemente con alcohol buscando potencializar el efecto. El síndrome de abstinencia produce depresiones, irritabilidad, somnolencia y convulsiones. Valium, Noctamid, Orfidal, Rivotril y Lexatin son los más utilizados.
                </Typography>
              </Box>

              <Box sx={{ pb: 3 }}>

                <Typography variant='h6' fontWeight='bold'>Medicamentos estimulantes</Typography>

                <Typography>
                  Alguno medicamentos como el Ritalin , Concerta o Dexedrina, favorecen la agudeza mental y la atención. Sus efectos psicológicos de confianza en sí mismo influye en que la persona abuse de ellos. Militares, deportistas y estudiantes son poblaciones con alto riesgo a abusar de estos medicamentos.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={12} lg={4}>

              <CardImg
                image='/images/tratamiento/farmacodependencia/2.png'
                alt='tratamiento contra farmacodependencia'/>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 2 }}>

        <PrimaryTitle title='caraterísticas de un adicto a los fármacos'/>

        <Container maxWidth='lg'>

          <Box sx={{ py: 2 }}>

            <ul>

              <li>Automedicación, expresada por el abuso de los medicamentos sin la autorización de un facultativo apropiado. El paciente incrementa la dosis buscando aliviar el malestar original o con una intencionalidad diferente a la inicial como por ejemplo alterar el estado de ánimo o suprimir síntomas de deprivación.</li>
            </ul>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}