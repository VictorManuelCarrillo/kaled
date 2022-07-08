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

export default function Alcoholismo() {

  return(

    <Layout title='Tratamiento "Alcoholismo"'>

      <PrincipalTitle
        title='alcoholismo'
        image='/images/tratamiento/alcoholismo/title.png'/>

      <Box sx={{ py: 2 }}>

        <PrimaryTitle title='descripción general'/>

        <Container maxWidth='lg' sx={{ py:2 }}>

          <Grid container spacing={4}>

            <Grid item xs={12} md={6} lg={5}>

              <CardImg image='/images/tratamiento/alcoholismo/1.png'/>
            </Grid>

            <Grid item xs={12} md={12} lg={7}>

              <Typography>
                El trastorno por consumo de alcohol (que incluye un grado que, a veces, se denomina «alcoholismo») es un patrón de consumo de alcohol que comprende problemas para controlar tu consumo, situaciones en las que te sientes preocupado por el alcohol, el consumo continuo de este aun cuando te cause problemas, la necesidad de tener que beber más para lograr el mismo efecto o la presencia de síntomas de abstinencia cuando disminuyes o suspendes rápidamente el consumo.
                <br />
                <br />
                El consumo no saludable de alcohol comprende todo consumo de alcohol que pone en riesgo tu salud o tu seguridad, o que provoca otros problemas relacionados. También incluye el consumo muy elevado de alcohol, un patrón de consumo de alcohol por el cual un hombre consume cinco o más bebidas en dos horas, o una mujer ingiere, al menos, cuatro bebidas en dos horas. El consumo muy elevado de alcohol provoca riesgos significativos para la salud y para la seguridad.
                <br />
                <br />
                Si tu patrón de consumo de alcohol te produce una gran angustia reiterada y problemas para desenvolverte en la vida diaria, es probable que padezcas el trastorno por consumo de alcohol. Puede oscilar entre leve y grave. Sin embargo, incluso un trastorno leve puede intensificarse y dar lugar a problemas graves, por lo que el tratamiento temprano es importante.
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
                El trastorno por consumo de alcohol puede ser leve, moderado o grave, según la cantidad de síntomas que presentes. Entre los signos y síntomas pueden encontrarse los siguientes:
                <br />
                <br />
                <ul>

                  <li>
                    Incapacidad para limitar la cantidad de alcohol que consumes
                    <br />
                    <br />
                  </li>

                  <li>
                    Deseo o intentos fallidos de reducir la cantidad de alcohol que consumes
                    <br />
                    <br />
                  </li>

                  <li>
                    Pérdida de mucho tiempo bebiendo u obteniendo el alcohol, o recuperándote de su consumo
                    <br />
                    <br />
                  </li>

                  <li>
                    Deseo fuerte o necesidad de beber alcohol
                    <br />
                    <br />
                  </li>

                  <li>
                    Incumplimiento de obligaciones importantes en el trabajo, la escuela o el hogar debido al consumo reiterado de alcohol
                    <br />
                    <br />
                  </li>

                  <li>
                    Consumo continuo de alcohol incluso cuando sabes que esto causa problemas físicos, sociales o interpersonales
                    <br />
                    <br />
                  </li>

                  <li>
                    Abandono o reducción de actividades sociales o laborales y pasatiempos
                    <br />
                    <br />
                  </li>

                  <li>
                    Consumo de alcohol en situaciones donde no es seguro, como al conducir o nadar
                    <br />
                    <br />
                  </li>

                  <li>
                    Desarrollo de tolerancia al alcohol, de manera que necesitas más cantidad para sentir su efecto o tienes un efecto reducido por la misma cantidad
                    <br />
                    <br />
                  </li>

                  <li>
                    Presencia de síntomas de abstinencia, como náuseas, sudoración y temblores, cuando no bebes, o beber para evitar estos síntomas
                    <br />
                    <br />
                  </li>

                </ul>
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={5}>

              <Typography>
                El trastorno por consumo de alcohol puede incluir períodos de intoxicación por alcohol y síntomas de abstinencia.

                <ul>

                  <li>
                    La <strong>intoxicación por alcohol</strong> se genera a medida que aumenta la cantidad de alcohol en el torrente sanguíneo. Mayor la concentración de alcohol en sangre, mayor el deterioro en tu organismo. La intoxicación por alcohol causa problemas de conducta y cambios mentales. Estos pueden incluir comportamiento inadecuado, estados de ánimo inestables, alteración de la capacidad de juicio, dificultad para hablar, problemas de atención o memoria y mala coordinación. También puedes tener períodos denominados “apagones”, donde no recuerdas los hechos. Los niveles muy altos de alcohol en sangre pueden provocar un coma o incluso la muerte.
                    <br />
                    <br />
                  </li>

                  <li>
                    La <strong>abstinencia al alcohol</strong> puede suceder cuando el consumo de alcohol ha sido intenso y prolongado y luego se suspende o reduce considerablemente. Puede suceder en el plazo de varias horas o hasta cuatro o cinco días después. Los signos y síntomas consisten en sudoración, aceleración de los latidos del corazón, temblores en las manos, problemas para dormir, náuseas y vómitos, alucinaciones, inquietud y nerviosismo, ansiedad y, a veces, convulsiones. Los síntomas pueden ser lo suficientemente graves como para afectar tu desempeño en el trabajo o en situaciones sociales.

                  </li>
                </ul>
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={7}>

              <CardImg image='/images/tratamiento/alcoholismo/2.png'/>
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