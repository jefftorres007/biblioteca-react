import React from 'react';
import { Typography, Link } from '@mui/material';
import moment from"moment";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', position: 'fixed', left: 0, bottom: 0, width: '100%' }}>
      <Typography variant="body2" color="textSecondary" align="center">
        © {moment().format('YYYY')} Mi Biblioteca Multimedia. Todos los derechos reservados.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        Desarrollado por <Link href="https://www.linkedin.com/in/jeferson-stalin-torres-269859b1/" target="_blank">Jeferson</Link>
      </Typography>
    </footer>
  );
}
