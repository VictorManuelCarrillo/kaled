// Layout component
import Layout from '../components/06-layout/user/Layout'
// MUIcomponents
import {
  Box,
  Button,
  Grid,
  Container,
  Typography,
  Divider
  } from '@mui/material'
// MUI icons
import PhoneIcon from '@mui/icons-material/Phone'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import BiotechIcon from '@mui/icons-material/Biotech'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement'
import GroupsIcon from '@mui/icons-material/Groups'
import PsychologyIcon from '@mui/icons-material/Psychology'
// Swiper-JS component
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'
// Swupper-JS styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
// components
import PrimaryBtn from '../components/01-inputs/button/PrimaryBtn'
import SecondaryBtn from '../components/01-inputs/button/SecondaryBtn'
import PrimaryTitle from '../components/02-data-display/typography/PrimaryTitle'
import SecondaryTitle from '../components/02-data-display/typography/SecondaryTitle'

export default function Home() {

  // Swwiper-JS imagesarray __________ //
  const carouselImages = [
    {
      img: '/images/home/carousel/1.jpg'
    }, {
      imag: '/images/home/carousel/1.jpg'
    }
  ]

  return(

    <Layout>

      <Box
        component='section'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pt: 10,
          px: 4,
          minHeight: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url('/images/home/1.png')`
        }}>

        <Typography
          variant='h2'
          textTransform='uppercase'
          textAlign='center'
          sx={{ mb: 4 }}>
          nosotros curamos al cuerpo y sanamos el espíritu...
          <br />
          <br />
          aún estas a tiempo para salvar a los que más quieres
        </Typography>

        <Typography variant='h6' sx={{ px: 4 }}>
        Si notas que alguien de tu familia sufre de adicciones, codependencia o conductas nocivas para la salud <Button variant='text'>contáctate</Button> con nosotros y ayúdale a mejorar el rumbo de su vida
        </Typography>

        <Box sx={{ my: 4 }}>

          <PrimaryBtn
            text='llámanos'
            startIcon={ <PhoneIcon />}/>
        </Box>
      </Box>


  {/* PORQUE ELEJIRNO SECTION ____________________ */}
      <Box sx={{ py: 4 }}>

      <PrimaryTitle title='¿Porqué elejirnos a nosotros?'/>

        <Grid
          container
          spacing={4}
          sx={{ p: 4 }}>

          <Grid
            item
            xs={12} lg={6}>

            <Typography textAlign='justify'>
            Somos una institución que opera sus instalaciones dentro de una  <strong>comunidad terapéutica</strong>, donde tratamos los transtornos de las adicciones a lo largo de un proceso de 9 meses donde los usuarios se <strong>autoayudan</strong> en base a sus experiencias con la supervición de <strong>terapéutas y psicologos</strong> para un seguimiento más adecuado y personalizado.
            <br />
            <br />
            Nosotros nos especializamos en <strong>adicciones, codependencias, problemas de conducta, ludopatia</strong> entre otras patologías y transtornos. Nuestro equipo está capacitado para tratar a los usuarios de manera digna y seguir cada uno de los tratamientos que requieran, así como medicamento y sesiones de terapia grupal e individual.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12} lg={6}>

            <Typography textAlign='justify'>
              Nuestro objetivo es la <strong>rehabilitación</strong> del usuario asi como su <strong>reintegación social y familiar</strong> para que pueda llevar una nueva vida llena de oportunidades y con un pensamiento positivo libre de drogas y malos pensamientos.
              <br />
              <br />
              Transformamos las vidas de nuestros pacientes, los ayudamos a cumplir sus sueños, objetivos y metas.
            </Typography>
          </Grid>
        </Grid>
      </Box>
  {/* INSTITUCION SECTION ____________________ */}
      <Box component='section'>

        <Grid container>

  {/* Card Femenil __________ */}
          <Grid
            item
            xs={12} lg={8}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'column',
              minHeight: '70vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url('/images/1.jpg')`
            }}>

            <Typography variant='h3' textAlign='center' sx={{ mb: 12, color: 'white' }}>
              Un lugar de recuperación para ellas...
            </Typography>

            <SecondaryBtn text='llámanos'/>
          </Grid>

  {/* Card Varonil __________ */}
          <Grid
            item
            xs={12} lg={4}
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              flexDirection: 'column',
              minHeight: '70vh',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundImage: `url('/images/1.jpg')`
            }}>

            <Typography variant='h3' textAlign='center' sx={{ mb: 12, color: 'white' }}>
              Aún estas a tiempo de ayudarlo...
              <br />
              (33-1914-7923)
            </Typography>

            <SecondaryBtn text='llámanos'/>
          </Grid>
        </Grid>
      </Box>


  {/* NUESTRO PROGRAMA SECTION ____________________ */}
      <Box sx={{ py: 4 }}>

        <PrimaryTitle title='conoce nuestro programa'/>
        <SecondaryTitle title='salvando vidas, curando almas y consolidando familias. El poder ser de nuevo tú mismo es posible'/>

        <Container maxWidth='lg'>

          <Grid
            container
            spacing={4}
            sx={{ py: 4 }}>

            <Grid
              item
              xs={12} lg={6}>

              <Typography
                variant='h5'
                fontWeight='bold'
                sx={{ mb: 4 }}>
                  ¿De qué se trata?
              </Typography>

              <Typography>
                El periodo de tratamiento es de <strong>9 meses</strong>, se ingresa al usuario con un expediente y cuestionario de consumo (historial) de consumo, se relizan estudios médicos y psicológicos.
                <br />
                <br />
                El objetivo principal es cambiar todos nuestros hábitos de consumo por nuevos hábitos que nos permitan llevar una vida mejor y en plenitud, dentro de una comunidad terapéutica.
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              lg={6}>

              <Typography
                variant='h5'
                fontWeight='bold'
                sx={{ mb: 4 }}>
                Durante su estancia
              </Typography>

              <Typography>
                La ayuda a tu recuperación se da durante un programa intensivo y personalizado que combina a un equipo multidisciplinario, el cual identifica y ayuda a superar esas conductas y pensamientos que nos hacen tropersar en nuestra vida, integrrando paulatinamente a la familia y posteriormente al usuario dentro de la sociedad.
                <br />
                <br />
                Elusuario debe ser tratado con respeto y dignidad. Es responsabilidad de todo el personal que el usuario labore en nuestras terapias y dinámicas para que nuestro trabajo se vea reflejado en su recuperación y en una actitud positiva desde su ingreso hasta finalmente su egreso.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>


  {/* CONTACTO SECTION ____________________ */}
      
    </Layout>
  )
}