import { Box, Card, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const About = () => {
  return (
    <Box sx={{ height: '56.8vh' }}>
      <Container
        sx={{
          paddingTop: '20px',
        }}
      >
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <i
                className="fas fa-store"
                style={{ fontSize: '200px', padding: '10px', color: '#1565C0' }}
              ></i>
            </Grid>
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <Typography variant="h4">My company</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  paddingRight: '10px',
                  textAlign: 'justify',
                  whiteSpace: 'pre-wrap',
                }}
              >
                Cupidatat occaecat adipisicing proident laborum consectetur
                veniam. Nostrud anim eiusmod Lorem consectetur velit magna in.
                Enim cupidatat do commodo Lorem incididunt dolore. Laboris sit
                sunt cillum adipisicing quis do reprehenderit adipisicing
                cillum. Eu cillum cillum pariatur et in excepteur. Voluptate
                deserunt reprehenderit nostrud esse. Velit laboris ea sunt
                cupidatat incididunt mollit velit.{' '}
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  )
}

export default About
