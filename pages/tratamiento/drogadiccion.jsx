// Layout component
import Layout from '../../components/06-layout/user/Layout'
// MUI components
import {
  Box,
  Container,
  Grid,
  Typography
  } from '@mui/material'
// Next component
// components
import PrincipalTitle from '../../components/02-data-display/typography/PrincipalTitle'
import PrimaryTitle from '../../components/02-data-display/typography/PrimaryTitle'
import SecondaryTitle from '../../components/02-data-display/typography/SecondaryTitle'
import CardImg from '../../components/04-surfaces/card/CardImg'
export default function Drogadiccion() {

  return (

    <Layout title='Tratamiento "Drogadicción"'>

      <PrincipalTitle
        title='drogadicción'
        image='/images/tratamiento/drogadiccion/title.png'/>

      <Box sx={{ py: 2 }}>

        <PrimaryTitle title='descripción general'/>

        <Container maxWidth='lg' sx={{ py:2 }}>

          <Grid container spacing={4}>

            <Grid item xs={12} md={6} lg={6}>

              <Typography>
                Se le conoce como adiccón a las drogas o drogadicción, al <strong>consumo frecuente de de estupefacientes</strong> a pesar de saber las consecuencias negativas que produce. Es una enfermedad que afecta el cerebro y el comportamiento de una persona, y produce incapacidad de controlar el consumo de medicamentos o drogas legales o ilegales.
                <br />
                Se le considera una adicción, porque <strong>es difícil intentar dejar de consumirlas por cuenta propia</strong>, ya que provocan alteraciones cerebrales en los mecanismos reguladores de la toma de desiciones y el control inhibitorio y porque el usuario de las mismas dedica gran parte de su tiempo en la búsqueda y consumo de ellas.
                <br />
                <br />
                La drogadicción puede empezar con el consumo experimental de una droga recreativa en situaciones sociales y, en algunas personas, el consumo de la droga se vuelve más frecuente. En otras personas, en especial con los opioides, la adicción a las drogas empieza con la exposición a medicamentos recetados, o al recibir medicamentos de un amigo o un familiar al que se los recetaron.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} lg={6}>

              <CardImg image='/images/tratamiento/drogadiccion/1.png' alt='drogadicción tratamiento contra drogadicción centro de rehabilitación contra drogadicción'/>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Typography>
                El riesgo de adicción y la rapidez con que te vuelves adicto varían según la droga. Algunas drogas, como los analgésicos opioides, conllevan un riesgo mayor y provocan adicción más rápido que otras.
                <br />
                Con el paso del tiempo, es probable que necesites dosis mayores de la droga para sentir los efectos. En poco tiempo, es probable que necesites la droga solo para sentirte bien. A medida que aumenta tu consumo de la droga, encontrarás que es cada vez más difícil vivir sin ella. Los intentos por suspender el consumo de la droga pueden causar deseos intensos de consumirla y hacerte sentir físicamente enfermo (síntomas de abstinencia).
                <br />
                <br />
                Es más que probable que necesites ayuda de tu médico, tus familiares, tus amigos, grupos de apoyo y un programa de tratamiento organizado para superar tu adicción a las drogas y mantenerte alejado de ellas.
                <br />
                <br />

                <SecondaryTitle title='diferencia entre adicción fisica y adicción psicológica'/>

                Adicción física, ocurre en los sitios del cerebro donde las neuronas crean la necesidad del consumo compulsivo, debido a que el cuerpo se ha acostumbrado a la droga.
                <br />
                Adicción psicológica, es la necesidad de consumo de una sustancia, que se manifiesta a nivel de pensamientos o emociones, ante una situación estresante, o algún problema. Por lo tanto no existe dependencia física, debido a que no se desarrollan receptores a nivel neuronal para la acción de la sustancia adictiva.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 2 }}>

        <PrimaryTitle title='síntomas'/>

        <Container maxWidth='lg' sx={{ py: 2 }}>

          <Grid container spacing={3}>

            <Grid item xs={12} lg={6}>

              <CardImg image='/images/tratamiento/drogadiccion/2.png'/>
            </Grid>

            <Grid item xs={12} lg={6}>

              <Typography variant='subtitle1'>Los síntomas o las conductas de la drogadicción incluyen lo siguiente:</Typography>

              <Typography>
                <br />

                <ul>

                  <li>Sentir que tienes que consumir la droga con frecuencia, ya sea diariamente o incluso varias veces al día</li>

                  <li>Tener una necesidad tan intensa de consumir la droga que no puedes pensar en otra cosa</li>

                  <li>Con el tiempo, necesitar una dosis mayor de la droga para obtener el mismo efecto</li>

                  <li>Consumir mayores cantidades de la droga durante un período de tiempo más largo del que tenías pensado</li>

                  <li>Asegurarte de tener droga disponible</li>

                  <li>Gastar dinero en la droga, incluso cuando no puedes pagarla</li>

                  <li>No cumplir con las obligaciones y responsabilidades laborales, o reducir el tiempo que dedicas a actividades sociales o recreativas debido al consumo de la droga</li>

                  <li>Continuar con el consumo de la droga a pesar de que sabes que te está provocando problemas en tu vida o daños físicos o psicológicos</li>

                  <li>Continuar con el consumo de la droga a pesar de que sabes que te está provocando problemas en tu vida o daños físicos o psicológicos</li>

                  <li>Hacer cosas que normalmente no harías para conseguir la droga, como robar</li>

                  <li>Experimentar síntomas de abstinencia cuando intentas suspender el consumo de la droga</li>
                </ul>
              </Typography>
            </Grid>

            <Grid item xs={12} lg={12}>

              <Typography>

              <SecondaryTitle title='¿cómo reconocer el consumo de drogas en familiares?'/>

                A veces es difícil distinguir el mal humor o la angustia normales de un adolescente de los signos del consumo de drogas. Los posibles indicios de que un miembro de la familia, adolescente o no, consume drogas son los siguientes:
                <br />
                <br />

                <ul style={{ marginLeft: '3em' }}>

                  <li>
                    <strong>Problemas en la escuela o en el trabajo:</strong> ausencias frecuentes de las clases o del trabajo, desinterés repentino en las actividades escolares o laborales, notas más bajas o disminución del desempeño en el trabajo.
                    <br />
                    <br />
                  </li>

                  <li>
                    <strong>Problemas de sauld física:</strong> falta de energía y de motivación, adelgazamiento o aumento de peso u ojos rojos.
                    <br />
                    <br />
                  </li>

                  <li>
                    <strong>Aspecto desaliñado:</strong> falta de interés en la ropa, el aseo personal o la apariencia.
                    <br />
                    <br />
                  </li>

                  <li>
                    <strong>Cambios de conducta:</strong> esfuerzos exagerados por prohibirles a los familiares la entrada a su habitación o ser reservado con respecto a dónde va con sus amigos; o cambios radicales de conducta y en las relaciones con familiares y amigos.
                    <br />
                    <br />
                  </li>

                  <li>
                    <strong>Problemas de dinero:</strong> pedidos repentinos de dinero sin explicación razonable; o puedes descubrir que falta o se ha robado dinero, o que han desaparecido objetos de tu hogar, lo que indica que tal vez se hayan vendido para sustentar el consumo de drogas.
                    <br />
                    <br />
                  </li>
                </ul>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: 2 }}>

        <PrimaryTitle title='Tratamiento contra adicciones'/>

        <Container maxWidth='lg'>

          <Grid container sx={{ py: 2 }}>

            <Grid item>

              <Typography>
                La solución mas eficaz al problema es reconocer que tu o tu familiar tiene un problema grave y éste les podría traer consecuencias aún más graves como podría ser la muerte.
                <br />
                Nosotros tenemos la solución y podemos ayudarte a salvarle la vida a ese ser querido y mejorar su vida dentro de nuestras instalaciones. Aquí podremos tratar su problema y rehabilitarlo con las personas y herramientas adecuadas para cambiar su mundo y sanarlo como una persona positiva y libre de drogas.
                <br />
                <br />
                LLámanos, pregunta por nuestro programa y conoce nuestras instalaciones, aún estas a tiempo para ayudarlo.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}