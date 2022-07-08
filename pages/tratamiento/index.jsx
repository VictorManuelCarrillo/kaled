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
import CardPrimaryAction from '../../components/04-surfaces/card/CardPrimaryAction'

export default function Tratamiento() {

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
      href: '/tratamiento/depresion',
      title: 'depresión',
      alt: 'instituto contra drogadicción',
      image: '/images/home/tratamiento/depresion.png',

    }
  ]

  return(

    <Layout title='Tratamiento'>

      <PrincipalTitle
        title='tratamiento'
        image='/images/1.jpg'/>

      <Box component='section' sx={{ py: 4 }}>

        <PrimaryTitle title='nuestra filosofía'/>

        <Container maxWidth='lg'>

          <SecondaryTitle title='¿Porqué es importante una filosofía dentro de una comunidad?'/>

          <Box component='article' sx={{ py: 4 }}>

            <Typography>
              El ser humano se caracteriza por buscar repuestas que le permitan comprender su comportamiento así como su individualidad, como surgen y desarrollan los fenómenos sociales y como se desenvuelve la sociedad en la que se encuentra.
              <br />
              <br />
              Una filosofía dentro de una comunidad es de vital importancia en cualquier aspecto. La filosofía se impone como doctrina para ofrecernos razonamientos lógicos y metodológicos los cuales buscan en nosotros mismos principios que nos rigen como mejores seres humanos dentro de nuestra sociedad
              <br />
              <br />
              La filosofía de nuestra comunidad implica el cambio y la lucha contra nuestras adicciones. El ser una persona positiva y con voluntad para cambiar y ser mejor día con día.
              Dentro de nuestra comunidad, nuestra filosofía nos otorga la voluntad de querer ser mejor persona y dejar atrás cada mal acción del pasado, remediar nuestros errores y volver a nacer como un nuevo ser lleno de esperanza y apto para un mundo nuevo y mejor.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Box component='section' sx={{ py: 2 }}>

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

      <Box component='section' sx={{ pt: 4 }}>

        <PrimaryTitle title='etapas del tratamiento'/>

        <Grid container sx={{ pt: 2 }}>

  {/* PRIMERA FASE __________ */}
          <Grid item xs={12} sm={12} md={6} lg={4} sx={{ py: 2, px: 4, color: 'white', background: 'linear-gradient(45deg, rgba(249,35,3,1) 0%, rgba(203,0,0,1) 100%)' }}>
            <Typography variant='h4' sx={{ pt: 4, pb: 2, textAlign: 'center', fontWeight: 'bold' }}>PRIMERA FASE</Typography>

            <Divider variant='middle' sx={{ border: '0.1em solid', borderColor: 'white', bgcolor: 'white' }}/>

            <Typography variant='subtitle1' fontWeight='bold' sx={{ my: 2 }}>DURACIÓN: 60 DÍAS</Typography>

            <Typography variant='subtitle2' fontWeight='bold'>objetivo:</Typography>

            <br />
            <br />

            <Typography sx={{ px: 4 }}>
              En esta etapa el usuario se integra a los demás internos, espresentado y reconoce su enfermedad o adicción, así como también empieza a participar gradualmente en cada una de las dinámicas y círculos terapéuticos.
              <br />
              <br />
              Asi mismo el usuario es revisado por nuestros médicos y valorado su estado de salud físico y mental.
            </Typography>
          </Grid>

  {/* SEGUNDA FASE __________ */}
          <Grid item xs={12} sm={12} md={6} lg={4} sx={{ py: 2, px: 4, color: 'white', background: 'linear-gradient(45deg, rgba(248,249,3,1) 0%, rgba(231,158,0,1) 100%)' }}>
            <Typography variant='h4' sx={{ pt: 4, pb: 2, textAlign: 'center', fontWeight: 'bold' }}>SEGUNDA FASE</Typography>

            <Divider variant='middle' sx={{ border: '0.1em solid', borderColor: 'white', bgcolor: 'white' }}/>

            <Typography variant='subtitle1' fontWeight='bold' sx={{ my: 2 }}>DURACIÓN: 120 DÍAS</Typography>

            <Typography variant='subtitle2' fontWeight='bold'>objetivo:</Typography>

            <br />
            <br />

            <Typography sx={{ px: 4 }}>
              En esta etapa el usuario empezará a trabajar con su enfermedad o adicción en base a su esquema social y familiar, en donde empezará a asimilar su enfermedad, trabajar con ella y mejorar su manera de pensar, así como las cosas positivas que puede realizar y las cosas negativasque le pueden traer el volver a las malas costumbres.
              <br />
              <br />
              Así mismo el usuario podrá empezar a trabajr een reinserción a la sociedad, rehacer y fortalecer lazos familiares y comenzar a tener una mejor comunicación con su familia, siendo mas objetiva y positiva.
            </Typography>

          </Grid>

  {/* TERCERA FASE __________ */}
          <Grid item xs={12} sm={12} md={12} lg={4} sx={{ py: 2, px: 4, color: 'white', background: 'linear-gradient(45deg, rgba(3,249,237,1) 0%, rgba(0,164,231,1) 100%)' }}>
            <Typography variant='h4' sx={{ pt: 4, pb: 2, textAlign: 'center', fontWeight: 'bold' }}>TERCERA FASE</Typography>

            <Divider variant='middle' sx={{ border: '0.1em solid', borderColor: 'white', bgcolor: 'white' }}/>

            <Typography variant='subtitle1' fontWeight='bold' sx={{ my: 2 }}>DURACIÓN: 90</Typography>
            
            <Typography variant='subtitle2' fontWeight='bold'>objetivo:</Typography>

            <br />
            <br />

            <Typography sx={{ px: 4 }}>
              Finalmente en esta etapa aqui al usuario se brinda un servicio dentro de la comunidad para servirle a los demás y comenzar su reposabilidad social de guiar y servir a los demás.
              <br />
              <br />
              A su vez, el usuario comienza a ver opciones para reintegrarse de nueva cuenta a la sociedad y comenzar una nueva vida completamente rehabilitado.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}