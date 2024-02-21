import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Switch, Container, Menu, MenuItem, Tooltip, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import { Link } from 'react-router-dom';

const pages = ['Inicio', 'Añadir'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Header = () => {
    const [openNavMenu, setOpenNavMenu] = useState(null);
    const [openUserMenu, setOpenUserMenu] = useState(null);
    const [darkMode, setDarkMode] = useState(false);

    const handleOpenNavMenu = (event) => {
        setOpenNavMenu(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setOpenUserMenu(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        // debugger;
        setOpenNavMenu(null);
    };

    const handleCloseUserMenu = () => {
        setOpenUserMenu(null);
    };

    const handleThemeChange = () => {
        setDarkMode(!darkMode);
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
                        <Typography variant="body2" sx={{ mr: 1 }}>Tema {darkMode ? 'Oscuro' : 'Claro'}</Typography>
                        <Switch
                            checked={darkMode}
                            onChange={handleThemeChange}
                        />
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={openUserMenu}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(openUserMenu)}
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
    );
};
