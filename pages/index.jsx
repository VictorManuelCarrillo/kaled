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
import PrimaryTitle from '../components/02-data-display/typography/PrimaryTitle'

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
      </Box>
    </Layout>
  )
}