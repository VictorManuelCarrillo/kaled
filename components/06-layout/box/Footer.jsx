//MUI components invoycing ____________________ //
import {
  Box,
  Container,
  Typography,
  Grid
  } from '@mui/material'
// MUI icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import FacebookIcon from '@mui/icons-material/Facebook'
import PhoneIcon from '@mui/icons-material/Phone'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt'
import EmailIcon from '@mui/icons-material/Email'
// compnents
import TextBtn from '../../01-inputs/button/TextBtn'


const Footer = () => {

  return (

    <Box
      component='footer'
      sx={{ px: '2em', pt: '2em', pb: '3em', bgcolor:  'primary.main' }}>

      <Typography variant='subtitle2'>
        instituto contra adicciones <strong>KALED AC</strong>
      </Typography>
      <br />
      <br />
      <Container maxWidth='xl'>

        <Grid container>

          <Grid item xs={12} lg={3}>

              <Typography variant='subtitle1' fontWeight='bold'>CONTACTO:</Typography>
              <br />
              <TextBtn
                text='WhatsApp'
                href='https://wa.link/yupydt'
                startIcon={ <WhatsAppIcon />}/>
              <Typography sx={{ ml: 4, mt: -1.5 }}>33 1914 7923</Typography>

              <TextBtn
                text='Facebook'
                href='https://www.facebook.com/kaled.coyula'
                target='_blank'
                startIcon={ <FacebookIcon />}/>
              <Typography sx={{ ml: 4, mt: -1.5 }}>Monte Sinahi Amma</Typography>

              <TextBtn
                text='Oficina'
                href='tel:3319147923'
                startIcon={ <PhoneIcon />}/>
              <Typography sx={{ ml: 4, mt: -1.5 }}>33 1068 7964</Typography>

              <TextBtn
                text='Visítanos'
                href='https://goo.gl/maps/uDjDHmsdb37pa2f26'
                startIcon={ <AddLocationAltIcon />}/>
              <Typography sx={{ ml: 4, mt: -1.5 }}>Periférico Ote. #6012, Tonalá, Jal.</Typography>

              <TextBtn
                text='Correo'
                href='mailto:monetsinahicoyulajalisco@gmail.com'
                target='_blank'
                subject='Informes%20sobre%20la%20institución'
                startIcon={ <EmailIcon />}/>
              <Typography sx={{ ml: 4, mt: -1.5 }}>montesinahicoyulajalisco@gmail.com</Typography>
              <br />
          </Grid>

          <Grid item xs={12} lg={2}>

              <Typography variant='subtitle1' fontWeight='bold'>SERVICIOS:</Typography>
              <br />
              <TextBtn
                text='Inicio'
                href='/'/>
              <br />
              <TextBtn
                text='Nosotros'
                href='/nosotros'/>
              <br />
              <TextBtn
                text='tratamiento'
                href='/tratamiento'/>
              <br />
              <br />
              <Typography variant='subtitle1' fontWeight='bold'>INSTITUCIONES:</Typography>
              <br />
              <TextBtn
                text='Kaled'
                href='/'/>
              <br />
              <TextBtn
                text='IFCA'
                href='/'/>
              <br />
          </Grid>

          <Grid item xs={12} lg={3} sx={{ p: 2 }}>

            <Typography variant='caption'>
              <strong>KALED AC</strong> es un instituto especializado contra adicciones y conductas nocivas que afectan la salud y tu bienestar. Nosotros somo una <strong>comunidad terapéutica</strong> donde jusntos trabajamos, reparamos y sanamos nuestras adicciones y cambiamos el rumbo de nuestra vida hacia una nueva y más positiva.
              <br />
              <br />
              Dentro de nuestras instalaciones contamos con: Dormitorios, cocina, jardín, sala de conferencias, espacios deportivos, baños, área médica, consultorio psicológico, televisiones e internet.
              <br />
              <br />
              Dentro de nuestro programa contamos con <strong>reintegración social y familiar</strong>, tratamiento médico, yoga, activación física, posibilidad de terminar la <strong>primaria, secundaria y/o preparatoria</strong>

            </Typography>
            <br />
            <br />
          </Grid>

          <Grid item xs={12} lg={4}>

            <Typography variant='caption'>Google Maps, Google Inc.</Typography>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.126315621594!2d-103.23517564940332!3d20.664439386129143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b594527b6fdf%3A0x103208c92ba72b9d!2sKaled%20Coyula%20AC!5e0!3m2!1ses-419!2smx!4v1656266351120!5m2!1ses-419!2smx" width='100%' height='400px' style={{ border:0, borderRadius: 5}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer