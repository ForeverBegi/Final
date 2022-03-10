import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useSearchParams } from 'react-router-dom';
import { productContext } from '../../Contexts/ProductsContext';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function MyNavbar() {
    //funkciya 36
    const { cartLength, getProducts, useAuth, logout , starLength, getStarLength} = React.useContext(productContext)
    console.log(starLength);
    // funkciya 40 JIVOI POISK
    const [searchParams, setSearchParams] = useSearchParams()
    const [searchVal, setSearchVal] = React.useState(searchParams.get('q') ? searchParams.get('q') : '') //'q' otvechaet za jivoi poisk

    //funkciya 61
    const currentUser = useAuth()

    async function handleLogout() {
      try {
        await logout()
      } catch (error) {
        console.log(error)
      }
    }

    //funkciya 41
    React.useEffect(()=> {
      setSearchParams({
        'q': searchVal,
        '_limit': 9,
        '_page': 1
      })
    }, [searchVal])

    React.useEffect(() => {
      getStarLength()
    }, [])

    //funkciya 42
    const handleValue = (e)=> {
      const search = new URLSearchParams(window.location.search)
      search.set('q', e.target.value)
      setSearchVal(e.target.value)
      setSearchParams({
        'q': searchVal,
        '_limit': 9,
        '_page': 1
      })
      getProducts()
    }




  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Link to='/login'>
       <MenuItem onClick={handleMenuClose}>Login</MenuItem>
      </Link>
      <Link to='/register'>
        <MenuItem onClick={handleMenuClose}>Register</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
        
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static"  style={{background: 'transparent', backgroundColor: 'black'}}>
        <Toolbar>
          <Link style={{textDecoration: 'none', color: 'white'}} to='/'>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Charity Art Gallery
            </Typography>
          </Link>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchVal} // peredaem posle 42 funkcii
              onChange={handleValue} // posle 42 funkcii
            />
          </Search>

          <Link  style={{textDecoration: 'none', color: 'white'}} to='/main'><p className="text-navbar">Who we are?</p></Link>

          {/* <Link style={{textDecoration: 'none', color: 'white'}} to='/add'>Donate Artwork</Link> */}

          {/* <Button variant='success' disabled={!currentUser} onClick={handleLogout}>Donate Money</Button> */}

          <Box sx={{ flexGrow: 1 }} /> 
          {currentUser?.email ==='admin1@gmail.com' ? ( //peredaem posle 61 funkcii
            <Link to='/add'>
              <Button style={{background: 'white', marginRight: '10px'}} variant='otlined' color='success'>Add</Button>
            </Link>
          ): null}
          {currentUser?.email }
          {
            currentUser ? (
              <Button variant='success' disabled={!currentUser} onClick={handleLogout}>Log out</Button>
            ): null
          }
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Link to='/cart' style={{textDecoration:'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <IconButton>
                      <Badge badgeContent={cartLength} color='secondary'>
                          <ShoppingCartIcon style={{color:'white'}}/>
                      </Badge>
                  </IconButton>
                  
                  </Link>

                  <Link to='/star' style={{textDecoration:'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <IconButton>
                      <Badge badgeContent={starLength} color='secondary'>
                          < FavoriteBorderIcon style={{color:'white'}}/>
                      </Badge>
                  </IconButton>
                  
                  </Link>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
