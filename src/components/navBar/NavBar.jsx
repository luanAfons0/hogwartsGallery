import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

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

export default ({ setSearch, getByHouse, getAllCharacters, hiddeButton, backButton, useNavigate }) => {
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
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
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
      <MenuItem>
        <Button variant="contained" sx={{ backgroundColor: '#373737', color: 'white', ":hover": { background: '#323232' } }} onClick={() => getAllCharacters()}>All characters</Button>
      </MenuItem>
      <MenuItem>
        <Button variant="contained" sx={{ backgroundColor: '#d32f2f', color: 'white', ":hover": { background: '#f44336' } }} onClick={() => getByHouse('Gryffindor')}>Gryffindor</Button>
      </MenuItem>
      <MenuItem>
        <Button variant="contained" sx={{ backgroundColor: '#388e3c', color: 'white', ":hover": { background: '#66bb6a' } }} onClick={() => getByHouse('Slytherin')}> Slytherin</Button>
      </MenuItem>
      <MenuItem >
        <Button variant="contained" sx={{ backgroundColor: '#0288d1', color: 'white', ":hover": { background: '#29b6f6' } }} onClick={() => getByHouse('Ravenclaw')}> Ravenclaw</Button>
      </MenuItem>
      <MenuItem>
        <Button variant="contained" sx={{ backgroundColor: '#ffa726', color: 'white', ":hover": { background: '#ffb74d' } }} onClick={() => {
          getByHouse('Hufflepuff')
        }}> Hufflepuff</Button>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {backButton ? <Box onClick={() => useNavigate('/')}>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
              >
                Hogwarts Gallery
              </Typography>
            </Box> :
              <Box onClick={() =>getAllCharacters()}>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'none', sm: 'block', cursor: 'pointer' } }}
                >
                  Hogwarts Gallery
                </Typography>
              </Box>}


            {hiddeButton ? null :
              <>
                <Search onChange={(e) => setSearch(e.target.value)}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} spacing={2}>
                  <Box sx={{ marginRight: 2 }}>
                    <Button variant="contained" sx={{ backgroundColor: '#d32f2f', color: 'white', ":hover": { background: '#f44336' } }} onClick={() => getByHouse('Gryffindor')}>Gryffindor</Button>
                  </Box>
                  <Box sx={{ marginRight: 2 }}>
                    <Button variant="contained" sx={{ backgroundColor: '#388e3c', color: 'white', ":hover": { background: '#66bb6a' } }} onClick={() => getByHouse('Slytherin')}> Slytherin</Button>
                  </Box>
                  <Box sx={{ marginRight: 2 }}>
                    <Button variant="contained" sx={{ backgroundColor: '#0288d1', color: 'white', ":hover": { background: '#29b6f6' } }} onClick={() => getByHouse('Ravenclaw')}> Ravenclaw</Button>
                  </Box>
                  <Box sx={{ marginRight: 2 }}>
                    <Button variant="contained" sx={{ backgroundColor: '#ffa726', color: 'white', ":hover": { background: '#ffb74d' } }} onClick={() => {
                      getByHouse('Hufflepuff')
                    }}> Hufflepuff</Button>
                  </Box>
                </Box>
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
              </>
            }
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}