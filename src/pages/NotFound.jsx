import React from 'react';

import '../style/NotFound.css';
import fondo from '../assets/404.png';
import { Header,Section,Footer } from '../components';
import { Typography } from '@mui/material';

export default function NotFound() {
    return (


        <>
            <Header /> 

            <Section dataStyle={{marginTop:`10em`,marginBottom:'10em'}}>

                <div className="cnt-404" >
                    <img src={fondo}></img>
                    <Typography gutterBottom variant="h5" component="div">
                        Página no encontrada.
                    </Typography>              
                </div>

            </Section>


            <Footer />
        </>
    );
}

