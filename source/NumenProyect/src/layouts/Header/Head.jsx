import React, { useContext, useEffect, useReducer, useState } from 'react'
import { styled, alpha, useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../../assets/styles/Header/style.css'
import {
  Autocomplete,
  Badge,
  Stack,
  TextField,
  useMediaQuery,
} from '@mui/material'
import { TYPES } from '../../services/actions/shoppingActions'
import { storeContext } from '../../store/StoreProvider'
import logo from '../../assets/images/logo.png'

const pages = ['Productos', 'Acerca de', 'Instagram']
const settings = ['Perfil', 'Cuenta', 'Dashboard', 'Logout']

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}))

const Head = () => {
  const navigate = useNavigate()
  const [store, dispatch] = useContext(storeContext)
  const { products, cart } = store
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.up('sm'))
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <AppBar position="static" className="bg-color">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex', cursor: 'pointer' },
            }}
            onClick={() => navigate('/')}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <img src={logo} width="48px" />
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={page.toLowerCase()} className="menu-item">
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              display: { xs: 'none', sm: 'flex', md: 'none' },
            }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              <img src={logo} width="48px" />
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NavLink
                key={page}
                to={`/${page.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? 'active' : 'link-page'
                }
              >
                {page}
              </NavLink>
            ))}
          </Box>
          <Stack
            spacing={2}
            sx={{
              color: 'inherit',
              padding: theme.spacing(1, 1, 1, 0),
              // vertical padding + font size from searchIcon
              paddingLeft: `calc(1em + ${theme.spacing(4)})`,
              transition: theme.transitions.create('width'),
              width: '75%',
              [theme.breakpoints.up('md')]: {
                width: '35%',
                '&:focus': {
                  width: '35%',
                },
              },
            }}
          >
            {/* <StyledInputBase
              placeholder="Buscar…"
              inputProps={{ 'aria-label': 'search' }}
            /> */}

            <Autocomplete
              id="buscarProd"
              freeSolo
              clearOnBlur
              onChange={(event, newValue) => {
                if (newValue) {
                  navigate(`/product/${newValue.id}`)
                }
              }}
              options={products.map((option) => option)}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  {/* <StyledInputBase
                    placeholder="Buscar…"
                    inputProps={{ 'aria-label': 'search' }}
                  /> */}
                  <TextField {...params} label="Buscar"></TextField>
                </Search>
              )}
            />
          </Stack>
          <Badge
            badgeContent={cart?.length}
            style={{ marginTop: '5px' }}
            color="secondary"
          >
            <Link
              to="/shoppingCart"
              style={{
                textDecoration: 'none',
                color: 'white',
                marginTop: '4px',
              }}
            >
              <ShoppingCartIcon
                sx={{
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
              ></ShoppingCartIcon>
            </Link>
          </Badge>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ marginLeft: '0px', color: 'white' }}
              >
                <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Head
