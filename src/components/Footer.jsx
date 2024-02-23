import React from 'react';
import { Typography, Link } from '@mui/material';
import  '../style/Footer.css';

export const Footer= () =>{
  return (

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
