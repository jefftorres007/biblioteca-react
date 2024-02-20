import React, { useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography, Switch } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function Header() {
    const [darkMode, setDarkMode] = useState(false); // Estado para controlar el tema claro/oscuro
    const navItems = ['Inicio', 'Nuev@'];

    // Función para alternar entre el tema claro y oscuro
    const handleDarkModeToggle = () => {
        setDarkMode(!darkMode);
        // Aquí puedes agregar lógica adicional para cambiar el tema de tu aplicación
    };

    return (
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    // onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    <LiveTvIcon /> Biblioteca multimedia
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item} sx={{ color: '#fff' }}>
                            {item}
                        </Button>
                    ))}
                </Box>
                {/* Contenedor para el switch y el texto */}
                <Box display="flex" alignItems="center">
                    <Switch
                        checked={darkMode}
                        onChange={handleDarkModeToggle}
                        color="default"
                    />
                    {/* Texto más pequeño debajo del switch */}
                    <Typography variant="body2" sx={{ color: 'text.secondary', ml: 1 }}>
                        {darkMode ? 'Tema Oscuro' : 'Tema Claro'}
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
