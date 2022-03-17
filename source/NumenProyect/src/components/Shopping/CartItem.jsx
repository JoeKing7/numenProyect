import styled from '@emotion/styled'
import {
  Button,
  ButtonBase,
  ButtonGroup,
  Grid,
  Paper,
  Typography,
} from '@mui/material'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
})

const CartItem = ({ data, deleteFromCart }) => {
  const { id, title, price, image, quantity } = data
  return (
    <Paper
      sx={{
        p: 2,
        margin: '10px auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={1}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle2" component="div">
                {title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Total: ${price * quantity}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cantidad: {quantity}
              </Typography>
            </Grid>
            <Grid item>
              {/* <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Eliminar uno
              </Typography> */}
              <ButtonGroup variant="text" aria-label="text button group">
                {quantity > 1 ? (
                  <Button onClick={() => deleteFromCart(id)}>
                    Eliminar uno
                  </Button>
                ) : (
                  <Button onClick={() => deleteFromCart(id)} disabled>
                    Eliminar uno
                  </Button>
                )}

                <Button onClick={() => deleteFromCart(id, true)}>
                  Remover
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              ${price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    // <Card>
    //   <h4>{title}</h4>
    //   <h5>
    //     ${price} x {quantity} = {price * quantity}
    //   </h5>
    //   <Button onClick={() => deleteFromCart(id)}>Eliminar uno</Button>
    //   <Button onClick={() => deleteFromCart(id, true)}>Eliminar todos</Button>
    // </Card>
  )
}

export default CartItem
