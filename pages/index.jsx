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
// Next component
import Image from 'next/image'
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
import ModalImg from '../components/07-utils/modal/ModalImg'
import CardPrimaryAction from '../components/04-surfaces/card/CardPrimaryAction'

export default function Home() {

  // Swiper-JS images array __________ //
  const carouselImages = [
    {
      img: '/images/home/carousel/1.jpg',
      width: '30vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/2.jpg',
      width: '30vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/3.jpg',
      width: '60vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/4.jpg',
      width: '30vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/5.jpg',
      width: '60vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/6.jpg',
      width: '60vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/7.jpg',
      width: '30vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/8.jpg',
      width: '60vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/9.jpg',
      width: '60vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/10.jpg',
      width: '30vw',
      height: '90vh'
    }, {
      img: '/images/home/carousel/11.jpg',
      width: '60vw',
      height: '90vh'
    }
  ]

  // services array __________ //
  const services = [
    {
      icon: <RestaurantIcon sx={{ fontSize: '6em' }}/>,
      title: 'alimentación balanceada',
      text: 'La alimentación es la base para una buena recuperación'
    }, {
      icon: <BiotechIcon sx={{ fontSize: '6em' }}/>,
      title: 'medicina & psicología',
      text: 'Con un historial médico y terapias nos aseguramos de asistir a cada usuario para una salud fisica y mental mejor'
    }, {
      icon: <FitnessCenterIcon sx={{ fontSize: '6em' }}/>,
      title: 'actividad física',
      text: 'El ejercicio en conjunto con la buena alimentación ayuda a bajar los niveles de ansiedad'
    }, {
      icon: <SelfImprovementIcon sx={{ fontSize: '6em' }}/>,
      title: 'disciplina física mental',
      text: 'Actividades que promueven una disciplina fisica y mental, así como mayor concentración'
    }, {
      icon: <GroupsIcon sx={{ fontSize: '6em' }}/>,
      title: 'terapia grupal',
      text: 'Con dinámicas en grupo, los usuarios pueden reforzar su confianza y mejorar su autoestima'
    }, {
      icon: <PsychologyIcon sx={{ fontSize: '6em' }}/>,
      title: 'psicología individual',
      text: 'Nuestros psicologos tratan los problemas de los usuarios para un tratamiento mas a fondo y sistemático'
    }
  ]

  const cards = [
    {
      href: '/tratamiento/drogadiccion',
      title: 'drogadicción',
      alt: 'instituto contra drogadicción',
      image: '/images/home/tratamiento/drogadiccion.png',

    }, {
      href: '/tratamiento/farmacodependencia',
      title: 'famacodependencia',
      alt: 'instituto contra farmacodependencia',
      image: '/images/home/tratamiento/farmacodependencia.jpg',

    }, {
      href: '/tratamiento/ansiedad',
      title: 'ansiedad',
      alt: 'instituto contra ansiedad',
      image: '/images/home/tratamiento/ansiedad.png',

    }, {
      href: '/tratamiento/alcoholismo',
      title: 'alcoholismo',
      alt: 'instituto contra drogadicción',
      image: '/images/home/tratamiento/alcoholismo.png',

    }, {
      href: '/tratamiento/codependencia',
      title: 'codependencia',
      alt: 'instituto contra drogadicción',
      image: '/images/home/tratamiento/codependencia.png',

    }, {
      href: '/tratamiento/depresion',
      title: 'depresión',
      alt: 'instituto contra drogadicción',
      image: '/images/home/tratamiento/depresion.png',

    }
  ]
  return(

    <Layout title='Inicio'>

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
        Si notas que alguien de tu familia sufre de adicciones, codependencia o conductas nocivas para la salud <Button variant='text' href='https://wa.link/yupydt' target='_blank' sx={{ fontWeight: 'bold', color: '#43c23c' }}>contáctate</Button> con nosotros y ayúdale a mejorar el rumbo de su vida
        </Typography>

        <Box sx={{ my: 4 }}>

          <PrimaryBtn text='llámanos' href='tel:3319147923' startIcon={ <PhoneIcon />}/>
        </Box>
      </Box>


  {/* PORQUE ELEJIRNO SECTION ____________________ */}
      <Box sx={{ py: 4 }}>

      <PrimaryTitle title='¿Porqué elejirnos a nosotros?'/>
        
        <Container maxWidth='lg'>

          <Grid container spacing={4} sx={{ p: 4 }}>

            <Grid item xs={12} lg={7}>

              <Typography textAlign='justify'>
              Somos una institución que opera sus instalaciones dentro de una  <strong>comunidad terapéutica</strong>, donde tratamos los transtornos de las adicciones a lo largo de un proceso de 9 meses donde los usuarios se <strong>autoayudan</strong> en base a sus experiencias con la supervición de <strong>terapéutas y psicologos</strong> para un seguimiento más adecuado y personalizado.
              <br />
              <br />
              Nosotros nos especializamos en <strong>adicciones, codependencias, problemas de conducta, ludopatia</strong> entre otras patologías y transtornos. Nuestro equipo está capacitado para tratar a los usuarios de manera digna y seguir cada uno de los tratamientos que requieran, así como medicamento y sesiones de terapia grupal e individual.
              Nuestro objetivo es la <strong>rehabilitación</strong> del usuario asi como su <strong>reintegación social y familiar</strong> para que pueda llevar una nueva vida llena de oportunidades y con un pensamiento positivo libre de drogas y malos pensamientos.
              <br />
              <br />
              Transformamos las vidas de nuestros pacientes, los ayudamos a cumplir sus sueños, objetivos y metas.
              </Typography>
            </Grid>

            <Grid item xs={12} lg={5}>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Image src='/images/home/logo.jpg' alt='instituo kaled ac coyula' width={907} height={902}/>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>


  {/* CAROUSEL SECTION ____________________ */}
      <Box>

        <Swiper
          modules={ [ Navigation, Pagination, Scrollbar, Autoplay ]}
          navigation={ true}
          loop={ true}
          autoplay={ {
            delay: 800,
            disableOnInteraction: false
          }}
          speed={1500}
          scrollbar={ { draggable: true }}
          pagination={ { clickable: true }}
          breakpoints={{
            360: {
              slidesPerView: 1
            },
            420: {
              slidesPerView: 2
            },
            710: {
              slidesPerView: 3
            },
            1200: {
              slidesPerView: 4
            },
          }}>

          { carouselImages.map( ( image, idx) => (

            <SwiperSlide key={ idx}>

              <ModalImg image={ image.img} modalWidth={ image.width} modalHeight={ image.height}/>
            </SwiperSlide>
          ))}
        </Swiper>
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
              backgroundImage: `url('/images/home/2.png')`
            }}>

            <Typography variant='h3' textAlign='center' sx={{ color: 'white' }}>
              Un lugar de recuperación para ellas...
            </Typography>

            <SecondaryBtn text='llámanos' href='https://wa.link/yupydt' target='_blank'/>
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
              backgroundImage: `url('/images/home/3.png')`
            }}>

            <Typography variant='h3' textAlign='center' sx={{color: 'white' }}>
              Aún estas a tiempo de ayudarlo...
              <br />
              <br />
              (33-1914-7923)
              <br />
              <br />
              (33-1068-7964)
            </Typography>

            <SecondaryBtn text='llámanos' href='https://wa.link/yupydt' target='_blank'/>
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


  {/* CRADS SECTION ____________________ */}
      <Box sx={{ py: 4 }}>

        <PrimaryTitle title='tratamiento'/>
        <SecondaryTitle title='Tenemos un equipo multidisciplinario capacitado para cualquier enfermedad, transtorno o adicción'/>
        <Container maxWidth='xl'>

          <Grid container rowSpacing={8} columnSpacing={2} sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>

            { cards.map( ( card, idx) => (

              <Grid key={ idx} item xs={12} sm={6} md={4} lg={3}>

                <CardPrimaryAction
                  href={ card.href}
                  image={ card.image}
                  alt={ card.alt}
                  title={ card.title}
                  text={ card.text}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>


  {/* CONTACTO SECTION ____________________ */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'column',
          p: 4,
          bgcolor: 'secondary.main',
          [`@media (min-width: 600px)`]: {
            flexDirection: 'row'
          }
        }}>

        <Typography variant='h4'>¿Dudas sobre nuestro programa o tratamiento?</Typography>

        <PrimaryBtn text='llámanos' href='https://wa.link/yupydt'/>
      </Box>


  {/* NUESTROS SERVICIOS SECTION ____________________ */}
      <Box component='section'>

        <PrimaryTitle title='nuestros servicios'/>

        <Container maxWidth='lg'>

          <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>

            { services.map( ( service, idx) => (

              <Grid item
                key={ idx}
                xs={12} sm={6} md={4}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  minHeight: '50vh'
                }}>

                  { service.icon}

                  <Typography
                    variant='h5'
                    textAlign='center'
                    fontWeight='bold'
                    sx={{ color: 'secondary.main' }}>
                    { service.title}

                    <Divider sx={{ my: 1, border: 1 }}/>
                  </Typography>

                  <Typography
                    textAlign='center'
                    sx={{ mb: 10 }}>
                    { service.text}
                  </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}