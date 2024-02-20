import React from 'react';
import { Typography, Link } from '@mui/material';
import  '../style/Footer.css';

export default function Footer() {
  return (
    // <footer style={{ color:"white", backgroundColor: '#1976d2', padding: '20px', position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
    <div className='footer footer-clear'>
      <Typography variant="body2"  align="center">
        © {new Date().getFullYear()} Mi Biblioteca Multimedia. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2"  align="center">
        Desarrollado por <Link color="textSecondary" href="https://www.linkedin.com/in/jeferson-stalin-torres-269859b1/" target="_blank">Jeferson</Link>
      </Typography>
    </div>
  );
}
