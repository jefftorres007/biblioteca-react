import React, { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography, Switch, Container, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';

const pages = ['Inicio', 'Nuevo'];

export const Header = () => {
    const [openNavMenu, setOpenNavMenu] = useState(null);
    const { darkMode, toggleDarkMode } = useDarkMode();

    const handleOpenNavMenu = (event) => {
        setOpenNavMenu(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setOpenNavMenu(null);
    };

    const handleThemeChange = () => {
        toggleDarkMode(!darkMode);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <VideoLibraryIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />


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
                            anchorEl={openNavMenu}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(openNavMenu)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page}>
                                    <Link
                                        to={`/${page.toLowerCase()}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        onClick={handleCloseNavMenu} // Cerrar menú al hacer clic
                                    >
                                        <Typography textAlign="center">{page}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <VideoLibraryIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                                <MenuItem key={page}>
                                    <Link
                                        to={`/${page.toLowerCase()}`}
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                        onClick={handleCloseNavMenu} // Cerrar menú al hacer clic
                                    >
                                        <Typography textAlign="center">{page}</Typography>
                                    </Link>
                                </MenuItem>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ mr: 1 }}>Tema oscuro</Typography>
                        <Switch
                            checked={darkMode}
                            onChange={handleThemeChange}
                            color="warning"
                        />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
