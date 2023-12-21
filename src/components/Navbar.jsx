import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function Navbar() {
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
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

  return (
  <nav>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                  <Toolbar>
                     
                      <Typography
                          variant="h6"
                          noWrap
                          component="div"
                          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                      >
                          EPSONSHOP
                      </Typography>

                      <Button variant="contained" size="large"
                          edge="end"
                          sx={{ ml: 4 }} >
                         Home
                      </Button>
                      <Button variant="contained" size="large"
                          edge="end"
                          sx={{ ml: 4 }} >
                          Contact
                      </Button>
                      <Button variant="contained" size="large"
                          edge="end"
                          sx={{ mr: 4,ml:4}} >
                          About
                      </Button>
                    
                      <Search>
                          <SearchIconWrapper>
                              <SearchIcon />
                          </SearchIconWrapper>
                          <StyledInputBase
                              placeholder="Search…"
                              inputProps={{ 'aria-label': 'search' }}
                          />
                      </Search>
                   
                      <Button variant="contained" size="large"
                          edge="center"
                          sx={{ mr: 4, ml: 4 }} >

                          Sign Up
                          <HowToRegIcon />
                      </Button>
                    
                   
                   
                    
                  </Toolbar>
              </AppBar>
          </Box>

  </nav>
  )
}
